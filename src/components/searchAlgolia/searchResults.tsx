import { Link } from "gatsby";
import { default as React } from "react";
import {
  connectStateResults,
  Highlight,
  Hits,
  Index,
  Snippet,
  PoweredBy,
} from "react-instantsearch-dom";
import { Hit } from "react-instantsearch-core";

type IndexProp = {
  name: string;
  title: string;
};

type PageHitProps = {
  hit: any;
};

type HitsInIndexProps = {
  index: IndexProp;
};

type SearchResultProps = {
  indices: IndexProp[];
  className?: string;
  show: Boolean;
};

const HitCount = connectStateResults(({ searchResults }) => {
  const hitCount = searchResults && searchResults.nbHits;
  return hitCount > 0 ? (
    <div className="HitCount">
      {hitCount} result{hitCount !== 1 ? `s` : ``}
    </div>
  ) : null;
});

const PageHit = ({ hit }: PageHitProps) => {
  console.log("hit: ", hit);
  return (
    <div>
      <Link
        className="flex flex-row items-center"
        to={`/product/${hit.handle}`}
      >
        {hit.image ? (
          <img
            className="object-cover h-16 w-16 mr-4"
            src={hit.image}
            alt={hit.title}
          />
        ) : null}

        <div className="flex flex-col">
          <h4 className="font-semibold">
            <Highlight attribute="title" hit={hit} tagName="mark" />
          </h4>
          <p className="capitalize font-xs">{hit.product_type}</p>
        </div>
      </Link>
      <Snippet attribute="excerpt" hit={hit} tagName="mark" />
    </div>
  );
};

const HitsInIndex = ({ index }: HitsInIndexProps) => {
  return (
    <Index indexName={index.name}>
      <Hits hitComponent={PageHit} />
      <HitCount />
    </Index>
  );
};

const SearchResult = ({ indices, className, show }: SearchResultProps) => {
  return (
    <div className={className}>
      {indices.map((index: any) => (
        <HitsInIndex index={index} key={index.name} />
      ))}
      {/* <PoweredBy /> */}
    </div>
  );
};
export default SearchResult;
