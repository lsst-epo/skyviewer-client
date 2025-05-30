"use client";
import { FC } from "react";
import { useMediaQuery } from "usehooks-ts";
import { usePathname, useSearchParams } from "next/navigation";
import { env } from "@/env";
import { useStep } from "@/lib/tutorial";
import Share from "@/components/organisms/Share";

interface ShareTourProps {
  className?: string;
}

const ShareTour: FC<ShareTourProps> = ({ className }) => {
  const matches = useMediaQuery("(width < 1130px)", {
    defaultValue: false,
    initializeWithValue: false,
  });
  const { id } = useStep(2);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const poiParam = new URLSearchParams({ poi: searchParams.get("poi") || "1" });

  const url = new URL(
    `${pathname}?${poiParam.toString()}`,
    env.NEXT_PUBLIC_BASE_URL
  ).toString();

  return (
    <Share
      {...{ className, id, url }}
      position={matches ? "bottom left" : "top right"}
      image={false}
    />
  );
};

ShareTour.displayName = "Organism.TourControls.Share";

export default ShareTour;
