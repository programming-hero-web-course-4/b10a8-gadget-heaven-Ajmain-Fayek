import React from "react";
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Scatter,
} from "recharts";

const data = [
    {
        product_title: "iPhone 16",
        availability: "In Stock",
        price: 799,
        rating: 4.9,
    },
    {
        product_title: "iPhone 16 Plus",
        price: 899,
        availability: "In Stock",
        rating: 4.9,
    },
    {
        product_title: "iPhone 16 Pro",
        price: 1099,
        availability: "In Stock",
        rating: 4.9,
    },
    {
        product_title: "iPhone 16 Pro Max",
        price: 1199,
        availability: "In Stock",
        rating: 4.9,
    },
    {
        product_title: "iPhone SE (3rd Gen)",
        price: 399,
        availability: "In Stock",
        rating: 4.7,
    },
    {
        product_title: "iPhone 15",
        price: 699,
        availability: "In Stock",
        rating: 4.8,
    },
    {
        product_title: "iPhone 15 Plus",
        price: 799,
        availability: "In Stock",
        rating: 4.8,
    },
    {
        product_title: "iPhone 14",
        price: 599,
        availability: "Out of Stock",
        rating: 4.7,
    },
    {
        product_title: "iPhone 14 Plus",
        price: 699,
        availability: "In Stock",
        rating: 4.7,
    },
    {
        product_title: "iPhone 13",
        price: 499,
        availability: "In Stock",
        rating: 4.6,
    },
];

export default function Chart() {
    return (
        <ComposedChart
            width={1280}
            height={400}
            data={data}
            margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
            }}
        >
            <CartesianGrid stroke="#eee" />
            <XAxis dataKey="product_title" />
            <YAxis dataKey="price" />
            <Tooltip />
            <Legend />
            <Area
                type="monotone"
                dataKey="price"
                fill="rgba(149, 56, 226, .45)"
                stroke="rgba(149, 56, 226, .45)"
            />
            <Bar dataKey="price" barSize={20} fill="rgb(149, 56, 226)" />
            <Line
                type="monotone"
                dataKey="availability"
                stroke="rgb(149, 56, 226)"
            />
            <Scatter dataKey="rating" fill="red" />
        </ComposedChart>
    );
}
