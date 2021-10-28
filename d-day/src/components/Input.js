import React from "react";

function Input({ year, setYear, month, setMonth, date, setDate }) {
  const today = new Date();

  const onClick = () => {
    setYear(() => today.getFullYear());
    setMonth(() => today.getMonth() + 1);
    setDate(() => today.getDate());
  };
  const onChange = (e, setter) => {
    setter(() => e.target.value);
  };
  return (
    <div className="input-con">
      <button onClick={onClick}>오늘</button>
      <div className="input-form">
        <input
          type="number"
          value={year || ""}
          onChange={(e) => onChange(e, setYear)}
        />
        년
        <input
          type="number"
          value={month || ""}
          onChange={(e) => onChange(e, setMonth)}
        />
        월
        <input
          type="number"
          value={date || ""}
          onChange={(e) => onChange(e, setDate)}
        />
        일을 기준으로
      </div>
    </div>
  );
}

export default Input;
