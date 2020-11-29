import React from "react";
import { motion } from "framer-motion";
import DropdownSection from "./DropdownSection";
import { useDropdown } from "../../hooks/useDropdown";

export const DURATION = 0.2;
const DELAY = 0.05;

function DropdownBase() {
  const { options, targetOption, targetId } = useDropdown();
  // const isActive = typeof targetId === "number";

  let [width, height, x] = [0, 0, 0];
  if (targetOption) {
    const { optionCenterX, contentDimensions } = targetOption;
    width = contentDimensions?.width as number;
    height = contentDimensions?.height as number;
    x = optionCenterX - width / 2;
  }

  return (
    <div className="dropdown-root">
      <motion.div
        className="dropdown-container"
        animate={{
          x,
          width,
          height,
          // opacity: isActive ? 1 : 0,
          // pointerEvents: isActive ? "unset" : "none",
        }}
        transition={{
          ease: "easeOut",
          x: { duration: DURATION },
          width: { duration: DURATION },
          height: { duration: DURATION },
          pointerEvents: { delay: DELAY },
        }}
      >
        <div className="dropdown-background" />
        <motion.div animate={{ x: -x }} transition={{ x: { duration: 0 } }}>
          {options.map((item) => (
            <DropdownSection key={item.id} option={item} />
          ))}
        </motion.div>
      </motion.div>
      <DropdownArrow />
    </div>
  );
}

function DropdownArrow() {
  const { targetOption } = useDropdown();
  const x = targetOption?.optionCenterX ?? 0;

  return (
    <motion.div
      className="dropdown-arrow"
      initial={{ opacity: 0 }}
      animate={{ x, pointerEvents: "none", opacity: x > 0 ? 1 : 0 }} // pointerEvents: "none" for hover behind element
      transition={{ ease: "easeOut", x: { duration: DURATION } }}
    />
  );
}

export default DropdownBase;
