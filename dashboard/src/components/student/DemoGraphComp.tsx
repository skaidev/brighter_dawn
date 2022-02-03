import {
	Box,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from "@mui/material";
import { IStudent } from "interface/students.interface";
import { ButtonComp } from "lib/ButtonComp";
import { TextIputBase } from "lib/InputBaseComp";
import { TableCellComp } from "lib/TableComp";
import React from "react";
import styled from "styled-components";

interface IProp {
	student: IStudent | undefined;
}

const DemoGraphCompPage = ({ student }: IProp) => {
	return (
		<Wrapper>
			<Box className="demograph">
				<div className="demograph-top d-flex">
					<Typography>
						{student?.firstName} {student?.lastName}
					</Typography>
					<ButtonComp variant="outlined" className=" text-capitalize">
						{student?.firstName ? `${student?.firstName}'s Info` : ""}
					</ButtonComp>
				</div>
				<TableContainer className="demograph-mid">
					<Table>
						<TableBody>
							<TableRow>
								<TableCellComp>
									First name:
									<TextIputBase placeholder="Sampson" className=" mx-2" />
								</TableCellComp>
								<TableCellComp>
									Middle name:{" "}
									<TextIputBase placeholder="Ndalee" className=" mx-2" />
								</TableCellComp>
								<TableCellComp>
									Last name:{" "}
									<TextIputBase placeholder="Obe" className=" mx-2" />
								</TableCellComp>
								<TableCellComp>
									Class: <TextIputBase placeholder="JSS1" className=" mx-2" />
								</TableCellComp>
							</TableRow>
							<TableRow>
								<TableCellComp>
									Status:{" "}
									<TextIputBase placeholder="Re-enrollment" className=" mx-2" />
								</TableCellComp>
								<TableCellComp>
									Tags: <TextIputBase placeholder="Add..." className=" mx-2" />
								</TableCellComp>
								<TableCellComp>
									Student ID:{" "}
									<TextIputBase placeholder="4099" className=" mx-2" />
								</TableCellComp>
								<TableCellComp>
									Family ID:{" "}
									<TextIputBase placeholder="1089" className=" mx-2" />
								</TableCellComp>
							</TableRow>
							<TableRow>
								<TableCellComp>
									Gender: <TextIputBase placeholder="Male" className=" mx-2" />
								</TableCellComp>
								<TableCellComp>
									Birth:{" "}
									<TextIputBase placeholder="30/11/1999" className=" mx-2" />
								</TableCellComp>
								<TableCellComp>
									Mobile:{" "}
									<TextIputBase placeholder="08131367090" className=" mx-2" />
								</TableCellComp>
							</TableRow>
						</TableBody>
					</Table>
				</TableContainer>

				<Box className="demograph-midtwo d-flex">
					<div className="demograph-left">
						<TableContainer className="demograph-left-bottom">
							<Table>
								<TableHead className="head">
									<TableRow>
										<TableCell className=" fw-bold">Subjects</TableCell>
										<TableCell className=" fw-bold">Class</TableCell>
										<TableCell className=" fw-bold">Subjects</TableCell>
										<TableCell className=" fw-bold">Class</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{gradeItems.map((grade, i) => (
										<TableRow key={i}>
											<TableCell>{grade.title}</TableCell>
											<TableCell>{grade.desc}</TableCell>
											<TableCell>{grade.subject}</TableCell>
											<TableCell>{grade.term}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
						<div className=" d-flex">
							<ButtonComp variant="contained" className=" text-capitalize">
								Edit Row
							</ButtonComp>
							<ButtonComp variant="outlined" className=" mx-3 text-capitalize">
								Delete row
							</ButtonComp>
						</div>
					</div>
					<div className="demograph-right">
						<img src="/images/demoStudent.png" alt="" />
						<div className="bottom mt-2">
							<Typography className="p1">Last Login:</Typography>
							<Typography className="p2">May 2 2021 10:45AM</Typography>
						</div>
					</div>
				</Box>

				<Box className="demograph-base mt-4">
					<div className="top">
						<Typography className=" fw-bold">Siblings & Contacts</Typography>
					</div>
					<TableContainer className="mid">
						<Table>
							<TableHead>
								<TableRow>
									<TableCellComp className=" fw-bold">
										Relationship/Name
									</TableCellComp>
									<TableCellComp></TableCellComp>
									<TableCellComp className=" fw-bold">
										Phone Numbers
									</TableCellComp>
									<TableCellComp className=" fw-bold">
										Email Addresses
									</TableCellComp>
								</TableRow>
							</TableHead>
							<TableBody>
								{contactItems.map((contact, i) => (
									<TableRow key={i}>
										<TableCellComp>
											{contact.title} <br /> {contact.name}
										</TableCellComp>
										<TableCellComp>{contact.desc}</TableCellComp>
										<TableCellComp>{contact.tel}</TableCellComp>
										<TableCellComp>{contact.email}</TableCellComp>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
					<div className="base d-flex">
						<ButtonComp variant="contained" className="mt-0 text-capitalize">
							Add row
						</ButtonComp>
						<ButtonComp variant="outlined" className="mt-0 text-capitalize">
							Add column
						</ButtonComp>
					</div>
				</Box>

				<Box className="demograph-bottom mt-4">
					<div className="top">
						<Typography className=" fw-bold">Student Notes</Typography>
					</div>
					<div className="mid">
						<Typography className="p">
							***STILL NEED TO COLLECT IMMUNIZATION RECORDS***
						</Typography>
						<Typography className="p">
							Basketball approval pending physical results.
						</Typography>
						<Typography className="p">
							9/3/2020: Out sick - doctor’s note received
						</Typography>
					</div>
				</Box>
			</Box>
		</Wrapper>
	);
};

export default DemoGraphCompPage;

const Wrapper = styled.div`
	.demograph {
		&-top {
			align-items: center;
			justify-content: space-between;
		}
		&-mid {
			margin-top: 1rem;
			border: 0.5px solid #d6d6d6;
			background-color: #f9fcfe;
		}

		&-midtwo {
			/* align-items: center; */
			margin-top: 1rem;
			.demograph-left {
				flex: 4;
				&-bottom {
					border: 0.5px solid #d6d6d6;

					.head {
						background-color: #d6e9f7;
					}
					.one {
						border-right: 0.5px solid #d6d6d6;
					}
				}
			}
			.demograph-right {
				flex: 1;

				img {
					width: 100%;
					object-fit: cover;
					/* height: 100%; */
				}
				.bottom {
					padding: 0.5rem;
					border: 0.5px solid #d6d6d6;
					box-shadow: 0px 0.5px 2px rgba(0, 0, 0, 0.25);

					.p1 {
						font-size: 0.875rem;
						color: #777777;
					}
					.p2 {
						font-size: 0.875rem;
					}
				}
			}
		}

		&-base {
			.top {
				padding: 1rem;
				border: 1px solid #d6d6d6;
				background-color: #d6e9f7;
			}
			.mid {
				border: 1px solid #d6d6d6;
			}
			.base {
				justify-content: space-between;
			}
		}

		&-bottom {
			box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.25);
			.top {
				padding: 1rem;
				border: 1px solid #d6d6d6;
				background-color: #d6e9f7;
			}
			.mid {
				padding: 2rem 1rem;
				color: #004b81;
				overflow: scroll;

				.p {
					line-height: 2.5;
				}
			}
		}
	}
`;

const gradeItems = [
	{
		title: "Mathematics",
		desc: "SS 2",
		subject: "Chemistry",
		term: "SS 2",
	},
	{
		title: "English Language",
		desc: "SS 2",
		subject: "Financial Acounting",
		term: "SS 2",
	},
	{
		title: "History",
		desc: "SS 2",
		subject: "Christian Religious Studies",
		term: "SS 2",
	},
];

const contactItems = [
	{
		title: "Aunt:",
		name: "Obe Lucy",
		desc: "Authorized for pick up",
		tel: "08131367090",
		email: "obendalee@gmail.com",
	},
	{
		title: "Dentist:",
		name: "Nnam Lazarus",
		desc: "(EnrollMe Contact)",
		tel: "08131367090",
		email: "obendalee@gmail.com",
	},
	{
		title: "Doctor:",
		name: "Obe Jephthah",
		tel: "08100459057",
		email: "obendalee@gmail.com",
	},
];
