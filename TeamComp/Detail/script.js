var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("aktip");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

var backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  if ( this.scrollY >= 400 ) {
    backToTop.classList.add('show');

    backToTop.addEventListener('click', () => {
      window.scrollTo({top: 0});
    })
  } else {
    backToTop.classList.remove('show');
  }
});