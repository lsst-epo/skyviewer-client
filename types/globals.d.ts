interface Window {
  plausible?: (
    event: string,
    options?: { callback?: () => void; interactive?: boolean; props?: any }
  ) => void;
}
