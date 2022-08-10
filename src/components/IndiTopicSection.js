import React from "react";
import Query from "./Query";

import TOPICS_QUERY from "../queries/topics/research_topics";
import { getFullPath } from "../utils/my_utils";

const genItem = ({ data: { researchTopics } }) => {
  console.log(researchTopics);
  return researchTopics.data.map((a) => {
    let title = a.attributes.title;
    let summary = a.attributes.summary;
    let public_cover = a.attributes.public_thumbnail;
    let cover = a.attributes.thumbnail
      ? a.attributes.thumbnail.data.attributes.url
      : null;

    return (
      <div className="flex justify-center mb-5 group">
        <div className="flex flex-col md:max-w-xl rounded-lg bg-white drop-shadow-md hover:drop-shadow-lg w-full">
          <div className="overflow-hidden w-full h-64 md:rounded-l-lg">
            <img
              className="w-full h-full object-cover object-top transition duration-200 ease-out drop-shadow-lg group-hover:scale-125"
              src={public_cover ? public_cover : getFullPath(cover)}
              alt=""
            />
          </div>
          <div className="py-2 px-5 flex flex-col justify-start w-full">
            <div className="w-auto h-32 md:w-auto md:h-40 lg:w-auto lg:h-40 mt-5">
              <h3 className="text-left text-gray-900 font-semibold text-lg mb-2">
                {title}
              </h3>
              <p className=" text-left text-gray-700 mb-4">{summary}</p>
            </div>
            <div className="w-full flex justify-left mt-5 py-5 border-t-2 border-dotted border-gray-300">
              <a
                href="#read"
                className="text-lg font-bold text-blue-700 box-border border-transparent border-b-2 hover:border-blue-500 border-dotted"
              >
                Read more →
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default function IndiTopicSection() {
  return (
    <div className="grid md:grid-cols-2 md:gap-x-8 lg:grid-cols-3 xl:gap-x-10 xl:grid-cols-4 gap-n  mx-5">
      <Query query={TOPICS_QUERY} id={null}>
        {genItem}
      </Query>
    </div>
  );
}
