import React from "react";
import Heading from "../Components/Heading";
import Chart from "../Components/Chart";

const Statistics = () => {
    return (
        <>
            <div className="bg-color-pirmary text-center pt-6 pb-2 -mt-4">
                <Heading
                    title={"Statistics"}
                    subtitle={
                        "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
                    }
                    titleColor="text-white"
                    subtitleColor="text-white/80"
                />
            </div>
            <div className="max-w-screen-2xl mx-auto px-2 sm:px-6 md:px-10 lg:px-28 mt-8 space-y-10">
                <p className="font-bold sm:text-xl">Statistics</p>
                <div className="mx-auto text-center overflow-x-scroll bg-white px-4 py-6 rounded-2xl">
                    <Chart />
                </div>
            </div>
        </>
    );
};

export default Statistics;
