/* $(document).ready(function() {
    var sideslider = $('[data-toggle=collapse-side]');
    var sel = sideslider.attr('data-target');
    var sel2 = sideslider.attr('data-target-2');


    sideslider.click(function(event) {
        $(sel).toggleClass('in');
        $(sel2).toggleClass('out');
    });

});*/

let indexSlider = 0;
let preindex = 5;
var slider = document.getElementsByClassName('ss');

let slidershow = setInterval(moveup, 10000);
let itemnote;



let note = new XMLHttpRequest();
note.open('GET', 'note.json')
note.onreadystatechange = function() {
    if (note.readyState === 4 && note.status === 200) {
        itemnote = JSON.parse(note.responseText);
        console.log(itemnote);

    }
}
note.send();


function moveup() {
    //console.log(itemnote);
    let h22 = document.querySelector("#h22");
    let p1 = document.querySelector("#p1");
    console.log(itemnote[indexSlider].h2);
    debugger;
    preindex = indexSlider;
    if (indexSlider == slider.length - 1)
        indexSlider = 0;
    else indexSlider++;

    slider[preindex].style.display = "none";
    slider[indexSlider].style.display = "block";
    h22.innerHTML = itemnote[indexSlider].h2;
    p1.innerHTML = itemnote[indexSlider].p;


}

function movedown() {
    let h22 = document.querySelector("#h22");
    let p1 = document.querySelector("#p1");
    //debugger;
    preindex = indexSlider;
    if (indexSlider == 0)
        indexSlider = 5;
    else indexSlider--;

    slider[preindex].style.display = "none";
    slider[indexSlider].style.display = "block";
    h22.innerHTML = itemnote[indexSlider].h2;
    p1.innerHTML = itemnote[indexSlider].p;
}