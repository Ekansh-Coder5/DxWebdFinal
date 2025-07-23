// saved = false;
// document.getElementById('serchinput').addEventListener('input', function() {
//   check();
//   })


// function save() {
//   let cards = document.querySelectorAll('.card');
//   if (!saved) {
//     document.querySelector('.btn').classList.add('btnselect');
//     saved = true;
//     cards.forEach(card => {
//     const isSaved = card.getAttribute('data-saved') === 'true';
//     if(isSaved){
//       card.style.display = 'flex';
//       card.style.animation = 'cardFadeIn 0.4s ease-in-out';
//     } else {
//       card.style.animation = 'cardFadeOut 0.3s ease-in-out';
//       setTimeout(() => {
//         card.style.display = 'none';
//       }, 250);
//     }
//   });
//   } else {
//     document.querySelector('.btn').classList.remove('btnselect');
//     cards.forEach(card => {
//       card.style.display = 'flex';
//       card.style.animation = 'cardFadeIn 0.4s ease-in-out';
//     });
//     saved = false;
//   }
// }

// function check(){
//   let filter = this.value.toLowerCase();
//   let cards = document.querySelectorAll('.card');
//   cards.forEach(card => {
//     let text = card.innerText.toLowerCase();
//     if (text.includes(filter)) {
      
//       card.style.display = 'flex';
//       card.style.animation = 'cardFadeIn 0.4s ease-in-out';
//       if(saved) {
//         const isSaved = card.getAttribute('data-saved') === 'true';
//       if(!isSaved) {
//       card.style.animation = 'cardFadeOut 0.3s ease-in-out';
//       setTimeout(() => {
//         card.style.display = 'none';
//       }, 250);
//       }
//     } }else {
//       card.style.animation = 'cardFadeOut 0.3s ease-in-out';;
//       setTimeout(() => {
//         card.style.display = 'none';
//       }, 250);
//     }});
// }

saved = false;
document.getElementById('serchinput').addEventListener('input', function() {
  let filter = this.value.toLowerCase();
  let cards = document.querySelectorAll('.cardphone');
  cards.forEach(card => {
    let text = card.innerText.toLowerCase();
    if (text.includes(filter)) {
      
      card.style.display = 'flex';
      card.style.animation = 'cardFadeIn 0.4s ease-in-out';
      if(saved) {
        const isSaved = card.getAttribute('data-saved') === 'true';
      if(!isSaved) {
      card.style.animation = 'cardFadeOut 0.2s ease-in-out';
      setTimeout(() => {
        card.style.display = 'none';
      }, 250);
      }
    } }else {
      card.style.animation = 'cardFadeOut 0.2s ease-in-out';;
      setTimeout(() => {
        card.style.display = 'none';
      }, 250);
    }});
  })

function save() {
  let cards = document.querySelectorAll('.cardphone');
  if (!saved) {
    document.querySelector('.btn').classList.add('btnselect');
    saved = true;
    cards.forEach(card => {
    const isSaved = card.getAttribute('data-saved') === 'true';
    if(isSaved){
      
      card.style.animation = 'cardFadeIn 0.4s ease-in-out';
    } else {
      card.style.animation = 'cardFadeOut 0.2s ease-in-out';
        
      setTimeout(() => {
        card.style.display = 'none';
      }, 250);
    }
  });
  } else {
    document.querySelector('.btn').classList.remove('btnselect');
    cards.forEach(card => {
      card.style.display = 'flex';
      card.style.animation = 'cardFadeIn 0.4s ease-in-out';
    });
    saved = false;
  }
}
document.querySelectorAll('.cardphone').forEach(card => {
  card.addEventListener('click', function() {
    const cardId = card.getAttribute('data-id');
    console.log(cardId);
    window.location.href = `/DxWebdFinal/page/${cardId}.html`;
  });
});

window.addEventListener('DOMContentLoaded', function() {
  let savedPlaces = localStorage.getItem('savedPlaces');
  savedPlaces = savedPlaces ? JSON.parse(savedPlaces) : {};

  document.querySelectorAll('.cardphone').forEach(card => {
    const cardId = card.getAttribute('data-id');
    const isSaved = !!savedPlaces[cardId];
    console.log(`Card ID: ${cardId}, Saved: ${isSaved}`);
    card.setAttribute('data-saved', isSaved ? 'true' : 'false');
  });
});

  window.addEventListener("DOMContentLoaded", () => {
  const tl = gsap.timeline();

  tl.from(".searchm", { opacity: 0, y: 60, duration: 1, ease: "ease" })
  .from(".cards", {
  opacity: 0,
  y: 20,
  duration: 1.5,
  ease: "power2.out"
},"=-0.2");

;
});