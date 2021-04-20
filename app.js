'use strict';
let screen = document.querySelector("p");

function calculEvent(event){
    let truc = event.target;
    
   if (truc.nodeName === "BUTTON"){
       if (truc.textContent === "="){
           screen.textContent = eval(screen.textContent);
        }
        else if (truc.textContent === "AC"){
            screen.textContent = " ";
        }
        else if (truc === "."){
            screen.append(".");
        }
        else {
            screen.append(truc.textContent);
        }
   }
    
}


let myBtns = document.querySelector("#btn");
myBtns.addEventListener("click", calculEvent);


// let ac = document.querySelector(".btn__ac");
// AC == .slice(dernière entrée) ou = 0 
// let egal = document.querySelector(".btn__egal");
// egal == eval()

// tonelement.textContent => affiche le texte de l'élément
// -> btn__egal.textContent => = eval()