import Backdrop from "../../backdrop";
import React from "react";

interface Props {
  children: any;
  open: boolean;
  onClose: () => void;
}

const SidebarStyles = {
  position: "absolute",
  top: "0",
  left: "0",
  bottom: "0",
  width: "30rem",
  background: "#fff",
};

const Sidebar: React.FC<Props> = ({ children, open = false, onClose }) => {
  React.useEffect(() => {
    console.log("Open: ", open);
  }, [open]);

  return (
    <div>
      {open ? (
        <Backdrop>
          <div
            className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity z-30 cursor-pointer"
            onClick={onClose}
          ></div>
          <div
            className="absolute top-0 right-0 left-0 bottom-0 bg-white z-40"
            style={{ width: "30rem" }}
          >
            {children}
          </div>
        </Backdrop>
      ) : null}
    </div>
  );
};

export default Sidebar;
