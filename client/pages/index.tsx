import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Sidebar from "../components/Sidebar";
import SideContent from "../components/SideContent";
import Chat from "../components/Chat";
const Home: NextPage = () => {
  return (
    <div className="flex ">
      <Sidebar />
      <SideContent />
      <Chat />
    </div>
  );
};

export default Home;
