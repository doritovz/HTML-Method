const btn = document.getElementsByClassName('x-btn');
const stepcount = document.getElementById('x-step_counter');
const stepinstructions = document.getElementsByClassName('x-stepinstructions')
const stepframe = [
    document.getElementById('x-step1'),
    document.getElementById('x-step2'),
    document.getElementById('x-step3'),
    document.getElementById('x-step4')
];
let step = 2;
let progressing = true;

// STEP PROGRESSION
btn.onclick = function(){
    if (step<4) {
        step = step + 1;
        stepcount.innerText = `${step} of 4`;
    } else {
        stepcount.innerText = `${step} of 4`;
    } 
};

// STEP FUNCTION
while (true) {
    if (step==1) {
        stepinstructions.innerHTML = 'Step 1: What is your Roblox Username?';
    } else if (step==2) {
        stepinstructions.innerHTML = 'Step 2: Is this you?';
        stepframe[0].style.display = 'none';
        stepframe[1].style.display = 'block';
    } else if (step==3) {
        stepinstructions.innerHTML = 'Step 3: All done!'
        stepframe[1].style.display = 'none';
        stepframe[2].style.display = 'block';
    }
}