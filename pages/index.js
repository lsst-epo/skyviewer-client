import useResizeObserver from "use-resize-observer";
import Logo from "@/svg/unique/Logo";
import Buttonish from "@/primitives/Buttonish";

export default function Home() {
  const { ref } = useResizeObserver({
    onResize: ({ height }) => {
      document.documentElement.style.setProperty(
        "--home-nav-height",
        `${height}px`
      );
    },
  });
  return (
    <div className="home">
      <div className="logo-stack">
        <Logo className="full-logo" />
        <h1 className="headline">SKYVIEWER</h1>
      </div>
      <div ref={ref} className="home-nav-container">
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
              url="/tours"
              text="Please guide me"
              classes="button primary"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
