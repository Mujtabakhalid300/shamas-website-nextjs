"use client";
import { useState, useRef } from "react";

export default function JoinUsPage() {
  const formRef = useRef(null);
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    // Debugging: Console log the file object to ensure it captures
    // const cvFile = formData.get('resume');
    // console.log(cvFile);

    // TODO: Connect this to your backend API to upload the file and data
    setStatusMessage(
      "Application submitted successfully! Our HR team will review your profile and contact you shortly."
    );
    formRef.current?.reset();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-originalBlue to-black py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white/5 border border-gray-700 p-8 rounded-md">
        <h1 className="text-3xl font-bold text-white mb-4 text-center">
          Join Our Team
        </h1>
        <p className="text-gray-300 text-center mb-8">
          We are always looking for talented individuals to help us build the
          future. Fill out the form below and attach your CV to apply.
        </p>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
          {/* 1. Personal Details */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">
              1. Personal Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name*"
                required
                className="p-3 bg-transparent border border-gray-600 text-white rounded-md placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address*"
                required
                className="p-3 bg-transparent border border-gray-600 text-white rounded-md placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number*"
                required
                className="p-3 bg-transparent border border-gray-600 text-white rounded-md placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
              />
              <input
                type="text"
                name="location"
                placeholder="City, State/Province"
                className="p-3 bg-transparent border border-gray-600 text-white rounded-md placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
              />
            </div>
          </div>

          {/* 2. Professional Info */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">
              2. Professional Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="position"
                placeholder="Position Applied For*"
                required
                className="p-3 bg-transparent border border-gray-600 text-white rounded-md placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
              />
              <select
                name="experienceLevel"
                className="p-3 bg-transparent border border-gray-600 text-white rounded-md focus:outline-none focus:border-white transition-colors"
                defaultValue=""
              >
                <option value="" disabled className="bg-black text-gray-400">
                  Years of Experience
                </option>
                <option value="entry" className="bg-black">
                  Entry Level (0-2 years)
                </option>
                <option value="mid" className="bg-black">
                  Mid Level (3-5 years)
                </option>
                <option value="senior" className="bg-black">
                  Senior Level (5+ years)
                </option>
                <option value="lead" className="bg-black">
                  Lead / Manager
                </option>
              </select>
              <input
                type="url"
                name="linkedin"
                placeholder="LinkedIn Profile URL"
                className="p-3 bg-transparent border border-gray-600 text-white rounded-md placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
              />
              <input
                type="url"
                name="portfolio"
                placeholder="Portfolio"
                className="p-3 bg-transparent border border-gray-600 text-white rounded-md placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
              />
            </div>
          </div>

          {/* 3. Resume / CV Upload */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              3. Upload Resume/CV
            </h2>
            <p className="text-gray-400 text-sm mb-4">
              Please upload your updated CV in PDF or DOCX format.
            </p>
            <div className="relative">
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                required
                className="w-full p-3 bg-transparent border border-gray-600 text-white rounded-md file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gray-700 file:text-white hover:file:bg-gray-600 cursor-pointer"
              />
            </div>
          </div>

          {/* 4. Cover Letter */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">
              4. Cover Letter
            </h2>
            <textarea
              name="coverLetter"
              rows="5"
              placeholder="Tell us why you want to join our team and what makes you a good fit..."
              className="w-full p-3 bg-transparent border border-gray-600 text-white rounded-md placeholder-gray-400 focus:outline-none focus:border-white transition-colors resize-y"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-navbarFocusBlue hover:bg-originalBlue text-white font-bold py-4 rounded-md transition-all duration-300 shadow-lg hover:shadow-blue-900/20"
          >
            Submit Application
          </button>
        </form>

        {statusMessage && (
          <div className="mt-6 p-4 bg-green-900/30 border border-green-600 text-green-400 rounded-md text-center">
            {statusMessage}
          </div>
        )}
      </div>
    </div>
  );
}
