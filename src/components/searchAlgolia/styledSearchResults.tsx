import styled, { css } from "styled-components";
import SearchResults from "./searchResults";

interface IProps {
  show?: boolean;
}

const Popover = css`
  position: absolute;
  z-index: 2;
  right: 0;
  top: 100%;
  width: 100%;
  padding: 1em;
  border-radius: 0 0 0.5rem 0.5rem;
  background: #fff;
  max-height: calc(100vh - 60px);
  overflow-x: auto;
  z-index: 20;
`;

export default styled(SearchResults)<IProps>`
  display: ${(props) => (props.show ? `block` : `none`)};
  ${Popover}
  .HitCount {
    display: flex;
    justify-content: flex-end;
  }
  .Hits {
    ul {
      list-style: none;
      margin-left: 0;
    }
    li.ais-Hits-item {
      margin-bottom: 1em;
      a {
        color: ${({ theme }) => theme.foreground};
        h4 {
          margin-bottom: 0.2em;
        }
      }
    }
  }
  .ais-PoweredBy {
    display: flex;
    justify-content: flex-end;
    font-size: 80%;
    svg {
      width: 70px;
    }
  }
`;
