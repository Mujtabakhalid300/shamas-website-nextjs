"use client";

export default function Form() {
  const pdfPath = "/Subcontractor_Prequalification_Form.pdf"; // Make sure this file exists in your 'public' folder

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gray-900 font-sans p-4">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"
          alt="City Background"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-6xl h-[80vh] bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden shadow-2xl">
        <div className="flex flex-col lg:flex-row h-full">
          {/* Left Side: Text */}
          <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-[#00bcd4] mb-6">
              Document Overview
            </h2>
            {/* overflow-hidden ensures no scrollbar appears even if text is long */}
            <div className="text-gray-300 leading-relaxed overflow-hidden">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
          </div>

          {/* Right Side: Clickable PDF Viewer */}
          <div className="w-full lg:w-1/2 h-full bg-gray-900 border-t lg:border-t-0 lg:border-l border-gray-700 relative group cursor-pointer">
            <a
              href={pdfPath}
              download
              className="block w-full h-full relative"
              title="Click to download PDF"
            >
              {/* Optional: Hover Overlay effect */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 z-20 transition-colors flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-medium transition-opacity">
                  Click to Download
                </span>
              </div>

              {/* The iframe displays the PDF. 
                  pointer-events-none is CRITICAL: it prevents the iframe from 
                  capturing the click, allowing the parent <a> tag to trigger the download. */}
              <iframe
                src={`${pdfPath}#toolbar=0&navpanes=0&scrollbar=0`}
                className="w-full h-full pointer-events-none"
                tabIndex="-1"
                title="PDF Preview"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
