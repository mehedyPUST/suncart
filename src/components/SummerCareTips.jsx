"use client";
import { motion } from "framer-motion";
import {
  FaTint,
  FaSun,
  FaLeaf,
  FaHeartbeat,
  FaShieldAlt,
  FaSmile,
  FaAppleAlt,
  FaBicycle,
  FaCloudSun,
  FaRegClock,
  FaCheckCircle,
} from "react-icons/fa";
import { GiWaterDrop, GiSunglasses, GiStrawberry } from "react-icons/gi";

const SummerCareTips = () => {
  const tips = [
    {
      icon: <FaTint className="text-3xl" />,
      title: "Stay Hydrated",
      description:
        "Drink at least 8-10 glasses of water daily to keep your body cool and skin glowing.",
      tip: "Carry a reusable water bottle",
    },
    {
      icon: <FaSun className="text-3xl" />,
      title: "Sun Protection",
      description:
        "Apply SPF 30+ sunscreen 15 minutes before sun exposure. Reapply every 2 hours.",
      tip: "Don't forget your ears and neck!",
    },
    {
      icon: <FaLeaf className="text-3xl" />,
      title: "Lightweight Clothing",
      description:
        "Wear light-colored, breathable fabrics like cotton and linen to stay cool.",
      tip: "Avoid dark colors that absorb heat",
    },
    {
      icon: <GiStrawberry className="text-3xl" />,
      title: "Eat Summer Fruits",
      description:
        "Include water-rich fruits like watermelon, cucumber, and oranges in your diet.",
      tip: "Fresh fruits = natural hydration",
    },
  ];

  const quickTips = [
    { icon: <FaRegClock />, text: "Avoid sun between 10 AM - 4 PM" },
    { icon: <FaShieldAlt />, text: "Wear sunglasses & wide hat" },
    { icon: <FaHeartbeat />, text: "Take cool showers twice a day" },
    { icon: <FaAppleAlt />, text: "Eat light, frequent meals" },
    { icon: <FaSmile />, text: "Use aloe vera for sunburns" },
    { icon: <FaBicycle />, text: "Exercise during morning/evening" },
  ];

  return (
    <section className="w-full overflow-hidden bg-gradient-to-r from-amber-50 via-white to-amber-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <GiSunglasses />
            <span>Summer Wellness Guide</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent mb-4">
            Summer Care Tips
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-500 mx-auto rounded-full"></div>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Essential tips to keep you cool, hydrated, and healthy all summer
            long
          </p>
        </div>

        {/* Main Tips Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {tips.map((tip, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-amber-100 hover:border-amber-300">
                <div className="p-6">
                  <div className="text-amber-500 mb-4">{tip.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {tip.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {tip.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-amber-600">
                    <FaCheckCircle />
                    <span className="font-medium">{tip.tip}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Tips Section */}
        <div className="bg-gradient-to-r from-amber-600 to-orange-500 rounded-2xl p-8 md:p-10 text-white shadow-xl mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              Quick Summer Tips
            </h3>
            <p className="text-amber-100">
              Follow these simple tips for a healthy summer
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickTips.map((tip, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-xl p-3 hover:bg-white/30 transition-all duration-300"
              >
                <div className="text-white text-xl">{tip.icon}</div>
                <span className="text-sm md:text-base font-medium text-white">
                  {tip.text}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Hydration Tracker */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-amber-100">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="bg-amber-100 rounded-full p-4">
                <GiWaterDrop className="text-4xl text-amber-600" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-1">
                  Daily Hydration Tracker
                </h4>
                <p className="text-gray-500">
                  Keep track of your water intake
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">8+</div>
                <div className="text-sm text-gray-500">Glasses/Day</div>
              </div>
              <div className="w-px h-10 bg-amber-200"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">2L</div>
                <div className="text-sm text-gray-500">Minimum Water</div>
              </div>
              <div className="w-px h-10 bg-amber-200"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">30%</div>
                <div className="text-sm text-gray-500">More Energy</div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-amber-600 to-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
            >
              Track My Water
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SummerCareTips;