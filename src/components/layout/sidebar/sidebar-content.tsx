import React from "react";
import Cross from "../../icons/Cross";
import ChavronRight from "../../icons/ChavronRight";
import { useUI } from "../../../context/UIContext";
import { graphql, StaticQuery } from "gatsby";
import {
  Prismic_CategoryConnectionConnection,
  Prismic_CategoryConnectionEdge,
} from "generated/gatsby";
import Submenu from "./submenu";
import Logo from "../../logo/logo";

const menuStaticQuery = graphql`
  query {
    prismic {
      firstData: allCategorys {
        totalCount
        edges {
          cursor
          node {
            _meta {
              uid
            }
            title
            parent_category {
              ... on PRISMIC_Category {
                title
                _meta {
                  uid
                }
              }
            }
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
      lastData: allCategorys(after: "YXJyYXljb25uZWN0aW9uOjE5") {
        totalCount
        edges {
          cursor
          node {
            _meta {
              uid
            }
            title
            parent_category {
              ... on PRISMIC_Category {
                title
                _meta {
                  uid
                }
              }
            }
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
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

const getMenuData = (categories: Prismic_CategoryConnectionEdge[]) => {
  console.log("categories: ", categories);
  const data: any = [];
  //fill up first parent
  categories.forEach((category: Prismic_CategoryConnectionEdge) => {
    if (!category?.node?.parent_category) {
      const uid = category?.node?._meta.uid;
      const text = category?.node?.title[0]?.text;
      if (uid && text) {
        data.push({ path: uid, title: text });
      }
    }
  });
  //fill up child
  categories.forEach((category) => {
    if (category?.node?.parent_category) {
      const parent = category?.node?.parent_category?._meta?.uid;
      const uid = category?.node?._meta.uid;
      const text = category?.node?.title[0]?.text;
      const index = data.findIndex((item) => item.path === parent);
      if (index > -1) {
        if (data[index].submenu && data[index].submenu.length) {
          data[index].submenu.push({ path: uid, title: text });
        } else {
          data[index].submenu = [];
          data[index].submenu.push({ path: uid, title: text });
        }
      }
    }
  });
  return data;
};

const SidebarNav: React.FC = () => (
  <StaticQuery<GatsbyTypes.Query>
    query={`${menuStaticQuery}`}
    render={(data) => {
      const { closeSidebar } = useUI();
      const [showSubMenu, setShowSubMenu] = React.useState<Boolean>(false);
      const [subMenuId, setShowMenuId] = React.useState<number>(0);
      const { firstData, lastData } = data.prismic;
      const categories = [...firstData.edges, ...lastData.edges];
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
                        key={menu.path}
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
                          return <div key={submenu.path}>{submenu.title}</div>;
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
