import React from "react";
import { GenreService } from "../utils/GenreService.js";
import { DateUtils } from "../utils/DateUtils.js";

const CreateModal = ({ podcast, onClose, genres }) => {
  if (!podcast) return null;

  console.log("Modal Podcast Data:", podcast); // Debug the podcast in the modal
  const genreNames = GenreService.getNames(podcast.genres || [], genres || []); // Ensure genres prop is used
  const updatedDate = DateUtils.format(
    podcast.updated || new Date().toISOString()
  );

  // Handle different possible season structures
  let seasonData = [];
  if (podcast.seasons && Array.isArray(podcast.seasons)) {
    seasonData = podcast.seasons;
  } else if (podcast.season && Array.isArray(podcast.season)) {
    seasonData = podcast.season;
  } else if (podcast.episodes && Array.isArray(podcast.episodes)) {
    seasonData = podcast.episodes; // Fallback if seasons are under episodes
  }
  console.log("Modal Season Data:", seasonData); // Debug the seasons array
};

export default CreateModal;
