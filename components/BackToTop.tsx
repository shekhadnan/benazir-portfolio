"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.25 }}
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          aria-label="Back to top"
          className="
            fixed
            bottom-8
            right-8
            z-50

            flex
            items-center
            justify-center

            h-14
            w-14

            rounded-full

            bg-blue-600
            text-white

            shadow-xl

            hover:bg-blue-500
            hover:scale-110

            transition-all
            duration-300
          "
        >
          <ChevronUp
            size={24}
            strokeWidth={2.5}
            className="-mt-[1px]"
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}