import React from "react";
import "./styles.css";

import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

import Membership from "./components/membership/Membership";

export default function App() {
  return (
    <div className="App">
      <Header title="My header" subtitle="subtitle2" />
      <Main message="My content" />
      <Membership message="SCTC" />
      <Footer note="Footer Note" />
    </div>
  );
}
