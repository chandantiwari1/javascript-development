var one = document.getElementById("one");
var two = document.getElementById("two");

var callbackexampl = function(){
    two.remove();
    one.removeEventListener('click',callbackexampl);
}
one.addEventListener('click',callbackexampl)
