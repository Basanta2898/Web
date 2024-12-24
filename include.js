function includeHTML(file, elementId) {
    fetch(file)
        .then(response => response.text())
        .then(data => document.getElementById(elementId).innerHTML = data)
        .catch(error => console.error('Error loading HTML:', error));
}

// Include Navbar
includeHTML('navbar.html', 'navbar');

// Include Footer
includeHTML('footer.html', 'footer');
