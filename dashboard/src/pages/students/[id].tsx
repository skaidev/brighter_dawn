import { Tab, Tabs, Typography } from "@mui/material";
import { Box } from "@mui/system";
import AddressPage from "components/address/AdProfileComp";
import FileCompPage from "components/files";
import LogInfoPage from "components/login/LogInfoComp";
import ProfileNoteComp from "components/notes";
import ContactCompPage from "components/profile/ContactComp";
import DemoGraphCompPage from "components/profile/DemoGraphComp";
import React from "react";
import styled from "styled-components";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box className=" p-3">
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const TabCompPage = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Wrapper>
      <Box style={{ borderBottom: "1px solid #D6D6D6" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            label="Demographics"
            className=" text-capitalize"
            {...a11yProps(0)}
          />
          <Tab
            label="Contacts"
            className=" text-capitalize"
            {...a11yProps(1)}
          />
          <Tab
            label="Addresses"
            className=" text-capitalize"
            {...a11yProps(2)}
          />
          <Tab
            label="Login Info"
            className=" text-capitalize"
            {...a11yProps(3)}
          />
          <Tab label="Notes" className=" text-capitalize" {...a11yProps(4)} />
          <Tab label="Reports" className=" text-capitalize" {...a11yProps(5)} />
          <Tab label="Files" className=" text-capitalize" {...a11yProps(6)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <DemoGraphCompPage />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ContactCompPage />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <AddressPage />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <LogInfoPage />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <ProfileNoteComp />
      </TabPanel>
      <TabPanel value={value} index={5}>
        reports
      </TabPanel>
      <TabPanel value={value} index={6}>
        <FileCompPage />
      </TabPanel>
    </Wrapper>
  );
};

export default TabCompPage;

const Wrapper = styled.div``;
