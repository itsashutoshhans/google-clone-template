import React, { useState } from "react";
import MicIcon from "@material-ui/icons/Mic";
import SearchIcon from "@material-ui/icons/Search";
import "./Search.css";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

function Search({ hideButtons = false }) {
  const [{term}, dispatch] = useStateValue();
  const [input, setInput] = useState(term);
  const history = useHistory();

  const search = (e) => {
    e.preventDefault();

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });

    // do something with the input
    history.push("/search");
  };

  return (
    // enabling key press enter, use form and button type = submit
    <form className="search">
      <div className="search_input">
        <SearchIcon className="search_inputIcon" />
        <input
          type="search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <MicIcon />
      </div>
      {!hideButtons ? (
        <div className="search_buttons">
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined" onClick={() => alert("Great!")}>
            I'm Feeling Lucky
          </Button>
        </div>
      ) : (
        <div className="search_buttons">
          <Button
            type="submit"
            onClick={search}
            variant="outlined"
            className="search_buttonHidden"
          >
            Google Search
          </Button>
          <Button variant="outlined" className="search_buttonHidden">
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;
