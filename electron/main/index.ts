import fs from "fs";
import { release } from "os";
import { join } from "path";
import { app, BrowserWindow, shell, dialog, ipcMain, Menu } from "electron";

// Disable GPU Acceleration for Windows 7:
if (release().startsWith("6.1")) app.disableHardwareAcceleration();

// Set application name for Windows 10+ notifications:
if (process.platform === "win32") app.setAppUserModelId(app.getName());

if (!app.requestSingleInstanceLock()) {
  app.quit();
  process.exit(0);
}

process.env["ELECTRON_DISABLE_SECURITY_WARNINGS"] = "true";
process.env.DIST = join(__dirname, "../..");
process.env.PUBLIC = app.isPackaged
  ? process.env.DIST
  : join(process.env.DIST, "../public");

let win: BrowserWindow | null = null;

// Here, you can also use other preload
const preload = join(__dirname, "../preload/index.js");
const url = process.env.VITE_DEV_SERVER_URL;
const indexHtml = join(process.env.DIST, "index.html");

const template = [
  {
    label: "File",
    submenu: [
      {
        label: "Open File",
        click: async () => {
          const { filePaths } = await dialog.showOpenDialog({
            properties: ["openFile"],
          });
          const file = filePaths[0];
          const contents = fs.readFileSync(file, "utf8");
          win.webContents.send("file", contents);
        },
      },
    ],
  },
  {
    label: "Advanced",
    submenu: [
      {
        label: "Open Chrome Dev Tools",
        click: () => win?.webContents.openDevTools(),
      },
    ],
  },
];

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);

async function createWindow() {
  win = new BrowserWindow({
    title: "Linescale",
    icon: join(process.env.PUBLIC, "favicon.svg"),
    webPreferences: {
      preload,
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  if (app.isPackaged) {
    win.loadFile(indexHtml);
  } else {
    win.loadURL(url);
  }

  // Test actively push message to the Electron-Renderer:
  win.webContents.on("did-finish-load", () => {
    win?.webContents.send("main-process-message", new Date().toLocaleString());
  });

  // Make all links open with the browser, not with the application:
  win.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith("https:")) shell.openExternal(url);
    return { action: "deny" };
  });
}

app.whenReady().then(createWindow);

// Quit when all windows are closed:
app.on("window-all-closed", () => {
  win = null;
  if (process.platform !== "darwin") app.quit();
});

// Focus on the main window if the user tried to open another:
app.on("second-instance", () => {
  if (win) {
    if (win.isMinimized()) win.restore();
    win.focus();
  }
});

app.on("activate", () => {
  const allWindows = BrowserWindow.getAllWindows();
  if (allWindows.length) {
    allWindows[0].focus();
  } else {
    createWindow();
  }
});

// New window example arg: new windows url:
ipcMain.handle("open-win", (event, arg) => {
  const childWindow = new BrowserWindow({
    webPreferences: {
      preload,
    },
  });

  if (app.isPackaged) {
    childWindow.loadFile(indexHtml, { hash: arg });
  } else {
    childWindow.loadURL(`${url}/#${arg}`);
    // childWindow.webContents.openDevTools({ mode: "undocked", activate: true })
  }
});
