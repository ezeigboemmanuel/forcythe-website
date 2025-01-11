import Image from "next/image";
import { Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative w-full h-auto bg-[#030516]">
      <div className="absolute inset-0 z-10 top-28">
        <Image
          src="/assets/mapbackground.svg"
          fill
          alt="background-img"
          className="object-cover object-center"
        />
      </div>

      <div className="h-auto pt-28 md:pt-28 pb-12 md:pb-20 flex flex-col px-4 md:px-12 xl:px-24 items-center">
        <div className="bg-white bg-opacity-10 rounded-[33px] md:rounded-[46px] w-full">
          <div className="px-4 py-6 md:p-10 xl:p-12">
            <h1 className="text-[56px] md:text-[80px] z-50 mb-7 leading-[1] max-w-[900px]">
              We build <span className="text-[#60a6e7]">products</span> that{" "}
              {/* <br className="hidden md:inline-block" /> */}
              shape a better future
            </h1>
            <p className="z-50 text-[#aea9b1] mb-8 md:text-lg max-w-3xl">
              We’re the architects of digital excellence across industries. We
              redefine business with cutting-edge digital strategies that
              invokes sector-wide transformation.
            </p>
            <div className="group relative z-30 inline-block">
              <div className="w-[144px] h-12 border border-dashed border-white rounded-full  group-hover:border-[#0066cc]"></div>
              <button className="absolute left-1 -top-1 lg:right-[90px] font-semibold text-black bg-white w-[144px] h-12 rounded-full group-hover:bg-[#154b81] group-hover:text-white transition ease-in-out delay-150 flex items-center justify-center">
                Book a Call <Play className="w-4 h-4 ml-2 fill-black group-hover:fill-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col py-10 md:py-0 pb-2 md:-mt-4 px-4 md:px-12 lg:px-24 justify-end items-center">
        <p className="text-[32px] lg:text-[42px] mx-auto leading-[1.3] text-center">
          Success in <span className="text-[#60a6e7]">Motion</span> - Our
          clients’ journey
        </p>
      </div>
    </section>
  );
};

export default Hero;
