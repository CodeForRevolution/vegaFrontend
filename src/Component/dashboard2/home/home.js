import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import Blog from "../pages/Blog/Blog";

import { useDispatch } from "react-redux";
import { addBulkBlogs } from "../../redux/astroSlice";

import axios from "axios";

const Home = () => {
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const dispatch = useDispatch();


  React.useEffect(() => {
    async function fetchData() {
      try {
        var blogResponse = await axios.get(
          "https://vega-backend-six.vercel.app/api/v1/blog/getAll"
        );
        dispatch(addBulkBlogs(blogResponse.data.data));
      } catch (error) {
        console.log("error", error);
      }
    }
    fetchData();
  }, []);

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        typography: "body1",
      }}
    >
      <TabContext value={value}>
        <Box
          sx={{
            borderBottom: 1,
            Color: "divider",
          }}
        >
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Blog " value="1" />
          </TabList>
        </Box>
        <TabPanel
          value="1"
          sx={{ width: "100%", height: "auto", padding: "10px" }}
        >
          <Blog />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default Home;
