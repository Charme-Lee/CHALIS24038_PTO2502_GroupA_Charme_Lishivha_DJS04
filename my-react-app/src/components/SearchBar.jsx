/** @jsxImportSource react */
import React from "react";

/**
 * A component for searching and filtering podcasts with pagination controls.
 * @param {Object} props - The component props.
 * @param {Array<Object>} props.podcasts - The list of all podcasts.
 * @param {function} props.onPodcastSelect - Callback to select a podcast.
 * @param {Array<Object>} props.genres - The list of available genres.
 * @param {function} props.setCurrentPodcasts - Callback to update the current podcasts list.
 * @param {number} props.currentPage - The current page number.
 * @param {function} props.setCurrentPage - Callback to update the current page.
 * @param {number} props.itemsPerPage - The number of items per page.
 * @returns {JSX.Element} The rendered search bar component.
 */

const SearchBar = ({ podcasts, onPodcastSelect, genres, setCurrentPodcasts, currentPage, setCurrentPage, itemsPerPage }) => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [ selectedGenre, setSelectedGenre ] = React.useState( null );
  
    const handleSearch = (value) => {
    setSearchTerm(value);
    setCurrentPage(1); // Reset to first page on new search
    console.log('Search Term:', value); // Debug
  };






export default SearchBar;
