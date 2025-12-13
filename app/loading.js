import React from "react";
import Image from "next/image"; // Best practice to use Next.js Image component

const Loading = () => {
  return (
    // h-screen: Takes up 100% of the viewport height
    // w-full: Takes up 100% width
    // flex items-center justify-center: Centers the content vertically and horizontally
    // bg-white: Sets the background color
    <div className="flex h-screen w-full items-center justify-center bg-red">
      <Image
        src="/navbarLogo.png" // Replace this with the actual path to your logo in the public folder
        alt="Logo"
        width={150} // Adjust width as needed
        height={150} // Adjust height as needed
        priority={true} // Loads the image immediately since it's the LCP
      />
    </div>
  );
};

export default Loading;
