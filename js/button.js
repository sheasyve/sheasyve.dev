let count = 0;
const countElement = document.getElementById('count');
const button = document.getElementById('theButton');
button.addEventListener("click", function() {
    count += 1; 
    if(count == 1){
        alert(`You have pressed the button 1 time. Have a nice day!`);
    }
    else if (count > 9){
        alert(`You have pressed the button ${count} times. That is too many.`);
    }
    else{
        alert(`You have pressed the button ${count} times.`);
    }
    countElement.textContent = count;
});
