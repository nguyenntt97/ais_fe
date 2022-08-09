import React from "react";
import "../components/Animation/float_square.css";
import CompoundNavBar from "../components/CompoundNavBar";
import CustomTabs from "../components/CustomTabs";

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
        <div class="p-10 relative">
          <div class="area -z-10">
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
          <h1 className="text-5xl font-bold mt-4 mb-12 z-5 text-red-800">
            Research Themes
          </h1>
          <p class="text-xl font-light leading-relaxed mt-6 mb-4 text-gray-800">
            Interaction can take many forms. In our laboratory, we mainly focus
            on human-to-human interaction, human-to-non-human interaction, and
            non-human-to-human interaction via artificial systems (non-human
            means anything that can interact with non-humans, including
            machines, robots, animals, etc.). However, as the name of our
            laboratory indicates, we study systems that apply interaction
            technology, so the scope of our research is very broad, and there
            are no restrictions on our research topics.
          </p>
        </div>
        <section className="mb-32 text-gray-800 text-center">
          <CustomTabs />
        </section>
      </main>
    </>
  );
}
