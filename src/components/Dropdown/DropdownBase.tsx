import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import DropdownSection from "./DropdownSection";
import { useDropdown } from "../../hooks/useDropdown";

const DURATION = 0.22;

function DropdownBase() {
  const [hovering, setHovering] = useState(false);

  const { options, cachedId, targetId } = useDropdown();

  const cachedOption = options.find((item) => item.id === cachedId);

  let [width, height, x] = [0, 0, 0];

  if (cachedOption) {
    const { optionCenterX, contentDimensions } = cachedOption;

    width = contentDimensions?.width as number;
    height = contentDimensions?.height as number;
    x = optionCenterX - width / 2;
  }

  const isActive = targetId !== null || hovering;

  /** First interaction */
  const [hasInteracted, setHasInteracted] = useState(false);
  const isFirstInteraction = isActive && !hasInteracted;

  useEffect(() => {
    if (isFirstInteraction) {
      setTimeout(() => {
        if (!hasInteracted) setHasInteracted(true);
      }, 15);
    }
  }, [hasInteracted, isFirstInteraction]);

  /** Active timeout */
  useEffect(() => {
    if (isActive) return;

    const timeout = setTimeout(
      () => setHasInteracted(false),
      DURATION * 1000 * 0.9
    );

    return () => clearTimeout(timeout);
  }, [isActive]);

  return (
    <div style={{ perspective: 2000 }}>
      <motion.div
        className="dropdown-root"
        animate={{
          opacity: isActive ? 1 : 0,
          rotateX: isActive ? 0 : -15,
        }}
        transition={{
          opacity: { duration: DURATION, delay: 0.05 },
          rotateX: { duration: DURATION, delay: 0.05 },
        }}
      >
        <motion.div
          className="dropdown-container"
          animate={{
            x,
            width,
            height,
            pointerEvents: isActive ? "unset" : "none",
          }}
          transition={{
            ease: "easeOut",
            x: isFirstInteraction ? { duration: 0 } : DURATION,
            width: { duration: isFirstInteraction ? 0 : DURATION * 0.93 },
            height: { duration: isFirstInteraction ? 0 : DURATION * 0.93 },
            // pointerEvents: { delay: 0.05 },
          }}
          onHoverStart={() => setHovering(true)}
          onHoverEnd={() => setHovering(false)}
        >
          <div className="dropdown-background" />
          <motion.div
            animate={{
              x: -x,
            }}
            transition={{
              x: isFirstInteraction ? { duration: 0 } : undefined,
            }}
          >
            {options.map((item) => (
              <DropdownSection key={item.id} option={item} />
            ))}
          </motion.div>
        </motion.div>
        <DropdownArrow isFirstInteraction={isFirstInteraction} />
      </motion.div>
    </div>
  );
}

type DropdownArrowProps = {
  isFirstInteraction: boolean;
};

function DropdownArrow({ isFirstInteraction }: DropdownArrowProps) {
  const { options, cachedId } = useDropdown();

  const cachedOption = options.find((item) => item.id === cachedId);

  const x = cachedOption ? cachedOption.optionCenterX : 0;

  return (
    <motion.div
      className="dropdown-arrow"
      initial={{
        opacity: 0,
      }}
      animate={{
        x,
        pointerEvents: "none",
        opacity: x > 0 ? 1 : 0,
      }}
      transition={{
        ease: "easeOut",
        x: { duration: isFirstInteraction ? 0 : DURATION },
      }}
    />
  );
}

export default DropdownBase;
