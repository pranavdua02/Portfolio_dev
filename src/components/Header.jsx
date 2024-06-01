import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header>
      <div className="w-full px-6 py-6 lg:px-[2.4rem] lg:py-[2.4rem] flex flex-row items-center text-center justify-between">
        <motion.button
          initial={{
            opacity: 0,
            x: -500,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
          }}
        >
          <img
            className="lg:h-20 lg:w-20 h-12 w-12 rounded-full "
            src="https://www.starpng.com/public/uploads/preview/dj-logo-dj-tatto-dj-soud-logo-dj-music-png-1024x1024-1015764122728kbgrmhxb1.png"
          />
        </motion.button>
        <a href="mailto:duapranav11@gmail.com">
          <motion.button
            initial={{
              opacity: 0,
              x: 500,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
            }}
            className=" text-[11px] lg:text-[22px] border-2 border-indigo-400 text-indigo-400 px-3 py-2 lg:px-5 lg:py-3 rounded-full hover:text-white hover:bg-indigo-400"
          >
            Say Hello!
          </motion.button>
        </a>
      </div>
    </header>
  );
};

export default Header;
