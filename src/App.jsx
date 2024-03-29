import { useEffect, useState } from "react";
import "./App.css";
import * as S from "./App.styles";
import ResultList from "./components/ResultList";

function App() {
  const [userInput, setUserInput] = useState(12);
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
    setUserInput(parseInt(num));
  };

  const handlePrimes = () => {
    setAllPrimes((curr) => [
      ...curr,
      { value: 0, isPrime: false },
      { value: 1, isPrime: false },
      { value: 2, isPrime: true },
    ]);

    for (let counter = 3; counter < userInput + 1; counter++) {
      if (primeChecker(counter)) {
        setAllPrimes((currArray) => [
          ...currArray,
          { value: counter, isPrime: true },
        ]);
      } else {
        setAllPrimes((currArray) => [
          ...currArray,
          { value: counter, isPrime: false },
        ]);
      }
    }
  };

  const handleReset = () => {
    setUserInput("");
    setAllPrimes([]);
  };

  const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");

  return (
    <>
      <h1>Prime Numbers</h1>
      <S.Container darkmode={darkModeQuery}>
        <input
          name="user-input"
          type="text"
          placeholder="Enter your number"
          onChange={handleChange}
          value={userInput}
        />
      </S.Container>
      <S.ButtonContainer>
        <S.Button disabled={allPrimes.length > 0} onClick={handlePrimes}>
          Check!
        </S.Button>
        <S.Button onClick={handleReset}>Reset</S.Button>
      </S.ButtonContainer>
      <ResultList allPrimes={allPrimes} userInput={userInput} />
    </>
  );
}

export default App;
