console.log('Loaded!');
// move the image

var img =document.getElementById('madi');
var marginLeft = 0;
function moveRight (){
    marginLeft = marginLeft + 5;
    img.style.marginLeft = marginLeft + 'px';
}

madi.onclick = function () {
    var interval = setInterval(moveRight, 25);
};
//Counter code
var button = document.getElementById('counter');
var counter =  0;
button.onclick = function (){
    
    // Make a request to counter endpoint
    
    // Capture the response and store it in a variable
    
    // Render the variable in the correct span
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
};