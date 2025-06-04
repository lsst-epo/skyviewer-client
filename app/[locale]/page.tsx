import { FunctionComponent } from "react";
import { setRequestLocale } from "next-intl/server";
import Home from "@/components/pages/Home";

const RootPage: FunctionComponent<RootProps> = ({ params: { locale } }) => {
  setRequestLocale(locale);
  return <Home {...{ locale }} />;
};

export default RootPage;
