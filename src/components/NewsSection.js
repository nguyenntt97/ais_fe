import React from "react";
import Query from "./Query";

import NEWS_QUERY from "../queries/news/news";
import { getFullPath } from "../utils/my_utils";

const SAMPLES = [
  {
    title: "ＳＩ２０２１で２つの賞を受賞",
    summary:
      "院生の久郷君と高橋君がSI2021で発表した論文で優秀講演賞を受賞しました。",
    time: "3 mins ago",
    img: "https://i0.wp.com/www.aislab.org/wp-content/uploads/2022/03/1646016508784.jpg?resize=768%2C576",
  },
  {
    title: "博士学位取得",
    summary: "2021年10月2日にMiran LEEさんが博士号を取得しました！",
    time: "3 hours ago",
    img: "https://i2.wp.com/www.aislab.org/wp-content/uploads/2022/03/20211002_112821.jpg?resize=768%2C576",
  },
  {
    title: "ＳＩ２０２１で２つの賞を受賞",
    summary:
      "院生の久郷君と高橋君がSI2021で発表した論文で優秀講演賞を受賞しました。",
    time: "3 mins ago",
    img: "https://i0.wp.com/www.aislab.org/wp-content/uploads/2022/03/1646016508784.jpg?resize=768%2C576",
  },
  {
    title: "博士学位取得",
    summary: "2021年10月2日にMiran LEEさんが博士号を取得しました！",
    time: "3 hours ago",
    img: "https://i2.wp.com/www.aislab.org/wp-content/uploads/2022/03/20211002_112821.jpg?resize=768%2C576",
  },
  {
    title: "ＳＩ２０２１で２つの賞を受賞",
    summary:
      "院生の久郷君と高橋君がSI2021で発表した論文で優秀講演賞を受賞しました。",
    time: "3 mins ago",
    img: "https://i0.wp.com/www.aislab.org/wp-content/uploads/2022/03/1646016508784.jpg?resize=768%2C576",
  },
  {
    title: "博士学位取得",
    summary: "2021年10月2日にMiran LEEさんが博士号を取得しました！",
    time: "3 hours ago",
    img: "https://i2.wp.com/www.aislab.org/wp-content/uploads/2022/03/20211002_112821.jpg?resize=768%2C576",
  },
  {
    title: "ＳＩ２０２１で２つの賞を受賞",
    summary:
      "院生の久郷君と高橋君がSI2021で発表した論文で優秀講演賞を受賞しました。",
    time: "3 mins ago",
    img: "https://i0.wp.com/www.aislab.org/wp-content/uploads/2022/03/1646016508784.jpg?resize=768%2C576",
  },
  {
    title: "博士学位取得",
    summary: "2021年10月2日にMiran LEEさんが博士号を取得しました！",
    time: "3 hours ago",
    img: "https://i2.wp.com/www.aislab.org/wp-content/uploads/2022/03/20211002_112821.jpg?resize=768%2C576",
  },
];

