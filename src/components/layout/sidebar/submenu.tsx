import React from "react";
import ChavronRight from "../../icons/ChavronRight";

type SubMenuProps = {
  path: string | undefined;
  title: string;
};

type MenuProps = {
  path: string;
  title: string;
  submenu?: SubMenuProps[];
};

type Props = {
  menu: MenuProps;
};

function Submenu({ menu }: Props) {
  const [showSubMenu, setShowSubMenu] = React.useState<Boolean>(false);
  return (
    <div className="flex flex-col">
      <li className="flex flex-row items-center cursor-pointer mt-4">
        <div className="text-sm font-semibold">{menu.title}</div>
        {menu.submenu ? (
          <a className="ml-auto" onClick={() => setShowSubMenu(!showSubMenu)}>
            <ChavronRight className="h-6 w-6 mt-1" currentColor="#212121" />
          </a>
        ) : null}
      </li>
      {showSubMenu && menu.submenu ? (
        <ul className="flex flex-col ml-4">
          {menu.submenu.map((submenu) => {
            return (
              <li className="cursor-pointer mt-2">
                <div className="text-sm font-semibold">{submenu.title}</div>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}

export default Submenu;
