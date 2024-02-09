import PropTypes from "prop-types";
import * as S from "./index.styles";
import { useCallback, useEffect, useState } from "react";

const ResultList = ({ allPrimes, userInput }) => {
  useEffect(() => {}, []);
  const [primesCounter, setPrimesCounter] = useState(0);

  const countPrimes = useCallback(() => {
    for (const [value] of Object.entries(allPrimes)) {
      if (value.isPrime) setPrimesCounter((curr) => curr + 1);
    }
  }, [allPrimes]);

  useEffect(() => {
    console.log("Loop:");
    console.log(countPrimes());
  }, [countPrimes]);

  useEffect(() => {
    console.log("Actual primes total:");
    console.log(primesCounter);
  }, [primesCounter]);

  return (
    <S.ResultContainer>
      <ul>
        There are {primesCounter} primes between 1 and {userInput}:{" "}
        {allPrimes.map((prime, index) => {
          return (
            <li key={index}>
              {`${prime.value}`}:{" "}
              <span
                style={{ fontWeight: prime.isPrime ? "bold" : "normal" }}
              >{`${prime.isPrime}`}</span>
            </li>
          );
        })}
      </ul>
    </S.ResultContainer>
  );
};

ResultList.propTypes = {
  allPrimes: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.bool,
      PropTypes.shape({
        isPrime: PropTypes.bool,
        value: PropTypes.number,
      }),
    ]),
  ),
  userInput: PropTypes.number,
};

export default ResultList;
