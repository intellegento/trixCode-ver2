
import ReactAnime from 'react-animejs'
const {Anime, stagger} = ReactAnime

import $ from 'jquery';

require("jquery-ui/ui/widgets/autocomplete");
require("jquery-ui/ui/widgets/draggable");

var textWrapper = document.querySelector('.title');
// textWrapper.textContent = "err one" + " deserves" + "to be iced out";
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
// textWrapper.innerHTML = textWrapper.textContent.replace(/<br ?\/?>/g, "\n");

<Anime
  initial={[
    {
      targets: '.title .letter',
      scale: [4,1],
      opacity: [0,1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 950,
      delay: (el, i) => 50*i
    }
  ]}
  ></Anime>