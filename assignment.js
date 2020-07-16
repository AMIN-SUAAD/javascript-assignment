function feetToMile(feet){
    if (feet<0){
        return "Sorry, length can't be negative.";
    }
    else{
        var mile= feet*0.000189394;
        return "Your given amount is exactly "+ mile+ " Mile/Miles";
    }
}

function woodCalculator(chairAmount, tableAmount, bedAmount){
    if (chairAmount<0 || tableAmount<0 || bedAmount<0){
        return "Sorry, amount can't be negative."
    }
    else{
        var totalWood= (chairAmount*1)+(tableAmount*3)+(bedAmount*5);
        return "You need "+ totalWood+ " Cubic Feet wood.";
    }
}

function brickCalculator(numberOfFloor){
    if (numberOfFloor<0){
        return "Sorry, number of floor can't be negative."
    }
    else if (numberOfFloor<11){
        numberOfBrick= 15*numberOfFloor*1000;
        return "You need " +numberOfBrick+ " bricks.";
    }
    else if (numberOfFloor<21 && numberOfFloor>10){
        numberOfBrick= (15*10*1000)+((numberOfFloor-10)*12*1000);
        return "You need " +numberOfBrick+ " bricks.";
    }
    else{
        numberOfBrick= (15*10*1000)+(10*12*1000)+((numberOfFloor-20)*10*1000);
        return "You need " +numberOfBrick+ " bricks.";
    }
}

function tinyFriend(friends){
    if (friends.length == 0){
        return "Empty array is not allowed."
    }

    else{
        tiny=friends[0];
        for (var i=1; i<friends.length; i++){
            if (friends[i].length < tiny.length){
                tiny=friends[i];
            }
        }
        return "Your tiniest friend is "+ tiny;
    }
}






