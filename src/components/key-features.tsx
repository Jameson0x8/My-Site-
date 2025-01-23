"use client";

import { useTheme } from "next-themes";
import { MagicCard } from "@/components/ui/magic-card";

export function KeyFeatures() {
  const { theme } = useTheme();

  const features = [
    {
      title: "Asset Trading",
      description: "Buy and sell shares of unique digital assets and collectibles",
    },
    {
      title: "Real-time Market",
      description: "Watch asset prices fluctuate based on market demand and trends",
    },
    {
      title: "Instant Transactions",
      description: "Execute trades quickly and securely on our platform",
    },
  ];

  return (
    <section className="w-full py-6 md:py-12 lg:py-16">
      <div className="px-4 md:px-6 max-w-7xl mx-auto w-full">
        <h2 className="text-4xl font-bold text-center text-[#1e3a8a] mb-8">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <MagicCard
              key={index}
              className="cursor-pointer flex flex-col items-center justify-center p-6 text-center h-[250px]"
              gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
              gradientFrom={theme === "dark" ? "#4171ea" : "#1e3a8a"}
              gradientTo={theme === "dark" ? "#1e3a8a" : "#4171ea"}
            >
              <h3 className="text-2xl font-bold text-[#1e3a8a] dark:text-[#4171ea] mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {feature.description}
              </p>
            </MagicCard>
          ))}
        </div>
      </div>
    </section>
  );
}

