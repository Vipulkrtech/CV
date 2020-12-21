var tag=document.querySelectorAll('.nav a')
for(var i=0;i<tag.length;i++){
  tag[i].addEventListener('click',function(event){
    event.preventDefault();
    var targetSectionId= this.textContent.trim().toLowerCase();
    var targetSection=document.getElementById(targetSectionId);
    console.log(targetSection);
    var interval=setInterval(function(){
      var boundary=targetSection.getBoundingClientRect();
      if(boundary.top<=0){
        clearInterval(interval);
        return;
      }
      window.scrollBy(0,50)
    },50)
  })
}


var bar=document.querySelectorAll('.skill-progress > div');
var skillContainer=document.getElementById("skill-container");
window.addEventListener('scroll',checkScroll)
function checkScroll(){
  let boundary=skillContainer.getBoundingClientRect();
  if(boundary.top<window.innerHeight)
  {
  console.log("skill section visible")
  }
}