function checkAge(){
let age = Number(prompt("WHat is your age?"));
const display = document.getElementById("displayAge");
if (age >= 18){
 	display.textContent = `You are an adult as your age is ${age}`;
} else {
	display.textContent = "You are still a child sorry!";
	}
}

const checkName = ()  => {
	let name = prompt("What is your name?");
	const display = document.getElementById("displayName");
	display.textContent = `You are called ${name}`;
}

document.getElementById("nameBtn").addEventListener("click", checkName);
document.getElementById("ageBtn").addEventListener("click", checkAge);

const list = document.getElementById("topics");

document.getElementById("click").addEventListener("click", () => {
	const newLi = document.createElement("li");
	newLi.textContent = "You clicked after all";
	list.appendChild(newLi);
});


