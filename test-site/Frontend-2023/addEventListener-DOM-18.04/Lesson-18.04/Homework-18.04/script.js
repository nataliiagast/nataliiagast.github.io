
const text1 = [
	"New",
	"Fun",
	"Cat",
	"Dog",
	"Hut",
	"Dog",
];
for (let i = 0; i < text1.length; i++){
	const creat = document.createElement("li");
	const ofList = document.createElement("ul");
	document.body.appendChild(ofList);
	creat.innerText = text1[i];
	ofList.append(creat);
	
	creat.onclick = () => {
		creat.innerText = "Clicked";
	}
};

const list = document.createElement("p");
document.body.append(list);
let newList = list.textContent;
addEventListener("keydown", (e) => {
	newList += e.key;
	list.innerText = newList;
}); 





let num = 0;
const pOfButton = document.createElement("button");
pOfButton.innerText = "+";

const mOfButton = document.createElement("button");
mOfButton.innerText = "-";
document.body.append(pOfButton, mOfButton);
const text = document.createElement("p");
text.innerText = "0";
document.body.appendChild(text);

pOfButton.onclick = () => {
	num++;
	text.innerText = num;
};
mOfButton.onclick = () => {
	num--;
	text.innerText = num;
};