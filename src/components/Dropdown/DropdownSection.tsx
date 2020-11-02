import React from "react";
import { motion } from "framer-motion";
import { useDropdown } from "../../hooks/useDropdown";

type DropdownSectionProps = {
  option: any;
};

function DropdownSection({ option }: DropdownSectionProps) {
  const { cachedId } = useDropdown();

  const { id, optionCenterX, contentDimensions } = option;

  const contentWidth = contentDimensions?.width || 0;
  const x = optionCenterX - contentWidth / 2;

  const isActive = cachedId === id;

  return (
    <motion.div
      className="dropdown-section"
      initial={{
        x,
      }}
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
      <option.WrappedContent />
    </motion.div>
  );
}

export default DropdownSection;
