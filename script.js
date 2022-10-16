
//script to test if page visibility api is present. If window is hidden, it affects bootstrap animations.


/*document.addEventListener("visibilitychange", () => {
    if(document.visibilityState==="hidden"){
        console.log(" >> This window is hidden")
    }
    else{
        console.log(" >> This window is visible")
    }
});

*/

  // modal----------------------------

  const modal = document.querySelector('.black-background');
  const previews = document.querySelectorAll('.gallery img');
  const original = document.querySelector('.full-image');
  const caption = document.querySelector('.caption');

  previews.forEach((preview) => {
    preview.addEventListener('click', () => {
      modal.classList.add('open');
      original.classList.add('open');
      const originalSrc = preview.getAttribute('data-original');
      original.src = `resources/${originalSrc}`;
      const altText = preview.alt;
      caption.textContent = altText;

    });
  });

  modal.addEventListener('click', (e) => {
    if(e.target.classList.contains('black-background')) {
      modal.classList.remove('open');
      original.classList.romove('open');
    }
  })



  //add to wishlist----------------------------

  document.querySelector('.wishlist').addEventListener('click', () => {
     document.querySelector('.fa-regular').classList.toggle("heart");  
  })
 

  //select sample---------------------------- 

  const sample = document.querySelectorAll(".sample");

  sample.forEach((sample) => {
    sample.addEventListener("click", () => {
      sample.classList.toggle("sample-shadow");
    });
  });

  //-------------------------------------------