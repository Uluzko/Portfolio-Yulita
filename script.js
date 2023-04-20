gsap.registerPlugin(ScrollTrigger);



const swiper = new Swiper('.swiper', {
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 30,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  centeredSlides: true,
  direction: 'horizontal',
  loop: true,
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 20
      }
    },
  pagination: {
      el: ".swiper-pagination",
    },
})



const isMobil = {
  Android: function () {
    return navigator.userAgent.match (/Android/i);
  },
  Blackberry: function () {
    return navigator.userAgent.match (/Blackberry/i);
  },
  iOS: function () {
    return navigator.userAgent.match (/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match (/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match (/IEMobile/i);
  },
  any: function () {
    return (
      isMobil.Android () ||
      isMobil.Blackberry () ||
      isMobil.iOS () ||
      isMobil.Opera () ||
      isMobil.Windows ()
    );
  }
}



function desktop () {
let master = gsap.timeline ();
master.add (greeting())
master.add (showCircles())
master.add (showName())
master.add (changeBlurFilter ())
master.add (changeNavbarBackgroundColor())
master.add (changeBackgroundColor())
master.add (showContacts())
}


function mobil () {
let master = gsap.timeline ();
master.add (greeting())
master.add (showCircles())
master.add (showName())
master.add (changeBlurFilter ())
master.add (changeNavbarBgColorMobil())
master.add (changeBgColorMobil())
master.add (showContacts())
}



function greeting () {
  let hello = gsap.timeline ()
  .from ('.hello span', {y:90, opacity:0, ease:'back', duration:1.6, stagger:0.1})
  .to ('.o', {rotation:180, duration:1.1, ease:'bounce'})
  .to ('.h', {y:37, ease:'bounce', duration:0.2})
  .to ('.e', {y:37, ease:'bounce', duration:0.2})
  .to ('.l', {y:37, ease:'bounce', duration:0.2})
  .to ('.ll', {y:37, ease:'bounce', duration:0.2})
  .to ('.hello span', {opacity:0, duration:0.8})
  return hello;
}


function showCircles () {
  gsap.defaults ({stagger:0.05, ease:'back'})
  let changeOpacity = gsap.timeline ()
      .fromTo ('.circle', {
        opacity:0,
        scale:0,
      },
      {
        scale:1,
        opacity:1
      })
      return changeOpacity;
}



function changeCircleShadow () {
  let object = {
    el: '.circle'
  }
  let changeShadow = gsap.timeline ()
    .fromTo (object.el, {
      background:"linear-gradient(to left bottom, #FEFCF3 10%, #DFD3C3)",
      boxShadow:"10px -5px 15px #8B7E74",
      yoyo: true,
      duration: 0.5,
      stagger: {
        amount: 15,
        from: "random",
        repeatDelay: 5,
        repeat: -1
      },
    },
    {
      background:"linear-gradient(to right top, #FEFCF3 10%, #DFD3C3)",
      boxShadow:"-10px 5px 15px #8B7E74",
      yoyo: true,
      duration: 0.5,
      stagger: {
        amount: 15,
        from: "random",
        repeatDelay: 5,
        repeat: -1
      },
      
    }
    )
    return changeShadow;
}




function showName () {
  let showMyName = gsap.timeline ()
    .from ('.myName', {opacity:0, duration:1})
    .from ('.scrollDown', {y:-100, opacity:0, duration:2}, 0)
  return showMyName;
}


function changeBackgroundColor () {
  let changeBackground = gsap.timeline ({
      scrollTrigger:{
        trigger:".wallpaper",
        scrub: true,
        start:'top 120%',
        end: '+=130%',
        toggleActions:"restart none none reverse",
        duration:2
      }
    })
    .to ('body', {background:'#1B2430'})
    .to ('.chapter', {color:'#FEFCF3'}, 0)
    .to ('.introducing', {color:'#FEFCF3'}, 0)
    .to ('.title', {color:'#FEFCF3'}, 0)
  return changeBackground;
}



function changeBgColorMobil () {
  let changeBackground = gsap.timeline ({
      scrollTrigger:{
        trigger:"#about",
        scrub: true,
        start:'top 45%',
        end: '+=70%',
        toggleActions:"restart none none reverse",
        duration:2
      }
    })
    .to ('body', {background:'#1B2430'})
    .to ('.chapter', {color:'#FEFCF3'}, 0)
    .to ('.introducing', {color:'#FEFCF3'}, 0)
    .to ('.title', {color:'#FEFCF3'}, 0)
  return changeBackground;
}


function changeBlurFilter () {
  let changeBlur = gsap.timeline ({
    scrollTrigger:{
      trigger:".scrollDown",
      scrub: true,
      start:'top 65%',
      end: '+=70%',
      toggleActions:"restart none none reverse",
      duration:2
    }
  })
  .to ('header', {backdropFilter: 'blur(6px)'})
return changeBlur;
}


function changeNavbarBackgroundColor () {
  let changeNavbar = gsap.timeline ({
    scrollTrigger:{
      trigger:"#about",
      scrub: true,
      start:'top 60%',
      end: '+=100%',
      toggleActions:"restart none none reverse",
      duration:2
    }
  })
  .to ('header', {background:'rgba(5, 8, 16, .6)'}, 0)
  .to ('.profession', {color:'#FEFCF3'}, 0)
  .to ('.navbar', {display: 'flex'}, 0)
  .to ('.nav-item', {color:'#FEFCF3', stagger: 0}, 0)
return changeNavbar;
}




function changeNavbarBgColorMobil () {
  let changeNavbar = gsap.timeline ({
    scrollTrigger:{
      trigger:".circlesContainer",
      scrub: true,
      start:'top 100px',
      end: '+=35%',
      toggleActions:"restart none none reverse",
      duration:2
    }
  })
  .to ('html', {'--darkColor':'#FEFCF3', '--lightColor': '#1B2430'})
  .to ('header', {background:'rgba(5, 8, 16, .6)'}, 0)
    .to ('.profession', {color:'#FEFCF3'}, 0)
    .to ('.burger-menu-icon span', {color:'#FEFCF3'}, 0)
return changeNavbar;
}


function scaleProject () {
let projectPicture = document.querySelectorAll ('.project-picture');

projectPicture.forEach (item => {
  let projectFocus = gsap.timeline ({paused:"true"})
  .to (item, {opacity:1, scale:0.95, ease: 'linear', duration:1.2})
  .to (item.querySelector ('img'), {scale:1.3, ease: 'linear', duration:1.2}, 0)

  item.addEventListener ('mouseenter', ()=> {
    projectFocus.play()
  })
  item.addEventListener ('mouseleave', ()=> {
    projectFocus.reverse()
  })
})
}


function showContacts () {
  let showContactsBackground = gsap.timeline ({
      scrollTrigger:{
        trigger:".chapter-contacts",
        scrub: true,
        start:'bottom 80%',
        end: '+=450',
        toggleActions:"restart none none reverse",
        duration:3
      }
    })
    .to ('.contacts-wrapper', {backgroundColor:'#050810'})
  return showContactsBackground;
}



let bubbleContainer = document.querySelectorAll ('.bubblesEffect');
numBubbles = 10;
minSize = 5;
maxSize = 12;


function bubbleSize() {
  return Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize;
}

function bubbleLocation() {
  return Math.floor(Math.random() * 96) + 2;
}

function bubbleLocationTwo(min, max) {
  min = 9;
  max = 15;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function bubbleEffect () {

bubbleContainer.forEach (item => {
  function createBubble() {
    let size = bubbleSize(),
    location = bubbleLocation(),
    el = document.createElement("span");
    el.classList.add ('bubble');
    el.setAttribute(
    "style",
    "width: " + size + "px; height: " + size + "px; left: " + location + "%; bottom: " + location + "%;"
    );
    item.appendChild(el);
  }


  item.addEventListener ('mouseenter', ()=> {
    let i = 0;
    i <= numBubbles;
    inter = setInterval(addBubble, 500);
    function addBubble() {
      i++;
      if (i < numBubbles) {
          createBubble();
      }
    }
  })
})
}

let bubbleContainerTwo = document.querySelector ('.back');

function flyingBubbles () {
  function createBubble () {
    let size = bubbleSize(),
    location = bubbleLocationTwo(),
    el = document.createElement("span");
    el.classList.add ('bubbleTwo');
    el.setAttribute(
    "style",
    "width: " + size + "px; height: " + size + "px; right: " + location + "%; bottom: " + location + "%;"
    );
  bubbleContainerTwo.appendChild(el);
  }

  let i = 0;
  i <= numBubbles * 2;
  inter = setInterval(addBubble, 500);
  function addBubble() {
    i++;
    if (i < numBubbles * 2) {
        createBubble();
    }
  }
}

  flyingBubbles ();


let circle = document.querySelectorAll ('.circle');

circle.forEach (item => {
  const changeShadow = gsap.timeline ({paused:"true"})
    .to (item, {
      duration: 0.1, 
      background:"linear-gradient(to left bottom, #FEFCF3 10%, #DFD3C3)",
      boxShadow:"10px -5px 15px #8B7E74"
    });

  item.addEventListener ('mouseenter', ()=> {
    changeShadow.play();
  })
  item.addEventListener ('mouseleave', ()=> {
    changeShadow.reverse()
  })
})


let iconMenu = document.querySelector ('.burger-menu-icon');
    menuBody = document.querySelector ('.burger-menu-body');


function mobilMenu () {
  iconMenu.addEventListener ('click', ()=> {
    menuBody.classList.toggle ('active');
    iconMenu.classList.toggle ('active');
    document.body.classList.toggle ('lock');
  })
}

const menuLinks = document.querySelectorAll ('.menu-link[data-goto]');

menuLinks.forEach (item => {
  item.addEventListener ('click', onMenuClick)
})


function onMenuClick (e) {
  const menuLink = e.target;
  if (menuLink.dataset.goto) {
    const goToChapter = document.querySelector (menuLink.dataset.goto);
    goToChapter.scrollIntoView ({
      block: "start",
      behavior: "smooth"
    });
    const goToChapterPosition = goToChapter.getBoundingClientRect().top + window.pageYOffset - document.querySelector ('header').offsetHeight;
    window.scrollTo({
      top: goToChapterPosition,
      behavior: 'smooth'
    });
    

    if (iconMenu.classList.contains ('active')) {
      menuBody.classList.remove ('active');
      iconMenu.classList.remove ('active');
      document.body.classList.remove ('lock');
    }
  e.preventDefault();
  }
}


if (isMobil.any()) {
  document.body.classList.add ('_touch');
  document.querySelector ('.swiper').style.display = 'block';
  document.querySelector ('#projects-wrapper').style.display = 'none';
  changeCircleShadow ();
  mobil();
  mobilMenu();
}
else {
  document.body.classList.add ('_pc');
  desktop();
  scaleProject();
  bubbleEffect();
}

