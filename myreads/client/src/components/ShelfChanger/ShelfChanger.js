import React from "react";
import selection from "./selection.json";

const ShelfChanger = props => (
  <div className="book-shelf-changer">
    <select name={props.name} defaultValue={props.onShelf}
      onChange={props.changeHandler}>
      {selection.map((option, index) => (
        <option
          key={option.value + index}
          value={option.value}
          disabled={option.disabled}
          children={option.text}
        />
      ))}
    </select>
  </div>
);

export default ShelfChanger;
