// Counter Program

// Assigning constants
const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");

const countLabel = document.getElementById("countlabel");
let count = 0;  // Can't be a constant, since we will modify

increaseBtn.onclick = function(){
    count += 1
    countLabel.textContent = count;
}

decreaseBtn.onclick = function(){
    count -= 1
    countLabel.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}