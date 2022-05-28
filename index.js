var buttons=document.querySelectorAll(".letter").length
for(var i=0; i<buttons;i++){
    document.querySelectorAll(".letter")[i].addEventListener("click",function(){
        var cb=this.innerHTML;
        var audio=new Audio("sounds/"+cb+".mp3");
        audio.play()
        flash(cb)
        
    })
}
document.addEventListener("keypress",function(event){
    var l=event.key
    var audio= new Audio("sounds/"+l+".mp3");
    audio.play()
    flash(event.key)
})

var but=document.querySelector(".luk").addEventListener("click",function(){
    var audio= new Audio("sounds/lukmaan.mp3");
    audio.play()
    
})

function flash(key){
    var activeButton= document.querySelector("."+key)
    activeButton.classList.add("pressed")
  
    setTimeout(function(){
      activeButton.classList.remove("pressed")
    },100)
  }