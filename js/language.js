// Language translations object
const translations = {
    english: {
        // Header
        'college-name': 'LONKAR MADHYAMIK VIDYALAYA<br>& JUNIOR COLLEGE, MUNDHWA',
        'college-affiliation': '( Affiliated to Maharashtra State Board of Secondary & Higher Secondary Education )',
        'naac-grade': '"NAAC Grade A+"',
        'college-info-extra': 'Estd. 1971',
        
        // Navigation
        'nav-home': 'Home',
        'nav-about': 'About Us',
        'nav-academics': 'Academics',
        'nav-faculties': 'Faculties',
        'nav-gallery': 'Gallery',
        'nav-feedback': 'Feedback',
        
        // Left Sidebar
        'program-outcomes': 'Program Outcomes',
        'research-centre': 'Research Centre',
        'infra-facility': 'Infra. & Facility',
        'scholarships': 'Scholarships',
        
        // Right Sidebar
        'notice': 'Notice',
        'news': 'News',
        'calendar': 'Monthly Calendar',
        'admission': 'Admission',
        'complaint': 'Complaint',
        
        // Language Button
        'lang-text': 'मराठी',
        'lang-title': 'मराठीत बदला'
    },
    marathi: {
        // Header
        'college-name': 'लोणकर माध्यमिक विद्यालय<br>आणि कनिष्ठ महाविद्यालय, मुंढवा',
        'college-affiliation': '(माध्यमिक व उच्च माध्यमिक शिक्षण मंडळ, महाराष्ट्र राज्य यांच्याशी संलग्न)',
        'naac-grade': '"नॅक ग्रेड ए+"',
        'college-info-extra': 'स्थापना १९७१',
        
        // Navigation
        'nav-home': 'मुख्यपृष्ठ',
        'nav-about': 'आमच्याबद्दल',
        'nav-academics': 'शैक्षणिक',
        'nav-faculties': 'विभाग',
        'nav-gallery': 'गॅलरी',
        'nav-feedback': 'अभिप्राय',
        
        // Left Sidebar
        'program-outcomes': 'कार्यक्रम परिणाम',
        'research-centre': 'संशोधन केंद्र',
        'infra-facility': 'पायाभूत सुविधा',
        'scholarships': 'शिष्यवृत्ती',
        
        // Right Sidebar
        'notice': 'सूचना',
        'news': 'बातम्या',
        'calendar': 'मासिक दिनदर्शिका',
        'admission': 'प्रवेश',
        'complaint': 'तक्रार',
        
        // Language Button
        'lang-text': 'English',
        'lang-title': 'Switch to English'
    }
};

// Current language state
let currentLang = localStorage.getItem('preferredLanguage') || 'english';

// Helper function to update element text
function updateElementText(selector, key) {
    const element = document.querySelector(selector);
    if (element && translations[currentLang][key]) {
        element.innerHTML = translations[currentLang][key];
    }
}

// Main toggle function
function toggleLanguage() {
    currentLang = currentLang === 'english' ? 'marathi' : 'english';
    
    try {
        // Update button text and title
        const langText = document.querySelector('.lang-text');
        const button = document.querySelector('.lang-toggle-btn');
        if (langText && button) {
            langText.textContent = translations[currentLang]['lang-text'];
            button.title = translations[currentLang]['lang-title'];
        }
        
        // Update all elements with data-translate attribute
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[currentLang][key]) {
                if (element.tagName.toLowerCase() === 'input' || element.tagName.toLowerCase() === 'textarea') {
                    element.placeholder = translations[currentLang][key];
                } else {
                    element.innerHTML = translations[currentLang][key];
                }
            }
        });
        
        // Update header elements
        updateElementText('.college-name', 'college-name');
        updateElementText('.college-affiliation', 'college-affiliation');
        updateElementText('.naac-grade', 'naac-grade');
        updateElementText('.college-info-extra', 'college-info-extra');
        
        // Update navigation links
        document.querySelectorAll('.nav-links a').forEach((link, index) => {
            const keys = ['nav-home', 'nav-about', 'nav-academics', 'nav-faculties', 'nav-gallery', 'nav-feedback'];
            if (keys[index]) {
                link.textContent = translations[currentLang][keys[index]];
            }
        });
        
        // Update sidebar menus
        document.querySelectorAll('.left-menu a span').forEach((span, index) => {
            const keys = ['program-outcomes', 'research-centre', 'infra-facility', 'scholarships'];
            if (keys[index]) {
                span.textContent = translations[currentLang][keys[index]];
            }
        });
        
        document.querySelectorAll('.right-menu a span').forEach((span, index) => {
            const keys = ['notice', 'news', 'calendar', 'admission', 'complaint'];
            if (keys[index]) {
                span.textContent = translations[currentLang][keys[index]];
            }
        });
        
        // Store language preference
        localStorage.setItem('preferredLanguage', currentLang);
        
    } catch (error) {
        console.error('Error during language translation:', error);
    }
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    const storedLang = localStorage.getItem('preferredLanguage');
    if (storedLang) {
        currentLang = storedLang;
        toggleLanguage();
    }
}); 