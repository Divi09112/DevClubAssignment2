var images = document.getElementsByTagName("IMG");

//setting drag and drop attributes for img
for(var i=0;i<images.length;i++){
  images[i].setAttribute("ondrop", "drop(event)");
  images[i].setAttribute("ondragover", "allowDrop(event)");
  images[i].setAttribute("ondragstart", "drag(event)");
}

//preventing default action of browser which doesn't allow drop over a target
function allowDrop (ev) {
   ev.preventDefault ();
}

//transfering data during drag
function drag (ev) {
  ev.dataTransfer.setData ("src", ev.target.src);
  ev.dataTransfer.setData ("id", ev.target.id);  
}


//preventing default action of browser and exchanging the src of images
function drop (ev) {
  ev.preventDefault ();
  var src2 = ev.currentTarget.src;
  document.getElementById(ev.dataTransfer.getData ("id")).src = src2;
  ev.currentTarget.src = ev.dataTransfer.getData("src");
}
