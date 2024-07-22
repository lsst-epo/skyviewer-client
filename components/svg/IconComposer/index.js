import BaseIconComposer from "@rubin-epo/epo-react-lib/IconComposer";
import customIcons from "@/svg/icons";

const IconComposer = (props) => {
  return <BaseIconComposer {...{ ...props, customIcons }} />;
};

export default IconComposer;
