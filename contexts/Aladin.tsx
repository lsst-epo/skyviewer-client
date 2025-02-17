"use client";
import { createContext, useContext, useEffect } from "react";
import { bindAladinEvents } from "@/lib/aladin/helpers";

export interface AladinContext {
  isLoading: false;
  hasFocus: boolean;
  aladin: AladinInstance;
  A: Aladin;
}
export interface AladinContextDefault {
  isLoading: true;
  hasFocus: false;
  aladin?: undefined;
  A?: undefined;
}

export const defaultValue: AladinContextDefault = {
  isLoading: true,
  hasFocus: false,
};

export const AladinContext = createContext<
  AladinContext | AladinContextDefault
>(defaultValue);

export const useAladin: (
  props?: UseAladinProps
) => AladinContext | AladinContextDefault = (props = {}) => {
  const { callbacks } = props;
  const context = useContext(AladinContext);

  if (callbacks && Object.keys(callbacks).length > 0 && context?.aladin) {
    bindAladinEvents(context.aladin, callbacks);
  }

  useEffect(() => {
    if (context.isLoading === false) {
      callbacks?.onLoaded &&
        callbacks.onLoaded({ aladin: context.aladin, A: context.A });
    }
  }, [context.isLoading, context.hasFocus]);

  if (context) {
    return context;
  } else {
    throw new Error("Must be used inside of an AladinProvider");
  }
};

export default AladinContext;
