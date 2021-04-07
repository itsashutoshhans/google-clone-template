import React from "react";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import { useStateValue } from "../StateProvider";
import response from "../store/response";
import useGoogleSearch from "../useGoogleSearch";
import "./SearchPage.css";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();

  // LIVE API
  // const { data } = useGoogleSearch(term);

  // MOCK
  const data = response;

  console.log(data);
  return (
    <div className="searchPage">
      {/* Header */}
      <div className="searchPage_header">
        <Link to="/">
          <img
            src="assets/google-logo.png"
            className="searchPage_logo"
            alt="google logo"
          />
        </Link>
        <div className="searchPage_headerBody">
          <Search hideButtons />
          <div className="searchPage_options">
            {/* Left */}
            <div className="searchPage_optionsLeft">
              <div className="searchPage_option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="searchPage_option">
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </div>
              <div className="searchPage_option">
                <ImageIcon />
                <Link to="/images">Images</Link>
              </div>
            </div>

            {/* Right */}
            <div className="searchPage_optionsRight">
              <div className="searchPage_option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="searchPage_option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="searchPage_results">
        <h1>{term}</h1>
      </div>
    </div>
  );
}

export default SearchPage;
