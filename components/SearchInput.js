// export default SearchInput;
import styles from "./SearchInput.module.scss";
import { useState, useEffect } from "react";
export default function SearchBar(props) {
  const { items } = props;
  const [suggestions, setSuggestions] = useState([]);
  const [text, setText] = useState("");
  const [enterEvent, setEnterEvent] = useState(false);

  useEffect(() => {
    props.onChangeText(text, enterEvent);
  }, [text, enterEvent]);

  const onTextChange = (e) => {
    const val = e.target.value;
    let suggestionsData = [];
    // filtering the existing suggestions based on VALUE which entered by end user
    if (val) {
      const regex = new RegExp(`^${val}`, "i");
      suggestionsData = items.sort().filter((v) => regex.test(v));
    }
    // Check if the first location in suggestions data is matching the value which entered by user
    // if yes so please set the suggestion to empty array
    if (
      val &&
      suggestionsData.length > 0 &&
      suggestionsData[0] &&
      val.toLowerCase() == suggestionsData[0].toLowerCase()
    ) {
      suggestionsData = [];
    }
    setSuggestions(suggestionsData);
    setEnterEvent(false);
    setText(val);
  };

  /**
   * Here we're gonna pass this function in onKeyDown to listen for the enter button keyboard
   * This will help us to determine if user press on enter button on his keyboard 
   * Then, we will send the location to filter the alert feeds based on that location 
   * NOTE: This approach was implemented to prevent sending a lot of requests while the user is still typing
   * @param {*} e Search Input event listener 
   */
  const search = (e) => {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
      console.log(e);
      e.preventDefault();
      setEnterEvent(true);
    }
  };

  const suggestionSelected = (value) => {
    setText(value);
    setEnterEvent(true);
    setSuggestions([]);
  };

  const renderSuggestions = () => {
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul className={styles.suggestions}>
        {suggestions.map((item, i) => (
          <li key={i} onClick={() => suggestionSelected(item)}>
            {item}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="SearchBar">
      <input
        type="text"
        onChange={onTextChange}
        onKeyDown={search}
        value={text}
        className={styles.input}
        placeholder="Search A Location To See Its Risk Data..."
      />
      {renderSuggestions()}
    </div>
  );
}
