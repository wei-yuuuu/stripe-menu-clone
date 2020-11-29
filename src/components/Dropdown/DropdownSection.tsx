import React from "react";
import { motion } from "framer-motion";
import { Option, useDropdown } from "../../hooks/useDropdown";
import { DURATION } from "./DropdownBase";

type DropdownSectionProps = {
  option: Option;
};

function DropdownSection({
  option: { id, optionCenterX, contentDimensions, WrappedContent },
}: DropdownSectionProps) {
  const { targetId } = useDropdown();

  const contentWidth = contentDimensions?.width || 0;
  const x = (optionCenterX as number) - contentWidth / 2;
  const isActive = targetId === id;

  return (
    <motion.div
      className="dropdown-section"
      initial={{ x }}
      animate={{ x, opacity: isActive ? 1 : 0 }}
      transition={{ ease: "easeOut", opacity: { duration: DURATION } }}
      onHoverStart={() => console.log("hover")}
    >
      {WrappedContent && <WrappedContent />}
    </motion.div>
  );
}

export default DropdownSection;
