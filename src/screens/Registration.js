import { Typography,Box, TextField, Button } from '@mui/material';
import React, { useState } from 'react'
import { signUpUser } from '../config/firebasemethods';

function Registration() {
    const [model,setModel] = useState({})
    let sendData = () =>{
        console.log(model);
        signUpUser(model)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <Box>
            <Box className="my-3">
                <Typography variant='h2' className='text-center '>Registration Form</Typography>
            </Box>
            <Box className='d-flex justify-content-center my-3 '>
                <TextField label='Student Name' className='w-25 mx-2' onChange={(e) => setModel({ ...model, StudentName: e.target.value })}/>
                <TextField label='Father Name' className='w-25 mx-2' onChange={(e) => setModel({ ...model, FatherName: e.target.value })}/>
            </Box>
            <Box className='d-flex justify-content-center my-3'>
                <TextField label='Contact' className='w-25 mx-2' onChange={(e) => setModel({ ...model, Contact: e.target.value })}/>
                <TextField label='CNIC' className='w-25 mx-2' onChange={(e) => setModel({ ...model, cnic: e.target.value })}/>
            </Box>
            <Box className='d-flex justify-content-center my-3'>
                <TextField label='Class Qualification' className='w-25 mx-2' onChange={(e) => setModel({ ...model, ClassQualification: e.target.value })}/>
                <TextField label='Course' className='w-25 mx-2' onChange={(e) => setModel({ ...model, Course: e.target.value })}/>
            </Box>
            <Box className='d-flex justify-content-center my-3'>
                <TextField label='Institute' className='w-25 mx-2' onChange={(e) => setModel({ ...model, Institute: e.target.value })}/>
                <TextField label='Section' className='w-25 mx-2' onChange={(e) => setModel({ ...model, Section: e.target.value })}/>
            </Box>
            <Box className='d-flex justify-content-center my-3'>
                <TextField label='Email' className='w-25 mx-2' onChange={(e) => setModel({ ...model, email: e.target.value })}/>
                <TextField label='Password' className='w-25 mx-2' onChange={(e) => setModel({ ...model, password: e.target.value })}/>
            </Box>
            <Box className='d-flex justify-content-center my-3'>
                <TextField label='City' className='w-25 mx-2' onChange={(e) => setModel({ ...model, City: e.target.value })}/>
                <TextField label='Country' className='w-25 mx-2' onChange={(e) => setModel({ ...model, Country: e.target.value })}/>
            </Box>
            <Box className='d-flex justify-content-center my-3'>
                <TextField label='Date-of-Birth' className='w-25 mx-2' onChange={(e) => setModel({ ...model, Birth: e.target.value })}/>
                <TextField label='Gender' className='w-25 mx-2' onChange={(e) => setModel({ ...model, Gender: e.target.value })}/>
            </Box>
            <Box className='d-flex justify-content-center my-3'>
                <TextField label='Adress' className='w-25 mx-2'  onChange={(e) => setModel({ ...model, Adress: e.target.value })}/>
            </Box>
            <Box className='text-center my-4'>
                <Button className='text-center' variant='contained' onClick={sendData}>Submit</Button>
            </Box>
        </Box>
    )
}

export default Registration;