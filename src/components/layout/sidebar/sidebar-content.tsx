import React from "react";
import Cross from "../../icons/Cross";
import ChavronRight from "../../icons/ChavronRight";
import { useUI } from "../../../context/UIContext";
import { graphql, Link, StaticQuery } from "gatsby";
import {
  Prismic_CategoryConnectionConnection,
  Prismic_CategoryConnectionEdge,
} from "generated/gatsby";
import Submenu from "./submenu";
import Logo from "../../logo/logo";

const menuStaticQuery = graphql`
  query {
    allPrismicCategory {
      totalCount
      edges {
        node {
          uid
          data {
            title {
              text
            }
            parent_category {
              document {
                ... on PrismicCategory {
                  data {
                    title {
                      text
                    }
                  }
                  uid
                }
              }
            }
          }
        }
      }
      pageInfo {
        hasNextPage
      }
    }
  }
`;

type SubMenuProps = {
  path: string | undefined;
  title: string;
};

type MenuProps = {
  path: string;
  title: string;
  submenu?: SubMenuProps[];
  index?: number;
};

const getMenuData = (categories) => {
  const data = [];
  //fill up first parent
  categories.forEach((category) => {
    if (!category.node?.data?.parent_category?.document) {
      const uid = category?.node?.uid;
      const text = category?.node?.data.title.text;
      if (uid && text) {
        data.push({ path: uid, title: text });
      }
    }
  });
  //fill up child
  categories.forEach((category) => {
    if (category?.node?.data?.parent_category) {
      const parent = category?.node?.data?.parent_category?.document?.uid;
      const uid = category?.node?.uid;
      const text = category?.node?.data.title.text;
      const index = data.findIndex((item) => {
        console.log(item.path);
        return item.path === parent;
      });

      if (index > -1) {
        console.log("index: ", index);
        if (data[index].submenu && data[index].submenu.length) {
          data[index].submenu.push({ path: uid, title: text });
        } else {
          data[index].submenu = [];
          data[index].submenu.push({ path: uid, title: text });
        }
      }
    }
  });

  console.log("data menu: ", data);
  return data;
};

const SidebarNav: React.FC = () => (
  <StaticQuery<GatsbyTypes.Query>
    query={`${menuStaticQuery}`}
    render={(data) => {
      const { closeSidebar } = useUI();
      const [showSubMenu, setShowSubMenu] = React.useState<Boolean>(false);
      const [subMenuId, setShowMenuId] = React.useState<number>(0);
      const { allPrismicCategory } = data;
      const categories = [...allPrismicCategory.edges];
      const menuData = getMenuData(categories);
      const handleClose = () => closeSidebar();
      const handleShowSubmenu = (id: number) => {
        setShowSubMenu(true);
        setShowMenuId(id);
      };
      const handleBackSubmenu = () => {
        setShowSubMenu(false);
        setShowMenuId(0);
        console.log("go back");
      };
      return (
        <div className="flex flex-col items-center my-4 z-40">
          <div className="flex flex-row justify-center relative w-full my-4">
            <button
              onClick={handleClose}
              aria-label="Close panel"
              className="hover:text-gray-500 transition ease-in-out duration-150 absolute left-0 top-2"
            >
              <Cross className="h-6 w-6" />
            </button>
          </div>

          <div className="flex flex-col items-center w-full">
            <ul className="w-full p-4">
              <div className="flex justify-center items-center">
                <Logo />
              </div>
              {showSubMenu ? (
                <a
                  className="cursor-pointer z-50"
                  onClick={() => handleBackSubmenu()}
                >
                  Back To Main Menu
                </a>
              ) : null}

              {!showSubMenu ? (
                menuData.map((menu: MenuProps, index: number) => {
                  if (!showSubMenu) {
                    return (
                      <li
                        className="flex flex-row items-center cursor-pointer mt-4"
                        onClick={() => handleShowSubmenu(index)}
                      >
                        <div className="text-sm font-semibold">
                          {menu.title}
                        </div>
                        {menu.submenu ? (
                          <a className="ml-auto">
                            <ChavronRight
                              className="h-6 w-6 mt-1"
                              currentColor="#212121"
                            />
                          </a>
                        ) : null}
                      </li>
                    );
                  }
                })
              ) : (
                <li
                  className="cursor-pointer mt-2"
                  key={menuData[subMenuId].path}
                >
                  <div className="text-sm font-semibold">
                    {menuData[subMenuId].submenu &&
                      menuData[subMenuId].submenu.map(
                        (submenu: SubMenuProps) => {
                          return (
                            <Link
                              key={submenu.path}
                              to={`/collection/${submenu.path}`}
                            >
                              <div key={submenu.path} className="my-4">
                                {submenu.title}
                              </div>
                            </Link>
                          );
                        }
                      )}
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>
      );
    }}
  />
);

export default SidebarNav;
