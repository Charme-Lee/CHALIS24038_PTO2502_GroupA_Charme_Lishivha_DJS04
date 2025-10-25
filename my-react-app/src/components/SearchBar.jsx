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

  // Use useMemo for efficient filtering
  const filteredPodcasts = React.useMemo(() => {
    let result = podcasts.filter(podcast =>
      podcast.title?.toLowerCase().includes(searchTerm.toLowerCase()) || ''
    );
    if (selectedGenre) {
      result = result.filter(podcast =>
        podcast.genres?.includes(selectedGenre) || false
      );
    }
    console.log('Filtered Podcasts:', result); // Debug
    return result;
  }, [podcasts, searchTerm, selectedGenre]);

  // Update current podcasts and total pages
  React.useEffect(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentPodcasts = filteredPodcasts.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredPodcasts.length / itemsPerPage);
    setCurrentPodcasts({ currentPodcasts, totalPages });
    console.log('Current Podcasts:', currentPodcasts); // Debug
  }, [searchTerm, selectedGenre, currentPage, itemsPerPage, filteredPodcasts, setCurrentPodcasts]);
  // Update current podcasts and total pages
  React.useEffect(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentPodcasts = filteredPodcasts.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredPodcasts.length / itemsPerPage);
    setCurrentPodcasts({ currentPodcasts, totalPages });
    console.log('Current Podcasts:', currentPodcasts); // Debug
  }, [searchTerm, selectedGenre, currentPage, itemsPerPage, filteredPodcasts, setCurrentPodcasts]);






export default SearchBar;
