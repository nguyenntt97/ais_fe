import React from "react";
import CustomTabs from "../components/CustomTabs";
import NavBar from "../components/NavBar";
import NewsSection from "../components/NewsSection";

const SAMPLES = [
    {
        title: "ＳＩ２０２１で２つの賞を受賞",
        summary: "院生の久郷君と高橋君がSI2021で発表した論文で優秀講演賞を受賞しました。",
        time: "3 mins ago",
        img: "https://i0.wp.com/www.aislab.org/wp-content/uploads/2022/03/1646016508784.jpg?resize=768%2C576"
    },
    {
        title: "博士学位取得",
        summary: "2021年10月2日にMiran LEEさんが博士号を取得しました！",
        time: "3 hours ago",
        img: "https://i2.wp.com/www.aislab.org/wp-content/uploads/2022/03/20211002_112821.jpg?resize=768%2C576"
    },
    {
        title: "ＳＩ２０２１で２つの賞を受賞",
        summary: "院生の久郷君と高橋君がSI2021で発表した論文で優秀講演賞を受賞しました。",
        time: "3 mins ago",
        img: "https://i0.wp.com/www.aislab.org/wp-content/uploads/2022/03/1646016508784.jpg?resize=768%2C576"
    },
    {
        title: "博士学位取得",
        summary: "2021年10月2日にMiran LEEさんが博士号を取得しました！",
        time: "3 hours ago",
        img: "https://i2.wp.com/www.aislab.org/wp-content/uploads/2022/03/20211002_112821.jpg?resize=768%2C576"
    },
    {
        title: "ＳＩ２０２１で２つの賞を受賞",
        summary: "院生の久郷君と高橋君がSI2021で発表した論文で優秀講演賞を受賞しました。",
        time: "3 mins ago",
        img: "https://i0.wp.com/www.aislab.org/wp-content/uploads/2022/03/1646016508784.jpg?resize=768%2C576"
    },
    {
        title: "博士学位取得",
        summary: "2021年10月2日にMiran LEEさんが博士号を取得しました！",
        time: "3 hours ago",
        img: "https://i2.wp.com/www.aislab.org/wp-content/uploads/2022/03/20211002_112821.jpg?resize=768%2C576"
    },
    {
        title: "ＳＩ２０２１で２つの賞を受賞",
        summary: "院生の久郷君と高橋君がSI2021で発表した論文で優秀講演賞を受賞しました。",
        time: "3 mins ago",
        img: "https://i0.wp.com/www.aislab.org/wp-content/uploads/2022/03/1646016508784.jpg?resize=768%2C576"
    },
    {
        title: "博士学位取得",
        summary: "2021年10月2日にMiran LEEさんが博士号を取得しました！",
        time: "3 hours ago",
        img: "https://i2.wp.com/www.aislab.org/wp-content/uploads/2022/03/20211002_112821.jpg?resize=768%2C576"
    }
]

export default function Blog() {
    return (
        <>
            <div className="absolute w-full z-20">
                <NavBar />
            </div>
            <main>
                <div id="carouselExampleCaptions" className="carousel slide relative" data-bs-ride="carousel">
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
    )
}