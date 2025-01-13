"use client";
import { FunctionComponent, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FragmentType, graphql, useFragment } from "@/gql";
import AladinCanvas from "@/components/primitives/AladinCanvas";
import AladinOverlay from "@/components/primitives/AladinOverlay";
import FOVSize from "@/components/molecules/FOVSize";
import styles from "./styles.module.css";
import FOVScale from "@/components/molecules/FOVScale";
import ControlsContainer from "@/components/molecules/Controls/Container";
import ReturnToTarget from "@/components/molecules/Controls/ReturnToTarget";
import ShareImage from "@/components/molecules/Controls/ShareImage";
import Download from "@/components/molecules/Controls/Download";
import Zoom from "@/components/molecules/Controls/Zoom";

const Fragment = graphql(`
  fragment EmbeddedExplorer on embeddedViews_default_Entry {
    tour {
      ... on tours_tour_Entry {
        id
      }
    }
  }
`);

const EmbeddedExplorer: FunctionComponent<{
  data: FragmentType<typeof Fragment>;
}> = ({ data }) => {
  const [fov, setFov] = useState<number>();
  const { tour } = useFragment(Fragment, data);
  const pathname = usePathname();
  const [selected] = tour;

  return (
    <>
      <AladinOverlay>
        <ControlsContainer>
          {selected && selected.__typename === "tours_tour_Entry" && (
            <Link
              href={{
                pathname: `/embed/tour/${selected.id}`,
                query: {
                  returnTo: pathname,
                },
              }}
            >
              Learn more about this image
            </Link>
          )}
          <ReturnToTarget />
          <ShareImage />
          <Download />
          <Zoom />
        </ControlsContainer>
        <FOVSize className={styles.fovSize} {...{ fov }} />
        {/* <FOVScale className={styles.fovSize} {...{ fov }} /> */}
      </AladinOverlay>
      <AladinCanvas onZoomChanged={(fov) => setFov(fov)} showLogo={false} />
    </>
  );
};

export default EmbeddedExplorer;
