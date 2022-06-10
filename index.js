
var navLinks = document.getElementById("nav-links");
var vmenuDesplegable = document.getElementById("menuDesplegable");

        function showMenu(){
            navLinks.style.top = "0px";
            
            vmenuDesplegable.style.color="black";
        }
        function hideMenu(){
            navLinks.style.top = "-900px";
            
            vmenuDesplegable.style.color="white";
        }

document.getElementById("closeContentButton").addEventListener('click', function(){
document.querySelector('.bg-modal').style.display = 'none'
document.querySelector('.bg-modal-content-inside').style.display = 'none'
document.getElementById('bg-modal-content-CSharp').style.display = 'none'
document.getElementById('bg-modal-content-Python').style.display = 'none'
document.getElementById('bg-modal-content-Scala').style.display = 'none'
document.getElementById('bg-modal-content-MySQL').style.display = 'none'
document.getElementById('bg-modal-content-JavaScript').style.display = 'none';
});

document.getElementById("Portfolio-col-Java").addEventListener('click', function(){
    document.querySelector('.bg-modal').style.display = 'flex'
    document.getElementById('bg-modal-content-java').style.display = 'flex';
    
});

document.getElementById("Portfolio-col-CSharp").addEventListener('click', function(){
    document.querySelector('.bg-modal').style.display = 'flex';
    document.getElementById('bg-modal-content-CSharp').style.display = 'flex';
});

document.getElementById("Portfolio-col-Python").addEventListener('click', function(){
    document.querySelector('.bg-modal').style.display = 'flex';
    document.getElementById('bg-modal-content-Python').style.display = 'flex';
});

document.getElementById("Portfolio-col-Scala").addEventListener('click', function(){
    document.querySelector('.bg-modal').style.display = 'flex';
    document.getElementById('bg-modal-content-Scala').style.display = 'flex';
});

document.getElementById("Portfolio-col-MySQL").addEventListener('click', function(){
    document.querySelector('.bg-modal').style.display = 'flex';
    document.getElementById('bg-modal-content-MySQL').style.display = 'flex';
});

document.getElementById("Portfolio-col-javaScript").addEventListener('click', function(){
    document.querySelector('.bg-modal').style.display = 'flex';
    document.getElementById('bg-modal-content-JavaScript').style.display = 'flex';
});

//game 1

var character = document.getElementById("charGame1");
var block = document.getElementById("blockGame1");

function jump(){

    if(character.classList != "animate"){
        character.classList.add("animate");
    }
    
    setTimeout(function(){
        character.classList.remove("animate");
    },500);
}