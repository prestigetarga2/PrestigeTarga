// Gestion du changement de langue
document.addEventListener('DOMContentLoaded', function() {
    const languageButtons = document.querySelectorAll('.lang-btn');
    const elementsWithTranslations = document.querySelectorAll('[data-fr]');
    
    // Fonction pour changer la langue
    function changeLanguage(lang) {
        // Mettre à jour les boutons
        languageButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            }
        });
        
        // Changer la direction du texte pour l'arabe
        if (lang === 'ar') {
            document.body.setAttribute('dir', 'rtl');
            document.documentElement.setAttribute('lang', 'ar');
        } else {
            document.body.removeAttribute('dir');
            document.documentElement.setAttribute('lang', lang);
        }
        
        // Mettre à jour le contenu avec animation
        elementsWithTranslations.forEach(element => {
            const newText = element.getAttribute(`data-${lang}`);
            if (newText) {
                // Animation de transition
                element.style.opacity = '0';
                element.style.transform = 'translateY(10px)';
                
                setTimeout(() => {
                    element.textContent = newText;
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }, 150);
            }
        });
        
        // Sauvegarder la préférence de langue
        localStorage.setItem('preferred-language', lang);
    }
    
    // Événements pour les boutons de langue
    languageButtons.forEach(button => {
        button.addEventListener('click', function() {
            const selectedLang = this.getAttribute('data-lang');
            changeLanguage(selectedLang);
        });
    });
    
    // Restaurer la langue préférée au chargement
    const savedLanguage = localStorage.getItem('preferred-language');
    if (savedLanguage) {
        changeLanguage(savedLanguage);
    }
    
    // Ajouter des styles de transition pour les éléments
    elementsWithTranslations.forEach(element => {
        element.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    });
});

/* Animations d'entrée supprimées */

/* Effet de parallaxe supprimé */

/* Animations des boutons supprimées */

/* Effet ripple supprimé */ 