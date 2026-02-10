"use client";

import { useEffect } from "react";

export default function ScrollHandler() {
  useEffect(() => {
    // Prevent default browser hash scroll on initial load
    if (window.location.hash) {
      // Immediately scroll to top to prevent browser's default scroll
      window.scrollTo(0, 0);
    }

    // Handle hash navigation after page is fully loaded
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.substring(1);
        // Wait for all content to load
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    // Run after page is fully rendered
    const timer = setTimeout(handleHashScroll, 100);

    // Handle hash changes during navigation
    const handleHashChange = () => {
      handleHashScroll();
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return null;
}
