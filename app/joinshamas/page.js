"use client";

import { useState, useRef, useTransition } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import { Loader2 } from "lucide-react";
// IMPORT FROM THE SEPARATE FILE
import { submitApplication } from "./actions";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delays between form sections
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function JoinUsPage() {
  const formRef = useRef(null);
  const [isPending, startTransition] = useTransition();
  const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setStatusMessage({ type: "", text: "" });

    startTransition(async () => {
      const result = await submitApplication(formData);

      if (result.success) {
        setStatusMessage({ type: "success", text: result.message });
        formRef.current?.reset();
      } else {
        setStatusMessage({ type: "error", text: result.message });
      }
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-originalBlue to-black py-12 px-6">
      <motion.div
        className="max-w-4xl mx-auto bg-white/5 border border-gray-700 p-8 rounded-md"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-3xl font-bold text-white mb-4 text-center">
            Join Our Team
          </h1>
          <p className="text-gray-300 text-center mb-8">
            We are always looking for talented individuals to help us build the
            future. Fill out the form below to apply.
          </p>
        </motion.div>

        {/* Form Container with Staggered Children */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* --- HONEYPOT FIELD (INVISIBLE) --- */}
          <input
            type="text"
            name="website_url"
            style={{ display: "none" }}
            tabIndex={-1}
            autoComplete="off"
          />

          {/* 1. Applicant Details */}
          <motion.div variants={itemVariants}>
            <h2 className="text-xl font-semibold text-white mb-4">
              1. Applicant Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <input
                type="text"
                name="fullName"
                placeholder="Full Name*"
                required
                disabled={isPending}
                className="p-3 bg-transparent border border-gray-600 text-white rounded-md placeholder-gray-400 focus:outline-none focus:border-white transition-colors disabled:opacity-50"
              />

              {/* Email */}
              <input
                type="email"
                name="email"
                placeholder="Email Address*"
                required
                disabled={isPending}
                className="p-3 bg-transparent border border-gray-600 text-white rounded-md placeholder-gray-400 focus:outline-none focus:border-white transition-colors disabled:opacity-50"
              />

              {/* Location */}
              <input
                type="text"
                name="location"
                placeholder="City, State/Province*"
                required
                disabled={isPending}
                className="p-3 bg-transparent border border-gray-600 text-white rounded-md placeholder-gray-400 focus:outline-none focus:border-white transition-colors disabled:opacity-50"
              />

              {/* Position Dropdown */}
              <select
                name="position"
                required
                disabled={isPending}
                className="p-3 bg-transparent border border-gray-600 text-white rounded-md focus:outline-none focus:border-white transition-colors disabled:opacity-50"
                defaultValue=""
              >
                <option value="" disabled className="bg-black text-gray-400">
                  Select Position*
                </option>
                <option value="Project Manager" className="bg-black">
                  Project Manager
                </option>
                <option value="Assistant Project Manager" className="bg-black">
                  Assistant Project Manager
                </option>
                <option value="Site Supervisor" className="bg-black">
                  Site Supervisor
                </option>
              </select>

              {/* Experience Dropdown */}
              <select
                name="experienceLevel"
                required
                disabled={isPending}
                className="p-3 bg-transparent border border-gray-600 text-white rounded-md focus:outline-none focus:border-white transition-colors md:col-span-2 disabled:opacity-50"
                defaultValue=""
              >
                <option value="" disabled className="bg-black text-gray-400">
                  Years of Experience*
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
            </div>
          </motion.div>

          {/* 2. Resume Upload */}
          <motion.div variants={itemVariants}>
            <h2 className="text-xl font-semibold text-white mb-2">
              2. Upload Resume/CV
            </h2>
            <p className="text-gray-400 text-sm mb-4">
              Please upload your updated CV in PDF or DOCX format.
            </p>
            <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              required
              disabled={isPending}
              className="w-full p-3 bg-transparent border border-gray-600 text-white rounded-md file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gray-700 file:text-white hover:file:bg-gray-600 cursor-pointer disabled:opacity-50"
            />
            {/* --- ADDED NOTE --- */}
            <p className="text-xs text-gray-400 mt-2">Max 1MB per file</p>
          </motion.div>

          {/* 3. Cover Letter */}
          <motion.div variants={itemVariants}>
            <h2 className="text-xl font-semibold text-white mb-4">
              3. Cover Letter
            </h2>
            <textarea
              name="coverLetter"
              rows="5"
              disabled={isPending}
              placeholder="Tell us why you want to join our team and what makes you a good fit..."
              className="w-full p-3 bg-transparent border border-gray-600 text-white rounded-md placeholder-gray-400 focus:outline-none focus:border-white transition-colors resize-y disabled:opacity-50"
            ></textarea>
          </motion.div>

          {/* Submit Button */}
          <motion.button
            variants={itemVariants}
            type="submit"
            disabled={isPending}
            className="w-full bg-navbarFocusBlue hover:bg-originalBlue text-white font-bold py-4 rounded-md transition-all duration-300 shadow-lg hover:shadow-blue-900/20 flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isPending ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                Submitting...
              </>
            ) : (
              "Submit Application"
            )}
          </motion.button>
        </motion.form>

        {/* Status Message Display */}
        {statusMessage.text && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`mt-6 p-4 rounded-md text-center font-medium ${
              statusMessage.type === "error"
                ? "bg-red-900/30 border border-red-600 text-red-400"
                : "bg-green-900/30 border border-green-600 text-green-400"
            }`}
          >
            {statusMessage.text}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
