// --------------- 1 ---------------

function txtId() {
    document.getElementById("text").innerText="Hey.."
}


// --------------- 2 ---------------

function txtTag() {
    const text = document.getElementsByTagName("h1");
    text[0].innerText = "Hello.."
}


// --------------- 3 ---------------

function txtClass() {
    const text = document.getElementsByClassName("box");
    text[0].innerText = "Bye.."
}


// --------------- 4 ---------------

function ChangeHeadingtxt() {
    document.getElementById("change").innerText = "Hello World";
}

// variable assign
// function ChangeHeadingtxt() {
//     const txt = document.getElementById("change");
//     txt.innerText = "Hello World";
//     txt.style.color = "red";
// }


// --------------- 5 ---------------

function flex() {
    document.getElementById("container").style.flexDirection = "column";
}


// --------------- 7 ---------------

function btn() {
    document.getElementById("heading").style.color = "red";
}


// --------------- 8 --------------- 

function replace() {
    document.getElementById("txt").innerText = "Welcome to Elevation Academy";
}


// --------------- 9 ---------------

function clock(){

    var hours=document.getElementById("hour");
    var minutes=document.getElementById("min");
    var seconds=document.getElementById("sec");
    var am=document.getElementById("ampm");
    
    var time=new Date();
    var hrs=time.getHours();
    var mins=time.getMinutes();
    var secs=time.getSeconds();
    var am_pm="AM";
    
    
    if(hrs==0)
    {
    
    hrs=12;
    
    }
    if(hrs>12){
    
    
        hrs=hrs-12;
        am_pm="PM"
    
    }
    if(hrs<10){
    
    hrs="0"+hrs;
    
    }
    if(mins<10){
    
        mins="0"+mins;
        
        }
    if(secs<10){
    
        secs="0"+secs;
        
        }
    
        hours.innerText=hrs;
        minutes.innerText=mins;
        seconds.innerText=secs
        am.innerHTML=am_pm
    
    }
    setInterval(clock,1000)
    

// --------------- 10 ---------------

function getOption() {
    const result = document.getElementById("option");
    const result2 = result.value 
    document.getElementById("select").innerText = result2
}
