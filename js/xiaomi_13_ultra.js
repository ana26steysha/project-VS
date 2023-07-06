let button = document.getElementById("finish");
button.addEventListener("click", checkTest);

function checkTest() {
    let result=0;
    
    let a1 = document.getElementById("g1").value;
    if(a1 === "9"){
      result++;

    }

    let a2 = document.getElementById("g2").value;
    if(a2 === "6"){
      result++;

    }


    let a3 = document.getElementById("g3").value;
    if(a3 === "18"){
      result++;

    }

    let a4 = document.getElementById("g4").value;
    if(a4 === "20"){
      result++;

    } 


    let a5 = document.getElementById("g5").value;
    if(a5 === "4"){
      result++;

    }
    alert("Количество правильных ответов"+ result)
}



let cout=5
while(cout>3){
console.log(cout)

}