// Load header
fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;
        
        const toggleSidebarButton = document.getElementById('toggleSidebar');
        const sidebar = document.getElementById('sidebar');
        const body = document.querySelector('body');

        toggleSidebarButton.addEventListener('click', () => {
            sidebar.classList.toggle('show');
        });

        body.addEventListener('click', (event) => {
            if (!sidebar.contains(event.target) && !toggleSidebarButton.contains(event.target)) {
                sidebar.classList.remove('show');
            }
        });
    });

// Load footer
fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    });
