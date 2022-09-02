import Editor from "@/components/editor";
import Explorer from "@/components/explorer";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Explorer>
      <Editor />
    </Explorer>
  );
};

export default Home;
