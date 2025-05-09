import React, { useEffect, useState } from 'react';
import axios from 'axios';

const getTimeAgo = (postTime) => {
    const now = new Date();
    const posted = new Date(postTime);
    const diffInSeconds = Math.floor((now - posted) / 1000);

    const minute = 60;
    const hour = 60 * minute;
    const day = 24 * hour;
    const week = 7 * day;
    const month = 30 * day;

    if (diffInSeconds < minute) return `🕒 Posted just now`;
    if (diffInSeconds < hour) return `🕒 Posted ${Math.floor(diffInSeconds / minute)} minute(s) ago`;
    if (diffInSeconds < day) return `🕒 Posted ${Math.floor(diffInSeconds / hour)} hour(s) ago`;
    if (diffInSeconds < week) return `🕒 Posted ${Math.floor(diffInSeconds / day)} day(s) ago`;
    if (diffInSeconds < month) return `🕒 Posted ${Math.floor(diffInSeconds / week)} week(s) ago`;
    return `🕒 Posted ${Math.floor(diffInSeconds / month)} month(s) ago`;
};

const Circulers = () => {
    const [circulers, setCirculers] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        axios.get('https://job-circuler-server.vercel.app/allcirculers')
            .then(res => setCirculers(res.data))
            .catch(err => console.error('Failed to fetch job circulars:', err));
    }, []);

    const displayedCirculers = showAll ? circulers : circulers.slice(0, 6);

    return (
        <div id='book' className="bg-gray-100 py-14 px-4 md:px-12">
            <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10">✨ Latest Job Circulars</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 xl:w-10/12 mx-auto">
                {circulers.length === 0 ? (
                    <p className="text-center text-gray-500 col-span-full text-xl">🚫 No Job Circular  Available</p>
                ) : (
                    displayedCirculers.map((item) => (
                        <div
                            key={item._id}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300 border border-gray-200"
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-52 object-cover"
                            />
                            <div className="p-6 flex flex-col gap-3">
                                <div className="text-sm text-gray-500 italic">{getTimeAgo(item.postTime)}</div>
                                <h2 className="text-2xl font-semibold text-gray-800">{item.name}</h2>
                                <p className="text-gray-600 text-sm line-clamp-3">{item.description}</p>
                                <div className="flex flex-col gap-1 text-gray-700 text-sm">
                                    <span><strong>📍 Location:</strong> {item.location}</span>
                                    <span><strong>💰 Salary:</strong> {item.salary}</span>
                                </div>
                                <a
                                    href={item.applyLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-indigo-600 hover:to-blue-700 text-white font-medium text-center py-2 px-4 rounded-xl shadow-md transition-all duration-300"
                                >
                                    Apply Now
                                </a>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* See More button */}
            {!showAll && circulers.length > 6 && (
                <div className="mt-10 text-center">
                    <button
                        onClick={() => setShowAll(true)}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition duration-300"
                    >
                        See More
                    </button>
                </div>
            )}
        </div>
    );
};

export default Circulers;
