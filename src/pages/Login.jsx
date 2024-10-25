import { Container, Paper, Typography, TextField, Button, Avatar, Stack, IconButton } from '@mui/material'
import { CameraAlt as CameraAltIcon } from '@mui/icons-material'
import React, { useState,useEffect } from 'react'
import { VissuallyHiddenInput } from '../components/styles/styledComponents'
import { validateLoginForm, validateSignUpForm } from '../utils/formValidations'
const Login = () => {
    const [isLogin, setLogin] = useState(true)
    const [error, setErrors] = useState("")
    const [avatarPreview, setAvatarPreview] = useState(null)
    const toggleLogin = () => setLogin((prev) => !prev)
  
    const [formData, setFormData] = useState({
        name: '',
        bio: '',
        username: '',
        password: '',
        file: null
    })

    const handleChange = (e) => {
        const { name, value, type } = e.target;

        if (type === "file") {
            const file =e.target.files[0];
            const url = URL.createObjectURL(file)
            setFormData({
                ...formData,
                [name]: file,
            })
            setAvatarPreview(url) 
            console.log(avatarPreview)
        } else {
            setFormData({
                ...formData,
                [name]:value,
            })
        }

    }

    const handleLoginSubmission = (e) => {
        e.preventDefault()
        const newErrors = validateLoginForm(formData)
        setErrors(newErrors);
    }
    const handleRegisterSubmission = (e) => {
        e.preventDefault()
        const newErrors = validateSignUpForm(formData)
        setErrors(newErrors);
        console.log(formData)
    }

    return (
        <Container maxWidth="xs" sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
                            <form onSubmit={handleLoginSubmission} style={{ width: '100%', marginTop: '1rem' }}>
                                <TextField
                                    required
                                    fullWidth
                                    name='username'
                                    label="Username"
                                    variant="outlined"
                                    margin="normal"
                                    onChange={handleChange}
                                    value={formData.username}
                                />
                                {error.username && (
                                    <Typography color='error'>{error.username}</Typography>
                                )}
                                <TextField
                                    required
                                    fullWidth
                                    name='password'
                                    label="Password"
                                    type='password'
                                    variant="outlined"
                                    margin="normal"
                                    onChange={handleChange}
                                    value={formData.password}
                                />
                                {
                                    error.password && (
                                        <Typography color='error'>{error.password}</Typography>
                                    )
                                }
                                <Button sx={{ marginTop: '1rem' }} variant='contained' color='primary' type='submit' fullWidth>
                                    Login
                                </Button>
                                <Typography sx={{ marginTop: '1rem' }} textAlign={'center'}>OR</Typography>
                                <Button sx={{ marginTop: '1rem' }} variant='test' onClick={toggleLogin} fullWidth>
                                    Sign Up Insted
                                </Button>
                            </form>
                        </>
                        : <>
                            <Typography variant="h5">Sign Up</Typography>
                            <form onSubmit={handleRegisterSubmission} style={{ width: '100%', marginTop: '1rem' }}>
                                <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                                    <Avatar sx={{ width: "10rem", height: "10rem", objectFit: "contain"  }} src={avatarPreview || null} />
                                    <IconButton
                                        sx={{
                                            position: "absolute",
                                            bottom: 0,
                                            right: 0
                                        }}
                                        component="label"
                                    >
                                        <>
                                            <CameraAltIcon />
                                            <VissuallyHiddenInput name='avatar' type="file" onChange={handleChange}/>
                                        </>
                                    </IconButton>
                                </Stack>
                                <TextField
                                    required
                                    fullWidth
                                    label="name"
                                    name='name'
                                    variant="outlined"
                                    margin="normal"
                                    onChange={handleChange}
                                    value={formData.name}
                                />
                                {
                                    error.name && (
                                        <Typography color='red'>{error.name}</Typography>
                                    )
                                }
                                <TextField
                                    required
                                    fullWidth
                                    name='bio'
                                    label="bio"
                                    variant="outlined"
                                    margin="normal"
                                    onChange={handleChange}
                                    value={formData.bio}
                                />
                                {
                                    error.bio && (
                                        <Typography color='error'>{error.bio}</Typography>
                                    )
                                }
                                <TextField
                                    required
                                    fullWidth
                                    label="Username"
                                    name='username'
                                    variant="outlined"
                                    margin="normal"
                                    onChange={handleChange}
                                    value={formData.username}
                                />
                                {
                                    error.username && (
                                        <Typography color='error'>{error.username}</Typography>
                                    )
                                }
                                <TextField
                                    required
                                    fullWidth
                                    label="Password"
                                    name='password'
                                    type='password'
                                    variant="outlined"
                                    margin="normal"
                                    onChange={handleChange}
                                    value={formData.password}
                                />
                                {
                                    error.password && (
                                        <Typography color='error'>{error.password}</Typography>
                                    )
                                }
                                <Button sx={{ marginTop: '1rem' }} variant='contained' color='primary' type='submit' fullWidth>
                                    Sign Up
                                </Button>
                                <Typography sx={{ marginTop: '1rem' }} textAlign={'center'}>OR</Typography>
                                <Button sx={{ marginTop: '1rem' }} variant='test' onClick={toggleLogin} fullWidth>
                                    Login Insted
                                </Button>
                            </form>
                        </>
                }
            </Paper>
        </Container>
    )
}

export default Login
