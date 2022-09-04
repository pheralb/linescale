import { useColorModeValue } from "@chakra-ui/react";
import MonacoEditor from "@monaco-editor/react";
import { CatpuccinMacchiatoAdapter } from "./theme";

interface EditorProps {
  value?: string;
  language?: string;
  onChange?: (value: string) => void;
}

const Editor = (props : EditorProps) => {
  const editorTheme = useColorModeValue("vs-light", "linescale");
  const editorLoader = useColorModeValue("#121212", "#ffff");

  function handleEditorWillMount(monaco: any) {
    monaco.editor.defineTheme("linescale", CatpuccinMacchiatoAdapter);
  }

  return (
    <MonacoEditor
      height="100vh"
      width="100%"
      language={props.language}
      theme={editorTheme}
      value={props.value}
      beforeMount={handleEditorWillMount}
      onChange={props.onChange as any}
      options={{
        minimap: {
          enabled: true,
        },
        fontSize: 16,
        fontFamily: "Cascadia",
        wordWrap: "off",
        fontLigatures: true,
      }}
      loading={<h1>loading</h1>}
    />
  );
};

export default Editor;
