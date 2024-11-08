import React from "react";
import Heading from "../Components/Heading";

const AboutUs = () => {
    return (
        <>
            <div className="bg-color-pirmary text-center pt-10 pb-36 -mt-4">
                <Heading
                    title={"About Us"}
                    subtitle={
                        "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
                    }
                    titleColor="text-white"
                    subtitleColor="text-white/80"
                />
            </div>
        </>
    );
};

export default AboutUs;
