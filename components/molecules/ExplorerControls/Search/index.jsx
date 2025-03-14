import { useState } from "react";
import Button from "@/components/primitives/Button";
import IconComposer from "@/components/svg/IconComposer";

export default function Search() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSearchBar = () => setIsOpen(!isOpen);

  return (
    <Button
      icon={<IconComposer icon="Search" />}
      onClick={toggleSearchBar}
      text="Toggle Search"
      isIcon
      classes="search-button control-button"
    />
  );
}
