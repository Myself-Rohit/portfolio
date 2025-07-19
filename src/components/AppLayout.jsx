import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

function AppLayout() {
  return (
    <div className="flex flex-col sm:flex-row bg-black">
      <Header />
      <Sidebar />
      <div className="bg-black w-full overflow-x-hidden">
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default AppLayout;
