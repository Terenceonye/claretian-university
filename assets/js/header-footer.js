// Function to load content into a specified element
function loadContent(url, elementId) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(elementId).innerHTML = data;
    })
    .catch((error) => console.error(`Error loading ${url}:`, error.message));
}

// Call the function to load the header and footer when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  loadContent("header.html", "header");
  loadContent("footer.html", "footer");
  loadContent("footer2.html", "footer2");
});
