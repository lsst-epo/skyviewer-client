"use client";
import PropTypes from "prop-types";
import copy from "copy-to-clipboard";
import IconComposer from "@/components/svg/IconComposer";
import ShareButton from "./ShareButton";

export default function CopyUrlButton({ showLabel }) {
  return (
    <ShareButton
      showLabel={showLabel}
      icon={<IconComposer size="52" icon="ShareCopyUrl" />}
      text="Get Url"
      network="url"
      onClick={() => {
        copy(window.location.href);
      }}
    />
  );
}

CopyUrlButton.propTypes = {
  showLabel: PropTypes.bool,
};
