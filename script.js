// Data for Apps (Total 100 apps)
const apps = [
    { name: "Spotify No Ads", version: "9.0.0.487", image: "/img/spotify.jpg", link: "#" },
    { name: "Picsart Pro", version: "27.2.6", image: "/img/picsart.jpg", link: "#" },
    { name: "CapCut Pro", version: "32.2.0", image: "/img/capcut.jpg", link: "https://www.mediafire.com/file/ll59wgasj0gzrv3/CapCut_%2528trstnmodz%2529.apk/file" },
    { name: "App Name 4", version: "1.0.0", image: "/img/app4.jpg", link: "#" },
    { name: "App Name 5", version: "2.0.1", image: "/img/app5.jpg", link: "#" },
    { name: "App Name 6", version: "3.0.2", image: "/img/app6.jpg", link: "#" },
    { name: "App Name 7", version: "4.0.3", image: "/img/app7.jpg", link: "#" },
    { name: "App Name 8", version: "5.0.4", image: "/img/app8.jpg", link: "#" },
    { name: "App Name 9", version: "6.0.5", image: "/img/app9.jpg", link: "#" },
    { name: "App Name 10", version: "7.0.6", image: "/img/app10.jpg", link: "#" },
    { name: "App Name 11", version: "8.0.7", image: "/img/app11.jpg", link: "#" },
    { name: "App Name 12", version: "9.0.8", image: "/img/app12.jpg", link: "#" },
    { name: "App Name 13", version: "10.1.9", image: "/img/app13.jpg", link: "#" },
    { name: "App Name 14", version: "11.2.0", image: "/img/app14.jpg", link: "#" },
    { name: "App Name 15", version: "12.3.1", image: "/img/app15.jpg", link: "#" },
    { name: "App Name 16", version: "13.4.2", image: "/img/app16.jpg", link: "#" },
    { name: "App Name 17", version: "14.5.3", image: "/img/app17.jpg", link: "#" },
    { name: "App Name 18", version: "15.6.4", image: "/img/app18.jpg", link: "#" },
    { name: "App Name 19", version: "16.7.5", image: "/img/app19.jpg", link: "#" },
    { name: "App Name 20", version: "17.8.6", image: "/img/app20.jpg", link: "#" },
    { name: "App Name 21", version: "18.9.7", image: "/img/app21.jpg", link: "#" },
    { name: "App Name 22", version: "19.10.8", image: "/img/app22.jpg", link: "#" },
    { name: "App Name 23", version: "20.11.9", image: "/img/app23.jpg", link: "#" },
    { name: "App Name 24", version: "21.12.0", image: "/img/app24.jpg", link: "#" },
    { name: "App Name 25", version: "22.13.1", image: "/img/app25.jpg", link: "#" },
    { name: "App Name 26", version: "23.14.2", image: "/img/app26.jpg", link: "#" },
    { name: "App Name 27", version: "24.15.3", image: "/img/app27.jpg", link: "#" },
    { name: "App Name 28", version: "25.16.4", image: "/img/app28.jpg", link: "#" },
    { name: "App Name 29", version: "26.17.5", image: "/img/app29.jpg", link: "#" },
    { name: "App Name 30", version: "27.18.6", image: "/img/app30.jpg", link: "#" },
    { name: "App Name 31", version: "28.19.7", image: "/img/app31.jpg", link: "#" },
    { name: "App Name 32", version: "29.20.8", image: "/img/app32.jpg", link: "#" },
    { name: "App Name 33", version: "30.21.9", image: "/img/app33.jpg", link: "#" },
    { name: "App Name 34", version: "31.22.10", image: "/img/app34.jpg", link: "#" },
    { name: "App Name 35", version: "32.23.11", image: "/img/app35.jpg", link: "#" },
    { name: "App Name 36", version: "33.24.12", image: "/img/app36.jpg", link: "#" },
    { name: "App Name 37", version: "34.25.13", image: "/img/app37.jpg", link: "#" },
    { name: "App Name 38", version: "35.26.14", image: "/img/app38.jpg", link: "#" },
    { name: "App Name 39", version: "36.27.15", image: "/img/app39.jpg", link: "#" },
    { name: "App Name 40", version: "37.28.16", image: "/img/app40.jpg", link: "#" },
    { name: "App Name 41", version: "38.29.17", image: "/img/app41.jpg", link: "#" },
    { name: "App Name 42", version: "39.30.18", image: "/img/app42.jpg", link: "#" },
    { name: "App Name 43", version: "40.31.19", image: "/img/app43.jpg", link: "#" },
    { name: "App Name 44", version: "41.32.20", image: "/img/app44.jpg", link: "#" },
    { name: "App Name 45", version: "42.33.21", image: "/img/app45.jpg", link: "#" },
    { name: "App Name 46", version: "43.34.22", image: "/img/app46.jpg", link: "#" },
    { name: "App Name 47", version: "44.35.23", image: "/img/app47.jpg", link: "#" },
    { name: "App Name 48", version: "45.36.24", image: "/img/app48.jpg", link: "#" },
    { name: "App Name 49", version: "46.37.25", image: "/img/app49.jpg", link: "#" },
    { name: "App Name 50", version: "47.38.26", image: "/img/app50.jpg", link: "#" },
    { name: "App Name 51", version: "48.39.27", image: "/img/app51.jpg", link: "#" },
    { name: "App Name 52", version: "49.40.28", image: "/img/app52.jpg", link: "#" },
    { name: "App Name 53", version: "50.41.29", image: "/img/app53.jpg", link: "#" },
    { name: "App Name 54", version: "51.42.30", image: "/img/app54.jpg", link: "#" },
    { name: "App Name 55", version: "52.43.31", image: "/img/app55.jpg", link: "#" },
    { name: "App Name 56", version: "53.44.32", image: "/img/app56.jpg", link: "#" },
    { name: "App Name 57", version: "54.45.33", image: "/img/app57.jpg", link: "#" },
    { name: "App Name 58", version: "55.46.34", image: "/img/app58.jpg", link: "#" },
    { name: "App Name 59", version: "56.47.35", image: "/img/app59.jpg", link: "#" },
    { name: "App Name 60", version: "57.48.36", image: "/img/app60.jpg", link: "#" },
    { name: "App Name 61", version: "58.49.37", image: "/img/app61.jpg", link: "#" },
    { name: "App Name 62", version: "59.50.38", image: "/img/app62.jpg", link: "#" },
    { name: "App Name 63", version: "60.51.39", image: "/img/app63.jpg", link: "#" },
    { name: "App Name 64", version: "61.52.40", image: "/img/app64.jpg", link: "#" },
    { name: "App Name 65", version: "62.53.41", image: "/img/app65.jpg", link: "#" },
    { name: "App Name 66", version: "63.54.42", image: "/img/app66.jpg", link: "#" },
    { name: "App Name 67", version: "64.55.43", image: "/img/app67.jpg", link: "#" },
    { name: "App Name 68", version: "65.56.44", image: "/img/app68.jpg", link: "#" },
    { name: "App Name 69", version: "66.57.45", image: "/img/app69.jpg", link: "#" },
    { name: "App Name 70", version: "67.58.46", image: "/img/app70.jpg", link: "#" },
    { name: "App Name 71", version: "68.59.47", image: "/img/app71.jpg", link: "#" },
    { name: "App Name 72", version: "69.60.48", image: "/img/app72.jpg", link: "#" },
    { name: "App Name 73", version: "70.61.49", image: "/img/app73.jpg", link: "#" },
    { name: "App Name 74", version: "71.62.50", image: "/img/app74.jpg", link: "#" },
    { name: "App Name 75", version: "72.63.51", image: "/img/app75.jpg", link: "#" },
    { name: "App Name 76", version: "73.64.52", image: "/img/app76.jpg", link: "#" },
    { name: "App Name 77", version: "74.65.53", image: "/img/app77.jpg", link: "#" },
    { name: "App Name 78", version: "75.66.54", image: "/img/app78.jpg", link: "#" },
    { name: "App Name 79", version: "76.67.55", image: "/img/app79.jpg", link: "#" },
    { name: "App Name 80", version: "77.68.56", image: "/img/app80.jpg", link: "#" },
    { name: "App Name 81", version: "78.69.57", image: "/img/app81.jpg", link: "#" },
    { name: "App Name 82", version: "79.70.58", image: "/img/app82.jpg", link: "#" },
    { name: "App Name 83", version: "80.71.59", image: "/img/app83.jpg", link: "#" },
    { name: "App Name 84", version: "81.72.60", image: "/img/app84.jpg", link: "#" },
    { name: "App Name 85", version: "82.73.61", image: "/img/app85.jpg", link: "#" },
    { name: "App Name 86", version: "83.74.62", image: "/img/app86.jpg", link: "#" },
    { name: "App Name 87", version: "84.75.63", image: "/img/app87.jpg", link: "#" },
    { name: "App Name 88", version: "85.76.64", image: "/img/app88.jpg", link: "#" },
    { name: "App Name 89", version: "86.77.65", image: "/img/app89.jpg", link: "#" },
    { name: "App Name 90", version: "87.78.66", image: "/img/app90.jpg", link: "#" },
    { name: "App Name 91", version: "88.79.67", image: "/img/app91.jpg", link: "#" },
    { name: "App Name 92", version: "89.80.68", image: "/img/app92.jpg", link: "#" },
    { name: "App Name 93", version: "90.81.69", image: "/img/app93.jpg", link: "#" },
    { name: "App Name 94", version: "91.82.70", image: "/img/app94.jpg", link: "#" },
    { name: "App Name 95", version: "92.83.71", image: "/img/app95.jpg", link: "#" },
    { name: "App Name 96", version: "93.84.72", image: "/img/app96.jpg", link: "#" },
    { name: "App Name 97", version: "94.85.73", image: "/img/app97.jpg", link: "#" },
    { name: "App Name 98", version: "95.86.74", image: "/img/app98.jpg", link: "#" },
    { name: "App Name 99", version: "96.87.75", image: "/img/app99.jpg", link: "#" },
    { name: "App Name 100", version: "97.88.76", image: "/img/app100.jpg", link: "#" }
];

