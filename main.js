let currentChoice = "A";
let choiceList = new Map();
choiceList.set("A", Math.floor(Math.random() * 101));
choiceList.set("B", Math.floor(Math.random() * 101));

function attack() {
    let opponentAttack = Math.floor(Math.random() * 101);
    document.getElementById("opponentAttackLabel").textContent = `opponent attack = ${opponentAttack}`;
    let playerAttack = choiceList.get(currentChoice);
    let resultLabel = document.getElementById('resultLabel');
    if (playerAttack > opponentAttack) {
        resultLabel.textContent = 'result = player wins';
        resultLabel.style.backgroundColor = 'lightgreen';
    }
    else if (playerAttack < opponentAttack) {
        resultLabel.textContent = 'result = player loses';
        resultLabel.style.backgroundColor = 'pink';
    }
    else {
        resultLabel.textContent = 'result = draw';
        resultLabel.style.backgroundColor = 'lightyellow';
    }
}

function select(choice) {
    currentChoice = choice;
    document.getElementById("playerAttackLabel").textContent = `player attack = ${choiceList.get(choice)}`;
}

function reset() {
    resultLabel = document.getElementById('resultLabel')
    resultLabel.textContent = 'waiting for player to pick card';
    resultLabel.style.backgroundColor = 'skyblue';
    choiceList.set("A", Math.floor(Math.random() * 101));
    choiceList.set("B", Math.floor(Math.random() * 101));
    document.getElementById("playerAttackLabel").textContent = `player attack = ${choiceList.get(currentChoice)}`;
    document.getElementById("opponentAttackLabel").textContent = "opponent attack = ?";
    document.getElementById("choiceALabel").textContent = `choiceA ........ ${choiceList.get("A")}`;
    document.getElementById("choiceBLabel").textContent = `choiceB ........ ${choiceList.get("B")}`;
}

reset();
document.getElementById("choiceA").addEventListener('change', () => select("A"));
document.getElementById("choiceB").addEventListener('change', () => select("B"));
