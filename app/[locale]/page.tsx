import { FunctionComponent } from "react";
import Home from "@/components/pages/Home";
import { setRequestLocale } from "next-intl/server";

const RootPage: FunctionComponent<RootProps> = ({ params: { locale } }) => {
  setRequestLocale(locale);
  return <Home {...{ locale }} />;
};

export default RootPage;
