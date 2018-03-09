import React from "react";
import selection from "./selection.json";

const test = props => (
  <div className="book-shelf-changer">
    <select>
      {selection.map((option, index) => (
        <option
          key={option.value + index}
          value={option.value}
          onChange={props.onChange}
          disabled={option.disabled}
          children={option.text}
        />
      ))}
    </select>
  </div>
);

class shelfChanger extends React.Component {
  render() {
    console.log(this.props);
    return test(this.props);
  }
}

export default shelfChanger;
