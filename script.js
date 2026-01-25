// Book Database
const books = [
    { 
        id: 1, 
        title: "The Great Gatsby", 
        author: "F. Scott Fitzgerald", 
        year: 1925, 
        type: "book", 
        language: "english", 
        pages: 218,
        isbn: "9780743273565",
        publisher: "Charles Scribner's Sons",
        description: "A classic novel of the Jazz Age, exploring themes of idealism, resistance to change, social upheaval, and excess.",
        available: true,
        format: "Print Book",
        genre: "Fiction",
        libraries: 1245,
        online: true
    },
    { 
        id: 2, 
        title: "To Kill a Mockingbird", 
        author: "Harper Lee", 
        year: 1960, 
        type: "book", 
        language: "english", 
        pages: 324,
        isbn: "9780061120084",
        publisher: "J.B. Lippincott & Co.",
        description: "A novel about the serious issues of rape and racial inequality, told through the eyes of a young girl in Alabama.",
        available: true,
        format: "Print Book, eBook, Audiobook",
        genre: "Fiction",
        libraries: 1987,
        online: true
    },
    { 
        id: 3, 
        title: "1984", 
        author: "George Orwell", 
        year: 1949, 
        type: "ebook", 
        language: "english", 
        pages: 328,
        isbn: "9780451524935",
        publisher: "Secker & Warburg",
        description: "A dystopian social science fiction novel and cautionary tale about the dangers of totalitarianism.",
        available: true,
        format: "eBook",
        genre: "Science Fiction",
        libraries: 1765,
        online: true
    },
    { 
        id: 4, 
        title: "Pride and Prejudice", 
        author: "Jane Austen", 
        year: 1813, 
        type: "audio", 
        language: "english", 
        pages: 432,
        isbn: "9780141439518",
        publisher: "T. Egerton, Whitehall",
        description: "A romantic novel of manners that depicts the emotional development of protagonist Elizabeth Bennet.",
        available: true,
        format: "Audiobook",
        genre: "Romance",
        libraries: 1543,
        online: true
    },
    { 
        id: 5, 
        title: "The Catcher in the Rye", 
        author: "J.D. Salinger", 
        year: 1951, 
        type: "book", 
        language: "english", 
        pages: 277,
        isbn: "9780316769488",
        publisher: "Little, Brown and Company",
        description: "A story about Holden Caulfield's experiences in New York City after being expelled from prep school.",
        available: true,
        format: "Print Book",
        genre: "Fiction",
        libraries: 1321,
        online: false
    },
    { 
        id: 6, 
        title: "Harry Potter and the Philosopher's Stone", 
        author: "J.K. Rowling", 
        year: 1997, 
        type: "book", 
        language: "english", 
        pages: 223,
        isbn: "9780747532743",
        publisher: "Bloomsbury",
        description: "The first novel in the Harry Potter series and Rowling's debut novel.",
        available: true,
        format: "Print Book, eBook",
        genre: "Fantasy",
        libraries: 2456,
        online: true
    },
    { 
        id: 7, 
        title: "The Hobbit", 
        author: "J.R.R. Tolkien", 
        year: 1937, 
        type: "book", 
        language: "english", 
        pages: 310,
        isbn: "9780547928227",
        publisher: "George Allen & Unwin",
        description: "Fantasy novel and children's book by J.R.R. Tolkien, set in Middle-earth.",
        available: true,
        format: "Print Book",
        genre: "Fantasy",
        libraries: 1890,
        online: true
    },
    { 
        id: 8, 
        title: "The Da Vinci Code", 
        author: "Dan Brown", 
        year: 2003, 
        type: "ebook", 
        language: "english", 
        pages: 454,
        isbn: "9780307474278",
        publisher: "Doubleday",
        description: "A mystery thriller novel that follows symbologist Robert Langdon.",
        available: true,
        format: "eBook",
        genre: "Thriller",
        libraries: 1678,
        online: true
    }
];

// Gardening Articles
const gardeningArticles = [
    {
        id: 1,
        title: "Organic Gardening",
        description: "Learn how to grow healthy plants without synthetic chemicals. Discover natural pest control methods and soil enhancement techniques.",
        icon: "fas fa-seedling"
    },
    {
        id: 2,
        title: "Landscape Design",
        description: "Create beautiful outdoor spaces with principles of landscape design. Learn about plant selection, hardscaping, and sustainable practices.",
        icon: "fas fa-tree"
    },
    {
        id: 3,
        title: "Vegetable Gardening",
        description: "Grow your own food with comprehensive guides on vegetable gardening. From soil preparation to harvest, become self-sufficient.",
        icon: "fas fa-apple-alt"
    },
    {
        id: 4,
        title: "Water Conservation",
        description: "Learn xeriscaping and water-wise gardening techniques to create beautiful landscapes that require minimal irrigation.",
        icon: "fas fa-tint"
    },
    {
        id: 5,
        title: "Indoor Gardening",
        description: "Bring nature indoors with houseplants, terrariums, and indoor herb gardens. Perfect for urban dwellers with limited space.",
        icon: "fas fa-home"
    }
];

