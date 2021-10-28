import React, { useState } from "react";

function Result({ year, month, date }) {
  const [plus, setPlus] = useState(1);
  const [minus, setMinus] = useState(1);

  const onDate = (op, input) => {
    const now = new Date(year, month - 1, date);
    const calcDate = new Date(now);

    calcDate.setDate(
      op === "+"
        ? now.getDate() + parseInt(input - 1, 10)
        : now.getDate() - parseInt(input, 10)
    );
    return `${calcDate.getFullYear()}년 ${
      calcDate.getMonth() + 1
    }월 ${calcDate.getDate()}일`;
  };
  const onChange = (e, setter) => {
    setter(() => e.target.value);
  };
  return (
    <div className="result-con">
      <div className="d-plus">
        <input
          type="number"
          value={plus || ""}
          onChange={(e) => onChange(e, setPlus)}
        />
        일째 되는 날은?
        <span>{onDate("+", plus)}</span>
      </div>
      <div className="d-minus">
        D-
        <input
          type="number"
          value={minus || ""}
          onChange={(e) => onChange(e, setMinus)}
        />
        <span>{onDate("-", minus)}</span>
      </div>
    </div>
  );
}

export default Result;
