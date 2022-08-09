import React from "react";
import Query from "./Query";

import TOPICS_QUERY from "../queries/topics/research_topics";
import { getFullPath } from "../utils/my_utils";

const genItem = ({ data: { newsArticles } }) => {
  console.log(newsArticles);
  return newsArticles.data.map((a) => {
    let title = a.attributes.title;
    let summary = a.attributes.summary;
    let public_cover = a.attributes.public_thumbnail;
    let cover = a.attributes.thumbnail
      ? a.attributes.thumbnail.data.attributes.url
      : null;

    return (
      <div className="flex justify-center mb-5 group">
        <div className="flex flex-col md:max-w-xl rounded-lg bg-white drop-shadow-md hover:drop-shadow-xl w-full">
          <div className="overflow-hidden w-full h-64 md:rounded-l-lg">
            <img
              className="w-full h-full object-cover object-top drop-shadow-lg"
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
            </div>
            <div className="w-full flex justify-left mt-5 mb-2">
              <button
                type="button"
                className="mr-auto px-6 py-2 border-2 border-blue-600 bg-white text-blue-600 font-bold leading-tight rounded hover:bg-blue-200 hover:text-blue-600 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default function IndiTopicSection() {
  return (
    <div className="grid lg:grid-cols-3 gap-n   xl:gap-x-10 mx-5">
      <Query query={TOPICS_QUERY} id={null}>
        {genItem}
      </Query>
    </div>
  );
}
