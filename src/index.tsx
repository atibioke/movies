import React from "react";
import { createRoot } from "react-dom/client";
import MovieSearchPage from "./movie-search-page.tsx";

// Ensure that the container is not null
const container = document.getElementById("root");

if (container) {
  const root = createRoot(container);
  root.render(<MovieSearchPage />);
} else {
  console.error("Root container not found.");
}
