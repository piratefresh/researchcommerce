import React from "react";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch } from "react-instantsearch-dom";
import useOnClickOutside from "../../hooks/useOutsideClick";
import StyledSearchBox from "./styledSearchBox";
import StyledSearchResults from "./styledSearchResults";
import StyledSearchRoot from "./styledSearchRoot";
import Backdrop from "../backdrop";

type indicesProps = {
  name: string;
  title: string;
};

interface IAlgolia {
  indices: indicesProps[];
}

export default function SearchAlgolia({ indices }: IAlgolia) {
  const rootRef = React.useRef(null);
  const [query, setQuery] = React.useState<String>("");
  const [hasFocus, setFocus] = React.useState(false);
  const searchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID as string,
    process.env.GATSBY_ALGOLIA_SEARCH_KEY as string
  );

  const handleClickOutside = () => {
    // Your custom logic here
    setFocus(false);
    console.log("clicked outside");
  };

  useOnClickOutside(rootRef, handleClickOutside);
  if (!indices) {
    return <div>Loading...</div>;
  }

  const handleClose = () => {
    setQuery("");
    setFocus(false);
  };

  return (
    <StyledSearchRoot ref={rootRef}>
      <InstantSearch
        searchClient={searchClient}
        indexName={indices[0].name}
        onSearchStateChange={({ query }: any) => setQuery(query)}
      >
        <StyledSearchBox
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          hasFocus={hasFocus}
        />
        {/* <SearchBox onFocus={() => setFocus(true)} hasFocus={hasFocus} /> */}
        <StyledSearchResults
          show={query && query.length > 0 && hasFocus}
          indices={indices}
        />
        {query && query.length > 0 && hasFocus ? (
          <Backdrop>
            <div
              className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity z-10 cursor-pointer"
              onClick={handleClose}
            ></div>
          </Backdrop>
        ) : null}
      </InstantSearch>
    </StyledSearchRoot>
  );
}