// Popular User Lists
const popularLists = [
    {
        id: 1,
        title: "Best Books of 2023",
        items: 245,
        creator: "BookLover42",
        description: "A curated collection of the most acclaimed books published in 2023 across various genres including fiction, non-fiction, and poetry.",
        icon: "fas fa-crown"
    },
    {
        id: 2,
        title: "Historical Fiction Must-Reads",
        items: 189,
        creator: "HistoryBuff",
        description: "Transport yourself to different eras with these compelling historical fiction novels recommended by history enthusiasts.",
        icon: "fas fa-history"
    },
    {
        id: 3,
        title: "World Literature Classics",
        items: 312,
        creator: "GlobalReader",
        description: "Essential reading from around the world. This list features timeless classics from diverse cultures and literary traditions.",
        icon: "fas fa-globe-americas"
    },
    {
        id: 4,
        title: "Science & Technology",
        items: 176,
        creator: "TechGeek",
        description: "Explore groundbreaking books about scientific discoveries, technological innovations, and their impact on society.",
        icon: "fas fa-atom"
    }
];

// CSS Styles
const css = `
/* Reset and Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background-color: #f8f9fa;
    color: #333;
    line-height: 1.6;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Header Styles */
header {
    background-color: #fff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 100;
}

.header-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
    border-bottom: 1px solid #eee;
}

.logo {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 24px;
    font-weight: 700;
    color: #0066cc;
    text-decoration: none;
}

.logo i {
    font-size: 28px;
}

.auth-links a {
    color: #0066cc;
    text-decoration: none;
    margin-left: 20px;
    font-weight: 500;
}

.auth-links a:hover {
    text-decoration: underline;
}

.nav-links {
    display: flex;
    list-style: none;
    padding: 15px 0;
}

.nav-links li {
    margin-right: 30px;
}

.nav-links a {
    color: #555;
    text-decoration: none;
    font-weight: 500;
    padding: 5px 0;
    position: relative;
}

.nav-links a:hover {
    color: #0066cc;
}

.nav-links a.active {
    color: #0066cc;
    font-weight: 600;
}

.nav-links a.active::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: #0066cc;
}

/* Hero Section */
.hero {
    padding: 60px 0 40px;
    text-align: center;
    background-color: #fff;
}

.hero h1 {
    font-size: 42px;
    color: #0066cc;
    margin-bottom: 15px;
    font-weight: 700;
}

.hero p {
    font-size: 18px;
    color: #666;
    max-width: 800px;
    margin: 0 auto 30px;
}

/* Search Section - Centered */
.search-section {
    background-color: #fff;
    padding: 40px 30px;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    max-width: 900px;
    margin: 0 auto 40px;
}

.search-title {
    text-align: center;
    margin-bottom: 25px;
    font-size: 24px;
    color: #333;
}

.search-form {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
}

.search-input {
    flex: 1;
    padding: 15px;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 4px;
    outline: none;
    transition: border-color 0.3s;
}

.search-input:focus {
    border-color: #0066cc;
    box-shadow: 0 0 0 2px rgba(0, 102, 204, 0.2);
}

.search-button {
    background-color: #0066cc;
    color: white;
    border: none;
    padding: 0 30px;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s;
}

.search-button:hover {
    background-color: #0052a3;
}

.search-note {
    text-align: center;
    color: #666;
    font-size: 14px;
    margin-top: 10px;
}

/* Gardening & Yardening Section */
.gardening-section {
    padding: 50px 0;
    background-color: #f0f7f0;
}

.section-header {
    text-align: center;
    margin-bottom: 40px;
}

.section-header h2 {
    font-size: 32px;
    color: #2d5a27;
    margin-bottom: 10px;
}

.section-header p {
    color: #666;
    max-width: 700px;
    margin: 0 auto;
}

.swiper-container {
    width: 100%;
    padding: 20px 0 40px;
}

.gardening-card {
    background-color: #fff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s;
    height: 380px;
    display: flex;
    flex-direction: column;
}

.gardening-card:hover {
    transform: translateY(-5px);
}

.card-image {
    height: 180px;
    background-color: #e9f5e9;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #2d5a27;
    font-size: 48px;
}

.card-content {
    padding: 20px;
    flex: 1;
    display: flex;
    flex-direction: column;
}

.card-content h3 {
    color: #2d5a27;
    margin-bottom: 10px;
    font-size: 20px;
}

.card-content p {
    color: #666;
    margin-bottom: 15px;
    flex: 1;
}

.card-link {
    color: #0066cc;
    text-decoration: none;
    font-weight: 500;
    display: inline-flex;
    align-items: center;
    gap: 5px;
}

.swiper-button-next, .swiper-button-prev {
    background-color: #fff;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    color: #0066cc;
}

.swiper-button-next:after, .swiper-button-prev:after {
    font-size: 18px;
}

/* How to Use Section */
.how-to-section {
    padding: 60px 0;
    background-color: #fff;
}

.cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
    margin-top: 40px;
}

.how-to-card {
    background-color: #f8f9fa;
    border-radius: 8px;
    padding: 30px;
    border-left: 4px solid #0066cc;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s;
}

.how-to-card:hover {
    transform: translateY(-5px);
}

.how-to-card h3 {
    color: #0066cc;
    margin-bottom: 15px;
    font-size: 20px;
}

.how-to-card p {
    color: #666;
    margin-bottom: 20px;
}

/* Genealogy Section */
.genealogy-section {
    padding: 60px 0;
    background-color: #f5f0e6;
}

.genealogy-content {
    display: flex;
    align-items: center;
    gap: 40px;
}

.profile-image {
    flex: 0 0 200px;
    height: 200px;
    border-radius: 50%;
    background-color: #e6d9c2;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #8b7355;
    font-size: 60px;
    box-shadow: 0 8px 16px rgba(139, 115, 85, 0.15);
}

.genealogy-text {
    flex: 1;
}

.genealogy-text h2 {
    color: #8b7355;
    margin-bottom: 20px;
    font-size: 32px;
}

.genealogy-text p {
    color: #666;
    margin-bottom: 20px;
    font-size: 17px;
}

/* Resources Section */
.resources-section {
    padding: 60px 0;
    background-color: #fff;
}

.resources-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 25px;
    margin-top: 40px;
}

.resource-card {
    background-color: #f8f9fa;
    border-radius: 8px;
    padding: 25px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s;
}

.resource-card:hover {
    transform: translateY(-5px);
}

.resource-icon {
    font-size: 40px;
    color: #0066cc;
    margin-bottom: 15px;
}

.resource-card h3 {
    color: #333;
    margin-bottom: 10px;
    font-size: 18px;
}

.resource-count {
    font-size: 28px;
    font-weight: 700;
    color: #0066cc;
    margin-bottom: 5px;
}

/* Popular Lists Section */
.popular-lists-section {
    padding: 60px 0;
    background-color: #f0f7f0;
}

.lists-swiper {
    padding: 20px 0 50px;
}

.list-card {
    background-color: #fff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    height: 320px;
    display: flex;
    flex-direction: column;
}

.list-image {
    height: 140px;
    background-color: #e9f5e9;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #2d5a27;
    font-size: 40px;
}

.list-content {
    padding: 20px;
    flex: 1;
    display: flex;
    flex-direction: column;
}

.list-content h3 {
    color: #2d5a27;
    margin-bottom: 10px;
}

.list-count {
    color: #666;
    margin-bottom: 15px;
    font-size: 14px;
}

.list-desc {
    color: #666;
    flex: 1;
    font-size: 14px;
    margin-bottom: 15px;
}

/* Footer */
footer {
    background-color: #2c3e50;
    color: #ecf0f1;
    padding: 40px 0 20px;
}

.footer-top {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 30px;
    margin-bottom: 30px;
    padding-bottom: 30px;
    border-bottom: 1px solid #34495e;
}

.footer-column h3 {
    font-size: 18px;
    margin-bottom: 20px;
    color: #fff;
}

.footer-column ul {
    list-style: none;
}

.footer-column li {
    margin-bottom: 10px;
}

.footer-column a {
    color: #bdc3c7;
    text-decoration: none;
    font-size: 14px;
}

.footer-column a:hover {
    color: #fff;
    text-decoration: underline;
}

.footer-middle {
    text-align: center;
    margin-bottom: 30px;
    padding-bottom: 30px;
    border-bottom: 1px solid #34495e;
}

.footer-middle p {
    max-width: 800px;
    margin: 0 auto 20px;
    color: #bdc3c7;
    font-size: 15px;
}

.language-selector {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background-color: #34495e;
    padding: 8px 15px;
    border-radius: 4px;
}

.language-selector select {
    background-color: transparent;
    border: none;
    color: #ecf0f1;
    font-size: 14px;
}

.footer-bottom {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    font-size: 13px;
    color: #bdc3c7;
}

.footer-links {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.footer-links a {
    color: #bdc3c7;
    text-decoration: none;
}

.footer-links a:hover {
    color: #fff;
    text-decoration: underline;
}

.copyright {
    margin-top: 10px;
    flex-basis: 100%;
    text-align: center;
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid #34495e;
}

/* Results Modal */
.results-modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1000;
    overflow-y: auto;
}

.modal-content {
    background-color: #fff;
    margin: 50px auto;
    width: 90%;
    max-width: 1000px;
    border-radius: 8px;
    box-shadow: 0 5px 30px rgba(0, 0, 0, 0.3);
    max-height: 80vh;
    overflow-y: auto;
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid #eee;
}

.modal-header h2 {
    color: #0066cc;
}

.close-modal {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: #666;
}

.modal-body {
    padding: 20px;
}

/* Book Details Modal */
.book-details-modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1100;
    overflow-y: auto;
}

.book-modal-content {
    background-color: #fff;
    margin: 30px auto;
    width: 90%;
    max-width: 800px;
    border-radius: 8px;
    box-shadow: 0 5px 30px rgba(0, 0, 0, 0.3);
}

.book-modal-header {
    background-color: #0066cc;
    color: white;
    padding: 20px;
    border-radius: 8px 8px 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.book-modal-body {
    padding: 30px;
}

.book-info-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin-bottom: 30px;
}

.book-info-item {
    padding: 15px;
    background-color: #f8f9fa;
    border-radius: 4px;
}

.book-info-item strong {
    display: block;
    color: #666;
    font-size: 14px;
    margin-bottom: 5px;
}

.book-actions {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    margin-top: 30px;
}

.book-action-btn {
    padding: 12px 25px;
    background-color: #0066cc;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 15px;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 8px;
}

.book-action-btn.secondary {
    background-color: #f0f0f0;
    color: #333;
}

.book-action-btn:hover {
    opacity: 0.9;
}

/* Responsive Styles */
@media (max-width: 768px) {
    .header-top {
        flex-direction: column;
        gap: 15px;
    }
    
    .nav-links {
        overflow-x: auto;
        white-space: nowrap;
        padding-bottom: 10px;
    }
    
    .hero h1 {
        font-size: 32px;
    }
    
    .search-form {
        flex-direction: column;
    }
    
    .search-button {
        padding: 15px;
    }
    
    .genealogy-content {
        flex-direction: column;
        text-align: center;
    }
    
    .profile-image {
        margin-bottom: 20px;
    }
    
    .cards-grid {
        grid-template-columns: 1fr;
    }
    
    .footer-bottom {
        flex-direction: column;
        gap: 15px;
        text-align: center;
    }
    
    .footer-links {
        justify-content: center;
    }
    
    .book-actions {
        flex-direction: column;
    }
    
    .book-action-btn {
        width: 100%;
        justify-content: center;
    }
}

/* Loading Animation */
.loading-spinner {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px;
}

.spinner {
    width: 50px;
    height: 50px;
    border: 5px solid #f3f3f3;
    border-top: 5px solid #0066cc;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

/* Result Item Styles */
.result-item {
    display: flex;
    padding: 25px 0;
    border-bottom: 1px solid #eee;
    transition: background-color 0.2s;
}

.result-item:hover {
    background-color: #f9f9f9;
}

.book-cover {
    width: 120px;
    height: 170px;
    background-color: #f0f0f0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 25px;
    border-radius: 4px;
    color: #999;
    font-size: 14px;
    flex-shrink: 0;
    box-shadow: 0 3px 10px rgba(0,0,0,0.1);
}

.book-info {
    flex: 1;
}

.book-title {
    font-size: 20px;
    color: #0066cc;
    margin-bottom: 8px;
    font-weight: 600;
}

.book-meta {
    color: #666;
    font-size: 15px;
    margin-bottom: 10px;
}

.book-author {
    color: #333;
    font-weight: 500;
}

.book-description {
    color: #666;
    line-height: 1.6;
    margin-bottom: 15px;
}

.book-stats {
    display: flex;
    gap: 20px;
    color: #777;
    font-size: 14px;
    margin-bottom: 20px;
}

.book-actions-small {
    display: flex;
    gap: 12px;
}

.action-btn {
    padding: 8px 18px;
    background-color: #0066cc;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 6px;
    transition: background-color 0.2s;
}

.action-btn:hover {
    background-color: #0052a3;
}

.action-btn.secondary {
    background-color: #f0f0f0;
    color: #333;
}

.action-btn.secondary:hover {
    background-color: #e0e0e0;
}

.online-badge {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    background-color: #e6f2ff;
    color: #0066cc;
    padding: 3px 10px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: 500;
    margin-left: 10px;
}
`;

