
  const lenis = new Lenis()

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)



function selectLocation(name) {
    const title = document.getElementById("headtext");
    const content = document.getElementById("descid");
    const modal = document.getElementById("cpid");

    title.textContent = name;
    modal.classList.remove("hidden");
    modal.classList.add("show");
    if (name === "Cafe Latte") {
      modal.setAttribute('data-id', 'c1');
      console.log(modal.getAttribute('data-id'));
      content.textContent = "A cozy place known for its caramel brew and vintage vibe.";
    } else if (name === "Old Bookstore") {
      modal.setAttribute('data-id', 'c2');
      content.textContent = "Home to rare finds and first editions. A paradise for readers.";
    } else if (name === "Community Hall") {
      modal.setAttribute('data-id', 'c3');
      content.textContent = "Events, meetings, and performances happen regularly here.";
    } else if (name === "Its you silly :)") {
      content.textContent = "This is where you are! Explore your surroundings and discover hidden gems.";
      document.getElementById("cpid").classList.add("hidden");
    document.getElementById("cpid").classList.remove("show");
    }
      else {
      content.textContent = "Details coming soon.";
    }

    
  }

  function closeModal() {
    document.getElementById("cpid").classList.add("hidden");
    document.getElementById("cpid").classList.remove("show");
  }
  document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
      closeModal();
    }});


  window.addEventListener("DOMContentLoaded", () => {
  const tl = gsap.timeline();

  tl.from(".hero", { opacity: 0, y: 60, duration: 1, ease: "power2.out" })
    .from(".left span", { opacity: 0, y: 30, duration: 0.6 }, "-=0.8")
    .from(".left p", { opacity: 0, y: 30, duration: 0.6 }, "-=0.5")
    .to(".cta-btn", { opacity: 1, scale: 1,y: 0, duration: 0.3, ease: "back.out(1.7)" }, "-=0.2")
;
});
gsap.registerPlugin(ScrollTrigger);
gsap.from(".gridhead h2", {
  opacity: 0,
  y: 40,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".gridhead h2",
    start: "top 85%", 
    toggleActions: "play none none none"
  }
});

gsap.from(".gridhead p", {
  opacity: 0,
  y: 40,
  duration: 0.8,
  delay: 0.1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".gridhead p",
    start: "top 90%",
    toggleActions: "play none none none"
  }
});

gsap.from(".legend .thing", {
  opacity: 0,
  y: 30,
  stagger: 0.15,
  duration: 0.7,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".legend",
    start: "top 90%",
    toggleActions: "play none none none"
  }
});



document.querySelectorAll('.cardphone').forEach(card => {
  card.addEventListener('click', function() {
    const cardId = card.getAttribute('data-id');
    console.log(cardId);
    window.location.href = `/page/${cardId}.html`;
  });
});