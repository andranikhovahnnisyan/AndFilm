const themeSunBtn = document.getElementById("theme-sun-btn");
const themeMoonBtn = document.getElementById("theme-moon-btn");
const main = document.getElementById("main");
const search = document.getElementById("header_search");


themeSunBtn.addEventListener('click', () => {
themeSunBtn.style.transform = "translateY(40px)";
themeMoonBtn.style.transform = "translateY(0px)";
document.documentElement.style.setProperty('--header_footer-color', '#fff');
document.documentElement.style.setProperty('--white', '#000');
document.documentElement.style.setProperty('--hover-card', '#000');
document.documentElement.style.setProperty('--white-hover', 'rgba(0, 0, 0, 0.278)');
main.style.backgroundColor = "#ededed";
search.style.backgroundColor = "#e2e2e2";
})

themeMoonBtn.addEventListener('click', () => {
themeMoonBtn.style.transform = "translateY(40px)";
themeSunBtn.style.transform = "translateY(0px)";
document.documentElement.style.setProperty('--header_footer-color', '#242227');
document.documentElement.style.setProperty('--white', '#fff');
document.documentElement.style.setProperty('--hover-card', 'rgb(147, 146, 146)');
document.documentElement.style.setProperty('--white-hover', 'rgba(255, 255, 255, 0.278)');
main.style.backgroundColor = "#151617";
search.style.backgroundColor = "rgba(63, 61, 67, 0.956)";
})