// Initialize WorldCat Application
function initWorldCat() {
    // Add CSS styles
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);

    // Load Swiper CSS
    const swiperCSS = document.createElement('link');
    swiperCSS.rel = 'stylesheet';
    swiperCSS.href = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css';
    document.head.appendChild(swiperCSS);

    // Load Font Awesome
    const fontAwesomeCSS = document.createElement('link');
    fontAwesomeCSS.rel = 'stylesheet';
    fontAwesomeCSS.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    document.head.appendChild(fontAwesomeCSS);

    // Create HTML structure
    document.body.innerHTML = `
    <!-- Header -->
    <header>
        <div class="container">
            <div class="header-top">
                <a href="#" class="logo">
                    <i class="fas fa-book"></i>
                    WorldCat.org
                </a>
                <div class="auth-links">
                    <a href="#" id="signInBtn"><i class="fas fa-user"></i> Sign In</a>
                    <a href="#" id="createAccountBtn"><i class="fas fa-user-plus"></i> Create Account</a>
                </div>
            </div>
            <nav>
                <ul class="nav-links">
                    <li><a href="#" class="active">Home</a></li>
                    <li><a href="#">Libraries</a></li>
                    <li><a href="#">Topics</a></li>
                    <li><a href="#">Lists</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">For Librarians</a></li>
                    <li><a href="#">Help & FAQ</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
        <div class="container">
            <h1>Welcome to WorldCat.org</h1>
            <p>Search for books, music, video, articles and more in libraries worldwide. Find what you need in the world's largest library catalog.</p>
        </div>
    </section>

    <!-- Search Section - Centered -->
    <section class="search-section container">
        <h2 class="search-title">Search for books</h2>
        <form id="searchForm" class="search-form">
            <input type="text" class="search-input" placeholder="Search for books, authors, ISBN, or keywords" id="searchQuery">
            <button type="submit" class="search-button">
                <i class="fas fa-search"></i> Search
            </button>
        </form>
        <p class="search-note">Search the collections of thousands of libraries worldwide</p>
    </section>

    <!-- Gardening & Yardening Section -->
    <section class="gardening-section">
        <div class="container">
            <div class="section-header">
                <h2>Gardening & Yardening</h2>
                <p>Discover books, guides and resources to help you create and maintain your perfect garden</p>
            </div>
            
            <!-- Swiper for Gardening Cards -->
            <div class="swiper-container">
                <div class="swiper gardening-swiper">
                    <div class="swiper-wrapper" id="gardeningSwiperWrapper">
                        <!-- Gardening cards will be dynamically inserted here -->
                    </div>
                    <!-- Navigation buttons -->
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                </div>
            </div>
        </div>
    </section>

    <!-- How to Use WorldCat.org Section -->
    <section class="how-to-section">
        <div class="container">
            <div class="section-header">
                <h2>How to use WorldCat.org</h2>
                <p>Get started with WorldCat.org and make the most of the world's largest library catalog</p>
            </div>
            
            <div class="cards-grid" id="howToCards">
                <!-- How-to cards will be dynamically inserted here -->
            </div>
        </div>
    </section>

    <!-- Genealogy Section -->
    <section class="genealogy-section">
        <div class="container">
            <div class="genealogy-content">
                <div class="profile-image">
                    <i class="fas fa-users"></i>
                </div>
                <div class="genealogy-text">
                    <h2>Genealogy</h2>
                    <p>If you're interested in genealogy or family history, you're in the right place. Libraries and archives are often the only source for unique, local information about cemetery, burial, and military records; family Bibles, church, and town histories; indexes of births, marriages, and deaths; photographs, newspapers, microfilm, and so much more.</p>
                    <a href="#" class="card-link">Learn more <i class="fas fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    </section>

    <!-- Explore Resources Section -->
    <section class="resources-section">
        <div class="container">
            <div class="section-header">
                <h2>Explore resources in libraries worldwide</h2>
                <p>Discover the vast collection available through WorldCat.org</p>
            </div>
            
            <div class="resources-grid" id="resourcesGrid">
                <!-- Resources will be dynamically inserted here -->
            </div>
        </div>
    </section>

    <!-- Popular Lists Section -->
    <section class="popular-lists-section">
        <div class="container">
            <div class="section-header">
                <h2>Popular WorldCat.org user lists</h2>
                <p>Discover curated lists created by WorldCat.org users around the world</p>
            </div>
            
            <!-- Swiper for Popular Lists -->
            <div class="lists-swiper">
                <div class="swiper popular-lists-swiper">
                    <div class="swiper-wrapper" id="popularListsWrapper">
                        <!-- Popular lists will be dynamically inserted here -->
                    </div>
                    <!-- Navigation buttons -->
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-top">
                <div class="footer-column">
                    <h3>WorldCat.org</h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Libraries</a></li>
                        <li><a href="#">Topics</a></li>
                        <li><a href="#">Lists</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>About</h3>
                    <ul>
                        <li><a href="#">About WorldCat</a></li>
                        <li><a href="#">For Librarians</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Cookie notice</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>Help</h3>
                    <ul>
                        <li><a href="#">Help & FAQ</a></li>
                        <li><a href="#">Accessibility Statement</a></li>
                        <li><a href="#">ISO 27001 Certificate</a></li>
                        <li><a href="#">Customize cookie settings</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>Legal</h3>
                    <ul>
                        <li><a href="#">Terms and Conditions</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Copyright</a></li>
                    </ul>
                </div>
            </div>
            
            <div class="footer-middle">
                <p>WorldCat is the world's largest library catalog, helping you find library materials online.</p>
                <div class="language-selector">
                    <i class="fas fa-globe"></i>
                    <select id="languageSelect">
                        <option>English</option>
                        <option>Español</option>
                        <option>Français</option>
                        <option>Deutsch</option>
                    </select>
                </div>
            </div>
            
            <div class="footer-bottom">
                <div class="footer-links">
                    <a href="#">Threads</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Accessibility Statement</a>
                    <a href="#">ISO 27001 Certificate</a>
                </div>
                <div class="copyright">
                    <p>Copyright © 2001-2026 OCLC. All rights reserved.</p>
                    <p>© 2026 OCLC Domestic and international trademarks and/or service marks of OCLC, Inc. and its affiliates.</p>
                </div>
            </div>
        </div>
    </footer>

    <!-- Search Results Modal -->
    <div id="resultsModal" class="results-modal">
        <div class="modal-content">
            <div class="modal-header">
                <h2>Search Results</h2>
                <button class="close-modal">&times;</button>
            </div>
            <div class="modal-body">
                <div id="resultsContainer">
                    <!-- Results will be dynamically inserted here -->
                </div>
            </div>
        </div>
    </div>

    <!-- Book Details Modal -->
    <div id="bookDetailsModal" class="book-details-modal">
        <div class="book-modal-content">
            <div class="book-modal-header">
                <h2 id="bookModalTitle">Book Details</h2>
                <button class="close-modal" id="closeBookModal">&times;</button>
            </div>
            <div class="book-modal-body">
                <div id="bookDetailsContent">
                    <!-- Book details will be dynamically inserted here -->
                </div>
            </div>
        </div>
    </div>
    `;

    // Initialize all sections
    initGardeningSection();
    initHowToSection();
    initResourcesSection();
    initPopularListsSection();
    setupEventListeners();
    
    // Initialize Swipers after content is loaded
    setTimeout(initSwipers, 100);
}

