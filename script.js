let x = Math.floor(Math.random() *10+1);
console.log(x);
let button=document.getElementById('btn');
button.addEventListener('click',function(){
    let name = document.getElementById('name').value;
    let y=document.getElementById('number').value;
    console.log(y);
    if(x==y){
        alert('Congratulation👌😀 you guessed right number ' + name);
    }else if(x>y){
        alert('😭Try again. You guessed lower number Mr.' + name);
    }else{
        alert('😭Try again. You guessed higer number Mr.' + name)
    }
})