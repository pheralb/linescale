import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { Box, Button, Divider, Text, useColorModeValue } from "@chakra-ui/react";

import { nanoid } from "nanoid";
import Editor from "@/components/editor";
import ExplorerContent from "@/components/explorer/content";
import { files } from "@/data/files";
import { FileInterface } from "@/interfaces/file";
import File from "@/components/explorer/file";

const Home: NextPage = () => {
  const [localFiles, setlocalFiles] = useState<FileInterface[]>([]);
  const [selectedFile, setSelectedFile] = useState<FileInterface>();
  const bg = useColorModeValue("explorer.light", "explorer.dark");

  useEffect(() => {
    loadFiles();
  }, []);

  const loadFiles = () => {
    if (localStorage.files) {
      const files = JSON.parse(localStorage.files);
      setlocalFiles(files);
    } else {
      localStorage.setItem("files", JSON.stringify(files));
    }
  };

  const editFile = (field: string, value: string) => {
    setSelectedFile({ ...selectedFile, [field]: value } as FileInterface);
    const savedFile = localFiles.map((file) => {
      if (file.id === selectedFile?.id) {
        return { ...file, [field]: value };
      }
      return file;
    });
    localStorage.setItem("files", JSON.stringify(savedFile));
  };

  const createFile = () => {
    const newFile = {
      id: nanoid(),
      name: "New File",
      language: "javascript",
      value: "",
    };
    setlocalFiles([...localFiles, newFile]);
    localStorage.setItem("files", JSON.stringify([...localFiles, newFile]));
  };

  return (
    <Box as="section" minH="100vh">
      <ExplorerContent>
        <Button onClick={createFile}>New file</Button>
        <Divider mt="3" mb="3"/>
        {localFiles?.map((file: FileInterface) => (
          <File
            key={file.id}
            title={file.name}
            onClick={() => setSelectedFile(file)}
          />
        ))}
      </ExplorerContent>
      <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
        <Box as="main">
          <Box p="3" mb="4" bg={bg}>
            <Text>{selectedFile?.name}</Text>
          </Box>
          <Editor
            value={selectedFile?.value}
            language={selectedFile?.language}
            onChange={(value) => {
              editFile("value", value as string);
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