// Initialize gardening section
function initGardeningSection() {
    const wrapper = document.getElementById('gardeningSwiperWrapper');
    if (!wrapper) return;
    
    wrapper.innerHTML = gardeningArticles.map(article => `
        <div class="swiper-slide">
            <div class="gardening-card">
                <div class="card-image">
                    <i class="${article.icon}"></i>
                </div>
                <div class="card-content">
                    <h3>${article.title}</h3>
                    <p>${article.description}</p>
                    <a href="#" class="card-link explore-gardening" data-id="${article.id}">Explore books <i class="fas fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    `).join('');
}

// Initialize how-to section
function initHowToSection() {
    const container = document.getElementById('howToCards');
    if (!container) return;
    
    const howToCards = [
        {
            title: "Get started with WorldCat.org",
            content: "In about two minutes, you can learn how to make a WorldCat.org profile, create and add items to lists, export citations, and use facets to narrow your search criteria. It's a quick way to introduce yourself to the basics of searching the world's largest collection of information about materials in libraries.",
            link: "#"
        },
        {
            title: "Use WorldCat.org for school research",
            content: "Learn additional basic and advanced search techniques in this simple tutorial. We'll walk through how to get resources for a solar system report that a student might be assigned and also provide tips for college students and more advanced researchers.",
            link: "#"
        }
    ];
    
    container.innerHTML = howToCards.map(card => `
        <div class="how-to-card">
            <h3>${card.title}</h3>
            <p>${card.content}</p>
            <a href="${card.link}" class="card-link">Learn more <i class="fas fa-arrow-right"></i></a>
        </div>
    `).join('');
}

