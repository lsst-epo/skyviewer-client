import { useEffect } from "react";
import Link from "next/link";
import Logo from "@/svg/unique/Logo";
import Buttonish from "@/primitives/Buttonish";

export default function Home() {
  return (
    <div className="home">
      <div className="logo-stack">
        <Logo className="full-logo" />
        <h1 className="headline">SKYVIEWER</h1>
      </div>
      <div className="spacer" />
      <ul className="home-nav">
        <li className="home-nav-item">
          <Buttonish
            url="/explorer"
            classes="button primary"
            text="I want to explore"
          />
        </li>
        <li className="home-nav-item">
          <Buttonish
            url="/guided-experiences"
            text="Please guide me"
            classes="button primary"
          />
        </li>
      </ul>
    </div>
  );
}
