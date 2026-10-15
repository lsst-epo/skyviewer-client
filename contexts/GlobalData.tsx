"use client";
import { ReactNode, createContext, useState, useEffect, useContext } from "react";
import { useSearchParams } from "next/navigation";

type GlobalDataProviderProps = {
  children: ReactNode
}

type GlobalDataContext = {
  embedded: boolean;
}
const GlobalDataContext = createContext<GlobalDataContext | null>(null);

export function useGlobalDataContext() {
  const context = useContext(GlobalDataContext);
  if(!context) {
    throw new Error(
      `GlobalData cannot be rendered outside the GlobalDataContext.Provider component.`
    );
  }
  return context;
}

function GlobalDataProvider({ children }: GlobalDataProviderProps) {
  const searchParams = useSearchParams();
  const [ embedded, setEmbedded ] = useState<boolean>(false);
  const isEmbedded = searchParams.get("embedded");

  useEffect(() =>{
    if(embedded !== true) {
      const setEmbed = (isEmbedded === "true");
      setEmbedded(setEmbed);
      }

  }, [isEmbedded]);

  return (
    <GlobalDataContext.Provider value={{ embedded }}>
      {children}
    </GlobalDataContext.Provider>
  );
}
export default GlobalDataContext;

export { GlobalDataProvider };
