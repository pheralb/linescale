import { useColorModeValue } from "@chakra-ui/react";
import MonacoEditor from "@monaco-editor/react";
import { oneDarkPro } from "./theme";

const Editor = () => {
  const editorTheme = useColorModeValue("vs-light", "linescale");
  const editorLoader = useColorModeValue("#121212", "#ffff");

  function handleEditorWillMount(monaco: any) {
    monaco.editor.defineTheme("linescale", oneDarkPro);
  }

  return (
    <MonacoEditor
      height="90vh"
      width="100%"
      language="javascript"
      theme={editorTheme}
      value="hellooo"
      beforeMount={handleEditorWillMount}
      options={{
        minimap: {
          enabled: false,
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
