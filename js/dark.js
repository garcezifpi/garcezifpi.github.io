const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
document.documentElement.setAttribute('data-bs-theme', initialTheme);

const toggler = document.getElementById('themeToggler');
const icon = document.getElementById('themeIcon');
//   const label = document.getElementById('themeLabel');

// Sync toggle state with the active theme on page load
globalThis.currentTheme = initialTheme

function updateIcon() {
    if (globalThis.currentTheme === "dark") {
        icon.classList.remove("bi-sun-fill")
        icon.classList.add("bi-moon-fill")
    }
    else {
        icon.classList.remove("bi-moon-fill")
        icon.classList.add("bi-sun-fill")
    }
}

updateIcon()

// Listen for user interaction
toggler.addEventListener('click', () => {
  if (globalThis.currentTheme === "light") {
    document.documentElement.setAttribute('data-bs-theme', 'dark');
    globalThis.currentTheme = "dark"
    updateIcon()
    localStorage.setItem('theme', 'dark');
  //   label.textContent = 'Dark Mode';
  } else {
    document.documentElement.setAttribute('data-bs-theme', 'light');
    globalThis.currentTheme = "light"
    updateIcon()
    localStorage.setItem('theme', 'light');
  //   label.textContent = 'Light Mode';
  }
});
