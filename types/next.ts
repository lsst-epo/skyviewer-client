type NextSearchParams = Record<string, string | Array<string> | undefined>;

export type PropsWithSearchParams<T = any> = T & {
  searchParams?: NextSearchParams;
};