// Initialize resources section
function initResourcesSection() {
    const container = document.getElementById('resourcesGrid');
    if (!container) return;
    
    const resources = [
        { name: "Books", count: "405 million", icon: "fas fa-book" },
        { name: "Articles", count: "440 million", icon: "fas fa-newspaper" },
        { name: "Sound recordings", count: "25 million", icon: "fas fa-music" },
        { name: "Musical scores", count: "10 million", icon: "fas fa-music" },
        { name: "Maps", count: "6 million", icon: "fas fa-map" },
        { name: "Theses/Dissertations", count: "30 million", icon: "fas fa-graduation-cap" }
    ];
    
    container.innerHTML = resources.map(resource => `
        <div class="resource-card">
            <div class="resource-icon">
                <i class="${resource.icon}"></i>
            </div>
            <h3>${resource.name}</h3>
            <div class="resource-count">${resource.count}</div>
        </div>
    `).join('');
}

// Initialize popular lists section
function initPopularListsSection() {
    const wrapper = document.getElementById('popularListsWrapper');
    if (!wrapper) return;
    
    wrapper.innerHTML = popularLists.map(list => `
        <div class="swiper-slide">
            <div class="list-card">
                <div class="list-image">
                    <i class="${list.icon}"></i>
                </div>
                <div class="list-content">
                    <h3>${list.title}</h3>
                    <div class="list-count">${list.items} items</div>
                    <p class="list-desc">${list.description}</p>
                    <a href="#" class="card-link view-list" data-id="${list.id}">View list <i class="fas fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    `).join('');
}

