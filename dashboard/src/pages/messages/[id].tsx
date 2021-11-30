import { Container, Typography } from '@mui/material';
import InputCompSelect from 'lib/InputComp';
import React from 'react'

const SingleMessagePage = () => {
    return (
        <div>
            <Container>
                <Typography>Smart Lists</Typography>
                <div className=' d-flex mt-3'>
                    <div className=' flex-grow-1 me-2'>
                    <InputCompSelect />
                    </div>
                    <div className=' flex-grow-1'>
                    <InputCompSelect />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default SingleMessagePage;
