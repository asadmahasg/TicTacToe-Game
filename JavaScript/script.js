var array = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
var array2 = [[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]];
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var play1 = document.getElementById("player-1");
var play2 = document.getElementById("player-2");
var vis = document.getElementById("visibility");
var checksum = 1;

function onClickFtn(x, y) {
    if (array[x][y] == 0) {
        if (x == 0) {
            if (y == 0) {
                if (checksum == 1) {
                    one.innerHTML = "1";
                    checksum = 0;
                    array2[x][y] = 1;
                }
                else {
                    one.innerHTML = "0";
                    checksum = 1;
                    array2[x][y] = 0;
                }
                array[x][y] = 1;
                console.log(array2);
                checkWinningCondition();
                // if(checkWinningCondition() == 1){
                //     alert("Winning Condition");
                // }
                // else{
                //     alert("Continue Playing");
                // }
            }
            else if (y == 1) {
                if (checksum == 1) {
                    two.innerHTML = "1";
                    checksum = 0;
                    array2[x][y] = 1;
                }
                else {
                    two.innerHTML = "0";
                    checksum = 1;
                    array2[x][y] = 0;
                }
                array[x][y] = 1;
                console.log(array2);
                checkWinningCondition();
            }
            else if (y == 2) {
                if (checksum == 1) {
                    three.innerHTML = "1";
                    checksum = 0;
                    array2[x][y] = 1;
                }
                else {
                    three.innerHTML = "0";
                    checksum = 1;
                    array2[x][y] = 0;
                }
                array[x][y] = 1;
                console.log(array2);
                checkWinningCondition();

            }
        }
        if (x == 1) {
            if (y == 0) {
                if (checksum == 1) {
                    four.innerHTML = "1";
                    checksum = 0;
                    array2[x][y] = 1;
                }
                else {
                    four.innerHTML = "0";
                    checksum = 1;
                    array2[x][y] = 0;
                }
                array[x][y] = 1;
                console.log(array2);
                checkWinningCondition();

            }
            else if (y == 1) {
                if (checksum == 1) {
                    five.innerHTML = "1";
                    checksum = 0;
                    array2[x][y] = 1;
                }
                else {
                    five.innerHTML = "0";
                    checksum = 1;
                    array2[x][y] = 0;
                    

                }
                array[x][y] = 1;
                console.log(array2);
                checkWinningCondition();

            }
            else if (y == 2) {
                if (checksum == 1) {
                    six.innerHTML = "1";
                    checksum = 0;
                    array2[x][y] = 1;
                }
                else {
                    six.innerHTML = "0";
                    checksum = 1;
                    array2[x][y] = 0;
                }
                array[x][y] = 1;
                console.log(array2);
                checkWinningCondition();

            }
        }
        if (x == 2) {
            if (y == 0) {
                if (checksum == 1) {
                    seven.innerHTML = "1";
                    checksum = 0;
                    array2[x][y] = 1;
                }
                else {
                    seven.innerHTML = "0";
                    checksum = 1;
                    array2[x][y] = 0;
                }
                array[x][y] = 1;
                console.log(array2);
                checkWinningCondition();

            }
            else if (y == 1) {
                if (checksum == 1) {
                    eight.innerHTML = "1";
                    checksum = 0;
                    array2[x][y] = 1;
                }
                else {
                    eight.innerHTML = "0";
                    checksum = 1;
                    array2[x][y] = 0;
                }
                array[x][y] = 1;
                console.log(array2);
                checkWinningCondition();

            }
            else if (y == 2) {
                if (checksum == 1) {
                    nine.innerHTML = "1";
                    checksum = 0;
                    array2[x][y] = 1;
                }
                else {
                    nine.innerHTML = "0";
                    checksum = 1;
                    array2[x][y] = 0;
                }
                array[x][y] = 1;
                console.log(array2);
                checkWinningCondition();

            }
        }
       
    }
    else {
        console.log("Already Filled");
        window.alert("This place is already filled");
    }
}
function checkWinningCondition(){
    console.log("Function Called");
    if((array2[0][0]+array2[1][1]+array2[2][2]) == 0 || (array2[0][0]+array2[1][1]+array2[2][2]) == 3){
        console.log("Winning Condition True")
        
    }
    else if((array2[0][2]+array2[1][1]+array2[2][0]) == 0 || (array2[0][2]+array2[1][1]+array2[2][0]) == 3){
        console.log("Winning Condition True")
    }
    else if((array2[0][0]+array2[0][1]+array2[0][2]) == 0 || (array2[0][0]+array2[0][1]+array2[0][2]) == 3){
        console.log("Winning Condition True")

    }
    else if((array2[1][0]+array2[1][1]+array2[1][2]) == 0 || (array2[1][0]+array2[1][1]+array2[1][2]) == 3){
        console.log("Winning Condition True")

    }
    else if((array2[2][0]+array2[2][1]+array2[2][2]) == 0 || (array2[2][0]+array2[2][1]+array2[2][2]) == 3){
        console.log("Winning Condition True")

    }
    else if((array2[0][0]+array2[1][0]+array2[2][0]) == 0 || (array2[0][0]+array2[1][0]+array2[2][0]) == 3){
        console.log("Winning Condition True")

    }
    else if((array2[0][1]+array2[1][1]+array2[2][1]) == 0 || (array2[0][1]+array2[1][1]+array2[2][1]) == 3){
        console.log("Winning Condition True")

    }
    else if((array2[0][2]+array2[1][2]+array2[2][2]) == 0 || (array2[0][2]+array2[1][2]+array2[2][2]) == 3){
        console.log("Winning Condition True")

    }
}
