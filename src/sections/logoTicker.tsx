'use client'

import React from "react";
import Logo from "@/asset/logo.jpg";
import Vector from "@/asset/vector.png";
import IMG from "@/asset/IMG.png";
import NNC from "@/asset/NNC.jpeg";
import Company from "@/asset/company.jpg";
import Image from "next/image";
import { motion } from "framer-motion";

const LogoTicker = () => {
  const logos = [Logo, Vector, Company, IMG, NNC];
  const doubled = [...logos, ...logos];

  return (
    <div className="w-full h-[40px] md:h-[80px] py-2 md:py-5 overflow-hidden relative">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
className="flex items-center justify-center h-full w-auto gap-20 px-2 relative [mask-image:linear-gradient(to_right,transparent_1%,black_50%,black_80%,transparent_99%)]"
      >
        {doubled.map((src, i) => (
          <Image
            key={i}
            src={src}
            alt={`logo-${i}`}
            className="h-[80%] md:h-[60%] w-auto object-contain"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default LogoTicker;
