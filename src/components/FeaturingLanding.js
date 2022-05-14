import React from "react";

export default function FeaturingLanding() {
    return (
        <section className="text-gray-800 text-center lg:text-left">
            <div className="px-6 py-12 md:px-12 bg-gray-100">
                <div className="grid lg:grid-cols-2 gap-12 flex items-center">
                    <div className="mt-12 lg:mt-0">
                        <h1 className="text-5xl font-bold tracking-tight leading-tight mb-12">
                            The best offer <br /><span className="text-red-800">for the pioneers</span>
                        </h1>
                        <p className="text-gray-600">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, itaque accusantium
                            odio, soluta, corrupti aliquam quibusdam tempora at cupiditate quis eum maiores
                            libero veritatis? Dicta facilis sint aliquid ipsum atque?
                        </p>
                    </div>
                    <div className="mb-12 lg:mb-0">
                        <div className="flex justify-center">
                            <div className="flex flex-wrap -m-1 md:-m-2 rounded-lg shadow-lg bg-white max-w-sm">
                                <div className="flex flex-wrap w-1/2">
                                    <div className="w-full p-1 md:p-2">
                                        <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                            src="https://pbs.twimg.com/media/E2tMA_aUcAETg54?format=jpg&name=4096x4096" />
                                    </div>
                                </div>
                                <div className="flex flex-wrap w-1/2">
                                    <div className="w-1/2 p-1 md:p-2">
                                        <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                            src="https://pbs.twimg.com/media/E2tMCFuVIAExt7Q?format=jpg&name=4096x4096" />
                                    </div>
                                    <div className="w-1/2 p-1 md:p-2">
                                        <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                            src="https://pbs.twimg.com/media/C-uOLZVV0AMKRBW?format=jpg&name=large" />
                                    </div>
                                    <div className="w-full p-1 md:p-2">
                                        <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                            src="https://pbs.twimg.com/media/E2tMDjxVoAAozm4?format=jpg&name=4096x4096" />
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h5 className="text-gray-900 text-xl font-medium mb-2">Top notch facility waiting ahead</h5>
                                    <p className="text-gray-700 text-base mb-4">
                                        AIS's spacious and modern facility and active group research activities provides you a fresh open academic research experience</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}