document.addEventListener("DOMContentLoaded", function() {
    const includeElements = document.querySelectorAll('[data-include-html]');
    includeElements.forEach(el => {
        const filePath = el.getAttribute('data-include-html');
        fetch(filePath)
            .then(response => response.text())
            .then(data => {
                el.innerHTML = data;
            });
    });
});