// Initialize Swipers
function initSwipers() {
    // Initialize Gardening Swiper
    const gardeningSwiper = new Swiper('.gardening-swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: '.gardening-swiper .swiper-button-next',
            prevEl: '.gardening-swiper .swiper-button-prev',
        },
        breakpoints: {
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
        },
    });
    
    // Initialize Popular Lists Swiper
    const listsSwiper = new Swiper('.popular-lists-swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: '.popular-lists-swiper .swiper-button-next',
            prevEl: '.popular-lists-swiper .swiper-button-prev',
        },
        breakpoints: {
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
        },
    });
}

// Setup event listeners
function setupEventListeners() {
    // Search form submission
    const searchForm = document.getElementById('searchForm');
    const searchQueryInput = document.getElementById('searchQuery');
    const resultsModal = document.getElementById('resultsModal');
    const closeModalBtn = document.querySelector('.close-modal');
    const resultsContainer = document.getElementById('resultsContainer');
    
    // Search suggestions
    const searchSuggestions = [
        "Harry Potter",
        "Stephen King",
        "Python programming",
        "World history",
        "Climate change",
        "Artificial intelligence",
        "Gardening books",
        "Cookbooks",
        "Biography",
        "Science fiction"
    ];
    
    // Set random suggestion as placeholder
    if (searchQueryInput) {
        const randomSuggestion = searchSuggestions[Math.floor(Math.random() * searchSuggestions.length)];
        searchQueryInput.placeholder = `Try searching for "${randomSuggestion}"`;
    }
    
    // Search form submission
    if (searchForm) {
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const query = searchQueryInput.value.trim();
            
            if (query === '') {
                alert('Please enter a search query');
                return;
            }
            
            // Show loading state
            resultsContainer.innerHTML = `
                <div class="loading-spinner">
                    <div class="spinner"></div>
                    <p style="margin-left: 20px;">Searching for "${query}"...</p>
                </div>
            `;
            
            // Show modal
            resultsModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            
            // Simulate search delay and display results
            setTimeout(() => {
                displaySearchResults(query);
            }, 800);
        });
    }
    
    // Close modals
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            resultsModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }
    
    // Close book details modal
    const closeBookModalBtn = document.getElementById('closeBookModal');
    if (closeBookModalBtn) {
        closeBookModalBtn.addEventListener('click', () => {
            document.getElementById('bookDetailsModal').style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }
    
    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('results-modal')) {
            resultsModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        if (e.target.classList.contains('book-details-modal')) {
            document.getElementById('bookDetailsModal').style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Sign in button
    const signInBtn = document.getElementById('signInBtn');
    if (signInBtn) {
        signInBtn.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Sign In functionality would open a login form.');
        });
    }
    
    // Create account button
    const createAccountBtn = document.getElementById('createAccountBtn');
    if (createAccountBtn) {
        createAccountBtn.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Create Account functionality would open a registration form.');
        });
    }
    
    // Language selector
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        languageSelect.addEventListener('change', (e) => {
            alert(`Language changed to ${e.target.value}`);
        });
    }
    
    // Event delegation for dynamic content
    document.addEventListener('click', function(e) {
        // Gardening explore links
        if (e.target.closest('.explore-gardening')) {
            e.preventDefault();
            const articleId = e.target.closest('.explore-gardening').dataset.id;
            const article = gardeningArticles.find(a => a.id == articleId);
            if (article) {
                searchQueryInput.value = article.title;
                searchForm.dispatchEvent(new Event('submit'));
            }
        }
        
        // View list links
        if (e.target.closest('.view-list')) {
            e.preventDefault();
            const listId = e.target.closest('.view-list').dataset.id;
            const list = popularLists.find(l => l.id == listId);
            if (list) {
                searchQueryInput.value = list.title;
                searchForm.dispatchEvent(new Event('submit'));
            }
        }
        
        // View details buttons in search results
        if (e.target.closest('.view-details-btn')) {
            e.preventDefault();
            const bookId = e.target.closest('.view-details-btn').dataset.id;
            const book = books.find(b => b.id == bookId);
            if (book) {
                showBookDetails(book);
            }
        }
        
        // Find in library buttons
        if (e.target.closest('.find-library-btn')) {
            e.preventDefault();
            const bookId = e.target.closest('.find-library-btn').dataset.id;
            const book = books.find(b => b.id == bookId);
            if (book) {
                alert(`Searching for "${book.title}" in libraries near you...`);
            }
        }
        
        // Add to list buttons
        if (e.target.closest('.add-to-list-btn')) {
            e.preventDefault();
            const bookId = e.target.closest('.add-to-list-btn').dataset.id;
            const book = books.find(b => b.id == bookId);
            if (book) {
                alert(`"${book.title}" has been added to your reading list.`);
            }
        }
        
        // Read online buttons
        if (e.target.closest('.read-online-btn')) {
            e.preventDefault();
            const bookId = e.target.closest('.read-online-btn').dataset.id;
            const book = books.find(b => b.id == bookId);
            if (book) {
                alert(`Opening "${book.title}" in online reader...`);
            }
        }
    });
}

