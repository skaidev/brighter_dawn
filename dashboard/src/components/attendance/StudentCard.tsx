import {
  Box,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import { students } from "utils/studentsData";

const StudentCard = () => {
  return (
    <Wrapper>
      <TableContainer>
        <Table>
          <TableBody>
            {students.map((student, i) => (
              <TableRow className="first" key={i}>
                <TableCell>
                  <Link
                    to={`/students/${student.id}`}
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    <Checkbox className="me-5" />
                    {student?.firstName} {student?.lastName}
                  </Link>
                </TableCell>
                <TableCell className="mb-0">JSS 1 A</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Wrapper>
  );
};

export default StudentCard;

const Wrapper = styled(Box)`
  .student-card {
    .first {
      align-items: center;
      justify-content: space-between;
      padding: 0.5rem 2rem;
      border-bottom: 1px solid #e5e5e5;
    }
  }
`;
