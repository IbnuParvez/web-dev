const userData = {
	name: null,
	age: 0,
	country: undefined,
};

let displayName = userData.name ?? "Guest";
let displayAge = 18;
let displayCountry = userData.country ?? "Unknown";

console.log(displayName);
console.log(displayAge);
console.log(displayCountry);
