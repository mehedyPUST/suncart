"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  GiAirBalloon,
  GiCooler,
  GiFootsteps,
  GiHealthNormal,
  GiSeaDragon,
  GiSnowflake2,
  GiSunCloud,
  GiSunglasses,
  GiWaterDrop,
  GiWaveSurfer,
  GiWindyStripes,
} from "react-icons/gi";

const TopBrands = () => {
  const brands = [
    { name: "SunShade", icon: <GiSunglasses /> },
    { name: "SunnyWear", icon: <GiSunCloud /> },
    { name: "ComfortStep", icon: <GiFootsteps /> },
    { name: "CoolFit", icon: <GiCooler /> },
    { name: "HydroMax", icon: <GiWaterDrop /> },
    { name: "SkinGuard", icon: <GiHealthNormal /> },
    { name: "AquaWear", icon: <GiWaveSurfer /> },
    { name: "BreezeMini", icon: <GiWindyStripes /> },
    { name: "ChillMate", icon: <GiSnowflake2 /> },
    { name: "OceanStyle", icon: <GiSeaDragon /> },
    { name: "SafeView", icon: <GiSunglasses /> },
    { name: "AirWear", icon: <GiAirBalloon /> },
  ];

  const duplicatedBrands = [...brands, ...brands];

  return (
    <div className="w-full overflow-hidden bg-gradient-to-r from-amber-50 via-white to-amber-50 py-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">
          Trusted by Top Brands
        </h2>
        <p className="text-gray-500 mt-2 text-sm">Join 10,000+ happy customers</p>
      </div>

      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="flex gap-12 whitespace-nowrap"
      >
        {duplicatedBrands.map((brand, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-amber-100 hover:border-amber-300"
          >
            <span className="text-amber-500 text-xl group-hover:text-amber-600 transition-colors">
              {brand.icon}
            </span>
            <span className="text-gray-700 font-semibold text-base tracking-wide">
              {brand.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TopBrands;