// Display search results
function displaySearchResults(query) {
    const resultsContainer = document.getElementById('resultsContainer');
    
    // Filter books based on query
    const filteredBooks = books.filter(book => 
        book.title.toLowerCase().includes(query.toLowerCase()) || 
        book.author.toLowerCase().includes(query.toLowerCase()) ||
        book.description.toLowerCase().includes(query.toLowerCase()) ||
        book.genre.toLowerCase().includes(query.toLowerCase())
    );
    
    if (filteredBooks.length === 0) {
        resultsContainer.innerHTML = `
            <div style="text-align: center; padding: 40px;">
                <i class="fas fa-search fa-3x" style="color: #ccc; margin-bottom: 20px;"></i>
                <h3>No results found for "${query}"</h3>
                <p>Try different keywords or check your spelling.</p>
                <div style="margin-top: 20px;">
                    <button onclick="document.getElementById('searchQuery').value = 'Gardening'; document.getElementById('searchForm').dispatchEvent(new Event('submit'))" style="padding: 10px 20px; background-color: #0066cc; color: white; border: none; border-radius: 4px; cursor: pointer; margin: 5px;">
                        Try "Gardening"
                    </button>
                    <button onclick="document.getElementById('searchQuery').value = 'History'; document.getElementById('searchForm').dispatchEvent(new Event('submit'))" style="padding: 10px 20px; background-color: #0066cc; color: white; border: none; border-radius: 4px; cursor: pointer; margin: 5px;">
                        Try "History"
                    </button>
                    <button onclick="document.getElementById('searchQuery').value = 'Science'; document.getElementById('searchForm').dispatchEvent(new Event('submit'))" style="padding: 10px 20px; background-color: #0066cc; color: white; border: none; border-radius: 4px; cursor: pointer; margin: 5px;">
                        Try "Science"
                    </button>
                </div>
            </div>
        `;
        return;
    }
    
    // Build results HTML
    let resultsHTML = `
        <div style="margin-bottom: 25px;">
            <p style="font-size: 16px; color: #666;">Found ${filteredBooks.length} results for "<strong style="color: #333;">${query}</strong>"</p>
        </div>
    `;
    
    filteredBooks.forEach(book => {
        resultsHTML += `
            <div class="result-item">
                <div class="book-cover">
                    <div style="text-align: center;">
                        <div style="font-size: 36px; margin-bottom: 5px;">📚</div>
                        <div style="font-size: 11px;">${book.format}</div>
                    </div>
                </div>
                <div class="book-info">
                    <h3 class="book-title">
                        ${book.title}
                        ${book.online ? '<span class="online-badge"><i class="fas fa-wifi"></i> Online</span>' : ''}
                    </h3>
                    <div class="book-meta">
                        <span class="book-author">by ${book.author}</span> • 
                        <span>${book.year}</span> • 
                        <span>${book.publisher}</span>
                    </div>
                    <p class="book-description">${book.description}</p>
                    <div class="book-stats">
                        <span><i class="fas fa-book"></i> ${book.pages} pages</span>
                        <span><i class="fas fa-language"></i> ${book.language.charAt(0).toUpperCase() + book.language.slice(1)}</span>
                        <span><i class="fas fa-hashtag"></i> ISBN: ${book.isbn}</span>
                        <span><i class="fas fa-university"></i> ${book.libraries.toLocaleString()} libraries</span>
                    </div>
                    <div class="book-actions-small">
                        <button class="action-btn view-details-btn" data-id="${book.id}">
                            <i class="fas fa-eye"></i> View Details
                        </button>
                        <button class="action-btn secondary find-library-btn" data-id="${book.id}">
                            <i class="fas fa-map-marker-alt"></i> Find Library
                        </button>
                        <button class="action-btn secondary add-to-list-btn" data-id="${book.id}">
                            <i class="fas fa-plus"></i> Add to List
                        </button>
                        ${book.online ? `
                            <button class="action-btn secondary read-online-btn" data-id="${book.id}">
                                <i class="fas fa-link"></i> Read Online
                            </button>
                        ` : ''}
                    </div>
                </div>
            </div>
        `;
    });
    
    resultsContainer.innerHTML = resultsHTML;
}

