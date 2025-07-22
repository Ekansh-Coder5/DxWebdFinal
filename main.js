
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
      content.textContent = "A cozy place known for its caramel brew and vintage vibe.";
    } else if (name === "Old Bookstore") {
      content.textContent = "Home to rare finds and first editions. A paradise for readers.";
    } else if (name === "Community Hall") {
      content.textContent = "Events, meetings, and performances happen regularly here.";
    } else if (name === "Its you silly :)") {
      content.textContent = "This is where you are! Explore your surroundings and discover hidden gems.";
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