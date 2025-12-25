"use client";

import { useState, useRef, useTransition } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import { Loader2 } from "lucide-react";
import { submitPrequalification } from "./actions";

// Animation Variants (Consistent with Home & Contact Pages)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Slightly faster stagger for long forms
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

export default function PrequalificationPage() {
  const formRef = useRef(null);
  const [isPending, startTransition] = useTransition();
  const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setStatusMessage({ type: "", text: "" });

    startTransition(async () => {
      const result = await submitPrequalification(formData);

      if (result.success) {
        setStatusMessage({ type: "success", text: result.message });
        formRef.current?.reset();
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setStatusMessage({ type: "error", text: result.message });
      }
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-originalBlue to-black py-12 px-6">
      <motion.div
        className="max-w-6xl mx-auto bg-white/5 border border-gray-700 p-8 rounded-md"
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
            Contractor Qualification Application
          </h1>
          <p className="text-gray-300 text-center mb-8">
            Please fill out the information below and submit the required
            documents. Our concerned team will review your application and get
            back to you with further details.
          </p>
        </motion.div>

        {/* Form Container with Staggered Children */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-10"
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

          {/* 1. Company Information */}
          <motion.section variants={itemVariants}>
            <h2 className="text-xl font-semibold text-white mb-4">
              1. Company Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="companyName"
                placeholder="Legal Company Name*"
                required
                disabled={isPending}
                className="p-3 bg-transparent border border-gray-600 text-white rounded-md focus:border-white focus:outline-none transition-colors disabled:opacity-50"
              />
              <input
                type="text"
                name="dba"
                placeholder="DBA (if applicable)"
                disabled={isPending}
                className="p-3 bg-transparent border border-gray-600 text-white rounded-md focus:border-white focus:outline-none transition-colors disabled:opacity-50"
              />
              <input
                type="text"
                name="address"
                placeholder="Office Address*"
                required
                disabled={isPending}
                className="p-3 bg-transparent border border-gray-600 text-white rounded-md focus:border-white focus:outline-none transition-colors disabled:opacity-50"
              />
              <input
                type="text"
                name="contactPersonTitle"
                placeholder="Contact Person / Title*"
                required
                disabled={isPending}
                className="p-3 bg-transparent border border-gray-600 text-white rounded-md focus:border-white focus:outline-none transition-colors disabled:opacity-50"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone*"
                required
                disabled={isPending}
                className="p-3 bg-transparent border border-gray-600 text-white rounded-md focus:border-white focus:outline-none transition-colors disabled:opacity-50"
              />
              <input
                type="email"
                name="email"
                placeholder="Email*"
                required
                disabled={isPending}
                className="p-3 bg-transparent border border-gray-600 text-white rounded-md focus:border-white focus:outline-none transition-colors disabled:opacity-50"
              />
              <input
                type="text"
                name="workType"
                placeholder="Type of Work Performed*"
                required
                disabled={isPending}
                className="p-3 bg-transparent border border-gray-600 text-white rounded-md focus:border-white focus:outline-none transition-colors disabled:opacity-50"
              />
              <input
                type="text"
                name="yearsBusiness"
                placeholder="Years in Business*"
                required
                disabled={isPending}
                className="p-3 bg-transparent border border-gray-600 text-white rounded-md focus:border-white focus:outline-none transition-colors disabled:opacity-50"
              />
              <input
                type="text"
                name="areasServed"
                placeholder="Geographic Areas Served*"
                disabled={isPending}
                className="p-3 bg-transparent border border-gray-600 text-white rounded-md focus:border-white focus:outline-none transition-colors disabled:opacity-50"
              />
            </div>
          </motion.section>

          {/* 2. Licensing & Certifications */}
          <motion.section variants={itemVariants}>
            <h2 className="text-xl font-semibold text-white mb-4">
              2. Licensing & Certifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="licenseNumbers"
                placeholder="Contractor License Number(s) & State(s)"
                disabled={isPending}
                className="p-3 bg-transparent border border-gray-600 text-white rounded-md focus:border-white focus:outline-none transition-colors disabled:opacity-50"
              />
              <input
                type="text"
                name="licenseExpiration"
                placeholder="Expiration Date"
                disabled={isPending}
                className="p-3 bg-transparent border border-gray-600 text-white rounded-md focus:border-white focus:outline-none transition-colors disabled:opacity-50"
              />
              <input
                type="text"
                name="tradeCertifications"
                placeholder="Trade Certifications"
                disabled={isPending}
                className="p-3 bg-transparent border border-gray-600 text-white rounded-md focus:border-white focus:outline-none transition-colors disabled:opacity-50"
              />
              <input
                type="text"
                name="oshaCertifications"
                placeholder="OSHA Training Certifications"
                disabled={isPending}
                className="p-3 bg-transparent border border-gray-600 text-white rounded-md focus:border-white focus:outline-none transition-colors disabled:opacity-50"
              />
            </div>
          </motion.section>

          {/* 3. Insurance */}
          <motion.section variants={itemVariants}>
            <h2 className="text-xl font-semibold text-white mb-2">
              3. Insurance
            </h2>
            <p className="text-gray-300 mb-4 text-sm">
              Attach current certificates for: General Liability, Workers
              Compensation, Auto Liability, Umbrella.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                name="insuranceCarrier"
                placeholder="Insurance Carrier"
                disabled={isPending}
                className="p-3 bg-transparent border border-gray-600 text-white rounded-md focus:border-white focus:outline-none transition-colors disabled:opacity-50"
              />
              <input
                type="text"
                name="agentContact"
                placeholder="Agent Name / Contact"
                disabled={isPending}
                className="p-3 bg-transparent border border-gray-600 text-white rounded-md focus:border-white focus:outline-none transition-colors disabled:opacity-50"
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-2 text-sm">
                Upload Certificates (Multiple allowed)
              </label>
              <input
                type="file"
                name="insuranceCertificates"
                multiple
                disabled={isPending}
                className="w-full p-3 bg-transparent border border-gray-600 text-white rounded-md file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gray-700 file:text-white hover:file:bg-gray-600 cursor-pointer disabled:opacity-50"
              />
              {/* --- ADDED NOTE --- */}
              <p className="text-xs text-gray-400 mt-2">Max 1MB per file</p>
            </div>
          </motion.section>

          {/* 4. Bonding & Financial */}
          <motion.section variants={itemVariants}>
            <h2 className="text-xl font-semibold text-white mb-4">
              4. Bonding & Financial
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <select
                name="bondable"
                disabled={isPending}
                className="p-3 bg-transparent border border-gray-600 text-white rounded-md focus:border-white focus:outline-none transition-colors disabled:opacity-50"
              >
                <option value="" className="bg-black text-gray-400">
                  Are you bondable?
                </option>
                <option value="Yes" className="bg-black">
                  Yes
                </option>
                <option value="No" className="bg-black">
                  No
                </option>
              </select>
              <input
                type="text"
                name="bondingCompany"
                placeholder="Bonding Company"
                disabled={isPending}
                className="p-3 bg-transparent border border-gray-600 text-white rounded-md focus:border-white focus:outline-none transition-colors disabled:opacity-50"
              />
              <input
                type="text"
                name="singleProjectLimit"
                placeholder="Single Project Limit"
                disabled={isPending}
                className="p-3 bg-transparent border border-gray-600 text-white rounded-md focus:border-white focus:outline-none transition-colors disabled:opacity-50"
              />
              <input
                type="text"
                name="aggregateLimit"
                placeholder="Aggregate Limit"
                disabled={isPending}
                className="p-3 bg-transparent border border-gray-600 text-white rounded-md focus:border-white focus:outline-none transition-colors disabled:opacity-50"
              />
              <input
                type="text"
                name="annualRevenue"
                placeholder="Last Year's Annual Revenue"
                disabled={isPending}
                className="p-3 bg-transparent border border-gray-600 text-white rounded-md focus:border-white focus:outline-none transition-colors disabled:opacity-50"
              />
              <input
                type="text"
                name="avgProjectSize"
                placeholder="Average Project Size"
                disabled={isPending}
                className="p-3 bg-transparent border border-gray-600 text-white rounded-md focus:border-white focus:outline-none transition-colors disabled:opacity-50"
              />
            </div>
          </motion.section>

          {/* 5. Safety */}
          <motion.section variants={itemVariants}>
            <h2 className="text-xl font-semibold text-white mb-4">5. Safety</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                name="emr"
                placeholder="EMR (Experience Modification Rate) for past 3 years"
                disabled={isPending}
                className="p-3 bg-transparent border border-gray-600 text-white rounded-md focus:border-white focus:outline-none transition-colors disabled:opacity-50"
              />
              <input
                type="text"
                name="oshaIncidents"
                placeholder="OSHA Recordable Incidents (last 3 years)"
                disabled={isPending}
                className="p-3 bg-transparent border border-gray-600 text-white rounded-md focus:border-white focus:outline-none transition-colors disabled:opacity-50"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <select
                name="hasSafetyProgram"
                disabled={isPending}
                className="p-3 bg-transparent border border-gray-600 text-white rounded-md focus:border-white focus:outline-none transition-colors disabled:opacity-50"
              >
                <option value="" className="bg-black text-gray-400">
                  Written Safety Program?
                </option>
                <option value="Yes" className="bg-black">
                  Yes
                </option>
                <option value="No" className="bg-black">
                  No
                </option>
              </select>
              <div>
                <label className="block text-gray-400 mb-2 text-sm">
                  Upload Safety Program
                </label>
                <input
                  type="file"
                  name="safetyProgramFile"
                  disabled={isPending}
                  className="w-full p-3 bg-transparent border border-gray-600 text-white rounded-md file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gray-700 file:text-white hover:file:bg-gray-600 cursor-pointer disabled:opacity-50"
                />
                {/* --- ADDED NOTE --- */}
                <p className="text-xs text-gray-400 mt-2">Max 1MB per file</p>
              </div>
            </div>
          </motion.section>

          {/* 6. References */}
          <motion.section variants={itemVariants}>
            <h2 className="text-xl font-semibold text-white mb-2">
              6. References
            </h2>
            <p className="text-gray-300 mb-4 text-sm">
              Provide 3 recent project references (preferably over $100K each).
            </p>
            {/* Reference 1 */}
            <div className="mb-6 p-4 border border-gray-700 rounded-md bg-white/5">
              <h3 className="text-white font-medium mb-3">Reference 1</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="ref1ProjectName"
                  placeholder="Project Name"
                  disabled={isPending}
                  className="p-3 bg-transparent border border-gray-600 text-white rounded-md focus:border-white focus:outline-none"
                />
                <input
                  type="text"
                  name="ref1OwnerGc"
                  placeholder="Owner / GC"
                  disabled={isPending}
                  className="p-3 bg-transparent border border-gray-600 text-white rounded-md focus:border-white focus:outline-none"
                />
                <input
                  type="text"
                  name="ref1Contact"
                  placeholder="Contact"
                  disabled={isPending}
                  className="p-3 bg-transparent border border-gray-600 text-white rounded-md focus:border-white focus:outline-none"
                />
                <input
                  type="text"
                  name="ref1PhoneEmail"
                  placeholder="Phone / Email"
                  disabled={isPending}
                  className="p-3 bg-transparent border border-gray-600 text-white rounded-md focus:border-white focus:outline-none"
                />
                <input
                  type="text"
                  name="ref1ContractValue"
                  placeholder="Contract Value"
                  disabled={isPending}
                  className="p-3 bg-transparent border border-gray-600 text-white rounded-md focus:border-white focus:outline-none"
                />
                <input
                  type="text"
                  name="ref1YearCompleted"
                  placeholder="Year Completed"
                  disabled={isPending}
                  className="p-3 bg-transparent border border-gray-600 text-white rounded-md focus:border-white focus:outline-none"
                />
              </div>
            </div>

            {/* Reference 2 */}
            <div className="mb-6 p-4 border border-gray-700 rounded-md bg-white/5">
              <h3 className="text-white font-medium mb-3">Reference 2</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="ref2ProjectName"
                  placeholder="Project Name"
                  disabled={isPending}
                  className="p-3 bg-transparent border border-gray-600 text-white rounded-md focus:border-white focus:outline-none"
                />
                <input
                  type="text"
                  name="ref2OwnerGc"
                  placeholder="Owner / GC"
                  disabled={isPending}
                  className="p-3 bg-transparent border border-gray-600 text-white rounded-md focus:border-white focus:outline-none"
                />
                <input
                  type="text"
                  name="ref2Contact"
                  placeholder="Contact"
                  disabled={isPending}
                  className="p-3 bg-transparent border border-gray-600 text-white rounded-md focus:border-white focus:outline-none"
                />
                <input
                  type="text"
                  name="ref2PhoneEmail"
                  placeholder="Phone / Email"
                  disabled={isPending}
                  className="p-3 bg-transparent border border-gray-600 text-white rounded-md focus:border-white focus:outline-none"
                />
                <input
                  type="text"
                  name="ref2ContractValue"
                  placeholder="Contract Value"
                  disabled={isPending}
                  className="p-3 bg-transparent border border-gray-600 text-white rounded-md focus:border-white focus:outline-none"
                />
                <input
                  type="text"
                  name="ref2YearCompleted"
                  placeholder="Year Completed"
                  disabled={isPending}
                  className="p-3 bg-transparent border border-gray-600 text-white rounded-md focus:border-white focus:outline-none"
                />
              </div>
            </div>

            {/* Reference 3 */}
            <div className="p-4 border border-gray-700 rounded-md bg-white/5">
              <h3 className="text-white font-medium mb-3">Reference 3</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="ref3ProjectName"
                  placeholder="Project Name"
                  disabled={isPending}
                  className="p-3 bg-transparent border border-gray-600 text-white rounded-md focus:border-white focus:outline-none"
                />
                <input
                  type="text"
                  name="ref3OwnerGc"
                  placeholder="Owner / GC"
                  disabled={isPending}
                  className="p-3 bg-transparent border border-gray-600 text-white rounded-md focus:border-white focus:outline-none"
                />
                <input
                  type="text"
                  name="ref3Contact"
                  placeholder="Contact"
                  disabled={isPending}
                  className="p-3 bg-transparent border border-gray-600 text-white rounded-md focus:border-white focus:outline-none"
                />
                <input
                  type="text"
                  name="ref3PhoneEmail"
                  placeholder="Phone / Email"
                  disabled={isPending}
                  className="p-3 bg-transparent border border-gray-600 text-white rounded-md focus:border-white focus:outline-none"
                />
                <input
                  type="text"
                  name="ref3ContractValue"
                  placeholder="Contract Value"
                  disabled={isPending}
                  className="p-3 bg-transparent border border-gray-600 text-white rounded-md focus:border-white focus:outline-none"
                />
                <input
                  type="text"
                  name="ref3YearCompleted"
                  placeholder="Year Completed"
                  disabled={isPending}
                  className="p-3 bg-transparent border border-gray-600 text-white rounded-md focus:border-white focus:outline-none"
                />
              </div>
            </div>
          </motion.section>

          {/* 7. Key Personnel */}
          <motion.section variants={itemVariants}>
            <h2 className="text-xl font-semibold text-white mb-2">
              7. Key Personnel
            </h2>
            <p className="text-gray-300 mb-4 text-sm">
              List key staff assigned to our projects.
            </p>

            {/* Personnel 1 */}
            <div className="mb-6 p-4 border border-gray-700 rounded-md bg-white/5">
              <h3 className="text-white font-medium mb-3">Staff Member 1</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="kp1Name"
                  placeholder="Name"
                  disabled={isPending}
                  className="p-3 bg-transparent border border-gray-600 text-white rounded-md focus:border-white focus:outline-none"
                />
                <input
                  type="text"
                  name="kp1Title"
                  placeholder="Title"
                  disabled={isPending}
                  className="p-3 bg-transparent border border-gray-600 text-white rounded-md focus:border-white focus:outline-none"
                />
                <input
                  type="text"
                  name="kp1Years"
                  placeholder="Years of Experience"
                  disabled={isPending}
                  className="p-3 bg-transparent border border-gray-600 text-white rounded-md focus:border-white focus:outline-none"
                />
                <input
                  type="text"
                  name="kp1Certs"
                  placeholder="Certifications"
                  disabled={isPending}
                  className="p-3 bg-transparent border border-gray-600 text-white rounded-md focus:border-white focus:outline-none"
                />
              </div>
            </div>

            {/* Personnel 2 */}
            <div className="mb-6 p-4 border border-gray-700 rounded-md bg-white/5">
              <h3 className="text-white font-medium mb-3">Staff Member 2</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="kp2Name"
                  placeholder="Name"
                  disabled={isPending}
                  className="p-3 bg-transparent border border-gray-600 text-white rounded-md focus:border-white focus:outline-none"
                />
                <input
                  type="text"
                  name="kp2Title"
                  placeholder="Title"
                  disabled={isPending}
                  className="p-3 bg-transparent border border-gray-600 text-white rounded-md focus:border-white focus:outline-none"
                />
                <input
                  type="text"
                  name="kp2Years"
                  placeholder="Years of Experience"
                  disabled={isPending}
                  className="p-3 bg-transparent border border-gray-600 text-white rounded-md focus:border-white focus:outline-none"
                />
                <input
                  type="text"
                  name="kp2Certs"
                  placeholder="Certifications"
                  disabled={isPending}
                  className="p-3 bg-transparent border border-gray-600 text-white rounded-md focus:border-white focus:outline-none"
                />
              </div>
            </div>

            {/* Personnel 3 */}
            <div className="p-4 border border-gray-700 rounded-md bg-white/5">
              <h3 className="text-white font-medium mb-3">Staff Member 3</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="kp3Name"
                  placeholder="Name"
                  disabled={isPending}
                  className="p-3 bg-transparent border border-gray-600 text-white rounded-md focus:border-white focus:outline-none"
                />
                <input
                  type="text"
                  name="kp3Title"
                  placeholder="Title"
                  disabled={isPending}
                  className="p-3 bg-transparent border border-gray-600 text-white rounded-md focus:border-white focus:outline-none"
                />
                <input
                  type="text"
                  name="kp3Years"
                  placeholder="Years of Experience"
                  disabled={isPending}
                  className="p-3 bg-transparent border border-gray-600 text-white rounded-md focus:border-white focus:outline-none"
                />
                <input
                  type="text"
                  name="kp3Certs"
                  placeholder="Certifications"
                  disabled={isPending}
                  className="p-3 bg-transparent border border-gray-600 text-white rounded-md focus:border-white focus:outline-none"
                />
              </div>
            </div>
          </motion.section>

          {/* 8. Certification & Signature */}
          <motion.section variants={itemVariants}>
            <h2 className="text-xl font-semibold text-white mb-2">
              8. Certification & Signature
            </h2>
            <p className="text-gray-300 mb-4 text-sm">
              I certify that all information provided is accurate and complete
              to the best of my knowledge.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="signatureName"
                placeholder="Name"
                disabled={isPending}
                className="p-3 bg-transparent border border-gray-600 text-white rounded-md focus:border-white focus:outline-none transition-colors disabled:opacity-50"
              />
              <input
                type="text"
                name="signatureTitle"
                placeholder="Title"
                disabled={isPending}
                className="p-3 bg-transparent border border-gray-600 text-white rounded-md focus:border-white focus:outline-none transition-colors disabled:opacity-50"
              />
              <input
                type="date"
                name="signatureDate"
                disabled={isPending}
                className="p-3 bg-transparent border border-gray-600 text-white rounded-md focus:border-white focus:outline-none transition-colors disabled:opacity-50"
              />
              <div>
                <input
                  type="file"
                  name="signatureFile"
                  disabled={isPending}
                  className="w-full p-3 bg-transparent border border-gray-600 text-white rounded-md file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gray-700 file:text-white hover:file:bg-gray-600 cursor-pointer disabled:opacity-50"
                />
                {/* --- ADDED NOTE --- */}
                <p className="text-xs text-gray-400 mt-2">Max 1MB per file</p>
              </div>
            </div>
          </motion.section>

          {/* Submit */}
          <motion.button
            variants={itemVariants}
            type="submit"
            disabled={isPending}
            className="w-full bg-navbarFocusBlue hover:bg-originalBlue text-white font-semibold py-4 rounded-md transition-all duration-300 shadow-lg hover:shadow-blue-900/20 flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isPending ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                Submitting...
              </>
            ) : (
              "Submit"
            )}
          </motion.button>
        </motion.form>

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
