import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const Create = () => {
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [salary, setSalary] = useState('');
    const [applyLink, setApplyLink] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const data = {
                name,
                description,
                location,
                salary,
                applyLink,
                postTime: new Date().toISOString(),
            };

            const response = await axios.post("https://job-circuler-server.vercel.app/circulers", data);

            if (response.status === 201 || response.status === 200) {
                Swal.fire("Success!", "Job circular submitted!", "success");
                e.target.reset();
                setName('');
                setDescription('');
                setLocation('');
                setSalary('');
                setApplyLink('');
            } else {
                Swal.fire("Error", "Submission failed. Try again!", "error");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            Swal.fire("Error", "Something went wrong!", "error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-700 p-6">
            <div className="bg-gray-800 p-10 rounded-xl shadow-2xl w-full max-w-2xl">
                <h2 className="text-3xl font-bold text-center mb-6 text-white">Post a Job</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name */}
                    <div>
                        <label className="block text-gray-300 font-medium">Job Name</label>
                        <input
                            type="text"
                            className="w-full px-4 py-3 mt-2 border border-gray-600 bg-gray-900 text-white rounded-lg"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-gray-300 font-medium">Description</label>
                        <textarea
                            className="w-full px-4 py-3 mt-2 border border-gray-600 bg-gray-900 text-white rounded-lg"
                            rows="4"
                            required
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                    </div>

                    {/* Location */}
                    <div>
                        <label className="block text-gray-300 font-medium">Location</label>
                        <input
                            type="text"
                            className="w-full px-4 py-3 mt-2 border border-gray-600 bg-gray-900 text-white rounded-lg"
                            required
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </div>

                    {/* Salary */}
                    <div>
                        <label className="block text-gray-300 font-medium">Salary</label>
                        <input
                            type="text"
                            className="w-full px-4 py-3 mt-2 border border-gray-600 bg-gray-900 text-white rounded-lg"
                            required
                            value={salary}
                            onChange={(e) => setSalary(e.target.value)}
                        />
                    </div>

                    {/* Apply Link */}
                    <div>
                        <label className="block text-gray-300 font-medium">Apply Link</label>
                        <input
                            type="text"
                            className="w-full px-4 py-3 mt-2 border border-gray-600 bg-gray-900 text-white rounded-lg"
                            required
                            value={applyLink}
                            onChange={(e) => setApplyLink(e.target.value)}
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-3 bg-gradient-to-r from-black to-orange-700 text-white rounded-lg shadow-md hover:from-orange-700 hover:to-black transition-all duration-300 transform hover:scale-105"
                        disabled={loading}
                    >
                        {loading ? "Submitting..." : "Submit"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Create;