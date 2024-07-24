import { FunctionComponent } from "react";
import { RootProps } from "./layout";
import Home from "@/components/pages/Home";

const RootPage: FunctionComponent<RootProps> = ({ params: { locale } }) => {
  return <Home {...{ locale }} />;
};

export default RootPage;
