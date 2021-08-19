var array = [[0,0,0],[0,0,0],[0,0,0]];
var one = document.getElementById("one");

function onClickFtn(x,y){
    if(array[x][y] == 0){
        one.innerHTML = "0";
        array[x][y] = 1;
    }
    else{
        console.log("Already Filled");
    }
}
