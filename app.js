console.log("Cricket Highlights site loaded successfully!");

// Search Input and Video Cards
const searchInput = document.getElementById('searchInput');
const videoCards = document.querySelectorAll('.video-card');

// Search Functionality
searchInput.addEventListener('input', function () {
  const query = searchInput.value.toLowerCase();
  filterVideos(query);
});

// Filter Videos by Query
function filterVideos(query) {
  let resultsFound = false;

  videoCards.forEach(card => {
    const title = card.getAttribute('data-title').toLowerCase();

    // Display card if query matches title
    if (title.includes(query)) {
      card.style.display = 'block';
      resultsFound = true;
    } else {
      card.style.display = 'none';
    }
  });

  // Show 'No Results' message
  const noResults = document.getElementById('noResults');
  noResults.style.display = resultsFound ? 'none' : 'block';
}

// Simulate Search for Tag Clicks
function filterByTag(tag) {
  searchInput.value = tag; // Set the search bar value to the tag
  filterVideos(tag);       // Trigger filtering
}
