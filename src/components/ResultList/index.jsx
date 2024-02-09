import PropTypes from "prop-types";
import * as S from "./index.styles";
import { useEffect } from "react";

const ResultList = ({ allPrimes, userInput }) => {
  useEffect(() => {
    console.log("Tipos das coisas:");
    console.log("allPrimes:");
    console.log(allPrimes);

    console.log("userInput:");
    console.log(userInput);
  }, [allPrimes, userInput]);

  return (
    <S.ResultContainer>
      <ul>
        There are {allPrimes.length} primes between 1 and {userInput}:{" "}
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
