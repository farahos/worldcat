// Book data with actual image references
const books = [
    { 
        id: 1, 
        title: "The Great Gatsby", 
        author: "F. Scott Fitzgerald", 
        year: 1925, 
        type: "book", 
        language: "english", 
        pages: 218,
        image: "images/book1.jpg",  // Updated path
        description: "A classic novel of the Jazz Age"
    },
    { 
        id: 2, 
        title: "JavaScript: The Definitive Guide", 
        author: "David Flanagan", 
        year: 2020, 
        type: "ebook", 
        language: "english", 
        pages: 704,
        image: "images/book2.jpg",  // Updated path
        description: "Complete guide to JavaScript programming"
    },
    { 
        id: 3, 
        title: "Harry Potter and the Sorcerer's Stone", 
        author: "J.K. Rowling", 
        year: 1997, 
        type: "book", 
        language: "english", 
        pages: 320,
        image: "images/book3.jpg",  // Updated path
        description: "The first book in the Harry Potter series"
    },
    { 
        id: 4, 
        title: "Clean Code: A Handbook of Agile Software Craftsmanship", 
        author: "Robert C. Martin", 
        year: 2008, 
        type: "ebook", 
        language: "english", 
        pages: 464,
        image: "images/book4.jpg",  // Updated path
        description: "Essential software engineering practices"
    },
    { 
        id: 5, 
        title: "The Hobbit", 
        author: "J.R.R. Tolkien", 
        year: 1937, 
        type: "book", 
        language: "english", 
        pages: 310,
        image: "images/book5.jpg",  // Updated path
        description: "Fantasy novel set in Middle-earth"
    },
    { 
        id: 6, 
        title: "Introduction to Algorithms", 
        author: "Thomas H. Cormen", 
        year: 2009, 
        type: "book", 
        language: "english", 
        pages: 1312,
        image: "images/book6.jpg",  // Updated path
        description: "Comprehensive guide to algorithms"
    },
    { 
        id: 7, 
        title: "The Catcher in the Rye", 
        author: "J.D. Salinger", 
        year: 1951, 
        type: "book", 
        language: "english", 
        pages: 277,
        image: "images/book7.jpg",  // Updated path
        description: "Classic novel about teenage rebellion"
    },
    { 
        id: 8, 
        title: "1984", 
        author: "George Orwell", 
        year: 1949, 
        type: "ebook", 
        language: "english", 
        pages: 328,
        image: "images/book8.jpg",  // Updated path
        description: "Dystopian social science fiction"
    },
    { 
        id: 9, 
        title: "To Kill a Mockingbird", 
        author: "Harper Lee", 
        year: 1960, 
        type: "book", 
        language: "english", 
        pages: 324,
        image: "images/book9.jpg",  // Updated path
        description: "Novel about racial injustice in America"
    },
    { 
        id: 10, 
        title: "Pride and Prejudice", 
        author: "Jane Austen", 
        year: 1813, 
        type: "audio", 
        language: "english", 
        pages: 432,
        image: "images/book10.jpg",  // Updated path
        description: "Romantic novel of manners"
    }
];

// Global variables
let currentPage = 1;
const booksPerPage = 6;
let filteredBooks = [...books];
let currentSort = "relevance";

// DOM Elements
const resultsContainer = document.getElementById('resultsContainer');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const searchType = document.getElementById('searchType');
const sortSelect = document.getElementById('sortSelect');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const currentPageSpan = document.getElementById('currentPage');
const totalPagesSpan = document.getElementById('totalPages');
const filterCheckboxes = document.querySelectorAll('.filter-check');
const langCheckboxes = document.querySelectorAll('.lang-check');
const applyFilterBtn = document.getElementById('applyFilterBtn');
const resetFilterBtn = document.getElementById('resetFilterBtn');
const yearFrom = document.getElementById('yearFrom');
const yearTo = document.getElementById('yearTo');
const libraryCount = document.getElementById('libraryCount');
const resultsCount = document.getElementById('resultsCount');

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    displayBooks();
    updatePagination();
    updateResultsCount();
    setupEventListeners();
    animateLibraryCount();
});

// Event Listeners
function setupEventListeners() {
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') performSearch();
    });
    
    sortSelect.addEventListener('change', function() {
        currentSort = this.value;
        sortBooks();
        currentPage = 1;
        displayBooks();
        updatePagination();
    });
    
    prevBtn.addEventListener('click', goToPrevPage);
    nextBtn.addEventListener('click', goToNextPage);
    
    applyFilterBtn.addEventListener('click', applyFilters);
    resetFilterBtn.addEventListener('click', resetFilters);
    
    // Check all format checkboxes by default
    filterCheckboxes.forEach(cb => cb.checked = true);
    langCheckboxes.forEach(cb => {
        if (cb.value === 'english') cb.checked = true;
    });
}

