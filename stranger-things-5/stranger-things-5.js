const themeSunBtn = document.getElementById("theme-sun-btn");
const themeMoonBtn = document.getElementById("theme-moon-btn");
const MobileThemeSunBtn = document.getElementById("mobile-theme-sun-btn");
const MobileThemeMoonBtn = document.getElementById("mobile-theme-moon-btn");
const main = document.getElementById("main");
const search = document.getElementById("header_search");
const menuForMobile = document.getElementById("menu-for-mobile");
const menuForMobileDisplay = document.getElementById("menu-for-mobile-display");
const mobileBackArrow = document.getElementById("mobile-back-arrow");
const LangEnBtn = document.getElementById("lang-en-btn");
const LangRuBtn = document.getElementById("lang-ru-btn");
const LangHyBtn = document.getElementById("lang-hy-btn");

const seriesOneBtn = document.getElementById("series-one-btn");
const seriesTwoBtn = document.getElementById("series-two-btn");
const seriesThreeBtn = document.getElementById("series-three-btn");
const seriesFourBtn = document.getElementById("series-four-btn");
const seriesFiveBtn = document.getElementById("series-five-btn");
const seriesSixBtn = document.getElementById("series-six-btn");
const seriesSevenBtn = document.getElementById("series-seven-btn");
const seriesEightBtn = document.getElementById("series-eight-btn");


const duration = document.getElementById("film-duration");
const seriesTitle = document.getElementById("series-title");
const seriesVid = document.getElementById("series-vid");





seriesOneBtn.addEventListener('click', () => {
seriesTitle.textContent = "Stranger Things 5 Episode 1 (2025)";
duration.textContent = "1:11:41";
seriesVid.src = "https://hls.armdb.org/file/armdb-hls/videos/95085/p_1.m3u8";
document.title = "AndFilm | Stranger Things 5 | 1";
})

seriesTwoBtn.addEventListener('click', () => {
seriesTitle.textContent = "Stranger Things 5 Episode 2 (2025)";
duration.textContent = "58:06";
seriesVid.src = "https://hls.armdb.org/file/armdb-hls/videos/95125/p_1.m3u8";
document.title = "AndFilm | Stranger Things 5 | 2";
})

seriesThreeBtn.addEventListener('click', () => {
seriesTitle.textContent = "Stranger Things 5 Episode 3 (2025)";
duration.textContent = "1:09:40";
seriesVid.src = "https://hls.armdb.org/file/armdb-hls/videos/95157/p_1.m3u8";
document.title = "AndFilm | Stranger Things 5 | 3";
})

seriesFourBtn.addEventListener('click', () => {
seriesTitle.textContent = "Stranger Things 5 Episode 4 (2025)";
duration.textContent = "1:21:40";
seriesVid.src = "https://hls.armdb.org/file/armdb-hls/videos/95253/p_1.m3u8";
document.title = "AndFilm | Stranger Things 5 | 4";
})

seriesFiveBtn.addEventListener('click', () => {
seriesTitle.textContent = "Stranger Things 5 Episode 5 (2025)";
duration.textContent = "1:08:17";
seriesVid.src = "https://hls.armdb.org/file/armdb-hls/videos/95740/p_1.m3u8";
document.title = "AndFilm | Stranger Things 5 | 5";
})

seriesSixBtn.addEventListener('click', () => {
seriesTitle.textContent = "Stranger Things 5 Episode 6 (2025)";
duration.textContent = "1:15:49";
seriesVid.src = "https://hls.armdb.org/file/armdb-hls/videos/95875/p_1.m3u8";
document.title = "AndFilm | Stranger Things 5 | 6";
})

seriesSevenBtn.addEventListener('click', () => {
seriesTitle.textContent = "Stranger Things 5 Episode 7 (2025)";
duration.textContent = "1:06:22";
seriesVid.src = "https://hls.armdb.org/file/armdb-hls/videos/96008/p_1.m3u8";
document.title = "AndFilm | Stranger Things 5 | 7";
})


seriesEightBtn.addEventListener('click', () => {
seriesTitle.textContent = "Stranger Things 5 Episode 8 (2025)";
duration.textContent = "2:08:31";
seriesVid.src = "https://hls.armdb.org/file/armdb-hls/videos/96132/p_1.m3u8";
document.title = "AndFilm | Stranger Things 5 | 8";
})



