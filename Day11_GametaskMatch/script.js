//<!-- Javascript  -->

var count = 0;

function myfun(){
    var a=Math.round(Math.random()*10);
    console.log(a);
    document.getElementById("a").innerHTML=a;
        
    var b=Math.round(Math.random()*10);
    console.log(b);
    document.getElementById("b").innerHTML=b;

    // Code Addon
    if(a==b){
        document.getElementById("result").innerHTML="Match";
        document.getElementById("matchCount").innerHTML=count++;
    }
    else{
        document.getElementById("result").innerHTML="Not Match";
    }
}
