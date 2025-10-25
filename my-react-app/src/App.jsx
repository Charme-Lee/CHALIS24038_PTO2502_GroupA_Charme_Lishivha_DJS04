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
  const [ itemsPerPage ] = useState( 10 );
  
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




  