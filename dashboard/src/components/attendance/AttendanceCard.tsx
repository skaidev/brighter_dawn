import React from 'react';
import styled from 'styled-components';
import { Button, Grid, Checkbox, Container  } from '@mui/material';

const AttendanceCard = () => {
    return (
        <Wrapper>
            <Container className='attendance'>
                <p className="attendance-desc text-end">Select all <span><Checkbox /></span></p>
                {attends.map((attend, i) => (
                    <div className='attendance-top d-flex' key={i}>
                        <p><img src={attend.img} alt="" /></p>
                        <p>{attend.name}</p>
                        <p>{attend.basic}</p>
                        <p><Checkbox /></p>
                    </div>
                ))}
                <Grid container justifyContent="flex-end">
                <Button variant='contained' color='primary'>submit</Button>
                </Grid>
            </Container>
        </Wrapper>
    )
}

export default AttendanceCard;

const Wrapper = styled.div`
    .attendance {
        &-desc {
            color: ${prop=>prop.theme.palette.primary.main};
        }
        &-top {
            align-items: center;
            justify-content: space-between;
        }
        
    }
`

const attends = [
    {
        img: "/images/student.png",
        name: "Obe Sampson Ndalee",
        basic: "Nursery 2"
    },
    {
        img: "/images/student.png",
        name: "Obe Sampson Ndalee",
        basic: "Nursery 2"
    },
    {
        img: "/images/student.png",
        name: "Obe Sampson Ndalee",
        basic: "Nursery 2"
    },
    {
        img: "/images/student.png",
        name: "Obe Sampson Ndalee",
        basic: "Nursery 2"
    },
]


