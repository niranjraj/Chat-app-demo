import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Router, useRouter } from "next/router";
import Sidebar from "../components/Sidebar";
import SideContent from "../components/SideContent";
import Chat from "../components/Chat";
const user = "";
const Home: NextPage = () => {
  const router = useRouter();

  React.useEffect(() => {
    if (!user) {
      router.replace("/login");
    }
  }, []);

  return (
    <div className="flex ">
      <Sidebar />
      <SideContent />
      <Chat />
    </div>
  );
};

export default Home;
