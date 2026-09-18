import React from "react";
import "./VideoBanner.css";

export default function VideoBanner({
  src = "/img/OEA_1005x90_logo.gif",
  alt = "Banner animado",
  variant = "full",
}) {
  const isSide = variant === "side";

  return (
    <div
      className={`video-banner-wrapper ${isSide ? "video-banner-wrapper--side" : ""}`}
    >
      <img
        className={`video-banner ${isSide ? "video-banner--side" : ""}`}
        src={src}
        alt={alt}
      />
    </div>
  );
}
