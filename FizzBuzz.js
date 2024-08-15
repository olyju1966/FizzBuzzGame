for(let i = 1; i <= 100; i++) {
    let word = "";
    if (i % 3 === 0) {
        word += "Fizz";
    } 
    if (i % 5 === 0) {
        word += "Buzz"
    } 
    if (!word) { 
        word = i;
    }
    alert(word);
}
