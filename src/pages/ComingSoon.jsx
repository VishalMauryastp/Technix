import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";

const ComingSoon = () => {
    return (
        <Layout>
            <div className="flex items-center justify-center h-[80vh] w-[80%] mx-auto">
                <div className="text-center">
                    <h1 className="text-4xl text-darkblue mb-4 font-rele font-semibold">Coming <span className="text-blue-800">Soon!</span></h1>
                    <p className="text-gray-500 font-rele font-normal">
                        We're working on something awesome. Stay tuned!
                    </p>
                    <p className="text-2xl mt-4 text-gray-500 font-medium">
                        Return to{" "}
                        <Link to="/">
                            <span className="border-b-2 text-blue-800 border-b-blue-500 font-bold">Home</span>
                        </Link>
                        .
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default ComingSoon;
