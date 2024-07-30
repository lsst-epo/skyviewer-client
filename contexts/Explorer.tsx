"use client";
import {
  createContext,
  Dispatch,
  FunctionComponent,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface ExplorerSettings {
  showCatalogs?: boolean;
  showGrid?: boolean;
  showLandmarks?: boolean;
  showGoals?: boolean;
  zoomLevel?: number;
  zoomRange?: Array<number>;
}

interface ExplorerContextValue {
  settings: ExplorerSettings;
  setSettings: Dispatch<SetStateAction<ExplorerSettings>>;
}

const ExplorerContext = createContext<ExplorerContextValue | null>(null);

const defaultExplorerSettings: ExplorerSettings = {
  showCatalogs: true,
  showGrid: false,
  showLandmarks: true,
  showGoals: false,
  zoomLevel: 20,
};

export const ExplorerProvider: FunctionComponent<
  PropsWithChildren<ExplorerSettings>
> = ({ children, ...props }) => {
  const [settings, setSettings] = useState<ExplorerSettings>({
    ...defaultExplorerSettings,
    ...props,
  });

  return (
    <ExplorerContext.Provider value={{ settings, setSettings }}>
      {children}
    </ExplorerContext.Provider>
  );
};

export const useExplorerSettings = () => {
  const context = useContext(ExplorerContext);

  if (context) {
    return context;
  } else {
    throw new Error("Must be used inside of ExplorerProvider");
  }
};
