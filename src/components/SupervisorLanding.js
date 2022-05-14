import React from "react";

export default function SupervisorLanding() {
    return (
        <section className="mb-32 text-gray-800 text-center">
            <h2 className="text-3xl font-bold mb-32">Meet our <u className="text-red-800">supervisors</u></h2>

            <div className="grid md:gap-x-6 lg:gap-x-12 md:grid-cols-2 mx-8 md:mx-40">
                <div className="mb-24 md:mb-0">
                    <div className="rounded-lg shadow-lg h-full block bg-white">
                        <div className="flex justify-center">
                            <div className="flex justify-center">
                                <img src="https://img.upanh.tv/2022/05/05/list_31joo-ho-min.jpg"
                                    className="rounded-full mx-auto shadow-lg -mt-8 w-40" alt="" />
                            </div>
                        </div>
                        <div className="p-6">
                            <h5 className="text-lg font-bold mb-4"><span className="text-red-800">Prof.</span> LEE Jooho</h5>
                            <p className="mb-6">Professor</p>
                            <p className="mb-6"></p>
                            <ul className="list-inside flex mx-auto justify-center flex-wrap">
                                <span
                                    className="text-xs inline-block m-1 py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-800 text-white rounded">
                                    Robotics
                                </span>
                                <span
                                    className="text-xs inline-block m-1 py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-800 text-white rounded">
                                    Computer Vision
                                </span>
                                <span
                                    className="text-xs inline-block m-1 py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-800 text-white rounded">
                                    ML
                                </span>
                                <span
                                    className="text-xs inline-block m-1 py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-800 text-white rounded">
                                    Human Interface
                                </span>
                                <span
                                    className="text-xs inline-block m-1 py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-800 text-white rounded">
                                    VR/AR
                                </span>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mb-24 md:mb-0">
                    <div className="rounded-lg shadow-lg h-full block bg-white">
                        <div className="flex justify-center">
                            <div className="flex justify-center">
                                <img
                                    src="https://img.upanh.tv/2022/05/05/list_125tran-min.jpg"
                                    className="rounded-full mx-auto shadow-lg -mt-8 w-40" alt="" />
                            </div>
                        </div>
                        <div className="p-6">
                            <h5 className="text-lg font-bold mb-4"><span className="text-red-800">Prof.</span> TRAN Dinh Tuan</h5>
                            <p className="mb-6">Assistant Professor</p>
                            <ul className="list-inside flex mx-auto justify-center flex-wrap">
                                <span
                                    className="text-xs inline-block m-1 py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-800 text-white rounded">
                                    Computer Vision
                                </span>
                                <span
                                    className="text-xs inline-block m-1 py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-800 text-white rounded">
                                    ML
                                </span>
                                <span
                                    className="text-xs inline-block m-1 py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-800 text-white rounded">
                                    Robotics
                                </span>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}