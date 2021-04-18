import React from "react";
import {
  Link,
  useRouteMatch,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
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

  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
  const { path, url } = useRouteMatch();

  // LIVE API
  const { data } = useGoogleSearch(term);

  // MOCK
  // const data = response;

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

          {/* Options */}
          <div className="searchPage_options">
            {/* Left */}
            <div className="searchPage_optionsLeft">
              <div className="searchPage_option">
                <SearchIcon />
                <Link to={`${url}`}>All</Link>
              </div>
              <div className="searchPage_option">
                <DescriptionIcon />
                <Link to={`${url}/news`}>News</Link>
              </div>
              <div className="searchPage_option">
                <ImageIcon />
                <Link to={`${url}/Images`}>Images</Link>
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
      {/* Routing header options */}
      <Switch>
        <Route exact path={path}>
          {/* Results */}
          {term ? (
            <div className="searchPage_results">
              <p className="searchPage_resultsCount">
                About {data?.searchInformation.formattedTotalResults} results (
                {data?.searchInformation.searchTime} seconds) for {term}
              </p>
              {data?.items.map((item) => (
                <div className="searchPage_result" key={item.link}>
                  <a href={item.link} className="searchPage_resultLink">
                    {/* Show image if it is there */}
                    {item.pagemap?.cse_image?.length > 0 &&
                      item.pagemap?.cse_image[0].src && (
                        <img
                          src={item.pagemap?.cse_image[0].src}
                          alt="result image"
                          className="searchPage_resultImage"
                        />
                      )}
                    {item.displayLink}
                  </a>
                  <a href={item.link} className="searchPage_resultTitle">
                    <h3>{item.title}</h3>
                  </a>
                  <p className="searchPage_resultSnippet">{item.snippet}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="searchPage_results emptyMessage">
              Please type something in the search box to search something.
            </div>
          )}
        </Route>
        <Route path={`${path}/:optionId`}>
          <Option />
        </Route>
      </Switch>
    </div>
  );
}

export default SearchPage;

function Option() {
  // The <Route> that rendered this component has a
  // path of `/Search/:optionId`. The `:optionId` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.
  let { optionId } = useParams();

  return (
    <div>
      <h3>{optionId}</h3>
    </div>
  );
}
