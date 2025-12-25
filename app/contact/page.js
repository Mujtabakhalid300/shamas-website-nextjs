"use client";

import { useState, useRef, useTransition } from "react";
import { motion } from "framer-motion"; // Added framer-motion
import { Mail, Phone, MapPin, Loader2, Navigation } from "lucide-react";
import { sendEmail } from "./actions";

// Animation Variants (Consistent with your Home Page)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delays the form appearance slightly after contact info
      delayChildren: 0.3, // Waits for background to load a bit
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

const backgroundVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

export default function ContactPage() {
  const [isPending, startTransition] = useTransition();
  const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });
  const formRef = useRef(null);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    setStatusMessage({ type: "", text: "" });

    startTransition(async () => {
      const result = await sendEmail(formData);

      if (result.success) {
        setStatusMessage({ type: "success", text: result.message });
        if (formRef.current) formRef.current.reset();
      } else {
        setStatusMessage({ type: "error", text: result.message });
      }
    });
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gray-900 font-sans">
      {/* Background Image - Smooth Fade In */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        variants={backgroundVariants}
        initial="hidden"
        animate="visible"
      >
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"
          alt="City Background"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/80"></div>
      </motion.div>

      {/* Main Content - Staggered Grid */}
      <motion.div
        className="relative z-10 container mx-auto px-4 py-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Column: Contact Info */}
          <motion.div
            className="space-y-8 pl-4 lg:pl-12"
            variants={itemVariants}
          >
            {/* Address Section */}
            <div className="flex items-start gap-5">
              <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center text-black">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#00bcd4] mb-1">
                  Address
                </h3>
                <p className="text-gray-300">10 West Main St. Elmsford </p>
                <p className="text-gray-300">New York 10523, Suite 200</p>

                {/* --- DIRECTIONS LINK --- */}
                <a
                  href="https://maps.app.goo.gl/vdeZkeAfuf5q1f3d6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-[#00bcd4] hover:text-[#00acc1] transition-colors group"
                >
                  <Navigation
                    size={18}
                    className="group-hover:translate-x-1 transition-transform duration-200"
                  />
                  <span className="font-semibold underline decoration-transparent group-hover:decoration-[#00acc1] transition-all">
                    Get Directions
                  </span>
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-5">
              <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center text-black">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#00bcd4] mb-1">Phone</h3>
                <p className="text-gray-300">+1 (516) 620-5470</p>
                <p className="text-gray-300">+1 (718) 563-2100</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-5">
              <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center text-black">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#00bcd4] mb-1">Email</h3>
                <p className="text-gray-300">info@shamas.us</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            className="bg-transparent border border-gray-400 p-8 md:p-10 rounded-sm w-full"
            variants={itemVariants}
          >
            <h2 className="text-3xl font-bold text-white mb-8">Send Message</h2>

            <form
              ref={formRef}
              onSubmit={handleFormSubmit}
              className="space-y-6"
            >
              {/* --- HONEYPOT FIELD (INVISIBLE) --- */}
              <input
                type="text"
                name="website_url"
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Full Name */}
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="text-white peer w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#00bcd4] transition-colors placeholder-transparent bg-transparent"
                  placeholder="Full Name"
                  disabled={isPending}
                />
                <label
                  htmlFor="name"
                  className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-[#00bcd4] peer-focus:text-sm"
                >
                  Full Name
                </label>
              </div>

              {/* Email */}
              <div className="relative mt-8">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className=" text-white peer w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#00bcd4] transition-colors placeholder-transparent bg-transparent"
                  placeholder="Email"
                  disabled={isPending}
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-[#00bcd4] peer-focus:text-sm"
                >
                  Email
                </label>
              </div>

              {/* Message */}
              <div className="relative mt-8">
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  required
                  className="text-white peer w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#00bcd4] transition-colors placeholder-transparent resize-none bg-transparent"
                  placeholder="Type your Message.."
                  disabled={isPending}
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-[#00bcd4] peer-focus:text-sm"
                >
                  Type your Message..
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full bg-[#00bcd4] text-white font-medium py-3 px-4 hover:bg-[#00acc1] transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      Sending...
                    </>
                  ) : (
                    "Send"
                  )}
                </button>
              </div>
            </form>

            {/* Status Message Display */}
            {statusMessage.text && (
              <div
                className={`mt-6 p-4 rounded-md text-center font-medium ${
                  statusMessage.type === "error"
                    ? "bg-red-50 text-red-600 border border-red-200"
                    : "bg-green-50 text-green-600 border border-green-200"
                }`}
              >
                {statusMessage.text}
              </div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
