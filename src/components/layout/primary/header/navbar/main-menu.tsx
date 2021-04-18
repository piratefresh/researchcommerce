/** @jsx jsx */
import { useRef, useEffect } from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import { Box, Text, jsx } from "theme-ui";
import { IoIosArrowDown } from "react-icons/io";
import useWindowSize from "../../../../../hooks/useWindowSize";
import { useUI } from "../../../../../context/UIContext";
import styles from "./navbar.style";
import { PrismicCategory, PrismicCategoryEdge } from "generated/gatsby";

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

const MainMenu: React.FC<{ onClick?: () => void; pathPrefix?: string }> = ({
  onClick,
  pathPrefix = "/collection",
}) => (
  <StaticQuery<GatsbyTypes.Query>
    query={`${menuStaticQuery}`}
    render={(data) => {
      const { allPrismicCategory } = data;
      const categories = [...allPrismicCategory.edges];

      const menuData = getMenuData(categories);

      const mainMenu = useRef(null);
      const windowSize = useWindowSize();
      useEffect(() => {
        if (windowSize && windowSize < 1081) {
          const menu = mainMenu.current.children;
          for (let index = 0; index < menu.length; index++) {
            const element = menu[index];
            element.addEventListener("click", function () {
              element.classList.toggle("active");
            });
          }
        }
      }, [windowSize]);
      const { openSidebar } = useUI();

      return (
        <Box className="mainMenu" as="ul" ref={mainMenu} sx={styles.mainMenu}>
          <li
            className="flex flex-row items-center font-semibold cursor-pointer"
            onClick={openSidebar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
            All
          </li>
          {menuData &&
            menuData.map((item) => (
              <Box
                as="li"
                // className={`dropdown-items-${item.submenu?.length}`}
                className={`dropdown-items`}
                key={item.title}
                sx={styles.mainMenuItem}
              >
                {item?.submenu ? (
                  <Text as="span">{item.title}</Text>
                ) : (
                  <Link
                    activeClassName="active"
                    to={item.path}
                    onClick={onClick}
                  >
                    {item.title}
                  </Link>
                )}

                {item?.submenu && <IoIosArrowDown />}

                {/* if menu has submenu */}
                {item?.submenu && (
                  <Box as="ul" sx={styles.submenu}>
                    {item?.submenu.map((subItem) => (
                      <Box as="li" key={`${item.title}-${subItem.title}`}>
                        <Link
                          activeClassName="active"
                          to={`${pathPrefix}/${subItem.path}`}
                          onClick={onClick}
                        >
                          {subItem.title}
                        </Link>
                      </Box>
                    ))}
                  </Box>
                )}
              </Box>
            ))}
        </Box>
      );
    }}
  />
);

export default MainMenu;
