/** @jsxImportSource react */
import React from 'react';

/**
 * A component for sorting podcasts by different criteria.
 * @param {Object} props - The component props.
 * @param {Array<Object>} props.podcasts - The list of all podcasts.
 * @param {function} props.onPodcastSelect - Callback to select a podcast.
 * @param {Array<Object>} props.genres - The list of available genres.
 * @param {function} props.setCurrentPodcasts - Callback to update the current podcasts list.
 * @param {number} props.currentPage - The current page number.
 * @param {function} props.setCurrentPage - Callback to update the current page.
 * @param {number} props.itemsPerPage - The number of items per page.
 * @returns {JSX.Element} The rendered sort bar component.
 */
 
const SortBar = ({ podcasts, onPodcastSelect, genres, setCurrentPodcasts, currentPage, setCurrentPage, itemsPerPage }) => {
  const [sortBy, setSortBy] = React.useState('title');
  const [sortDirection, setSortDirection] = React.useState('asc');

  const handleSortChange = (criterion) => {
    setSortBy(criterion);
    setCurrentPage(1); // Reset to first page on sort change
    applySorting(criterion, sortDirection);
  };

  const toggleSortDirection = () => {
    const newDirection = sortDirection === 'asc' ? 'desc' : 'asc';
    setSortDirection(newDirection);
    applySorting(sortBy, newDirection);
  };

