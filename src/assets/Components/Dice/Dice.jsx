import { useState } from "react";
import emptyDice from "C:/Users/paulr/Desktop/IronHack/lab-react-state-training/src/assets/images/emptyDice.png";
import dice1 from "../src/assets/images/dice1.png";
import dice2 from "../src/assets/images/dice2.png";
import dice3 from "../src/assets/images/dice3.png";
import dice4 from "../src/assets/images/dice4.png";
import dice5 from "../src/assets/images/dice5.png";
import dice6 from "../src/assets/images/dice6.png";

const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

function Dice() {
  const [currentDice, setCurrentDice] = useState(dice3);

  const handleClick = () => {
    setCurrentDice(emptyDice);
    setTimeout(() => {
      const randomDice = diceImages[Math.floor(Math.random() * diceImages.length)];
      setCurrentDice(randomDice);
    }, 1000);
  };

  return (
    <>
      <div>
        <img
          src={currentDice}
          alt="Dice"
          onClick={handleClick}
          style={{ cursor: "pointer" }}
        />
      </div>
    </>
  );
}

export default Dice;
