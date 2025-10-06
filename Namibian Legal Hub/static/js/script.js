// Chapter data
const chapters = [
    {
        number: 1,
        title: "The Republic",
        description: "This chapter establishes Namibia as a sovereign, democratic, and unitary state. It defines national symbols, the official language, and the supremacy of the Constitution."
    },
    {
        number: 2,
        title: "Citizenship",
        description: "It outlines who qualifies as a Namibian citizen by birth, descent, marriage, registration, or naturalisation. It also describes how citizenship can be lost or revoked."
    },
    {
        number: 3,
        title: "Fundamental Human Rights and Freedoms",
        description: "This chapter guarantees rights such as life, liberty, dignity, equality, education, and freedom of speech, religion, and association. It also prohibits slavery, torture, discrimination, and arbitrary arrest."
    },
    {
        number: 4,
        title: "Public Emergency, State of National Defence and Martial Law",
        description: "It provides for the declaration of a state of emergency, national defence, or martial law. It also outlines limits and safeguards to prevent abuse of these powers."
    },
    {
        number: 5,
        title: "The President",
        description: "The President is defined as Head of State, Government, and Commander-in-Chief. The chapter explains the election, powers, duties, term limits, and succession of the President and Vice-President."
    },
    {
        number: 6,
        title: "The Cabinet",
        description: "It establishes the Cabinet as the executive branch with Ministers and Deputy Ministers. Their roles include formulating policies, initiating laws, and managing government ministries."
    },
    {
        number: 7,
        title: "The National Assembly",
        description: "This chapter vests legislative power in the National Assembly. It sets out its composition, functions, law-making powers, privileges, and accountability to the people."
    },
    {
        number: 8,
        title: "The National Council",
        description: "The National Council is established as a reviewing house for legislation passed by the National Assembly. It consists of members elected by Regional Councils and ensures regional interests are represented."
    },
    {
        number: 9,
        title: "The Administration of Justice",
        description: "It defines the judiciary's independence and establishes the Supreme Court, High Court, and lower courts. It also explains the appointment and removal of judges, and the roles of the Attorney-General and Prosecutor-General."
    },
    {
        number: 10,
        title: "The Ombudsman",
        description: "The Ombudsman is established as an independent authority to protect human rights, oversee public administration, and investigate corruption and environmental issues. It defines the Ombudsman's appointment, functions, and powers."
    },
    {
        number: 11,
        title: "Principles of State Policy",
        description: "This chapter sets out guiding principles for governance, including welfare, health, education, economic justice, and protection of natural resources. It directs state policy but is not enforceable in court."
    },
    {
        number: 12,
        title: "Regional and Local Government",
        description: "It provides for the structures of Regional and Local Government. It defines their powers, functions, elections, and role in ensuring decentralisation and local development."
    },
    {
        number: 13,
        title: "The Public Service Commission",
        description: "The Commission oversees appointments and human resource management in the public service. It ensures fairness, efficiency, and accountability in the civil service."
    },
    {
        number: 14,
        title: "The Security Commission",
        description: "This body advises the President on the Defence Force, Police, and security services. It ensures security institutions are accountable and aligned with constitutional principles."
    },
    {
        number: 15,
        title: "The Police and Defence Forces",
        description: "It establishes Namibia's defence, police, intelligence, and correctional services. It defines their leadership, powers, accountability, and constitutional duties."
    },
    {
        number: 16,
        title: "Finance",
        description: "This chapter regulates state finances, including the State Revenue Fund, appropriations, and the Auditor-General. It ensures accountability and transparency in government spending."
    },
    {
        number: 17,
        title: "Central Bank and National Planning Commission",
        description: "It establishes the Central Bank to regulate currency and banking, and the National Planning Commission to guide economic development. Both are key to financial stability and national planning."
    },
    {
        number: 18,
        title: "Coming into Force of the Constitution",
        description: "This chapter declares that the Constitution came into effect at Independence on 21 March 1990. It signifies the legal birth of the Republic of Namibia."
    },
    {
        number: 19,
        title: "Amendment of the Constitution",
        description: "It explains how the Constitution may be amended. Fundamental rights and freedoms are entrenched, meaning they cannot be repealed or diminished."
    },
    {
        number: 20,
        title: "Transitional Provisions",
        description: "This chapter deals with transitional arrangements from colonial administration to independence. It validates existing laws and agreements until changed by the new state."
    },
    {
        number: 21,
        title: "Final Provisions",
        description: "It incorporates international law into Namibian law. It also provides definitions, repeals old laws, and gives the Constitution its short title."
    }
];

// Pagination variables
const itemsPerPage = 5;
let currentPage = 1;
const totalPages = Math.ceil(chapters.length / itemsPerPage);

// Function to display chapters for a specific page
function displayChapters(page) {
    const chapterList = document.getElementById('chapterList');
    if (!chapterList) return;
    
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
    if (!paginationContainer) return;
    
    paginationContainer.innerHTML = '';
    
    // Previous button
    const prevButton = document.createElement('button');
    prevButton.className = 'page-btn';
    prevButton.textContent = 'Previous';
    prevButton.disabled = currentPage === 1;
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
    nextButton.disabled = currentPage === totalPages;
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
        button.classList.remove('active');
        
        // Skip the Previous button (index 0) and Next button (last index)
        if (index > 0 && index <= totalPages) {
            if (index === currentPage) {
                button.classList.add('active');
            }
        }
        
        // Update Previous button disabled state
        if (index === 0) {
            button.disabled = currentPage === 1;
        }
        
        // Update Next button disabled state
        if (index === buttons.length - 1) {
            button.disabled = currentPage === totalPages;
        }
    });
}

// Function to handle protected features based on authentication
function checkProtectedFeatures() {
    // This would check if user is logged in and enable/disable features accordingly
    // For now, we'll just log the status
    console.log('Authentication features loaded');
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    // Initialize chapters and pagination only if on the chapters page
    const chapterList = document.getElementById('chapterList');
    if (chapterList) {
        displayChapters(currentPage);
        setupPagination();
    }
    
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
    
    // Check authentication state for protected features
    checkProtectedFeatures();
});