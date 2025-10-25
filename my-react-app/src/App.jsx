/** @jsxImportSource react */
import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import Header from "./views/header.jsx";
import CreateGrid from "./views/createGrid.jsx";
import CreateModal from "./components/createModal.jsx";
import SearchBar from "./components/SearchBar.jsx";
import SortBar from "./components/SortBar.jsx";
import { genres } from "./views/data.js";

const App = () => {
  // ✅ Hooks must be inside here
  const [podcasts, setPodcasts] = useState([]);
  const [selectedPodcast, setSelectedPodcast] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPodcastsData, setCurrentPodcastsData] = useState({
    currentPodcasts: [],
    totalPages: 1,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://podcast-api.netlify.app/");
        if (!response.ok) throw new Error("Network response was not ok");

        const data = await response.json();
        console.log("API Response:", data);

        const podcastsData = Array.isArray(data)
          ? data
          : data.shows || data.data || [];

        const podcastsWithSeasons = await Promise.all(
          podcastsData.map(async (podcast) => {
            const updatedPodcast = { ...podcast };

            try {
              // Try the main seasons endpoint
              const seasonsResponse = await fetch(
                `https://podcast-api.netlify.app/seasons/${podcast.id}`
              );

              if (seasonsResponse.ok) {
                const seasonsData = await seasonsResponse.json();
                updatedPodcast.seasons = seasonsData;
              } else {
                // API returned an error (like 500)
                console.warn(
                  `⚠️ Failed to fetch seasons for ${podcast.id} (${seasonsResponse.status}), keeping original value`
                );
              }
            } catch (err) {
              // Network or JSON parsing error
              console.warn(`⚠️ Error fetching seasons for ${podcast.id}:`, err);
            }

            return updatedPodcast;
          })
        );

        setPodcasts(podcastsWithSeasons);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // ✅ useEffect now correctly inside the component

  const handlePodcastSelect = (podcast) => {
    const podcastWithSeasons =
      podcasts.find((p) => p.id === podcast.id) || podcast;
    setSelectedPodcast(podcastWithSeasons);
  };

  if (loading) return <div className="loading-msg">Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <Header />
      <SearchBar
        podcasts={podcasts}
        onPodcastSelect={handlePodcastSelect}
        genres={genres}
        setCurrentPodcasts={setCurrentPodcastsData}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itemsPerPage={itemsPerPage}
      />
      <SortBar
        podcasts={podcasts}
        onPodcastSelect={handlePodcastSelect}
        genres={genres}
        setCurrentPodcasts={setCurrentPodcastsData}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itemsPerPage={itemsPerPage}
      />
      <CreateGrid
        podcasts={currentPodcastsData.currentPodcasts}
        onPodcastSelect={handlePodcastSelect}
        genres={genres}
      />
      <CreateModal
        podcast={selectedPodcast}
        onClose={() => setSelectedPodcast(null)}
        genres={genres}
      />
    </>
  );
};
