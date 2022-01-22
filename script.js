let button = document.getElementById('btn');
button.addEventListener('click',function(){
    let CountryName= document.getElementById("txt").value;
    
    console.log(CountryName);
    let creatNewOption=document.createElement("option");
    creatNewOption.text=CountryName;
    let select=document.getElementById("select");
    select.appendChild(creatNewOption);

});