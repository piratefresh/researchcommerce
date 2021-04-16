import React from "react";
import { connectSearchBox } from "react-instantsearch-dom";
import { SearchBoxProvided } from "react-instantsearch-core";

interface ISearchBoxProps extends SearchBoxProvided {
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus: (event: React.FocusEvent<HTMLInputElement>) => void;
  className?: string;
}

export default connectSearchBox(
  ({ refine, currentRefinement, className, onFocus }: ISearchBoxProps) => (
    <form className={className}>
      <input
        className="SearchInput"
        type="text"
        placeholder="Search"
        aria-label="Search"
        onChange={(e) => refine(e.target.value)}
        value={currentRefinement}
        onFocus={onFocus}
      />
      <svg className="search-icon" width="16" height="16" viewBox="0 0 16 16">
        <path
          d="M16.122,12.452a6.772,6.772,0,1,0-1.195,1.2l.036.038,3.592,3.592a.847.847,0,0,0,1.2-1.2L16.16,12.488ZM14.364,4.706a5.079,5.079,0,1,1-7.183,0A5.079,5.079,0,0,1,14.364,4.706Z"
          transform="translate(-4 -1.525)"
          fillRule="evenodd"
        />
      </svg>
    </form>
  )
);
