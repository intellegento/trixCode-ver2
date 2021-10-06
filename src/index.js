import "./styles/main.scss";
import Swiper from 'swiper/bundle';
// import styles bundle
import 'swiper/css/bundle';


const swiper = new Swiper(".swiper", {
    slidesPerView: 2.5,
    spaceBetween: 1,
    pagination: {
        el: ".swiper-pagination"
    },
    navigation: {
        nextEl: ".slider-header-arrow-next",
        prevEl: ".slider-header-arrow-prev",
    },
});