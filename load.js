// Function to load HTML content into an element
        function loadHTML(id, url) {
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Could not fetch ${url}`);
                    }
                    return response.text();
                })
                .then(data => {
                    document.getElementById(id).innerHTML = data;
                })
                .catch(error => console.error('Error:', error));
        }

        // Load navbar and footer
        loadHTML('navbar', 'navbar.html');
        loadHTML('footer', 'footer.html');
   