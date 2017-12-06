let k=0;

//for adding a task
function add() {
let text = document.getElementById('task').value;
if (text !== '') {
let li =document.createElement('li');
li.appendChild(document.createTextNode(text));
li.setAttribute("id",k);
li.setAttribute('onClick',`strikeout(${k})`);
k++;
list=document.getElementById('list');
list.appendChild(li);
let hr =document.createElement('hr');
list.appendChild(hr);
console.log(list.clientHeight);
if (list.clientHeight>=150){
list.setAttribute('overflow','auto');
}
};
document.getElementById('task').value='';
};

function strikeout(n) {
let el = document.getElementById(n.toString());
if(el.className === ''){
el.setAttribute("class",'clicked');
}
else{
el.setAttribute("class",'');
};
}
