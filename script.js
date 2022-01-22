let button = document.getElementById('btn');


button.addEventListener('click', function(){
    let word = document.getElementById('text').value;
    let count=word.length;
    console.log(count);
 let data=   document.getElementById('output');
 data.innerHTML =`<h1>Length of word: ${count}</h1>`;
})