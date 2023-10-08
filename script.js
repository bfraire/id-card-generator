// script.js


/*-- Flip Card and Form --*/ 
const card = document.querySelector('.card');
const flipButton = document.getElementById('flipButton');
const textBox1 = document.querySelectorAll('.text-box input');
const textBox2 = document.querySelectorAll('.text-box2 input');
const textBox3 = document.querySelectorAll('.text-box3 input');
const textBox4 = document.querySelectorAll('.text-box4 input');

let isFlipped = false;

flipButton.addEventListener('click', () => {
  card.classList.toggle('flipped');
  isFlipped = !isFlipped;

  textBox1.forEach(input => {
    input.style.visibility = isFlipped ? 'hidden' : 'visible';
  });

  textBox2.forEach(input => {
    input.style.visibility = isFlipped ? 'hidden' : 'visible';
  });

  textBox3.forEach(input => {
    input.style.visibility = isFlipped ? 'hidden' : 'visible';
  });

  textBox4.forEach(input => {
    input.style.visibility = isFlipped ? 'hidden' : 'visible';
  });
});

/*-- Profile Image Preview--*/ 
imageInput.addEventListener('change', function () {
  const file=this.files[0]; 

  if (file) {
    const reader=new FileReader();
    reader.onload = function (e) {
      previewImage.src = e.target.result; 
      clickMessage.style.display = 'none';
    }; 

    reader.readAsDataURL(file);
  }
});





/*-- Download Card --*/ 




