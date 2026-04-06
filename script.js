// ============================================
// THEME TOGGLE — Light / Dark
// ============================================
function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.getAttribute('data-theme') === 'dark';

  html.setAttribute('data-theme', isDark ? 'light' : 'dark');
  document.getElementById('themeIcon').textContent  = isDark ? '◑' : '●';
  document.getElementById('themeLabel').textContent = isDark ? 'Light' : 'Dark';
}
// ============================================
// CLOCK — User's local timezone
// ============================================
function updateClock() {
  const now = new Date();
  document.getElementById('clock').textContent = now.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });
}

updateClock();
setInterval(updateClock, 1000);

// ============================================
// EMAIL DROPDOWN TOGGLE
// ============================================
function toggleEmail() {
  const dropdown = document.getElementById('emailDropdown');
  dropdown.classList.toggle('visible');
}

// ============================================
// SCROLL REVEAL — Cards animate on scroll
// ============================================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
//Last updated - 06/04/2026
