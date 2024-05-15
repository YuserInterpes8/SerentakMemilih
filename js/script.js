const toggleSidebarButton = document.getElementById('toggleSidebar');
const sidebar = document.getElementById('sidebar');
const content = document.querySelector('.content');
const body = document.querySelector('body');

toggleSidebarButton.addEventListener('click', () => {
    sidebar.classList.toggle('show');
});

body.addEventListener('click', (event) => {
    if (!sidebar.contains(event.target) && !toggleSidebarButton.contains(event.target)) {
        sidebar.classList.remove('show');
    }
});
