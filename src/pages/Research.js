import React from "react";
import "../components/Animation/float_square.css";
import "../components/Animation/hexagon.css";
import CompoundNavBar from "../components/CompoundNavBar";
import CustomTabs from "../components/CustomTabs";
import ResearchTabs from "../components/ResearchTabs";

export default function Research() {
  return (
    <>
      <CompoundNavBar />
      <main>
        <div
          id="carouselExampleCaptions"
          className="carousel slide relative"
          data-bs-ride="carousel"
        >
          <div className="h-[4rem] carousel-inner relative w-full overflow-hidden">
            <div className="carousel-item active relative float-left w-full ">
              <div
                // src="https://pbs.twimg.com/media/DBIHmxZUAAQivT4?format=jpg&name=large"
                className="block w-full h-[39rem] bg-round-table bg-no-repeat bg-cover bg-center brightness-[0.4]"
                alt="..."
              />
            </div>
            <div className="carousel-item relative float-left w-full">
              <img
                className="block w-full h-[39rem] bg-party bg-no-repeat bg-cover bg-center brightness-[0.4]"
                alt="..."
              />
            </div>
            <div className="carousel-item relative float-left w-full">
              <img
                className="block w-full h-[39rem] bg-group bg-no-repeat bg-cover bg-top brightness-[0.4]"
                alt="..."
              />
            </div>
          </div>
        </div>
        <div class="relative">
          <div class="area -z-10 p-10">
            <ul class="circles -z-10">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-2/5 p-5">
              <h1 className="text-5xl font-bold mt-4 mb-12 z-5 text-red-800">
                Intelligent Space
              </h1>
              <p class="text-xl font-light leading-relaxed mt-6 mb-4 text-gray-800">
                Interaction can take many forms. In our laboratory, we mainly
                focus on human-to-human interaction, human-to-non-human
                interaction, and non-human-to-human interaction via artificial
                systems (non-human means anything that can interact with
                non-humans, including machines, robots, animals, etc.). However,
                as the name of our laboratory indicates, we study systems that
                apply interaction technology, so the scope of our research is
                very broad, and there are no restrictions on our research
                topics.
              </p>
            </div>
            <div className="w-full h-128 md:w-3/5 drop-shadow-lg relative items-center overflow-hidden">
              <div className="flex flex-row flex-nowrap items-center justify-center">
                <div class="hexagon hexagon-1 z-10 bg-hexa1 w-80 h-80 top-1/2"></div>
                <div className="flex-col">
                  <div class="hexagon hexagon-1 bg-hexa3 w-48 h-48"></div>
                  <div class="hexagon hexagon-1 bg-hexa2 w-64 h-64 mt-10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="mb-32 text-gray-800 text-center">
          <ResearchTabs />
        </section>
      </main>
    </>
  );
}
