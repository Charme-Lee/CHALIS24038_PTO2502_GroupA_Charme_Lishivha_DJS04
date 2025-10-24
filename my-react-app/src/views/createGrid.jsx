import React from "react";
import PodcastCard from "../components/PodcastCard";

/**
 * Renders a grid layout of podcast cards.
 *
 * @component
 * @example
 * // Example usage:
 * const podcasts = [{ id: 1, title: "Science Talk", genres: [1, 3] }];
 * const handleSelect = (podcast) => console.log(podcast);
 * const genres = { 1: "Technology", 3: "Science" };
 *
 * return (
 *   <CreateGrid
 *     podcasts={podcasts}
 *     onPodcastSelect={handleSelect}
 *     genres={genres}
 *   />
 * );
 *
 * @param {Object} props - Component props.
 * @param {Array<Object>} props.podcasts - Array of podcast objects to display.
 * Each podcast object should include an `id`, `title`, and other relevant fields.
 * @param {Function} props.onPodcastSelect - Callback function that is triggered
 * when a podcast card is selected or clicked.
 * @param {Object} props.genres - Object mapping genre IDs to their corresponding
 * titles. Used to display readable genre names in the podcast cards.
 *
 * @returns {JSX.Element} A grid container displaying multiple PodcastCard components.
 */

const Creategrid = ({ podcasts, onPodcastSelect, genres }) => {
  return (
    <div className="grid">
      {podcasts.map((podcast) => (
        <PodcastCard
          key={podcast.id}
          podcast={podcast}
          onSelect={onPodcastSelect}
          genres={genres}
        />
      ))}
    </div>
  );
};

export default CreateGrid;
