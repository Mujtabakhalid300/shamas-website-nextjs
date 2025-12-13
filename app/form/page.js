"use client";
import { useState, useRef } from "react";

export default function PrequalificationPage() {
  const formRef = useRef(null);
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // TODO: send formData to backend/email service
    setStatusMessage(
      "Form submitted successfully. Our concerned team will get back to you with details."
    );
    formRef.current?.reset();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-originalBlue to-black py-12 px-6">
      <div className="max-w-6xl mx-auto bg-white/5 border border-gray-700 p-8 rounded-md">
        <h1 className="text-3xl font-bold text-white mb-4 text-center">
          Contractor Qualification Application
        </h1>
        <p className="text-gray-300 text-center mb-8">
          Please fill out the information below and submit the required
          documents. Our concerned team will review your application and get
          back to you with further details.
        </p>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-10">
          {/* 1. Company Information */}
          <h2 className="text-xl font-semibold text-white">
            1. Company Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="companyName"
              placeholder="Legal Company Name*"
              required
              className="p-3 bg-transparent border border-gray-600 text-white rounded-md"
            />
            <input
              type="text"
              name="dba"
              placeholder="DBA (if applicable)"
              className="p-3 bg-transparent border border-gray-600 text-white rounded-md"
            />
            <input
              type="text"
              name="address"
              placeholder="Office Address*"
              required
              className="p-3 bg-transparent border border-gray-600 text-white rounded-md"
            />
            <input
              type="text"
              name="contactPersonTitle"
              placeholder="Contact Person / Title*"
              required
              className="p-3 bg-transparent border border-gray-600 text-white rounded-md"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone*"
              required
              className="p-3 bg-transparent border border-gray-600 text-white rounded-md"
            />
            <input
              type="email"
              name="email"
              placeholder="Email*"
              required
              className="p-3 bg-transparent border border-gray-600 text-white rounded-md"
            />
            <input
              type="text"
              name="workType"
              placeholder="Type of Work Performed*"
              required
              className="p-3 bg-transparent border border-gray-600 text-white rounded-md"
            />
            <input
              type="text"
              name="yearsBusiness"
              placeholder="Years in Business*"
              required
              className="p-3 bg-transparent border border-gray-600 text-white rounded-md"
            />
            <input
              type="text"
              name="areasServed"
              placeholder="Geographic Areas Served*"
              className="p-3 bg-transparent border border-gray-600 text-white rounded-md"
            />
          </div>

          {/* 2. Licensing & Certifications */}
          <h2 className="text-xl font-semibold text-white">
            2. Licensing & Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="licenseNumbers"
              placeholder="Contractor License Number(s) & State(s)"
              className="p-3 bg-transparent border border-gray-600 text-white rounded-md"
            />
            <input
              type="text"
              name="licenseExpiration"
              placeholder="Expiration Date"
              className="p-3 bg-transparent border border-gray-600 text-white rounded-md"
            />
            <input
              type="text"
              name="tradeCertifications"
              placeholder="Trade Certifications"
              className="p-3 bg-transparent border border-gray-600 text-white rounded-md"
            />
            <input
              type="text"
              name="oshaCertifications"
              placeholder="OSHA Training Certifications"
              className="p-3 bg-transparent border border-gray-600 text-white rounded-md"
            />
          </div>

          {/* 3. Insurance */}
          <h2 className="text-xl font-semibold text-white">3. Insurance</h2>
          <p className="text-gray-300 mb-2">
            Attach current certificates for: General Liability, Workers
            Compensation, Auto Liability, Umbrella.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="insuranceCarrier"
              placeholder="Insurance Carrier"
              className="p-3 bg-transparent border border-gray-600 text-white rounded-md"
            />
            <input
              type="text"
              name="agentContact"
              placeholder="Agent Name / Contact"
              className="p-3 bg-transparent border border-gray-600 text-white rounded-md"
            />
          </div>
          <input
            type="file"
            name="insuranceCertificates"
            multiple
            className="w-full p-3 bg-transparent border border-gray-600 text-white rounded-md"
          />

          {/* 4. Bonding & Financial */}
          <h2 className="text-xl font-semibold text-white">
            4. Bonding & Financial
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <select
              name="bondable"
              className="p-3 bg-transparent border border-gray-600 text-white rounded-md"
            >
              <option value="" className="bg-black">
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
              className="p-3 bg-transparent border border-gray-600 text-white rounded-md"
            />
            <input
              type="text"
              name="singleProjectLimit"
              placeholder="Single Project Limit"
              className="p-3 bg-transparent border border-gray-600 text-white rounded-md"
            />
            <input
              type="text"
              name="aggregateLimit"
              placeholder="Aggregate Limit"
              className="p-3 bg-transparent border border-gray-600 text-white rounded-md"
            />
            <input
              type="text"
              name="annualRevenue"
              placeholder="Last Year's Annual Revenue"
              className="p-3 bg-transparent border border-gray-600 text-white rounded-md"
            />
            <input
              type="text"
              name="avgProjectSize"
              placeholder="Average Project Size"
              className="p-3 bg-transparent border border-gray-600 text-white rounded-md"
            />
          </div>

          {/* 5. Safety */}
          <h2 className="text-xl font-semibold text-white">5. Safety</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="emr"
              placeholder="EMR (Experience Modification Rate) for past 3 years"
              className="p-3 bg-transparent border border-gray-600 text-white rounded-md"
            />
            <input
              type="text"
              name="oshaIncidents"
              placeholder="OSHA Recordable Incidents (last 3 years)"
              className="p-3 bg-transparent border border-gray-600 text-white rounded-md"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <select
              name="hasSafetyProgram"
              className="p-3 bg-transparent border border-gray-600 text-white rounded-md"
            >
              <option value="" className="bg-black">
                Written Safety Program?
              </option>
              <option value="Yes" className="bg-black">
                Yes
              </option>
              <option value="No" className="bg-black">
                No
              </option>
            </select>
            <input
              type="file"
              name="safetyProgramFile"
              className="p-3 bg-transparent border border-gray-600 text-white rounded-md"
            />
          </div>

          {/* 6. References */}
          <h2 className="text-xl font-semibold text-white">6. References</h2>
          <p className="text-gray-300 mb-4">
            Provide 3 recent project references (preferably over $100K each).
          </p>
          {/* Reference 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="ref1ProjectName"
              placeholder="Project Name"
              className="p-3 bg-transparent border border-gray-600 text-white rounded-md"
            />
            <input
              type="text"
              name="ref1OwnerGc"
              placeholder="Owner / GC"
              className="p-3 bg-transparent border border-gray-600 text-white rounded-md"
            />
            <input
              type="text"
              name="ref1Contact"
              placeholder="Contact"
              className="p-3 bg-transparent border border-gray-600 text-white rounded-md"
            />
            <input
              type="text"
              name="ref1PhoneEmail"
              placeholder="Phone / Email"
              className="p-3 bg-transparent border border-gray-600 text-white rounded-md"
            />
            <input
              type="text"
              name="ref1ContractValue"
              placeholder="Contract Value"
              className="p-3 bg-transparent border border-gray-600 text-white rounded-md"
            />
            <input
              type="text"
              name="ref1YearCompleted"
              placeholder="Year Completed"
              className="p-3 bg-transparent border border-gray-600 text-white rounded-md"
            />
          </div>
          {/* Reference 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="ref2ProjectName"
              placeholder="Project Name"
              className="p-3 bg-transparent border border-gray-600 text-white rounded-md"
            />
            <input
              type="text"
              name="ref2OwnerGc"
              placeholder="Owner / GC"
              className="p-3 bg-transparent border border-gray-600 text-white rounded-md"
            />
            <input
              type="text"
              name="ref2Contact"
              placeholder="Contact"
              className="p-3 bg-transparent border border-gray-600 text-white rounded-md"
            />
            <input
              type="text"
              name="ref2PhoneEmail"
              placeholder="Phone / Email"
              className="p-3 bg-transparent border border-gray-600 text-white rounded-md"
            />
            <input
              type="text"
              name="ref2ContractValue"
              placeholder="Contract Value"
              className="p-3 bg-transparent border border-gray-600 text-white rounded-md"
            />
            <input
              type="text"
              name="ref2YearCompleted"
              placeholder="Year Completed"
              className="p-3 bg-transparent border border-gray-600 text-white rounded-md"
            />
          </div>
          {/* Reference 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="ref3ProjectName"
              placeholder="Project Name"
              className="p-3 bg-transparent border border-gray-600 text-white rounded-md"
            />
            <input
              type="text"
              name="ref3OwnerGc"
              placeholder="Owner / GC"
              className="p-3 bg-transparent border border-gray-600 text-white rounded-md"
            />
            <input
              type="text"
              name="ref3Contact"
              placeholder="Contact"
              className="p-3 bg-transparent border border-gray-600 text-white rounded-md"
            />
            <input
              type="text"
              name="ref3PhoneEmail"
              placeholder="Phone / Email"
              className="p-3 bg-transparent border border-gray-600 text-white rounded-md"
            />
            <input
              type="text"
              name="ref3ContractValue"
              placeholder="Contract Value"
              className="p-3 bg-transparent border border-gray-600 text-white rounded-md"
            />
            <input
              type="text"
              name="ref3YearCompleted"
              placeholder="Year Completed"
              className="p-3 bg-transparent border border-gray-600 text-white rounded-md"
            />
          </div>

          {/* 7. Key Personnel */}
          <h2 className="text-xl font-semibold text-white">7. Key Personnel</h2>
          <p className="text-gray-300 mb-4">
            List key staff assigned to our projects.
          </p>
          {/* Personnel 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="kp1Name"
              placeholder="Name"
              className="p-3 bg-transparent border border-gray-600 text-white rounded-md"
            />
            <input
              type="text"
              name="kp1Title"
              placeholder="Title"
              className="p-3 bg-transparent border border-gray-600 text-white rounded-md"
            />
            <input
              type="text"
              name="kp1Years"
              placeholder="Years of Experience"
              className="p-3 bg-transparent border border-gray-600 text-white rounded-md"
            />
            <input
              type="text"
              name="kp1Certs"
              placeholder="Certifications"
              className="p-3 bg-transparent border border-gray-600 text-white rounded-md"
            />
          </div>
          {/* Personnel 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="kp2Name"
              placeholder="Name"
              className="p-3 bg-transparent border border-gray-600 text-white rounded-md"
            />
            <input
              type="text"
              name="kp2Title"
              placeholder="Title"
              className="p-3 bg-transparent border border-gray-600 text-white rounded-md"
            />
            <input
              type="text"
              name="kp2Years"
              placeholder="Years of Experience"
              className="p-3 bg-transparent border border-gray-600 text-white rounded-md"
            />
            <input
              type="text"
              name="kp2Certs"
              placeholder="Certifications"
              className="p-3 bg-transparent border border-gray-600 text-white rounded-md"
            />
          </div>
          {/* Personnel 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="kp3Name"
              placeholder="Name"
              className="p-3 bg-transparent border border-gray-600 text-white rounded-md"
            />
            <input
              type="text"
              name="kp3Title"
              placeholder="Title"
              className="p-3 bg-transparent border border-gray-600 text-white rounded-md"
            />
            <input
              type="text"
              name="kp3Years"
              placeholder="Years of Experience"
              className="p-3 bg-transparent border border-gray-600 text-white rounded-md"
            />
            <input
              type="text"
              name="kp3Certs"
              placeholder="Certifications"
              className="p-3 bg-transparent border border-gray-600 text-white rounded-md"
            />
          </div>

          {/* 8. Certification & Signature */}
          <h2 className="text-xl font-semibold text-white">
            8. Certification & Signature
          </h2>
          <p className="text-gray-300 mb-4">
            I certify that all information provided is accurate and complete to
            the best of my knowledge.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="signatureName"
              placeholder="Name"
              className="p-3 bg-transparent border border-gray-600 text-white rounded-md"
            />
            <input
              type="text"
              name="signatureTitle"
              placeholder="Title"
              className="p-3 bg-transparent border border-gray-600 text-white rounded-md"
            />
            <input
              type="date"
              name="signatureDate"
              className="p-3 bg-transparent border border-gray-600 text-white rounded-md"
            />
            <input
              type="file"
              name="signatureFile"
              className="p-3 bg-transparent border border-gray-600 text-white rounded-md"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-navbarFocusBlue hover:bg-originalBlue text-white font-semibold py-3 rounded-md transition-colors"
          >
            Submit
          </button>
        </form>

        {statusMessage && (
          <div className="mt-6 p-4 bg-green-100 text-green-700 rounded-md text-center">
            {statusMessage}
          </div>
        )}
      </div>
    </div>
  );
}
