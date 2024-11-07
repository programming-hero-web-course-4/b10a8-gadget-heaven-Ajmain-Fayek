import React from "react";

const Heading = ({
    title,
    subtitle,
    titleColor = "text-gray-900",
    subtitleColor = "text-gray-500",
}) => {
    return (
        <div className="text-center p-4 space-y-2">
            <p className={`font-bold text-2xl lg:text-4xl ${titleColor}`}>
                {title}
            </p>
            <p className={`text-sm md:text-base max-w-screen-md mx-auto ${subtitleColor}`}>
                {subtitle}
            </p>
        </div>
    );
};

export default Heading;
