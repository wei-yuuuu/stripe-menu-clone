import React from "react";
import { motion } from "framer-motion";
import DropdownSection from "./DropdownSection";
import { useDropdown } from "../../hooks/useDropdown";

export const DURATION = 0.2;
const DELAY = 0.05;

function DropdownBase() {
  const { options, targetOption } = useDropdown();

  let [width, height, x] = [0, 0, 0];
  if (targetOption) {
    width = targetOption?.contentDimensions?.width as number;
    height = targetOption?.contentDimensions?.height as number;
    x = (targetOption?.optionCenterX as number) - width / 2;
  }

  return (
    <div className="dropdown-root">
      <motion.div
        className="dropdown-container"
        animate={{ x, width, height }}
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
