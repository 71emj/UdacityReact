import React from "react";
import PropTypes from "prop-types";
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
          selected={!props.onShelf && option.disabled}
          children={option.text}
        />
      ))}
    </select>
  </div>
);

const propTypes = {
  name: PropTypes.string.isRequired,
  onShelf: PropTypes.string,
  changeHandler: PropTypes.func.isRequired,
  selection: PropTypes.array.isRequired
};

export default ShelfChanger;
