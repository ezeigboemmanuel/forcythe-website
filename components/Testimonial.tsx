"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const Testimonial = () => {
  const companyCommonStyles =
    "min-h-[64px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border border-[#06438C] cursor-pointer relative";

  const tabs = ["", "", "", "", ""];

  // State to track the active tab
  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    // Automatically switch to the next tab every 15 seconds
    const interval = setInterval(() => {
      setActiveTab((prevTab) => (prevTab % tabs.length) + 1); // Cycle through tabs
    }, 15000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [tabs.length]);

  return (
    <section className="bg-[#030516] pb-80">
      <div className="flex flex-col py-10 md:py-0 pb-2 md:-mt-4 px-4 md:px-12 lg:px-24 justify-end items-center">
        <p className="text-[32px] md:text-[36px] lg:text-[42px] mx-auto leading-[1.3] text-center max-w-4xl">
          Discover the{" "}
          <span className="text-[#60a6e7]">transformative stories</span> of
          startups that scaled new heights with us
        </p>
      </div>

      <div className="w-full overflow-x-scroll no-scrollbar px-4 md:px-12 xl:px-24">
        <div className="grid grid-cols-5 w-full mx-auto mt-10 min-w-[750px]">
          <div
            onClick={() => setActiveTab(1)}
            className={`rounded-l-full border-r-0 ${companyCommonStyles} ${
              activeTab === 1 ? "bg-[#0c2645]" : ""
            }`}
          >
            <Image
              src="/assets/starks.svg"
              alt="starks"
              width={20}
              height={20}
            />
            <span className="ml-2">Starks</span>
          </div>

          <div
            onClick={() => setActiveTab(2)}
            className={`border-x-0 ${companyCommonStyles} ${
              activeTab === 2 ? "bg-[#0c2645]" : ""
            }`}
          >
            <Image
              src="/assets/ExecutivePros.svg"
              alt="executive_pros"
              width={120}
              height={120}
            />
          </div>
          <div
            onClick={() => setActiveTab(3)}
            className={`border-x-0 ${companyCommonStyles} ${
              activeTab === 3 ? "bg-[#0c2645]" : ""
            }`}
          >
            <Image
              src="/assets/stacai.svg"
              alt="stacai"
              width={90}
              height={90}
            />
          </div>
          <div
            onClick={() => setActiveTab(4)}
            className={`border-x-0 ${companyCommonStyles} ${
              activeTab === 4 ? "bg-[#0c2645]" : ""
            }`}
          >
            <Image
              src="/assets/iwaria.svg"
              alt="iwaria"
              width={80}
              height={80}
            />
          </div>
          <div
            onClick={() => setActiveTab(5)}
            className={`rounded-r-full border-l-0 ${companyCommonStyles} ${
              activeTab === 5 ? "bg-[#0c2645]" : ""
            }`}
          >
            <Image
              src="/assets/Beaupreneur.svg"
              alt="beaupreneur"
              className="-mb-2 px-2"
              width={140}
              height={140}
            />
          </div>
        </div>
      </div>

      <div className="w-full px-4 md:px-12 lg:px-24 relative mt-5 pb-80">
        {activeTab === 1 && (
          <div className="bg-[#0c2645] md:absolute w-full md:w-[70%] lg:w-[40%] flex flex-col sm:flex-row p-5 sm:p-7 rounded-[28px]">
            <div className="sm:basis-[58%] pr-3">
              <p className="font-semibold mb-4">Starks Associate</p>
              <p>
                Partnering with Forcythe was like finding a hidden gem. Their
                genuine interest in our success was palpable, and the continuous
                support post-launch has been a testament to their commitment.
                They’ve become more than a service provider; they’re a trusted
                ally.
              </p>
              <p className="font-semibold mt-4">John, Management</p>
            </div>
            <div className="sm:basis-[42%] relative w-full h-[400px] mt-3 md:mt-0 md:ml-3">
              <Image
                src="/assets/john.svg"
                alt="john"
                fill
                className="object-cover object-center rounded-xl"
              />
            </div>
          </div>
        )}

        {activeTab === 2 && (
          <div className="bg-[#0c2645] md:absolute lg:left-80 w-full md:w-[70%] lg:w-[40%] flex flex-col sm:flex-row p-5 sm:p-7 rounded-[28px]">
            <div className="sm:basis-[58%] pr-3">
              <p className="font-semibold mb-4">ExecutivePros</p>
              <p>
                The team understood the assignment and delivered very well. One
                of the things that stood them out was how they took our concepts
                and turned it into visually appealing designs that caught the
                eyes of our clients and made increased web engagements. Kudos!
              </p>
              <p className="font-semibold mt-4">Testimony, Co-founder</p>
            </div>
            <div className="sm:basis-[42%] relative w-full h-[400px] mt-3 md:mt-0 md:ml-3">
              <Image
                src="/assets/testimony.svg"
                alt="testimony"
                fill
                className="object-cover object-center rounded-xl"
              />
            </div>
          </div>
        )}

        {activeTab === 3 && (
          <div className="bg-[#0c2645] md:absolute lg:right-64 w-full md:w-[70%] lg:w-[40%] flex flex-col sm:flex-row p-5 sm:p-7 rounded-[28px]">
            <div className="sm:basis-[58%] pr-3">
              <p className="font-semibold mb-4">Stac AI</p>
              <p>
                Forcythe is seriously amazing when it comes to coming up with
                new ideas. They took our rough ideas and turned them into
                something incredible online. Their team’s commitment to our
                vision was evident every step of the way.
              </p>
              <p className="font-semibold mt-4">Edwin, Former CTO</p>
            </div>
            <div className="sm:basis-[42%] relative w-full h-80 mt-3 md:mt-0 md:ml-3">
              <Image
                src="/assets/edwin.svg"
                alt="edwin"
                fill
                className="object-cover object-center rounded-xl"
              />
            </div>
          </div>
        )}

        {activeTab === 4 && (
          <div className="bg-[#0c2645] md:absolute lg:right-80 w-full md:w-[70%] lg:w-[40%] flex flex-col sm:flex-row p-5 sm:p-7 rounded-[28px]">
            <div className="sm:basis-[58%] pr-3">
              <p className="font-semibold mb-4">Iwaria</p>
              <p>
                The moment we engaged Forcythe, it was clear they were in a
                league of their own. Their strategic approach to our project not
                only enhanced our online platform but also enriched our brand’s
                story, captivating our audience like never before.
              </p>
              <p className="font-semibold mt-4">Iwaria, Founder</p>
            </div>
            <div className="sm:basis-[42%] relative w-full h-[400px] mt-3 md:mt-0 md:ml-3">
              <Image
                src="/assets/iwaria-ceo.svg"
                alt="iwaria"
                fill
                className="object-cover object-center rounded-xl"
              />
            </div>
          </div>
        )}

        {activeTab === 5 && (
          <div className="bg-[#0c2645] md:absolute lg:right-24 w-full md:w-[70%] lg:w-[40%] flex flex-col sm:flex-row p-5 sm:p-7 rounded-[28px]">
            <div className="sm:basis-[58%] pr-3">
              <p className="font-semibold mb-4">Beaupreneur</p>
              <p>
                I’m beyond impressed with the dedication Forcythe showed. They
                didn’t just deliver—they educated us, involving us in the
                creative process. The result? A website that truly feels like
                ours and speaks directly to our customers’ hearts.
              </p>
              <p className="font-semibold mt-4">Christiana, Founder</p>
            </div>
            <div className="sm:basis-[42%] relative w-full h-80 mt-3 md:mt-0 md:ml-3">
              <Image
                src="/assets/chris.svg"
                alt="john"
                fill
                className="object-cover object-center rounded-xl"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonial;