const genNewsItem = ({ data: { newsArticles } }) => {
  return newsArticles.data.map((a) => {
    let title = a.attributes.title;
    let summary = a.attributes.summary;
    let cover = a.attributes.thumbnail
      ? a.attributes.thumbnail.data.attributes.url
      : null;

    return (
      <div className="flex justify-center mb-5 group">
        <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white drop-shadow-md hover:drop-shadow-xl w-full transition duration-300 ease-in-out">
          <div className="overflow-hidden w-full h-64 md:w-56 md:h-64 md:rounded-l-lg lg:w-64 lg:h-42">
            <img
              className="w-full h-full object-cover object-top group-hover:scale-125 drop-shadow-lg transition duration-300 ease-in-out"
              src={getFullPath(cover)}
              alt=""
            />
          </div>
          <div className="py-2 px-5 flex flex-col justify-start w-full">
            <div className="w-auto h-32 md:w-auto md:h-40 lg:w-auto lg:h-40">
              <h3 className="text-left text-gray-900 font-semibold text-lg mb-2">
                {title}
              </h3>
              <p className=" text-left text-gray-700 mb-4">{summary}</p>
              <p className="text-left text-gray-600 text-xs">3 mins ago</p>
            </div>
            <div className="w-full flex justify-left mt-5 mb-2">
              <button
                type="button"
                className="mr-auto px-6 py-2 border-2 border-blue-600 bg-blue-600 text-white font-bold text-xs leading-tight uppercase rounded hover:bg-blue-200 hover:text-blue-600 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              >
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  });
};

const SAMPLES_GRAPH = {
  data: {
    newsArticles: {
      data: [
        {
          attributes: {
            slug: "2-si-2021",
            title: "SI2021で優秀講演賞を2名受賞",
            summary:
              "院生の久郷君と高橋君がSI2021で発表した論文で優秀講演賞を受賞しました。\n\n",
            public_thumbnail:
              "https://i0.wp.com/www.aislab.org/wp-content/uploads/2022/03/1646016508784.jpg",
          },
        },
        {
          attributes: {
            slug: "dnn",
            title: "DNNと歩行の調査論文掲載が決定",
            summary:
              "松下由女さんのサーベイ論文がOxford Academy社のJournal of Computational Design and Engineeringに掲載されました",
            public_thumbnail:
              "https://i.ytimg.com/vi/irilfp5h72M/maxresdefault.jpg",
          },
        },
      ],
    },
  },
};

export default function NewsSection() {
  return (
    <div className="grid lg:grid-cols-2 gap-4 xl:gap-x-10 mx-5">
      {/* {SAMPLES.map((p) => {
        return (
          <div className="flex justify-center mb-5 group">
            <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white drop-shadow-md hover:drop-shadow-xl w-full transition duration-300 ease-in-out">
              <div className="overflow-hidden w-full h-64 md:w-56 md:h-64 md:rounded-l-lg lg:w-64 lg:h-42">
                <img
                  className="w-full h-full object-cover object-top group-hover:scale-125 drop-shadow-lg transition duration-300 ease-in-out"
                  src={p.img}
                  alt=""
                />
              </div>
              <div className="py-2 px-5 flex flex-col justify-start w-full">
                <div className="w-auto h-32 md:w-auto md:h-40 lg:w-auto lg:h-40">
                  <h3 className="text-left text-gray-900 font-semibold text-lg mb-2">
                    {p.title}
                  </h3>
                  <p className=" text-left text-gray-700 mb-4">{p.summary}</p>
                  <p className="text-left text-gray-600 text-xs">3 mins ago</p>
                </div>
                <div className="w-full flex justify-left mt-5 mb-2">
                  <button
                    type="button"
                    className="mr-auto px-6 py-2 border-2 border-blue-600 bg-blue-600 text-white font-bold text-xs leading-tight uppercase rounded hover:bg-blue-200 hover:text-blue-600 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  >
                    Read more
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })} */}

      <Query query={NEWS_QUERY} id={null}>
        {({ data: { newsArticles } }) => {
          return newsArticles.data.map((a) => {
            let title = a.attributes.title;
            let summary = a.attributes.summary;
            let public_cover = a.attributes.public_thumbnail;
            let cover = a.attributes.thumbnail
              ? a.attributes.thumbnail.data.attributes.url
              : null;

            return (
              <div className="flex justify-center mb-5 group">
                <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white drop-shadow-md hover:drop-shadow-xl w-full transition duration-300 ease-in-out">
                  <div className="overflow-hidden w-full h-64 md:w-56 md:h-64 md:rounded-l-lg lg:w-64 lg:h-42">
                    <img
                      className="w-full h-full object-cover object-top group-hover:scale-125 drop-shadow-lg transition duration-300 ease-in-out"
                      src={public_cover ? public_cover : getFullPath(cover)}
                      alt=""
                    />
                  </div>
                  <div className="py-2 px-5 flex flex-col justify-start w-full">
                    <div className="w-auto h-32 md:w-auto md:h-40 lg:w-auto lg:h-40">
                      <h3 className="text-left text-gray-900 font-semibold text-lg mb-2">
                        {title}
                      </h3>
                      <p className=" text-left text-gray-700 mb-4">{summary}</p>
                      <p className="text-left text-gray-600 text-xs">
                        3 mins ago
                      </p>
                    </div>
                    <div className="w-full flex justify-left mt-5 mb-2">
                      <button
                        type="button"
                        className="mr-auto px-6 py-2 border-2 border-blue-600 bg-blue-600 text-white font-bold text-xs leading-tight uppercase rounded hover:bg-blue-200 hover:text-blue-600 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                      >
                        Read more
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          });
        }}
      </Query>
    </div>
  );
}
