
document.getElementById('menuToggle').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('open');
});

document.getElementById('searchInput').addEventListener('input', function () {
    const filter = this.value.toLowerCase();
    const links = document.querySelectorAll('.sidebar a');
    links.forEach(link => {
        const text = link.textContent.toLowerCase();
        link.style.display = text.includes(filter) ? '' : 'none';
    });
});
