document.addEventListener('DOMContentLoaded', () => {
    const footer = document.getElementById('footer');
    const toggle = document.getElementById('toggle');

    toggle.addEventListener('click', () => {
        footer.classList.toggle('expanded');
    });
});
