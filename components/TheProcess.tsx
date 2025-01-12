"use client";

import { Play } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface TabContent {
  tabName: string;
  title: string;
  description: string;
  image: string;
}

const tabs: TabContent[] = [
  {
    tabName: "Idea",
    title: "Your vision is unique.",
    description:
      "Nurture Your Idea into a Blueprint for Success with our strategic insights and industry expertise. Your vision is unique, let’s us shape it.",
    image: "/assets/idea.svg",
  },
  {
    tabName: "Design",
    title: "Crafting the blueprint for success",
    description:
      "Design is more than aesthetics, it’s about creating user experiences that resonate and convert. Our design experts shape your vision into a stunning reality.",
    image: "/assets/design.svg",
  },
  {
    tabName: "Develop",
    title: "Turning blueprints into reality.",
    description:
      "We breathe life into designs, building robust platforms ready to disrupt markets. Harness the experience of our development team to bring your Concept to Life.",
    image: "/assets/develop.svg",
  },
  {
    tabName: "Launch",
    title: "Your launchpad to the market.",
    description:
      "Launching is just the beginning, we ensure your product makes a splash and keeps making waves, ensuring a continual customer acquisition.",
    image: "/assets/launch.svg",
  },
];

const TheProcess = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <section className="bg-[#030516] pb-80 px-4 md:px-12 lg:px-24 ">
      <div className="flex flex-col py-10 md:py-0 pb-2 justify-end">
        <p className="text-[30px] md:text-[36px] lg:text-[42px] leading-[1.3] max-w-3xl">
          From to <span className="text-[#60a6e7]">Spark</span> to{" "}
          <span className="text-[#60a6e7]">Spotlight:</span> we take you every
          step of the way to success.
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:items-center w-full pt-14">
        <div className="flex flex-col md:w-[50%] md:pr-10">
          <div className="flex justify-between space-x-2 md:space-x-0 lg:space-x-2 border-2 border-[#b3d0f2] rounded-full p-3 mb-10 overflow-hidden">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`w-full transition-all px-2 py-3 rounded-full lg:text-lg ${
                  activeTab === index ? "bg-[#b3d0f2] text-black" : ""
                }`}
                onClick={() => setActiveTab(index)}
              >
                {tab.tabName}
              </button>
            ))}
          </div>
          <div className="flex flex-col justify-center p-4">
            <h2 className="text-2xl font-semibold text-[1.8rem] sm:text-[2rem] leading-8 mb-10">{tabs[activeTab].title}</h2>
            <p className="text-[#dedede] mb-8 text-base md:text-lg leading-7">{tabs[activeTab].description}</p>
          </div>

          <div className="group relative z-30 w-fit ml-4">
            <div className="w-[144px] h-12 border border-dashed border-white rounded-full  group-hover:border-[#0066cc]"></div>
            <button className="absolute left-1 -top-1 lg:right-[90px] font-semibold text-black bg-white w-[144px] h-12 rounded-full group-hover:bg-[#154b81] group-hover:text-white transition ease-in-out flex items-center justify-center">
              Book a Call{" "}
              <Play className="w-4 h-4 ml-2 group-hover:transition-none fill-black group-hover:fill-white" />
            </button>
          </div>
        </div>
        {/* Active Tab Content */}
        <div className="items-center p-4 w-full md:w-[50%]">
          <div className="p-4 relative w-full h-[400px]">
            <Image
              src={tabs[activeTab].image}
              alt={tabs[activeTab].title}
              fill
              className="w-full h-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheProcess;
