import React from "react";
import { motion } from "framer-motion";
import type { Option } from "../../hooks/useDropdown";
import { useDropdown } from "../../hooks/useDropdown";
import { DURATION } from "./DropdownBase";

type DropdownSectionProps = {
  option: Option;
};

function DropdownSection({
  option: { id, optionCenterX, contentDimensions, WrappedContent },
}: DropdownSectionProps) {
  const { targetId, setTargetId } = useDropdown();
  const handleClose = () => setTargetId(-1);

  const contentWidth = contentDimensions?.width ?? 0;
  const x = (optionCenterX as number) - contentWidth / 2;
  const isActive = targetId === id;

  return (
    <motion.div
      className="dropdown-section"
      initial={{ x }}
      animate={{ x, opacity: isActive ? 1 : 0 }}
      transition={{ ease: "easeOut", opacity: { duration: DURATION } }}
      onHoverEnd={handleClose}
    >
      {WrappedContent && <WrappedContent />}
    </motion.div>
  );
}

export default DropdownSection;
