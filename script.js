
function rollDice(){
    const diceNumber = document.getElementById("diceNumber").value;
    const diceResult = document.getElementById("diceResult");
    const diceImage = document.getElementById("diceImage");
    const values =[];
    const image =[];

    
    for(let i=0; i < diceNumber; i++){
        const value = Math.floor(Math.random() * 6)+1;
        values.push(value);
        // image.push('<img src="dice_roller/1.png" alt="Dice Image">');
        image.push('<img src ="dice_images/${value}.png" alt="Dice Image">');
    
    }
    diceResult.textContent = `Dice : ${values.join(`, `)}`;
    diceImage.innerHTML = image.join(``);
}