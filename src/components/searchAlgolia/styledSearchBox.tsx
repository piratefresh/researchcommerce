import styled, { css } from "styled-components";
import SearchBox from "./searchBox";

interface IProps {
  hasFocus?: boolean;
}

const open = css`
  width: 100%;
  background: #fff;
  cursor: text;
`;
const closed = css`
  width: 100%;
  background: rgb(247, 247, 247);
  cursor: pointer;
`;
export default styled(SearchBox)<IProps>`
  display: flex;
  position: relative;
  flex-direction: row-reverse;
  align-items: center;
  margin-bottom: 0;
  .SearchInput {
    outline: none;
    border: 1px solid #212121;
    font-size: 1em;
    transition: 100ms;
    border-radius: 15px;
    color: #000;
    padding: 1.5rem;
    margin-left: -1.6em;
    padding-left: 1.6em;
    z-index: 20;
    ::placeholder {
      color: #000;
    }
    ${({ hasFocus }) => (hasFocus ? open : closed)}
  }
  .SearchIcon {
    width: 1em;
    margin: 0.3em;
    color: ${({ theme }) => theme.foreground};
    pointer-events: none;
  }
`;
