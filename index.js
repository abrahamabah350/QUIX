let dynamic = document.querySelector(".dynamic-info");

let dynamicInfoArray = ["learn", "help", "teach"];
let count = 0;

function changeText() {
    let index = count % dynamicInfoArray.length;
    dynamic.textContent = dynamicInfoArray[index];
    count++;
}

setInterval(() => changeText(), 2 * 1000);

//Let's go over what I know.
// A promise represents the evenutal completion (or failure) of an asynchronous operation.
// What I am trying to solve is how to restart the asynchronous operation once the promise is resolved.
// .then() handles the result of the promise when it is fulfilled
