function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('hidden');
}

document.getElementById('search').addEventListener('input', function () {
  const filter = this.value.toLowerCase();
  const items = document.querySelectorAll('#toc li');
  items.forEach(item => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(filter) ? '' : 'none';
  });
});