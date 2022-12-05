function digitalDecipher(eMessage, key){
    for(let i = 0; i < eMessage.length; i++){
        eMessage[i] -= parseInt(key.toString()[i % key.toString().length]);
	}
	const alphabet = "abcdefghijklmnopqrstuvwxyz";
	var answer = "";
	for(let i = 0; i < eMessage.length; i++){
		answer += alphabet[eMessage[i] - 1];
	}
	return answer;
}

console.log(digitalDecipher([20, 12, 18, 30, 21], 1939));
console.log(digitalDecipher([14, 30, 11, 1, 20, 17, 18, 18], 1990));
console.log(digitalDecipher([6, 4, 1, 3, 9, 20], 100));
