import { useState } from "react";
import { ipcRenderer } from "electron";
import EditorComponent from "@/components/editor";

const Home: React.FC = () => {
  const [value, setValue] = useState("hello world");

  ipcRenderer.on("file", (event, content) => {
    setValue(content);
  });

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <EditorComponent
        value={value}
        height="90vh"
        language="typescript"
        minimap={false}
        onChange={(value) => setValue(value ?? "")}
      />
    </>
  );
};

export default Home;