// Display books with images
function displayBooks() {
    const startIndex = (currentPage - 1) * booksPerPage;
    const endIndex = startIndex + booksPerPage;
    const booksToShow = filteredBooks.slice(startIndex, endIndex);
    
    resultsContainer.innerHTML = '';
    
    if (booksToShow.length === 0) {
        resultsContainer.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search" style="font-size: 3rem; color: #adb5bd; margin-bottom: 20px;"></i>
                <h3>No books found</h3>
                <p>Try different keywords or adjust your filters</p>
            </div>
        `;
        return;
    }
    
    booksToShow.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';
        
        // Icon based on type
        let typeIcon = 'fas fa-book';
        let typeText = 'Book';
        if (book.type === 'ebook') {
            typeIcon = 'fas fa-laptop';
            typeText = 'eBook';
        } else if (book.type === 'audio') {
            typeIcon = 'fas fa-headphones';
            typeText = 'Audiobook';
        } else if (book.type === 'article') {
            typeIcon = 'fas fa-file-alt';
            typeText = 'Article';
        } else if (book.type === 'thesis') {
            typeIcon = 'fas fa-graduation-cap';
            typeText = 'Thesis';
        }
        
        // Language text
        let langText = book.language.charAt(0).toUpperCase() + book.language.slice(1);
        
        // Using placeholder images with different colors based on book ID
        const colorPalette = [
            '#4a6572', '#5d4037', '#0277bd', '#388e3c', 
            '#7b1fa2', '#d84315', '#00695c', '#283593',
            '#c2185b', '#ad1457', '#4527a0', '#37474f'
        ];
        const colorIndex = (book.id - 1) % colorPalette.length;
        const bgColor = colorPalette[colorIndex];
        
        bookCard.innerHTML = `
            <div class="book-image" style="background: linear-gradient(135deg, ${bgColor}40, ${bgColor}20);">
                <div style="text-align: center; color: #495057;">
                    <i class="fas fa-book-open" style="font-size: 3rem; color: ${bgColor}; margin-bottom: 10px;"></i>
                    <p style="font-size: 0.8rem; font-weight: 500;">${book.title.substring(0, 30)}${book.title.length > 30 ? '...' : ''}</p>
                </div>
            </div>
            <div class="book-content">
                <div class="book-title">${book.title}</div>
                <div class="book-author">
                    <i class="fas fa-user-edit"></i> ${book.author}
                </div>
                <div class="book-details">
                    <p><i class="fas fa-calendar-alt"></i> Published: ${book.year}</p>
                    <p><i class="fas fa-file"></i> Pages: ${book.pages}</p>
                    <p><i class="fas fa-align-left"></i> ${book.description}</p>
                </div>
                <div class="book-meta">
                    <span class="book-type"><i class="${typeIcon}"></i> ${typeText}</span>
                    <span class="book-lang"><i class="fas fa-language"></i> ${langText}</span>
                </div>
            </div>
        `;
        
        // Add click event
        bookCard.addEventListener('click', function() {
            showBookDetails(book);
        });
        
        resultsContainer.appendChild(bookCard);
    });
}

// Show book details modal
function showBookDetails(book) {
    // Create modal
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2000;
        padding: 20px;
    `;
    
    modal.innerHTML = `
        <div style="background: white; border-radius: 12px; max-width: 500px; width: 100%; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.3);">
            <div style="background: linear-gradient(135deg, #007bff, #0056b3); color: white; padding: 20px;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <h2 style="margin: 0; font-size: 1.5rem;">Book Details</h2>
                    <button id="closeModal" style="background: none; border: none; color: white; font-size: 1.5rem; cursor: pointer;">×</button>
                </div>
            </div>
            <div style="padding: 25px;">
                <h3 style="color: #2c3e50; margin-bottom: 15px;">${book.title}</h3>
                <p><strong>Author:</strong> ${book.author}</p>
                <p><strong>Year:</strong> ${book.year}</p>
                <p><strong>Pages:</strong> ${book.pages}</p>
                <p><strong>Type:</strong> ${book.type}</p>
                <p><strong>Language:</strong> ${book.language}</p>
                <p><strong>Description:</strong> ${book.description}</p>
                <p style="margin-top: 20px; color: #6c757d; font-size: 0.9rem;">This is sample data for JavaScript assignment</p>
            </div>
            <div style="padding: 20px; background: #f8f9fa; border-top: 1px solid #e9ecef; text-align: right;">
                <button id="borrowBtn" style="background: #28a745; color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer; font-weight: 500;">Simulate Borrow</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close modal events
    document.getElementById('closeModal').addEventListener('click', function() {
        document.body.removeChild(modal);
    });
    
    document.getElementById('borrowBtn').addEventListener('click', function() {
        alert(`Borrow simulation: "${book.title}" added to your reading list!`);
        document.body.removeChild(modal);
    });
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
}

// Search function
function performSearch() {
    const query = searchInput.value.toLowerCase().trim();
    const type = searchType.value;
    
    if (!query) {
        filteredBooks = [...books];
    } else {
        filteredBooks = books.filter(book => {
            if (type === 'title') {
                return book.title.toLowerCase().includes(query);
            } else if (type === 'author') {
                return book.author.toLowerCase().includes(query);
            } else if (type === 'isbn') {
                return book.id.toString().includes(query);
            } else if (type === 'subject') {
                return book.description.toLowerCase().includes(query);
            } else {
                return book.title.toLowerCase().includes(query) || 
                       book.author.toLowerCase().includes(query) ||
                       book.description.toLowerCase().includes(query);
            }
        });
    }
    
    currentPage = 1;
    sortBooks();
    displayBooks();
    updatePagination();
    updateResultsCount();
}

// Sort books
function sortBooks() {
    if (currentSort === 'newest') {
        filteredBooks.sort((a, b) => b.year - a.year);
    } else if (currentSort === 'oldest') {
        filteredBooks.sort((a, b) => a.year - b.year);
    } else if (currentSort === 'title') {
        filteredBooks.sort((a, b) => a.title.localeCompare(b.title));
    } else {
        // Relevance: default order
        filteredBooks.sort((a, b) => a.id - b.id);
    }
}

// Apply filters
function applyFilters() {
    const selectedTypes = Array.from(filterCheckboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value);
    
    const selectedLangs = Array.from(langCheckboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value);
    
    const fromYear = parseInt(yearFrom.value) || 1900;
    const toYear = parseInt(yearTo.value) || 2024;
    
    filteredBooks = books.filter(book => {
        const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(book.type);
        const langMatch = selectedLangs.length === 0 || selectedLangs.includes(book.language);
        const yearMatch = book.year >= fromYear && book.year <= toYear;
        
        return typeMatch && langMatch && yearMatch;
    });
    
    currentPage = 1;
    sortBooks();
    displayBooks();
    updatePagination();
    updateResultsCount();
}

// Reset filters
function resetFilters() {
    // Reset checkboxes
    filterCheckboxes.forEach(cb => cb.checked = true);
    langCheckboxes.forEach(cb => {
        cb.checked = (cb.value === 'english');
    });
    
    // Reset year inputs
    yearFrom.value = 2000;
    yearTo.value = 2024;
    
    // Reset search
    searchInput.value = '';
    
    // Reset to all books
    filteredBooks = [...books];
    currentPage = 1;
    currentSort = 'relevance';
    sortSelect.value = 'relevance';
    
    displayBooks();
    updatePagination();
    updateResultsCount();
}

// Pagination
function updatePagination() {
    const totalPages = Math.ceil(filteredBooks.length / booksPerPage);
    
    currentPageSpan.textContent = currentPage;
    totalPagesSpan.textContent = totalPages;
    
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages || totalPages === 0;
}

function goToPrevPage() {
    if (currentPage > 1) {
        currentPage--;
        displayBooks();
        updatePagination();
    }
}

function goToNextPage() {
    const totalPages = Math.ceil(filteredBooks.length / booksPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        displayBooks();
        updatePagination();
    }
}

// Update results count
function updateResultsCount() {
    const count = filteredBooks.length;
    resultsCount.textContent = `(${count} item${count !== 1 ? 's' : ''} found)`;
}

// Animate library count
function animateLibraryCount() {
    let count = 0;
    const target = 18000;
    const increment = target / 100;
    const timer = setInterval(() => {
        count += increment;
        if (count >= target) {
            count = target;
            clearInterval(timer);
        }
        libraryCount.textContent = Math.floor(count).toLocaleString() + '+';
    }, 20);
}

// CSS Styles
const style = document.createElement('style');
style.textContent = `
    /* Reset and Base Styles */
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    body {
        background-color: #f8f9fa;
        color: #333;
        line-height: 1.6;
        min-height: 100vh;
    }

    .container {
        width: 90%;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 15px;
    }

    /* Header */
    .header {
        background: linear-gradient(135deg, #0056b3, #007bff);
        color: white;
        padding: 18px 0;
        box-shadow: 0 4px 12px rgba(0, 86, 179, 0.2);
        position: sticky;
        top: 0;
        z-index: 1000;
    }

    .logo {
        display: flex;
        align-items: center;
        gap: 20px;
        margin-bottom: 15px;
    }

    .logo i {
        font-size: 2.8rem;
        color: #ffd700;
    }

    .logo-text h1 {
        font-family: 'Poppins', sans-serif;
        font-size: 1.8rem;
        font-weight: 600;
    }

    .tagline {
        font-size: 0.9rem;
        opacity: 0.9;
        font-weight: 300;
    }

    .navbar {
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
    }

    .nav-link {
        color: rgba(255, 255, 255, 0.9);
        text-decoration: none;
        padding: 10px 18px;
        border-radius: 25px;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        gap: 8px;
        font-weight: 500;
    }

    .nav-link:hover, .nav-link.active {
        background-color: rgba(255, 255, 255, 0.15);
        color: white;
        transform: translateY(-2px);
    }

    /* Search Section */
    .search-section {
        background-color: white;
        padding: 35px 0;
        margin: 25px auto;
        border-radius: 12px;
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
    }

    .search-section h2 {
        color: #2c3e50;
        margin-bottom: 25px;
        display: flex;
        align-items: center;
        gap: 12px;
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
    }

    .search-box {
        display: flex;
        gap: 12px;
        flex-wrap: wrap;
        margin-bottom: 20px;
    }

    #searchInput {
        flex: 1;
        min-width: 280px;
        padding: 16px 20px;
        border: 2px solid #e0e0e0;
        border-radius: 10px;
        font-size: 1rem;
        transition: border-color 0.3s;
    }

    #searchInput:focus {
        border-color: #007bff;
        outline: none;
        box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
    }

    #searchType {
        padding: 16px;
        border: 2px solid #e0e0e0;
        border-radius: 10px;
        background: white;
        font-weight: 500;
    }

    #searchBtn {
        background: linear-gradient(135deg, #28a745, #20c997);
        color: white;
        border: none;
        padding: 16px 28px;
        border-radius: 10px;
        cursor: pointer;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 10px;
        transition: all 0.3s;
    }

    #searchBtn:hover {
        background: linear-gradient(135deg, #218838, #1ba87e);
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(40, 167, 69, 0.2);
    }

    .search-info {
        color: #6c757d;
        font-size: 0.95rem;
    }

    #libraryCount {
        font-weight: 700;
        color: #dc3545;
    }

    /* Main Content */
    .main-content {
        display: flex;
        gap: 30px;
        margin: 30px auto;
        flex-wrap: wrap;
    }

    /* Sidebar */
    .sidebar {
        flex: 1;
        min-width: 280px;
        background: white;
        padding: 25px;
        border-radius: 12px;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.06);
    }

    .sidebar h3 {
        color: #2c3e50;
        border-bottom: 3px solid #007bff;
        padding-bottom: 12px;
        margin-bottom: 25px;
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
    }

    .filter-option {
        margin-bottom: 28px;
    }

    .filter-option h4 {
        color: #495057;
        margin-bottom: 12px;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .filter-option label {
        display: block;
        padding: 10px 0;
        cursor: pointer;
        color: #555;
        transition: color 0.2s;
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .filter-option label:hover {
        color: #007bff;
    }

    .year-range {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-top: 10px;
    }

    .year-range input {
        width: 80px;
        padding: 10px;
        border: 2px solid #e0e0e0;
        border-radius: 6px;
        text-align: center;
    }

    .year-range span {
        color: #6c757d;
    }

    .apply-btn {
        width: 100%;
        padding: 14px;
        background: linear-gradient(135deg, #007bff, #0056b3);
        color: white;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        font-weight: 600;
        margin-bottom: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        transition: all 0.3s;
    }

    .apply-btn:hover {
        background: linear-gradient(135deg, #0056b3, #004494);
        transform: translateY(-2px);
    }

    .reset-btn {
        width: 100%;
        padding: 12px;
        background: #6c757d;
        color: white;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        font-weight: 500;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        transition: all 0.3s;
    }

    .reset-btn:hover {
        background: #545b62;
    }

    /* Content Area */
    .content {
        flex: 3;
        min-width: 300px;
    }

    .results-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 25px;
        flex-wrap: wrap;
        padding: 15px 0;
        border-bottom: 2px solid #e9ecef;
    }

    .results-header h3 {
        color: #2c3e50;
        font-family: 'Poppins', sans-serif;
    }

    #resultsCount {
        color: #6c757d;
        font-weight: 400;
        font-size: 1rem;
    }

    .sort-options {
        display: flex;
        align-items: center;
        gap: 12px;
    }

    .sort-options label {
        font-weight: 500;
        color: #495057;
    }

    #sortSelect {
        padding: 10px 16px;
        border-radius: 8px;
        border: 2px solid #dee2e6;
        background: white;
        font-weight: 500;
        min-width: 150px;
    }

    /* Results Container - UPDATED FOR PICTURES */
    .results-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
        gap: 25px;
    }

    .book-card {
        background: white;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
        transition: all 0.3s ease;
        border: 1px solid #e9ecef;
        display: flex;
        flex-direction: column;
        cursor: pointer;
    }

    .book-card:hover {
        transform: translateY(-6px);
        box-shadow: 0 12px 25px rgba(0, 0, 0, 0.12);
    }

    .book-image {
        height: 180px;
        background: linear-gradient(135deg, #f1f3f4, #dfe6e9);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
        border-bottom: 1px solid #e9ecef;
    }

    .book-image img {
        max-height: 140px;
        max-width: 100%;
        object-fit: contain;
        border-radius: 4px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .book-content {
        padding: 20px;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
    }

    .book-title {
        font-size: 1.25rem;
        color: #2c3e50;
        margin-bottom: 10px;
        font-weight: 600;
        line-height: 1.4;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    .book-author {
        color: #6c757d;
        margin-bottom: 15px;
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 0.95rem;
    }

    .book-details {
        margin-bottom: 15px;
        font-size: 0.9rem;
        color: #495057;
    }

    .book-details p {
        margin-bottom: 6px;
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .book-meta {
        display: flex;
        justify-content: space-between;
        margin-top: auto;
        font-size: 0.85rem;
    }

    .book-type {
        background: #e3f2fd;
        color: #1565c0;
        padding: 6px 12px;
        border-radius: 20px;
        font-weight: 500;
        display: flex;
        align-items: center;
        gap: 5px;
    }

    .book-lang {
        background: #f3e5f5;
        color: #7b1fa2;
        padding: 6px 12px;
        border-radius: 20px;
        font-weight: 500;
        display: flex;
        align-items: center;
        gap: 5px;
    }

    /* No Results */
    .no-results {
        grid-column: 1 / -1;
        text-align: center;
        padding: 60px 20px;
        background: white;
        border-radius: 12px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    }

    .no-results i {
        font-size: 4rem;
        color: #adb5bd;
        margin-bottom: 25px;
    }

    .no-results h3 {
        color: #495057;
        margin-bottom: 15px;
    }

    .no-results p {
        color: #6c757d;
    }

    /* Pagination */
    .pagination {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 25px;
        margin-top: 50px;
        flex-wrap: wrap;
        padding: 25px 0;
        border-top: 1px solid #e9ecef;
    }

    .pagination button {
        padding: 12px 24px;
        border: 2px solid #007bff;
        background: white;
        color: #007bff;
        border-radius: 8px;
        cursor: pointer;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 10px;
        transition: all 0.3s;
    }

    .pagination button:hover:not(:disabled) {
        background: #007bff;
        color: white;
        transform: translateY(-2px);
    }

    .pagination button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        border-color: #adb5bd;
        color: #adb5bd;
    }

    .page-info {
        font-weight: 600;
        color: #2c3e50;
        font-size: 1.1rem;
    }

    /* Footer */
    .footer {
        background: #2c3e50;
        color: #e9ecef;
        padding: 40px 0 25px;
        margin-top: 60px;
    }

    .footer-content {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 30px;
        margin-bottom: 30px;
    }

    .footer-section h4 {
        color: white;
        margin-bottom: 15px;
        font-family: 'Poppins', sans-serif;
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .footer-section p {
        line-height: 1.7;
        color: #adb5bd;
    }

    .copyright {
        text-align: center;
        padding-top: 25px;
        border-top: 1px solid #495057;
        color: #adb5bd;
        font-size: 0.9rem;
    }

    /* Responsive */
    @media (max-width: 768px) {
        .main-content {
            flex-direction: column;
        }
        
        .search-box {
            flex-direction: column;
        }
        
        #searchInput, #searchType, #searchBtn {
            width: 100%;
        }
        
        .results-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 15px;
        }
        
        .sort-options {
            width: 100%;
            justify-content: space-between;
        }
        
        .navbar {
            justify-content: center;
        }
        
        .logo {
            flex-direction: column;
            text-align: center;
            gap: 10px;
        }
        
        .logo-text {
            text-align: center;
        }
    }
`;

// Add CSS to document
document.head.appendChild(style);