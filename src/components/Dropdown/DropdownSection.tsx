import React from "react";
import { motion } from "framer-motion";
import { useDropdown } from "../../hooks/useDropdown";

type DropdownSectionProps = {
  option: any;
};

function DropdownSection({ option }: DropdownSectionProps) {
  const { targetId } = useDropdown();

  const { id, optionCenterX, contentDimensions, WrappedContent } = option;

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
        pointerEvents: isActive ? "unset" : "none",
      }}
      transition={{
        ease: "easeOut",
        opacity: { duration: 0.2 },
      }}
      onHoverStart={() => console.log("hover")}
    >
      <WrappedContent />
    </motion.div>
  );
}

export default DropdownSection;
