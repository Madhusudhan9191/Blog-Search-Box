const blogs = [
    { title: "Tech Trends 2024", category: "technology" },
    { title: "Healthy Living Tips", category: "health" },
    { title: "Minimalist Lifestyle", category: "lifestyle" },
    { title: "AI in Daily Life", category: "technology" },
    { title: "Work-Life Balance", category: "lifestyle" }
];

const searchBox = document.getElementById('searchBox');
const filter = document.getElementById('filter');
const searchButton = document.getElementById('searchButton');
const results = document.getElementById('results');

// Function to display results
function displayResults(items) {
    results.innerHTML = items.length 
        ? items.map(item => `<div class="result-item">${item.title}</div>`).join('')
        : `<p>No results found</p>`;
}

// Function to perform the search
function search() {
    const searchTerm = searchBox.value.toLowerCase();
    const filterTerm = filter.value;

    const filteredBlogs = blogs.filter(blog => {
        const matchesSearch = blog.title.toLowerCase().includes(searchTerm);
        const matchesFilter = filterTerm === "all" || blog.category === filterTerm;
        return matchesSearch && matchesFilter;
    });

    displayResults(filteredBlogs);
}

// Attach event listeners for search button and Enter key
searchButton.addEventListener('click', search);
searchBox.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        search();
    }
});
filter.addEventListener('change', search);

// Initially display nothing
displayResults([]);
