const div = {
    3: "Fizz",
    5: "Buzz"
};
for(let i = 1; i <= 100; i++) {
    let word = "";
    for (const d of Object.keys(div)) {
        if (i % d === 0)
            word += div[d];
    }
    if (!word) { 
        alert(i);
        continue;
    }
    alert(word);
}
