  const imgs = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80"
  ];

  let currentIdx = 0;
  const firstimg = document.getElementById('firstimg');
  const lastimg = document.getElementById('lastimg');
  const nextimg = document.getElementById('nextimg');

  function changeimg(index) {
    firstimg.style.opacity = 0.6;
    setTimeout(() => {
      firstimg.src = imgs[index];
      firstimg.style.opacity = 1;
    }, 120);
  }

  lastimg.addEventListener('click', () => {
    currentIdx = (currentIdx - 1 + imgs.length) % imgs.length;
    changeimg(currentIdx);
  });

  nextimg.addEventListener('click', () => {
    currentIdx = (currentIdx + 1) % imgs.length;
    changeimg(currentIdx);
  });

const sbtn = document.getElementById('save');
let toggled = false;

sbtn.addEventListener('click', function () {
  toggled = !toggled;
  if (toggled) {
    sbtn.classList.add('clicked');
    sbtn.textContent = 'Saved';
  } else {
    sbtn.classList.remove('clicked');
    sbtn.textContent = 'Save';
  }

    const isSaved = savedPlaces[cardId];
    savedPlaces[cardId] = !isSaved;
    localStorage.setItem('savedPlaces', JSON.stringify(savedPlaces));

    console.log(`Place ${cardId} saved state: ${savedPlaces[cardId]}`);
});

  const cardId = sbtn.getAttribute('data-id');

  let savedPlaces = localStorage.getItem('savedPlaces');
  savedPlaces = savedPlaces ? JSON.parse(savedPlaces) : {};

  if (savedPlaces[cardId]) {
    console.log(` ${cardId} saved.`);
    sbtn.classList.add('clicked');
    sbtn.textContent = 'Saved';
  } else {
    console.log(` ${cardId} saved yet.`);
    sbtn.classList.remove('clicked');
    sbtn.textContent = 'Save';
  }

  sbtn.addEventListener('click', function () {

  });




  gsap.registerPlugin(ScrollTrigger);

gsap.from(".title", {
  y: 40,
  opacity: 0,
  duration: 0.8,
  ease: "power2.out",

});

gsap.from(".sicon", {
  y: 16,
  opacity: 0,
  duration: 0.5,
  delay: 0.1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".sicon",
    start: "top 95%"
  }
});

gsap.from([".desc", ".infol"], {
  y: 22,
  opacity: 0,
  duration: 0.7,
  stagger: 0.16,
  ease: "power2.out",
});

gsap.from(".actions .btn", {
  scale: 0.92,
  opacity: 0,
  duration: 0.33,
  stagger: 0.11,
  ease: "back.out(1.5)",
  scrollTrigger: {
    trigger: ".actions",
    start: "top 95%"
  }
});


gsap.from(".imgside", {
  opacity: 0,
  scale: 0.96,
  duration: 0.75,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".imgside",
    start: "top 90%"
  }
});

gsap.from(".pbtns", {
  x: -24,
  opacity: 0,
  duration: 0.4,
  stagger: 0.13,
  delay: 0.2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".pbtns",
    start: "top 98%"
  }
});
