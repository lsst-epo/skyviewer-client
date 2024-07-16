import useResizeObserver from "use-resize-observer";
import Buttonish from "@rubin-epo/epo-react-lib/Buttonish";
import ResponsiveImage from "@rubin-epo/epo-react-lib/ResponsiveImage";
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
          image={{ width, height, url: src, url2x: src, url3x: src }}
          ratio={`${width}:${height}`}
        />
        <h1 className="headline">SKYVIEWER</h1>
      </div>
      <div ref={ref} className="home-nav-container">
        <ul className="home-nav">
          <li className="home-nav-item">
            <Buttonish url="/explorer" text="I want to explore" isBlock />
          </li>
          <li className="home-nav-item">
            <Buttonish url="/tours" text="Please guide me" isBlock />
          </li>
        </ul>
      </div>
    </div>
  );
}
