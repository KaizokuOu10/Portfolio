// Dark mode toggle
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('darkmode-toggle');
  toggle.addEventListener('click', function () {
    document.body.classList.toggle('darkmode');
    toggle.innerHTML = document.body.classList.contains('darkmode')
      ? '<i class="fas fa-sun"></i> Light Mode'
      : '<i class="fas fa-moon"></i> Dark Mode';
  });
});