// DOM Elements
const sectionsContainer = document.getElementById('sections-container');
const paginationNumbers = document.getElementById('pagination-numbers');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

// Pagination Settings
const appsPerPage = 5;
let currentPage = 1;
const totalPages = Math.ceil(apps.length / appsPerPage);

// Load a Specific Page
function loadPage(page) {
    // Clear previous apps
    sectionsContainer.innerHTML = '';

    // Calculate the apps to display for the current page
    const startIndex = (page - 1) * appsPerPage;
    const endIndex = startIndex + appsPerPage;
    const currentApps = apps.slice(startIndex, endIndex);

    // Render apps
    currentApps.forEach((app) => {
        const appCard = document.createElement('div');
        appCard.className = 'app-card';
        appCard.innerHTML = `
            <img src="${app.image}" alt="${app.name}">
            <h3>${app.name}</h3>
            <p>${app.version}</p>
            <button onclick="window.open('${app.link}', '_blank')">Download</button>
        `;
        sectionsContainer.appendChild(appCard);
    });

    // Update pagination
    updatePagination(page);
}

// Update Pagination Buttons and Page Numbers
function updatePagination(page) {
    paginationNumbers.innerHTML = ''; // Clear pagination numbers

    // Show only 5 page numbers at a time
    const pageStart = Math.floor((page - 1) / 5) * 5 + 1;
    const pageEnd = Math.min(pageStart + 4, totalPages);

    for (let i = pageStart; i <= pageEnd; i++) {
        const pageNumber = document.createElement('div');
        pageNumber.className = 'page-number';
        pageNumber.textContent = i;

        // Highlight the current page
        if (i === page) pageNumber.classList.add('active');

        // Add click handler
        pageNumber.onclick = () => goToPage(i);
        paginationNumbers.appendChild(pageNumber);
    }

    // Enable/disable buttons
    prevBtn.disabled = page === 1;
    nextBtn.disabled = page === totalPages;
}

// Navigate to a Specific Page
function goToPage(page) {
    currentPage = page;
    loadPage(currentPage);
}

// Handle Previous/Next Button Clicks
function changePage(direction) {
    if (direction === 'prev' && currentPage > 1) {
        currentPage--;
    } else if (direction === 'next' && currentPage < totalPages) {
        currentPage++;
    }
    loadPage(currentPage);
}

// Initial Load
loadPage(currentPage);

// Expose functions to the global scope
window.changePage = changePage;
window.goToPage = goToPage;