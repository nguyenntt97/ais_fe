import React from 'react'
import { DropDownIcon } from './SvgIcons';

export default function LangBtn(props) {
    let cur = props.cur_lang ? props.cur_lang : 0;
    let langs = props.langs
    return (
        <div className="py-2 flex space-x-2 justify-center content-center items-center">
            <div className="dropdown relative align-middle h-fit">
              <button
                className="dropdown-toggle inline-block h-auto px-4 py-1.5 bg-white text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-300 hover:shadow-lg focus:text-white focus:bg-gray-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out flex items-center whitespace-nowrap"
                type="button"
                id="dropdownMenuSmallButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {langs[cur]}
                {DropDownIcon}
              </button>
              <ul className="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none"
                aria-labelledby="dropdownMenuSmallButton"
              >
                  {langs.map(l => (
                      <li>
                      <a
                        className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                        href="#"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
    )
}