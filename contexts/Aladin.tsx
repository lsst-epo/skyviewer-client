"use client";
import { createContext, useContext, useEffect } from "react";
import { bindAladinEvents } from "@/lib/aladin/helpers";

export interface AladinContext {
  isLoading: false;
  hasFocus: boolean;
  aladin: Aladin;
  A: A;
  saveOptions: (options: Partial<AladinOptions>) => void;
}
export interface AladinContextDefault {
  isLoading: true;
  hasFocus: false;
  aladin?: undefined;
  A?: undefined;
  saveOptions?: undefined;
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
) => AladinContext | AladinContextDefault = (props) => {
  const context = useContext(AladinContext);

  useEffect(() => {
    if (!context.isLoading && props?.callbacks) {
      bindAladinEvents(context.aladin, props.callbacks);
    }
  }, [props?.callbacks]);

  useEffect(() => {
    if (context.isLoading === false) {
      props?.callbacks?.onLoaded &&
        props?.callbacks.onLoaded({ aladin: context.aladin, A: context.A });
    }
  }, [context.isLoading, context.hasFocus]);

  if (context) {
    return context;
  } else {
    throw new Error("Must be used inside of an AladinProvider");
  }
};

export default AladinContext;
