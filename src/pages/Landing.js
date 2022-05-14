import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import FeaturingLanding from "../components/FeaturingLanding"
import SupervisorLanding from "../components/SupervisorLanding"
import StickyNavBar from "../components/StickyNavBar";

export default function Landing() {
    // const [deviceSize, changeDeviceSize] = useState(window.innerWidth);
    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
        function onScroll() {
            let currentPosition = window.pageYOffset; // or use document.documentElement.scrollTop;
            setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
        }

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollTop]);

    // useEffect(() => {
    //     const resizeW = () => changeDeviceSize(window.innerWidth);
    //     window.addEventListener("resize", resizeW); // Update the width on resize
    //     return () => window.removeEventListener("resize", resizeW);
    // });

    return (
        <>
            <div className="absolute w-full z-20">
                {(scrollTop < 200) ? <NavBar /> : <StickyNavBar />}
            </div>
            <main>
                <div id="carouselExampleCaptions" className="carousel slide relative" data-bs-ride="carousel">
                    <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="0"
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="2"
                            aria-label="Slide 3"
                        ></button>
                    </div>
                    <div className="carousel-inner relative w-full h-[39rem] overflow-hidden">
                        <div className="carousel-item active relative float-left w-full ">
                            <div
                                // src="https://pbs.twimg.com/media/DBIHmxZUAAQivT4?format=jpg&name=large"
                                className="block w-full h-[39rem] bg-round-table bg-no-repeat bg-cover bg-center brightness-[0.4]"
                                alt="..."
                            />
                            <div className="carousel-caption hidden md:block absolute text-center">
                                <h5 className="text-xl">Robotics theme</h5>
                                <p>Wide range of practical projects from Medical to Marine life observation robot</p>
                            </div>
                        </div>
                        <div className="carousel-item relative float-left w-full">
                            <img
                                className="block w-full h-[39rem] bg-party bg-no-repeat bg-cover bg-center brightness-[0.4]"
                                alt="..."
                            />
                            <div className="carousel-caption hidden md:block absolute text-center">
                                <h5 className="text-xl">Prepare for your career</h5>
                                <p>Unique international level academic experience. Harness not only technical skills but also communication skill</p>
                            </div>
                        </div>
                        <div className="carousel-item relative float-left w-full">
                            <img
                                className="block w-full h-[39rem] bg-group bg-no-repeat bg-cover bg-top brightness-[0.4]"
                                alt="..."
                            />
                            <div className="carousel-caption hidden md:block absolute text-center">
                                <h5 className="text-xl">True learning environment</h5>
                                <p>Learning by independent study, weekly seminars, mentoring program, and more!</p>
                            </div>
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                {/* Body */}
                <FeaturingLanding />
                <section className="mb-32 text-gray-800 text-center lg:text-left background-radial-gradient">
                    <div className="relative overflow-hidden bg-no-repeat bg-center bg-cover bg-adventure h-[24rem]">
                        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-black/70">
                            <div className="flex justify-center items-center h-full">
                                <div className="text-center text-white px-6 py-6 md:py-0 md:px-12 max-w-[800px]">
                                    <h2 className="text-5xl md:text-5xl xl:text-6xl font-bold tracking-tight leading-tight mb-12 top-2 z-20">
                                        Are you ready <br /><span>for your next adventure</span>
                                    </h2>
                                    <p className="text-xl">
                                        Challenge beyond borders of knowledge with the best companions and become one of us!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <SupervisorLanding />
            </main>
        </>
    )
}