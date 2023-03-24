import React, { useState, useEffect } from "react";
import "./MemoryCard.css";

const images = [    "https://picsum.photos/id/1015/200",  "https://picsum.photos/id/1016/200",  "https://picsum.photos/id/1019/200",  "https://picsum.photos/id/1020/200",  "https://picsum.photos/id/1023/200",  "https://picsum.photos/id/1024/200",  "https://picsum.photos/id/1025/200",];

function MemoryCard() {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [solved, setSolved] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const newCards = images
      .concat(images)
      .map((url, index) => ({ id: index, url }));

    setCards(shuffle(newCards));
  }, []);

  useEffect(() => {
    if (flipped.length === 2) {
      setDisabled(true);

      const [first, second] = flipped;

      if (cards[first].url === cards[second].url) {
        setSolved([...solved, first, second]);
        setScore(score + 10);
        setDisabled(false);
      } else {
        setTimeout(() => {
          setFlipped([]);
          setScore(score - 5);
          setDisabled(false);
        }, 1000);
      }
    }
  }, [flipped]);

  const handleClick = (id) => {
    if (disabled) return;
    if (solved.includes(id)) return;

    if (flipped.length === 0) {
      setFlipped([id]);
    } else {
      setFlipped([flipped[0], id]);
    }
  };

  const shuffle = (array) => {
    const newArray = array.slice();
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const renderCard = (index) => {
    const isFlipped = flipped.includes(index);
    const isSolved = solved.includes(index);
    const isDisabled = disabled || isSolved;

    return (
      <div
        className={`card ${isFlipped ? "flipped" : ""} ${
          isSolved ? "solved" : ""
        }`}
        onClick={() => handleClick(index)}
      >
        <div className="card-back"></div>
        <div className="card-front" style={{ backgroundImage: `url(${cards[index].url})` }}></div>
      </div>
    );
  };

  return (
    <div className="memorycard-app">
      <h1>Memory Game</h1>
      <h2>Score: {score}</h2>
      <div className="card-container">
        {cards.map((card, index) => renderCard(index))}
      </div>
    </div>
  );
}

export default MemoryCard;
