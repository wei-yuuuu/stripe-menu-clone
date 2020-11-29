import React from "react";
import { motion } from "framer-motion";
import { useDropdown } from "../../hooks/useDropdown";
import { DURATION } from "./DropdownBase";

type DropdownSectionProps = {
  option: any;
};

function DropdownSection({
  option: { id, optionCenterX, contentDimensions, WrappedContent },
}: DropdownSectionProps) {
  const { targetId } = useDropdown();

  const contentWidth = contentDimensions?.width || 0;
  const x = optionCenterX - contentWidth / 2;
  const isActive = targetId === id;

  return (
    <motion.div
      className="dropdown-section"
      initial={{ x }}
      animate={{
        x,
        opacity: isActive ? 1 : 0,
        // pointerEvents: isActive ? "unset" : "none",
      }}
      transition={{
        ease: "easeOut",
        opacity: { duration: DURATION },
      }}
      onHoverStart={() => console.log("hover")}
    >
      <WrappedContent />
    </motion.div>
  );
}

export default DropdownSection;
