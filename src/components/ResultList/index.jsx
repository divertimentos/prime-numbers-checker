import PropTypes from "prop-types";
import * as S from "./index.styles";
import { useEffect } from "react";

const ResultList = ({ allPrimes, userInput }) => {
  useEffect(() => {
    console.log("Lista:");
    console.dir(allPrimes);
  }, [allPrimes]);

  return (
    <S.ResultContainer>
      <ul>
        There are {allPrimes.length} primes between 1 and {userInput}:{" "}
        {allPrimes.map((prime, index) => {
          return (
            <li key={index}>
              <span>{`${prime.value}`}:</span>{" "}
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
  allPrimes: PropTypes.arrayOf(["number"]),
  userInput: PropTypes.string,
};

export default ResultList;
