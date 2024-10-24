import { Container, Paper, Typography, TextField, Button } from '@mui/material'
import React, { useState } from 'react'

const Login = () => {
    const [isLogin, setLogin] = useState(true)
    return (
        <Container maxWidth="sx">
            <Paper elevation={3}
                sx={{
                    padding: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                {
                    isLogin ?
                        <>
                            <Typography variant="h5">Login</Typography>
                            <form action="">
                                <TextField
                                    required
                                    fullWidth
                                    label="Username"
                                    variant="outlined"
                                    margin="normal" />

                                <TextField
                                    required
                                    fullWidth
                                    label="Password"
                                    type='password'
                                    variant="outlined"
                                    margin="normal" />
                                <Button variant='contained' color='primary' type='submit'>
                                    Login
                                </Button>
                            </form>
                        </>
                        : <span>register</span>
                }
            </Paper>
        </Container>
    )
}

export default Login
