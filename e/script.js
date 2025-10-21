function checkAge(){
let age = Number(prompt("What is your age?"));
if (age >= 18){
 	console.log(`You are an adult as your age is ${age}`);
} else {
	console.log("You are still a child sorry!");
	}
}

const checkName = ()  => {
	let name = prompt("What is your name");
	console.log(`You are called ${name}`);
}

const list = document.getElementById("topics");

document.getElementById("click").addEventListener("click", () => {
	const newLi = document.createElement("li");
	newLi.textContent = "You clicked after all";
	list.appendChild(newLi);
});


