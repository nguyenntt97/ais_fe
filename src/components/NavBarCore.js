import React from "react";
import { useNavigate } from "react-router-dom";

export default function NavBarCore() {
    let navigate = useNavigate();

    return (
        <div className="container flex flex-wrap justify-between items-center mx-auto">
            <a href="/" className="flex items-center">
                <img src="https://img.upanh.tv/2022/05/05/unnamed__1_-removebg-preview.png" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                <span className="self-center text-xl text-gray-200 font-semibold whitespace-nowrap dark:text-white">AIS Lab.</span>
            </a>
            <button data-collapse-toggle="mobile-menu" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden hover:text-gray-500 hover:bg-white focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
                <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                    <div className="flex space-x-2 justify-center content-center">
                        <button
                            onClick={() => navigate('/')}
                            type="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                            className="block px-0.5 py-1.5 bg-transparent text-white font-sans font-semibold text-xs leading-tight uppercase md:hover:text-gray-300"
                        >
                            <svg className="w-7 h-7 inline pb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                            &nbsp;Home
                        </button>
                    </div>
                    <div className="flex space-x-2 justify-center content-center">
                        <button
                            onClick={() => navigate('/blog')}
                            type="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                            className="block px-0.5 py-1.5 bg-transparent text-white font-sans font-semibold text-xs leading-tight uppercase md:hover:text-gray-300"
                        >
                            <svg className="w-7 h-7 inline pb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                            &nbsp;Blog
                        </button>
                    </div>
                    <div className="flex space-x-2 justify-center content-center">
                        <button
                            type="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                            className="block px-0.5 py-1.5 bg-transparent text-white font-sans font-semibold text-xs leading-tight md:hover:text-gray-300"
                        >
                            <svg className="w-7 h-7 inline pb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            &nbsp;Research
                        </button>
                    </div>
                    <div className="flex space-x-2 justify-center content-center">
                        <button
                            type="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                            className="block px-0.5 py-1.5 bg-transparent text-white font-sans font-semibold text-xs leading-tight md:hover:text-gray-300"
                        >
                            <svg className="w-7 h-7 inline pb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            &nbsp;About
                        </button>
                    </div>
                    <div className="flex space-x-2 justify-center content-center">
                        <button
                            type="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                            onClick={() => navigate('/admin')}
                            className="block px-0.5 py-1.5 bg-transparent text-white font-sans font-semibold text-xs leading-tight md:hover:text-gray-300"
                        >
                            <svg className="w-7 h-7 inline pb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path></svg>
                            &nbsp;Internal
                        </button>
                    </div>
                    <div className="flex space-x-2 justify-center content-center">
                        <button type="button" className="inline-block px-5 py-0.5 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-white hover:text-gray-500 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                            Apply
                        </button>
                    </div>
                </ul>
            </div>
        </div>
    )
}