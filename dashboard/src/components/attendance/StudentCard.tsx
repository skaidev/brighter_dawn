import React from "react";
import styled from "styled-components";
import {
  Checkbox,
  TableContainer,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

const StudentCard = () => {
  return (
    <Wrapper>
      <TableContainer>
        <TableBody>
          {studentCard.map((card, i) => (
            <TableRow className="first" key={i}>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell>{card.name}</TableCell>
              <TableCell />
              <TableCell />
              <TableCell />
              <TableCell />
              <TableCell />
              <TableCell className="mb-0">{card.title}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableContainer>
    </Wrapper>
  );
};

export default StudentCard;

const Wrapper = styled.div`
  .student-card {
    .first {
      align-items: center;
      justify-content: space-between;
      padding: 0.5rem 2rem;
      border-bottom: 1px solid #e5e5e5;
    }
  }
`;

const studentCard = [
  {
    name: "Obe Sampson",
    title: "SS2 Student",
  },
  {
    name: "Obe Sampson",
    title: "SS2 Student",
  },
  {
    name: "Obe Sampson",
    title: "SS2 Student",
  },
  {
    name: "Obe Sampson",
    title: "SS2 Student",
  },
];
