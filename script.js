function changeBackgroundColor(){
    const color=['red','blue','green','grey','yellow','violet','pink','black','white','tomato']
    let randomColor=color [Math.floor(Math.random() * color.length)];
    document.body.style.backgroundColor = randomColor;
}

function handleClick(){
    let num1= document.getElementById("number1");
    num1.innerText = parseInt(num1.innerText) + 1;

    let num2= document.getElementById("number2");
    num2.innerText = parseInt(num2.innerText) - 1;

    alert("Board update Successfully");
    document.getElementById("clickButton").innerText.backgroundColor="grey"
    document.getElementById("clickButton").disabled = true;
    hideParagraph(true);
    
    
}

function hideParagraph(show){
    let textContainer = document.getElementById("textContainer");
    if(show){
        textContainer.style.display = "block";

    }else{
        textContainer.style.display = "none";
    }
}


function handleClick1(){
    let num1= document.getElementById("number1");
    num1.innerText = parseInt(num1.innerText) + 1;

    let num2= document.getElementById("number2");
    num2.innerText = parseInt(num2.innerText) - 1;

    alert("Board update Successfully");
    document.getElementById("clickButton1").innerText.backgroundColor="grey"
    document.getElementById("clickButton1").disabled = true;
    hideParagraph(true);
    
}

function hideParagraph(show){
    let theContainer = document.getElementById("theContainer");
    if(show){
        theContainer.style.display = "block";

    }else{
        theContainer.style.display = "none";
    }
}
function handleClick2(){
    let num1= document.getElementById("number1");
    num1.innerText = parseInt(num1.innerText) + 1;

    let num2= document.getElementById("number2");
    num2.innerText = parseInt(num2.innerText) - 1;

    alert("Board update Successfully");
    document.getElementById("clickButton2").innerText.backgroundColor="grey"
    document.getElementById("clickButton2").disabled = true;
    hideParagraph(true);
    
}

function hideParagraph(show){
    let textContainer2 = document.getElementById("textContainer2");
    if(show){
        textContainer2.style.display = "block";

    }else{
        textContainer2.style.display = "none";
    }
}
function handleClick3(){
    let num1= document.getElementById("number1");
    num1.innerText = parseInt(num1.innerText) + 1;

    let num2= document.getElementById("number2");
    num2.innerText = parseInt(num2.innerText) - 1;

    alert("Board update Successfully");
    document.getElementById("clickButton3").innerText.backgroundColor="grey"
    document.getElementById("clickButton3").disabled = true;
    hideParagraph(true);
    
}

function hideParagraph(show){
    let textContainer3 = document.getElementById("textContainer3");
    if(show){
        textContainer3.style.display = "block";

    }else{
        textContainer3.style.display = "none";
    }
}
function handleClick4(){
    let num1= document.getElementById("number1");
    num1.innerText = parseInt(num1.innerText) + 1;

    let num2= document.getElementById("number2");
    num2.innerText = parseInt(num2.innerText) - 1;

    alert("Board update Successfully");
    document.getElementById("clickButton4").innerText.backgroundColor="grey"
    document.getElementById("clickButton4").disabled = true;
    hideParagraph(true);
    
}

function hideParagraph(show){
    let textContainer4 = document.getElementById("textContainer4");
    if(show){
        textContainer4.style.display = "block";

    }else{
        textContainer4.style.display = "none";
    }
}
function handleClick5(){
    let num1= document.getElementById("number1");
    num1.innerText = parseInt(num1.innerText) + 1;

    let num2= document.getElementById("number2");
    num2.innerText = parseInt(num2.innerText) - 1;

    alert("Board update Successfully");
    document.getElementById("clickButton5").innerText.backgroundColor="grey"
    document.getElementById("clickButton5").disabled = true;
    hideParagraph(true);
    
}

function hideParagraph(show){
    let textContainer5 = document.getElementById("textContainer5");
    if(show){
        textContainer5.style.display = "block";

    }else{
        textContainer5.style.display = "none";
    }
}

function clickme(){
    window.location.href = "question.html"
}
function goBack(){
    window.location.href ="index.html"
}

function showAlert(num){
    alert(`you clicked button ${num}`);
    if(num === 3){
        setTimeout(() =>alert ("this is the second alert of the button"))
    }

}

function showCurrentTime(num){
    const currentTime = new Date().toLocaleTimeString();
    document.getElementById("timeDisplay").innerText=`you have completed the task ${num} at ${currentTime}`;
    document.getElementById("timeDisplay")
    hideParagraph(true);
}
function hideParagraph(show){
    let textContainer5 = document.getElementById("timeDisplay");
    if(show){
        textContainer5.style.display = "block";

    }else{
        textContainer5.style.display = "none";
    }
}


function updateDate(){
    const today = new Date();
    const options = {month: 'short', day: 'numeric', year: 'numeric'};
    const formattedDate = today.toLocaleDateString('en-US', options);
    document.getElementById("dateContainer").innerText = `${formattedDate}`;
}
updateDate();








//  function showParagraph(){
//     document.getElementById("textContainer").style.display="block";
//     document.getElementById("textContainer").style.display="block";
//  }
//  function hideParagraph(){
//  document.getElementById("textContainer").style.display="none";

//  }