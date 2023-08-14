import { useState } from "react";
import "./App.css";

function App() {
  const [userInput, setUserInput] = useState(0);
  const [allPrimes, setAllPrimes] = useState([]);

  const primeChecker = (num) => {
    if (num < 2) return false;
    if (num % 2 === 0) {
      return false;
    } else {
      for (let i = 3; i < num; i++) {
        if (num % i === 0) return false;
      }
    }

    return true;
  };

  const handleChange = (event) => {
    let num = Math.min(100_000, Number(event.target.value));
    setUserInput(num);
  };

  const handlePrimes = () => {
    setAllPrimes([2]);
    for (let counter = 0; counter < userInput + 1; counter++) {
      if (primeChecker(counter)) {
        setAllPrimes((currArray) => [...currArray, counter]);
      }
    }
  };

  const handleReset = () => {
    setUserInput(0);
    setAllPrimes([]);
  };

  return (
    <>
      <h1>Prime Numbers</h1>
      <div>
        <label htmlFor="user-input">Your number: </label>
        <input
          name="user-input"
          type="text"
          onChange={handleChange}
          value={userInput}
        />
        <div className="button-div">
          <button onClick={handlePrimes}>Check!</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
      <div>
        <p>
          There are {allPrimes.length} primes between 1 and {userInput}:{" "}
          <strong>{allPrimes.join(", ")}</strong>
        </p>
      </div>
    </>
  );
}

export default App;
