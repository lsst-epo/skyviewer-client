import BaseIconComposer from "@rubin-epo/epo-react-lib/IconComposer";
import customIcons from "@/components/svg/icons";

const IconComposer = (props) => {
  return <BaseIconComposer {...{ ...props, customIcons }} />;
};

export default IconComposer;
