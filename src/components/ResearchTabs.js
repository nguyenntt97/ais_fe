import React from "react";
import IndiTopicSection from "./IndiTopicSection";
import NewsSection from "./NewsSection";

const genTabHeader = (tabName, focused) => {
  let tabId = tabName[0].toLowerCase();
  return (
    <li className="nav-item" role="presentation">
      <a
        href={`#tabs-${tabId}`}
        className={`
      nav-link
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
      ${focused ? "active" : ""}`}
        id={`tabs-${tabId}-tab`}
        data-bs-toggle="pill"
        data-bs-target={`#tabs-${tabId}`}
        role="tab"
        aria-controls={`tabs-${tabId}`}
        aria-selected={focused ? "true" : "false"}
      >
        {tabName[1]}
      </a>
    </li>
  );
};

const genTabContent = (tabName, comp, focused) => {
  let tabId = tabName[0].toLowerCase();
  return (
    <div
      className={`tab-pane fade ${focused ? "show active" : ""}`}
      id={`tabs-${tabId}`}
      role="tabpanel"
      aria-labelledby={`tabs-${tabId}-tab`}
    >
      {comp}
    </div>
  );
};

const DEFAULT_HEADERS = [
  ["current", "On-going Topics"],
  ["past", "Past Research"],
];
const DEFAULT_CONTENTS = [
  <>
    <h2 className="text-3xl w-full ml-5 font-bold mt-4 mb-12 text-left text-red-800">
      Individual Research Themes &amp; Projects
    </h2>
    <IndiTopicSection />
  </>,
  <>
    <h2 className="text-3xl font-bold mt-4 mb-12 text-center text-red-800">
      Past Research
    </h2>
    <NewsSection />
  </>,
];
export default function ResearchTabs(props) {
  let headers = props.headers ? props.headers : DEFAULT_HEADERS;
  let contents = props.tabContents ? props.tabContents : DEFAULT_CONTENTS;
  return (
    <>
      <ul
        className="justify-center nav nav-tabs flex flex-col sm:flex-row flex-wrap list-none border-b-0 pl-0 mb-4"
        id="tabs-tab"
        role="tablist"
      >
        {headers.map((h, i) => genTabHeader(h, i === 0))}
      </ul>
      <div className="tab-content p-5" id="tabs-tabContent">
        {contents.map((c, i) => genTabContent(headers[i], c, i === 0))}
      </div>
    </>
  );
}
