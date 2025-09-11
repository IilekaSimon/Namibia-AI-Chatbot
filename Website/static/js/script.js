// Chapter data
const chapters = [
    {
        number: 1,
        title: "The Republic",
        description: "Establishes Namibia as a sovereign, secular, democratic and unitary State and defines its territory."
    },
    {
        number: 2,
        title: "Citizenship",
        description: "Defines who is a Namibian citizen and outlines the principles of citizenship."
    },
    {
        number: 3,
        title: "Fundamental Human Rights and Freedoms",
        description: "Contains the Bill of Rights, protecting individual liberties and freedoms."
    },
    {
        number: 4,
        title: "Public Emergency, State of National Defence and Martial Law",
        description: "Outlines procedures for declaring and managing states of emergency."
    },
    {
        number: 5,
        title: "The President",
        description: "Defines the powers, functions, and election procedures for the President."
    },
    {
        number: 6,
        title: "The Cabinet",
        description: "Establishes the composition and functions of the Cabinet and its members."
    },
    {
        number: 7,
        title: "The National Assembly",
        description: "Establishes the composition, powers, and functions of the National Assembly."
    },
    {
        number: 8,
        title: "The National Council",
        description: "Establishes the composition, powers, and functions of the National Council."
    },
    {
        number: 9,
        title: "The Administration of Justice",
        description: "Outlines the structure and powers of the judiciary in Namibia."
    },
    {
        number: 10,
        title: "The Ombudsman",
        description: "Establishes the Office of the Ombudsman and its functions."
    },
    {
        number: 11,
        title: "Principles of State Policy",
        description: "Sets out the guiding principles for state policy and governance."
    },
    {
        number: 12,
        title: "Regional and Local Government",
        description: "Defines the structure and functions of regional and local government."
    },
    {
        number: 13,
        title: "The Public Service Commission",
        description: "Establishes the Public Service Commission and its functions."
    },
    {
        number: 14,
        title: "The Security Commission",
        description: "Establishes the Security Commission and its functions."
    },
    {
        number: 15,
        title: "The Police and Defence Forces",
        description: "Defines the structure and functions of the police and defence forces."
    },
    {
        number: 16,
        title: "Finance",
        description: "Outlines the financial management and fiscal policies of the state."
    },
    {
        number: 17,
        title: "Auditor-General",
        description: "Establishes the Office of the Auditor-General and its functions."
    },
    {
        number: 18,
        title: "Public Service",
        description: "Defines the structure and regulations of the public service."
    },
    {
        number: 19,
        title: "Commissioners",
        description: "Outlines the appointment and functions of various commissioners."
    },
    {
        number: 20,
        title: "Amendments of the Constitution",
        description: "Sets out the procedures for amending the Constitution."
    },
    {
        number: 21,
        title: "Final Provisions",
        description: "Contains transitional and final provisions of the Constitution."
    }
];

// Pagination variables
const itemsPerPage = 5;
let currentPage = 1;
const totalPages = Math.ceil(chapters.length / itemsPerPage);

// Function to display chapters for a specific page
function displayChapters(page) {
    const chapterList = document.getElementById('chapterList');
    chapterList.innerHTML = '';
    
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, chapters.length);
    
    for (let i = startIndex; i < endIndex; i++) {
        const chapter = chapters[i];
        const chapterElement = document.createElement('div');
        chapterElement.className = 'chapter-item';
        chapterElement.innerHTML = `
            <h3><span class="chapter-number">${chapter.number}</span> ${chapter.title}</h3>
            <p>${chapter.description}</p>
        `;
        chapterList.appendChild(chapterElement);
    }
}

// Function to create pagination buttons
function setupPagination() {
    const paginationContainer = document.getElementById('pagination');
    paginationContainer.innerHTML = '';
    
    // Previous button
    const prevButton = document.createElement('button');
    prevButton.className = 'page-btn';
    prevButton.textContent = 'Previous';
    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            displayChapters(currentPage);
            updatePaginationButtons();
        }
    });
    paginationContainer.appendChild(prevButton);
    
    // Page number buttons
    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.className = 'page-btn';
        pageButton.textContent = i;
        if (i === currentPage) {
            pageButton.classList.add('active');
        }
        pageButton.addEventListener('click', () => {
            currentPage = i;
            displayChapters(currentPage);
            updatePaginationButtons();
        });
        paginationContainer.appendChild(pageButton);
    }
    
    // Next button
    const nextButton = document.createElement('button');
    nextButton.className = 'page-btn';
    nextButton.textContent = 'Next';
    nextButton.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            displayChapters(currentPage);
            updatePaginationButtons();
        }
    });
    paginationContainer.appendChild(nextButton);
}

// Function to update active state of pagination buttons
function updatePaginationButtons() {
    const buttons = document.querySelectorAll('.page-btn');
    buttons.forEach((button, index) => {
        // The first button is Previous, so we need to adjust the index
        if (index === currentPage) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    // Initialize chapters and pagination
    displayChapters(currentPage);
    setupPagination();
    
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mainNav = document.getElementById('mainNav');
    
    if (mobileMenuBtn && mainNav) {
        mobileMenuBtn.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });
    }
    
    // Back to top button
    const backToTopBtn = document.getElementById('backToTop');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });
        
        backToTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (mainNav && mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                }
            }
        });
    });
});