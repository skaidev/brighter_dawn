import { Tab, Tabs, Typography } from "@mui/material";
import { Box } from "@mui/system";
import AddressPage from "components/address/AdProfileComp";
import LogInfoPage from "components/login/LogInfoComp";
import ContactCompPage from "components/profile/ContactComp";
import DemoGraphCompPage from "components/student/DemoGraphComp";
import { useQueryParams } from "hooks/useQueryParam";
import { IStudent } from "interface/students.interface";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import { students } from "utils/studentsData";

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
				<Box className="p-3">
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

const SingleStudentComp = () => {
	const view = useQueryParams()?.view || "Demographics";
	const router = useHistory();
	const params = useParams();
	const [student, setStudent] = useState<IStudent | undefined>();

	const id = useMemo(() => {
		return Object.values(params)?.[0];
	}, [[params]]);
	const tabItems = [
		{
			value: "Demographics",
			component: <DemoGraphCompPage student={student} />,
		},
		{ value: "Contacts", component: <ContactCompPage /> },
		{ value: "Address", component: <AddressPage /> },
		{ value: "Log In", component: <LogInfoPage /> },
	];
	const handleChange = useCallback(
		(_, e) => {
			router.push(`/students/${id}?view=${e}`);
		},
		[view, id],
	);

	const tabIndex = useMemo(() => {
		const index = tabItems.findIndex((e) => e.value === view);
		return index;
	}, [view]);

	useEffect(() => {
		const singleStudent = students.find(
			(student) => student?.id.toString() === id,
		);
		setStudent(singleStudent);
	}, [id]);

	return (
		<Wrapper>
			<Box style={{ borderBottom: "1px solid #D6D6D6" }}>
				<Tabs
					value={view}
					onChange={handleChange}
					aria-label="basic tabs example"
				>
					{tabItems.map((tab, i) => (
						<Tab
							key={i}
							label={tab.value}
							className=" text-capitalize"
							value={tab.value}
						/>
					))}
				</Tabs>
			</Box>
			{tabItems.map((tab, i) => (
				<TabPanel value={tabIndex} index={i} key={i}>
					{tab.component}
				</TabPanel>
			))}
		</Wrapper>
	);
};

export default SingleStudentComp;

const Wrapper = styled.div``;
