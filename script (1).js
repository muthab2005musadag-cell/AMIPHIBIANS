document.addEventListener('DOMContentLoaded', () => {
    console.log("Animalia Engine Loaded.");
    
    // Highlight the active menu item based on current URL
    const links = document.querySelectorAll('nav a');
    const currentFile = window.location.pathname.split("/").pop();

    links.forEach(link => {
        if (link.getAttribute('href') === currentFile) {
            link.style.color = "#ffeb3b";
            link.style.fontWeight = "bold";
            link.style.fontSize = "1.3rem";
        }
    });
});