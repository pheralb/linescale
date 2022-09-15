import Editor, { loader, EditorProps } from "@monaco-editor/react";

import * as monaco from "monaco-editor";
import editorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";
import jsonWorker from "monaco-editor/esm/vs/language/json/json.worker?worker";
import cssWorker from "monaco-editor/esm/vs/language/css/css.worker?worker";
import htmlWorker from "monaco-editor/esm/vs/language/html/html.worker?worker";
import tsWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker";

interface Props {
  value?: string;
  height: string;
  language: string;
  minimap: boolean;
  onChange: EditorProps["onChange"];
}

self.MonacoEnvironment = {
  getWorker(_, label) {
    if (label === "json") {
      return new jsonWorker();
    }
    if (label === "css" || label === "scss" || label === "less") {
      return new cssWorker();
    }
    if (label === "html" || label === "handlebars" || label === "razor") {
      return new htmlWorker();
    }
    if (label === "typescript" || label === "javascript") {
      return new tsWorker();
    }
    return new editorWorker();
  },
};

loader.config({ monaco });

const EditorComponent = (props: Props) => {
  return (
    <Editor
      theme="vs-dark"
      height={props.height}
      defaultLanguage={props.language}
      value={props.value}
      onChange={props.onChange}
      options={{
        minimap: {
          enabled: props.minimap,
        },
      }}
    />
  );
};

export default EditorComponent;