LangEnBtn.addEventListener('click', () => {

LangRuBtn.classList.toggle('active');
LangHyBtn.classList.toggle('active');

if (LangRuBtn.classList.contains('active')) {

LangRuBtn.style.opacity = "0";
LangRuBtn.style.pointerEvents = "none";
LangRuBtn.style.transform = "translateY(0px)";

LangHyBtn.style.opacity = "0";
LangHyBtn.style.pointerEvents = "none";
LangHyBtn.style.transform = "translateY(00px)";
}    

else {

LangRuBtn.style.opacity = "1";
LangRuBtn.style.pointerEvents = "auto";
LangRuBtn.style.transform = "translateY(40px)";

LangHyBtn.style.opacity = "1";
LangHyBtn.style.pointerEvents = "auto";
LangHyBtn.style.transform = "translateY(80px)";
}
})


menuForMobile.addEventListener('click', () => {
menuForMobile.style.opacity = "0";
menuForMobileDisplay.style.transform = "translateX(0px)";
})

mobileBackArrow.addEventListener ('click', () => {
menuForMobile.style.opacity = "1";
menuForMobileDisplay.style.transform = "translateX(-400px)";
})

themeSunBtn.addEventListener('click', () => {
themeSunBtn.style.transform = "translateY(40px)";
themeMoonBtn.style.transform = "translateY(0px)";
MobileThemeSunBtn.style.transform = "translateY(40px)";
MobileThemeMoonBtn.style.transform = "translateY(0px)";
document.documentElement.style.setProperty('--header_footer-color', '#fff');
document.documentElement.style.setProperty('--white', '#000');
document.documentElement.style.setProperty('--hover-card', '#000');
document.documentElement.style.setProperty('--white-hover', 'rgba(0, 0, 0, 0.278)');
document.documentElement.style.setProperty('--ftr-svg-hover', '#313131');
document.documentElement.style.setProperty('--series-btn', '#fff');
main.style.backgroundColor = "#dcdedffd";
search.style.backgroundColor = "#f1f3f4";
menuForMobileDisplay.style.backgroundColor = "rgba(255, 255, 255, 0.752)";
})

themeMoonBtn.addEventListener('click', () => {
themeMoonBtn.style.transform = "translateY(40px)";
themeSunBtn.style.transform = "translateY(0px)";
MobileThemeMoonBtn.style.transform = "translateY(40px)";
MobileThemeSunBtn.style.transform = "translateY(0px)";
document.documentElement.style.setProperty('--header_footer-color', '#242227');
document.documentElement.style.setProperty('--white', '#fff');
document.documentElement.style.setProperty('--hover-card', 'rgb(147, 146, 146)');
document.documentElement.style.setProperty('--white-hover', 'rgba(255, 255, 255, 0.278)');
document.documentElement.style.setProperty('--ftr-svg-hover', '#e9e9e9');
document.documentElement.style.setProperty('--series-btn', '#000');
main.style.backgroundColor = "#151617";
search.style.backgroundColor = "rgba(63, 61, 67, 0.956)";
menuForMobileDisplay.style.backgroundColor = "rgba(0, 0, 0, 0.752)";
})



MobileThemeSunBtn.addEventListener('click', () => {
MobileThemeSunBtn.style.transform = "translateY(40px)";
MobileThemeMoonBtn.style.transform = "translateY(0px)";
themeSunBtn.style.transform = "translateY(40px)";
themeMoonBtn.style.transform = "translateY(0px)";
document.documentElement.style.setProperty('--header_footer-color', '#fff');
document.documentElement.style.setProperty('--white', '#000');
document.documentElement.style.setProperty('--hover-card', '#000');
document.documentElement.style.setProperty('--white-hover', 'rgba(0, 0, 0, 0.278)');
document.documentElement.style.setProperty('--ftr-svg-hover', '#313131');
document.documentElement.style.setProperty('--series-btn', '#fff');
main.style.backgroundColor = "#dcdedffd";
search.style.backgroundColor = "#f1f3f4";
menuForMobileDisplay.style.backgroundColor = "rgba(255, 255, 255, 0.752)";
})

MobileThemeMoonBtn.addEventListener('click', () => {
MobileThemeMoonBtn.style.transform = "translateY(40px)";
MobileThemeSunBtn.style.transform = "translateY(0px)";
themeMoonBtn.style.transform = "translateY(40px)";
themeSunBtn.style.transform = "translateY(0px)";
document.documentElement.style.setProperty('--header_footer-color', '#242227');
document.documentElement.style.setProperty('--white', '#fff');
document.documentElement.style.setProperty('--hover-card', 'rgb(147, 146, 146)');
document.documentElement.style.setProperty('--white-hover', 'rgba(255, 255, 255, 0.278)');
document.documentElement.style.setProperty('--ftr-svg-hover', '#e9e9e9');
document.documentElement.style.setProperty('--series-btn', '#000');
main.style.backgroundColor = "#151617";
search.style.backgroundColor = "rgba(63, 61, 67, 0.956)";
menuForMobileDisplay.style.backgroundColor = "rgba(0, 0, 0, 0.752)";
})