// Show book details modal
function showBookDetails(book) {
    const modal = document.getElementById('bookDetailsModal');
    const title = document.getElementById('bookModalTitle');
    const content = document.getElementById('bookDetailsContent');
    
    title.textContent = book.title;
    
    content.innerHTML = `
        <h3 style="color: #333; margin-bottom: 20px; font-size: 22px;">${book.title}</h3>
        <p style="color: #666; margin-bottom: 25px; line-height: 1.6;">${book.description}</p>
        
        <div class="book-info-grid">
            <div class="book-info-item">
                <strong>Author</strong>
                <span>${book.author}</span>
            </div>
            <div class="book-info-item">
                <strong>Published</strong>
                <span>${book.year}</span>
            </div>
            <div class="book-info-item">
                <strong>Publisher</strong>
                <span>${book.publisher}</span>
            </div>
            <div class="book-info-item">
                <strong>ISBN</strong>
                <span>${book.isbn}</span>
            </div>
            <div class="book-info-item">
                <strong>Pages</strong>
                <span>${book.pages}</span>
            </div>
            <div class="book-info-item">
                <strong>Language</strong>
                <span>${book.language.charAt(0).toUpperCase() + book.language.slice(1)}</span>
            </div>
            <div class="book-info-item">
                <strong>Format</strong>
                <span>${book.format}</span>
            </div>
            <div class="book-info-item">
                <strong>Available in</strong>
                <span>${book.libraries.toLocaleString()} libraries</span>
            </div>
        </div>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 6px; margin-top: 20px;">
            <h4 style="color: #333; margin-bottom: 10px;">Availability</h4>
            <p style="color: #666;">
                <i class="fas ${book.online ? 'fa-check-circle' : 'fa-times-circle'}" style="color: ${book.online ? '#28a745' : '#dc3545'}; margin-right: 8px;"></i>
                ${book.online ? 'Available online and in libraries worldwide' : 'Available in libraries worldwide'}
            </p>
        </div>
        
        <div class="book-actions">
            <button class="book-action-btn find-library-btn" data-id="${book.id}">
                <i class="fas fa-map-marker-alt"></i> Find in Library
            </button>
            <button class="book-action-btn secondary add-to-list-btn" data-id="${book.id}">
                <i class="fas fa-plus"></i> Add to List
            </button>
            ${book.online ? `
                <button class="book-action-btn secondary read-online-btn" data-id="${book.id}">
                    <i class="fas fa-link"></i> Read Online
                </button>
            ` : ''}
            <button class="book-action-btn secondary" onclick="printBookDetails('${book.title}')">
                <i class="fas fa-print"></i> Print Details
            </button>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Print book details function
window.printBookDetails = function(bookTitle) {
    alert(`Printing details for: ${bookTitle}`);
};

// Load Swiper JS dynamically
function loadSwiperJS() {
    return new Promise((resolve, reject) => {
        if (typeof Swiper !== 'undefined') {
            resolve();
            return;
        }
        
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await loadSwiperJS();
        initWorldCat();
    } catch (error) {
        console.error('Failed to load Swiper:', error);
        initWorldCat(); // Initialize without Swiper
    }
});
