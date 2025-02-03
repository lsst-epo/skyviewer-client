import { FunctionComponent } from "react";
import Home from "@/components/pages/Home";

const RootPage: FunctionComponent<RootProps> = ({ params: { locale } }) => {
  return <Home {...{ locale }} />;
};

export default RootPage;
