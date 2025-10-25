/** @jsxImportSource react */
import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import Header from "./views/header.jsx";
import CreateGrid from "./views/createGrid.jsx";
import CreateModal from "./components/createModal.jsx";
import SearchBar from "./components/SearchBar.jsx";
import SortBar from "./components/SortBar.jsx";
import { genres } from "./views/data.js";
