
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
    const time = document.getElementById("time");
    const loc = document.getElementById("loc");
    const mimg = document.getElementById("mimg");

    title.textContent = name;
    modal.classList.remove("hidden");
    modal.classList.add("show");
    console.log(name)
    if (name === "Cafe Pink Hauz Khas Village") {
      modal.setAttribute('data-id', 'c1');
      console.log(modal.getAttribute('data-id'));
      content.textContent = "Cafe Pink in Hauz Khas Village offers a vibrant, Insta-worthy ambiance with eclectic decor and a chic menu perfect for casual hangouts.";
      time.textContent = "10:00 AM - 10:00 PM";
      loc.textContent = "Building no 21 Ground Floor, Hauz Khas Village";
      mimg.src = "/images/c1/2022-09-19.webp";
    } else if (name === "Dirty Good") {
      modal.setAttribute('data-id', 'c3');
      content.textContent = "is a modern all‑day café and fine‑dining spot known for its wholesome smoothie bowls, creative continental dishes, cocktails and stylish leafy ambience";
            time.textContent = "10:00 AM - 1:30 PM";
      loc.textContent = "Within Block 3, One Golden Mile, Musical Fountain Park, Ground Floor, Block 7A and Block 7B, Shaheed Sudhir Tyagi Marg, Netaji Nagar, New Delhi, Delhi 110023";
      mimg.src = "images/c3/Untitled-design-2022-11-21T080201.832.jpg"
    } else if (name === "Travis Scott: Circus Maximus Stadium Tour - India") {
      modal.setAttribute('data-id', 'c4');
      content.textContent = "A visionary, a hitmaker, a cultural force—Travis Scott commands the global stage like no other!";
      time.textContent = "--";
      loc.textContent = "Jawaharlal Nehru Stadium, Pragati Vihar, New Delhi, Delhi 110003";
      mimg.src = "images/c4/images.jpeg";
    } else if (name === "Its you silly :)") {
      content.textContent = "This is where you are! Explore your surroundings and discover hidden gems.";
      document.getElementById("cpid").classList.add("hidden");
    document.getElementById("cpid").classList.remove("show");
    }else if (name === "Shalom / Laidback Cafe") {
      modal.setAttribute('data-id', 'c2');
      content.textContent = "It blends cozy elegance with Mediterranean vibes, offering gourmet dishes and a serene rooftop experience.";
            time.textContent = "12:00 PM - 1:00 AM";
      loc.textContent = "Sector 9, Rama Krishna Puram, New Delhi, Delhi 110022";
      mimg.src = "images/c2/686bb9_c0f357fc0a7345b98d2bb3ee74199387~mv2.avif";
    }
      else {
      content.textContent = "Details coming soon.";
    }

    
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
var close = false;
  function closeModal() {
    close = true;
    document.getElementById("cpid").classList.add("hidden");
    document.getElementById("cpid").classList.remove("show");
  }

document.querySelectorAll('.cardphone').forEach(card => {
  card.addEventListener('click', function() {
    if(!close){
    const cardId = card.getAttribute('data-id');
    console.log(cardId);
    window.location.href = `/DxWebdFinal/page/${cardId}.html`;}
    close = !close;
  });
});


