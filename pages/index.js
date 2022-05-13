import useResizeObserver from "use-resize-observer";
import Buttonish from "@/primitives/Buttonish";
import Image from "@/components/primitives/Image";
import ResponsiveImage from "@/components/primitives/ResponsiveImage";
import logo from "../public/rubin-nsf-logo.png";

export default function Home() {
  const { ref } = useResizeObserver({
    onResize: ({ height }) => {
      document.documentElement.style.setProperty(
        "--home-nav-height",
        `${height}px`
      );
    },
  });
  const { width, height, src } = logo;
  return (
    <div className="home">
      <div className="logo-stack">
        <ResponsiveImage
          image={{ width, height, url: src }}
          ratio={`${width}:${height}`}
        />
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
