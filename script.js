// Search Functionality
document.querySelectorAll('.search-bar button').forEach(button => {
    button.addEventListener('click', () => {
        const searchTerm = button.previousElementSibling.value;
        if (searchTerm) {
            alert(`Searching for: ${searchTerm}`);
            // In a real implementation, this would trigger a search request
        }
    });
});

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile Menu Toggle (can be added later if needed)
