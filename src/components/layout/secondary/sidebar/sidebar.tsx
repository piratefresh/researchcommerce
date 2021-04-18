/** @jsx jsx */
import { StaticQuery, graphql } from "gatsby";
import { Box, Text, jsx, Button } from "theme-ui";
import { IoIosClose } from "react-icons/io";
import TreeMenu from "../../../tree-menu/tree-menu";
import styles from "./sidebar.style";

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

const Sidebar: React.FC<{ onClose?: () => void }> = ({ onClose }) => (
  <StaticQuery<GatsbyTypes.Query>
    query={`${menuStaticQuery}`}
    render={(data: any) => {
      const { allPrismicCategory } = data;
      let categories: any = [];
      if (allPrismicCategory) {
        categories = [...allPrismicCategory.edges];
      }
      const menuData = getMenuData(categories);
      return (
        <Box sx={styles.wrapper}>
          <Box sx={styles.header}>
            <Text as="p" sx={styles.text}>
              All Categories
            </Text>
            <Button variant="text" onClick={onClose}>
              <IoIosClose />
            </Button>
          </Box>
          <TreeMenu items={menuData} />
        </Box>
      );
    }}
  />
);

export default Sidebar;
