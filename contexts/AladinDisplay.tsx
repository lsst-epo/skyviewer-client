"use client";
import {
  createContext,
  FunctionComponent,
  PropsWithChildren,
  useContext,
} from "react";
import { useLocalStorage } from "usehooks-ts";

export interface AladinDisplayOptions {
  coordinateFormat: "d" | "s";
}

interface AladinDisplay {
  display: AladinDisplayOptions;
  setDisplay: (display: AladinDisplayOptions) => void;
}

const AladinDisplayContext = createContext<AladinDisplay | undefined>(
  undefined
);

export const AladinDisplayProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const [display, setDisplay] = useLocalStorage<AladinDisplayOptions>(
    "displaySettings",
    {
      coordinateFormat: "d",
    },
    { initializeWithValue: false }
  );

  return (
    <AladinDisplayContext.Provider value={{ display, setDisplay }}>
      {children}
    </AladinDisplayContext.Provider>
  );
};

export const useAladinDisplay = () => {
  const context = useContext(AladinDisplayContext);

  if (!context) {
    throw new Error("Must be used inside of an AladinDisplayProvider");
  }

  return context;
};

export default AladinDisplayContext;
