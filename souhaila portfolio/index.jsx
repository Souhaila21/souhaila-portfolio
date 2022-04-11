let i = 0;
let txt = 'Hello !! It Is Me Souhaila AZIZA I Am A Full Stuck Web Developper. You Are Welcome To My Page.';
let speed = 10;

function typeWriter() {
    if (i < txt.length) {
        document.querySelector('h3').innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, 200);
    }
}
typeWriter();

/*make the animaion css starts each time we see te page  */
let observer = new IntersectionObserver(inputs => {
    entries.forEach(input => {
      let name = input.target.querySelector('.name');
  
      if (input.isIntersecting) {
        name.classList.add('input-animation');
        return;
      }
      name.classList.remove('input-animation');
    });
  });
  
  observer.observe(document.querySelector('.square-wrapper'));
  /*it is not working yet */
  document.getElementById("toggle").addEventListener("click", function(){
    document.getElementsByTagName('body')[0].classList.toggle("dark-theme");
});
  