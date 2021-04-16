import ReactDOM from "react-dom";

type Props = {
  children: React.ReactNode;
};

const portalRoot =
  typeof document !== "undefined" ? document.getElementById("portal") : null;

const Backdrop = ({ children }: Props) => {
  if (typeof window === "undefined") return <></>;
  return portalRoot && ReactDOM.createPortal(children, portalRoot);
};

export default Backdrop;
