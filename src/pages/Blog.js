import React from "react";
import CompoundNavBar from "../components/CompoundNavBar";
import CustomTabs from "../components/CustomTabs";

export default function Blog() {
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
        <section className="mb-32 text-gray-800 text-center">
          <CustomTabs />
        </section>
      </main>
    </>
  );
}
