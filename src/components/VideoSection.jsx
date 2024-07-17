import React, { useState } from "react";

const VideoSection = () => {
  const [currentTab, setCurrentTab] = useState("glitch");
  const [startIndex, setStartIndex] = useState(0);

  // Sample video data
  const glitchVideos = [
    { id: 1, title: "Rising Tides", videoId: "KSGlYMUG1_w", url: "https://youtu.be/KSGlYMUG1_w?si=k4curLLtKR60wg2H" },
    { id: 2, title: "Welcome To The Glitch Inn!", videoId: "IfF7faMA9dQ", url: "https://youtu.be/IfF7faMA9dQ?si=B4S48_OF5DZuWSvp" },
    { id: 3, title: "A Very Special Digital Circus Song", videoId: "lmc0tpOHBHA", url: "https://youtu.be/lmc0tpOHBHA?si=9pRTH66ROFgMamin" },
    { id: 4, title: "THE AMAZING DIGITAL CIRCUS", videoId: "4ofJpOEXrZs", url: "https://youtu.be/4ofJpOEXrZs?si=rm3hE8KOtwd6FwYt" },
    { id: 5, title: "DIGITAL CIRCUS: Pilot Official", videoId: "rafQwY9n_M0", url: "https://youtu.be/rafQwY9n_M0?si=qfWuI0kajJze4Wmt" },
    { id: 6, title: "Murder Drones Training Video", videoId: "SBTA3Tegacs", url: "https://youtu.be/SBTA3Tegacs?si=xK2KN4zTTqy3sXEj" },
    { id: 7, title: "MURDER DRONES - Episode 7", videoId: "EOqw86OGIB0", url: "https://youtu.be/EOqw86OGIB0?si=ZDi4IVVtQU2KDX7_" },
    { id: 8, title: "FINAL DESTINATION", videoId: "NdTCh97qHbQ", url: "https://youtu.be/NdTCh97qHbQ?si=g-2GeUrmj7sFhOK-" },
    { id: 9, title: "POMNI WAKE UP TIME TO GO ON AN ADVENTURE", videoId: "FkXhKu80CWU", url: "https://youtu.be/FkXhKu80CWU?si=FKSj__K7C568dkYH" },
    { id: 10, title: "N Calls Everyone", videoId: "pZGxy7WoMdg", url: "https://youtu.be/pZGxy7WoMdg?si=Lwyk-PtZYYToSXqQ" },
  ];

  const smg4Videos = [
    { id: 1, title: "A Night At SMG4's…", videoId: "O4xLCpUuoJ8", url: "https://youtu.be/O4xLCpUuoJ8?si=M6wrR7fwDAucElSF" },
    { id: 2, title: "Despicable Mr. Puzzles", videoId: "L1xqNvs2BDs", url: "https://youtu.be/L1xqNvs2BDs?si=QVfkODI1TCd6ZDjO" },
    { id: 3, title: "SMG4 and the Meme Factory", videoId: "yd-c-yp2_H8", url: "https://youtu.be/yd-c-yp2_H8?si=a3fnKH9wk7ehIW45" },
    { id: 4, title: "MEME HUNTERS", videoId: "ryTJNSLt-m0", url: "https://youtu.be/ryTJNSLt-m0?si=Iw1OP9CIbi0zy_b3" },
    { id: 5, title: "REMASTERED64: Mario's Road Trip", videoId: "BYBEy2nXdMM", url: "https://youtu.be/BYBEy2nXdMM?si=kzKyDuQcE6V3Yvh9" },
    { id: 6, title: "I Put Mario In Danger For Views", videoId: "WUAbFcf5Bko", url: "https://youtu.be/WUAbFcf5Bko?si=-pkciRyvuumMNroZ" },
    { id: 7, title: "Mario's Plane Trip", videoId: "fo31JWhERU4", url: "https://youtu.be/fo31JWhERU4?si=FOKr-jcMRr3ueFsZ" },
    { id: 8, title: "SMG4 Simulator", videoId: "1k3TqXoMrSw", url: "https://youtu.be/1k3TqXoMrSw?si=_lPxhFnt5CIrbCmh" },
    { id: 9, title: "Mario The Exploro", videoId: "JwF_GYRpx3k", url: "https://youtu.be/JwF_GYRpx3k?si=apoXYslS6Chgr644" },
    { id: 10, title: "Super Mario 64 Poorly Explained", videoId: "6VCRhC7Ahl4", url: "https://youtu.be/6VCRhC7Ahl4?si=yLMz4BnNVF0MslHx" },
  ];

  const videosToShow = currentTab === "glitch" ? glitchVideos : smg4Videos;
  const maxVideosPerPage = 8;

  // Calculate pagination
  const endIndex = Math.min(startIndex + maxVideosPerPage, videosToShow.length);
  const visibleVideos = videosToShow.slice(startIndex, endIndex);

  const handleTabChange = (tab) => {
    setCurrentTab(tab);
    setStartIndex(0); // Reset pagination on tab change
  };

  const handlePrevClick = () => {
    setStartIndex(Math.max(startIndex - maxVideosPerPage, 0));
  };

  const handleNextClick = () => {
    setStartIndex(startIndex + maxVideosPerPage);
  };

  return (
    <section id="videos" className="py-[100px] max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <h2 className="text-4xl md:text-6xl font-bold text-accent m-10">CHANNELS</h2>
    </div>
    <div className="max-w-6xl mx-auto">
      {/* Tabs */}
      <div className="flex justify-center mb-8">
        <button
          className={`px-4 py-2 mr-2 rounded ${
            currentTab === "glitch" ? "bg-secondary text-white" : "text-primary"
          }`}
          onClick={() => handleTabChange("glitch")}
        >
          Glitch Videos
        </button>
        <button
          className={`px-4 py-2 rounded ${
            currentTab === "smg4" ? "bg-secondary text-white" : "text-primary"
          }`}
          onClick={() => handleTabChange("smg4")}
        >
          SMG4 Videos
        </button>
      </div>

      {/* Video Tiles */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {visibleVideos.map((video) => (
          <a key={video.id} href={video.url} target="_blank" rel="noopener noreferrer" className="group">
            <div className="relative bg-gray-100 p-4 rounded-lg overflow-hidden group-hover:shadow-lg">
              <img
                src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                alt={video.title}
                className="w-full h-auto mb-2 object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-300"
                style={{ overflow: "hidden" }} // Apply overflow hidden to ensure the image stays within bounds
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-0 transition-opacity duration-300"></div>
              <p className="pt-2 left-2 text-sm font-medium text-black group-hover:text-blue-500">{video.title}</p>
              <div className="absolute inset-0 border-2 border-transparent"></div>
            </div>
          </a>
        ))}
      </div>

      {/* Pagination Arrows */}
      <div className="flex justify-center mt-8">
        <button
          className={`px-4 py-2 mr-2 rounded ${
            startIndex === 0 ? "bg-gray-100 text-primary cursor-not-allowed" : "bg-primary text-white"
          }`}
          onClick={handlePrevClick}
          disabled={startIndex === 0}
        >
          Prev
        </button>
        <button
          className={`px-4 py-2 rounded ${
            endIndex >= videosToShow.length ? "bg-gray-100 text-primary cursor-not-allowed" : "bg-primary text-white"
          }`}
          onClick={handleNextClick}
          disabled={endIndex >= videosToShow.length}
        >
          Next
        </button>
      </div>
    </div>
  </section>
);
};

export default VideoSection;