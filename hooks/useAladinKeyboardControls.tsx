import { useEventListener } from "usehooks-ts";
import { useAladin } from "@/contexts/Aladin";
import { pan } from "@/lib/aladin/animation";

const useAladinKeyboardControls = () => {
  const { aladin, hasFocus } = useAladin();

  const zoomIn = () => {
    aladin?.increaseZoom();
  };
  const zoomOut = () => {
    aladin?.decreaseZoom();
  };

  const goTo = (direction: "left" | "right" | "up" | "down") => {
    if (aladin) {
      const [ra, dec] = aladin.getRaDec();
      const [width, height] = aladin.getSize();
      const x = width / 2;
      const y = height / 2;
      const diffX = width * 0.1;
      const diffY = height * 0.1;

      let newX = x;
      let newY = y;

      if (direction === "left") newX = x - diffX;
      if (direction === "up") newY = y - diffY;
      if (direction === "right") newX = x + diffX;
      if (direction === "down") newY = y + diffY;

      const [newRa, newDec] = aladin.pix2world(newX, newY);

      if (!newRa || !newDec) return;

      pan({
        start: { ra, dec },
        end: { ra: newRa, dec: newDec },
        duration: 0.2,
        ease: "none",
        aladin,
      });
    }
  };

  const eventMap = {
    "-": zoomOut,
    "=": zoomIn,
    ArrowRight: () => goTo("right"),
    ArrowLeft: () => goTo("left"),
    ArrowUp: () => goTo("up"),
    ArrowDown: () => goTo("down"),
  };

  const handleKeyboardNavigation = (event: KeyboardEvent) => {
    if (hasFocus) {
      const handler = eventMap[event.key];

      handler && handler();
    }
  };

  useEventListener("keydown", handleKeyboardNavigation);
};

export default useAladinKeyboardControls;
