"use client";
import React, { useState, useEffect } from "react";

const MainPageVideo = () => {
  return (
    <div className="fixed top-[32px] md:top-[105px] left-0 w-full h-screen overflow-hidden -z-10">
      <video
        autoPlay
        muted
        loop={true}
        playsInline={true}
        className="w-full h-full object-cover"
      >
        <source
          src="/large-vecteezy_new-york-city-skyline-time-lapse-video-from-roof-top-with_20015744_large.webm"
          type="video/webm"
        />
      </video>
    </div>
  );
};

export default MainPageVideo;
