function editRatios() {
	var servings = document.getElementById("servings").value;
	var oats = servings/2;
	var salt = servings/16;
	document.getElementById("oatsServing").innerHTML=oats;
	document.getElementById("milkServing").innerHTML=oats;
	document.getElementById("saltServing").innerHTML=salt;
}

let recipeTags=[["oats", "V", "P"], ["grilledCheese", "V", "P"], ["salad", "LI"], ["pizza", "V", "P"], ["pasta", "V"], ["ramen", "LI"]];
var isPresent = false;

function filterRecipes(filterType) {
	document.getElementById("oats").style.display="none";
	for (var i = 0; i<recipeTags.length; i++){
		isPresent=false;
		for (var j = 0; j<recipeTags[i].length; j++){
			if (recipeTags[i][j]==filterType){
				isPresent = true;
			}
			console.log(isPresent);
		}
		if (isPresent==false){
			document.getElementById(recipeTags[i][0]).style.display="none";
		}
	}
}

function resetFilters() {
	for (var i = 0; i<recipeTags.length; i++){
		document.getElementById(recipeTags[i][0]).style.display="block";
	}
}