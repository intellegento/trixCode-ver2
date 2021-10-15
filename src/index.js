import "./styles/main.scss";
import Swiper from 'swiper/bundle';
// import styles bundle
import 'swiper/css/bundle';
// import SplitTextJS from 'split-text-js';
import anime from 'animejs/lib/anime.es.js';
import $ from 'jquery';

require("jquery-ui/ui/widgets/autocomplete");
require("jquery-ui/ui/widgets/draggable");




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
    breakpoints: {// настройки для разных разрешений
        1100: {
            slidesPerView: 2.5, 
        },
        768: {
            slidesPerView: 1.5,
        },
        576: {
            slidesPerView: 1,
        }
    }
});



var textWrapper = document.querySelector('.title');
// textWrapper.textContent = "err one" + " deserves" + "to be iced out";
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
// textWrapper.innerHTML = textWrapper.textContent.replace(/<br ?\/?>/g, "\n");



anime.timeline({loop: false})
  .add({
    targets: '.title .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 50*i
  });



  $(".submit-btn").draggable({cancel: false, containment: "parent", axis: "x", stop: function() {
    if (($(this).parent().width() / 2.5) === ($(this).position().left)) {
      $(this).closest("form").submit();
    } else {
      $(this).css({left: 0});
    }
  }}).on("click", function() {
    return false;
  });

  $(".footer-submit-btn").draggable({cancel: false, containment: "parent", axis: "x", stop: function() {
    if (($(this).parent().width() / 2.5) === ($(this).position().left)) {
      $(this).closest("footer-form").submit();
    } else {
      $(this).css({left: 0});
    }
  }}).on("click", function() {
    return false;
  });
  
//   element.addEventListener(preventDefault, { passive: false });
//   window.addEventListener('touchstart', e => e.preventDefault(), { passive: false });

  document.addEventListener("touchstart", touchHandler, true);
  document.addEventListener("touchmove", touchHandler, true);
  document.addEventListener("touchend", touchHandler, true);
  document.addEventListener("touchcancel", touchHandler, true);
  function touchHandler(event) {
      var touch = event.changedTouches[0];
  
      var simulatedEvent = document.createEvent("MouseEvent");
          simulatedEvent.initMouseEvent({
          touchstart: "mousedown",
          touchmove: "mousemove",
          touchend: "mouseup"
      }[event.type], true, true, window, 1,
          touch.screenX, touch.screenY,
          touch.clientX, touch.clientY, false,
          false, false, false, 0, null);
  
      touch.target.dispatchEvent(simulatedEvent);
      event.preventDefault();
  }