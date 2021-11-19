import React from "react";
import styled from "styled-components";
import { FormControlLabel, Container, Checkbox } from "@mui/material";

const StudentCard = () => {
  return (
    <Wrapper>
      <Container className="student-card">
        {studentCard.map((card, i) => (
          <div className="first d-flex" key={i}>
            <FormControlLabel control={<Checkbox />} label="Obe Sampson" />
            <p className="mb-0">{card.title}</p>
          </div>
        ))}
      </Container>
    </Wrapper>
  );
};

export default StudentCard;

const Wrapper = styled.div`
  .student-card {
    .first {
      align-items: center;
      justify-content: space-between;
      padding: .5rem 2rem;
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
