//Speed Detecrtor check
function speedDetector(speed){
    const speedlimt = 70;//max speed

    let points = 0;//How many points u have left
    const maxPoint = 12;//max points
if(speed <= speedlimt){// if the speed it lower that the speed limt okay
     console.log("OK");
} else {
    points = Math.floor((speed - speedlimt) / 5);//speed - speedlimt = answer / by 5 = points // Math.floor we want whole numbers
    let points = 0//How many points u have left
    const maxPoint = 12//max points
if(speed < speedlimt){// if the speed it lower that the speed limt okay
    return "OK"

}
if (points >= maxPoint){
    console.log('License is suspended'); // if more than maxpoints
}else{
    console.log("Demeritpoints" + "  " + +points);//if less than maxpoints
}

}

}

//results
speedDetector(80);
speedDetector(90);
speedDetector(135);
speedDetector(150);