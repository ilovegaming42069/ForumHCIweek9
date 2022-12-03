function canGiveBlood(x, y){
	if(x[0] == "A" && x[1] != "B" && y.includes("A")){
        if(x[x.length - 1] == "+" && y[y.length - 1] == "+"){
            return true
        }
        if(x[x.length - 1] == "-"){
            return true
        }
	}
	else if(x[0] == "B" && y.includes("B")){
        if(x[x.length - 1] == "+" && y[y.length - 1] == "+"){
            return true
        }
        if(x[x.length - 1] == "-"){
            return true
        }
	}
	else if(x.includes("AB") && y.includes("AB")){
        if(x[x.length - 1] == "+" && y[y.length - 1] == "+"){
            return true
        }
        if(x[x.length - 1] == "-"){
            return true
        }
    }
    else if(x.includes("O")){
        if(x[x.length - 1] == "+" && y[y.length - 1] == "+"){
            return true
        }
        if(x[x.length - 1] == "-"){
            return true
        }
    }
    else{
		return false;
	}
}

canGiveBlood("O+", "A+");
canGiveBlood("A-", "B-");
canGiveBlood("A-", "AB+");