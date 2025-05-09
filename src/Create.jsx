import React, { useState } from "react";
import { FaFileImage } from "react-icons/fa";
import axios from "axios";
import Swal from "sweetalert2";
import { imageUpload } from "./Utility";

const Create = () => {
    const [uploadButtonText, setUploadButtonText] = useState("Upload Image");
    const [loading, setLoading] = useState(false);
    const [imageURL, setImageURL] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [salary, setSalary] = useState('');
    const [applyLink, setApplyLink] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const imageFile = e.target.image.files[0];
        if (!imageFile) {
            Swal.fire("Error", "Please select an image!", "error");
            setLoading(false);
            return;
        }

        try {
            const uploadedImageURL = await imageUpload(imageFile);

            const data = {
                image: uploadedImageURL,
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
                setUploadButtonText("Upload Image");
                setImageURL('');
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
                    {/* Image Upload */}
                    <div className="flex flex-col items-center">
                        <label className="cursor-pointer flex flex-col items-center text-gray-400 hover:text-white transition">
                            <FaFileImage className="text-6xl" />
                            <span className="mt-2">{uploadButtonText}</span>
                            <input
                                type="file"
                                name="image"
                                accept="image/*"
                                className="hidden"
                                onChange={(e) => {
                                    const file = e.target.files[0];
                                    if (file) {
                                        setUploadButtonText(file.name);
                                        const objectURL = URL.createObjectURL(file);
                                        setImageURL(objectURL);
                                    } else {
                                        setUploadButtonText("Upload Image");
                                        setImageURL('');
                                    }
                                }}
                            />
                        </label>
                        {imageURL && (
                            <div className="mt-4">
                                <img src={imageURL} alt="Preview" className="w-32 h-32 object-cover rounded-lg" />
                            </div>
                        )}
                    </div>

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
                        disabled={loading || !imageURL}
                    >
                        {loading ? "Submitting..." : "Submit"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Create;
