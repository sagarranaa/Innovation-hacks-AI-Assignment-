import React from 'react';
import { Box, Typography, TextField, Button, Link, keyframes } from '@mui/material';
import { styled } from '@mui/system';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 5px #ffa726, 0 0 10px #ffa726; }
  50% { box-shadow: 0 0 20px #ffa726, 0 0 30px #ffa726; }
`;

const AnimatedButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(45deg, #ffa726, #ff5722)',
  color: '#fff',
  fontWeight: 'bold',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
    animation: `${glow} 1.5s infinite alternate`,
  },
}));

const SignUpButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  color: '#ffa726',
  fontWeight: 'bold',
  border: '1px solid #ffa726',
  borderRadius: '20px',
  position: 'absolute',
  top: '20px',
  right: '20px',
  padding: '6px 20px',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
}));

const Login = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1e1e2f, #29293d)',
        padding: 2,
      }}
    >
      {/* Sign Up Button in Top Right */}
      <SignUpButton variant="outlined">
        Sign up
      </SignUpButton>

      {/* Animated Header Text */}
      <Box sx={{ textAlign: 'center', mb: 4, animation: `${fadeIn} 1s ease-in-out` }}>
        <Typography
          variant="h3"
          component="h1"
          sx={{
            color: '#fff',
            fontWeight: 'bold',
            animation: `${fadeIn} 1s ease-in-out`,
            animationDelay: '0.3s',
          }}
        >
          Manage Your Data More Efficiently &
        </Typography>
        <Typography
          variant="h3"
          component="h1"
          sx={{
            color: '#ffa726',
            fontWeight: 'bold',
            animation: `${fadeIn} 1s ease-in-out`,
            animationDelay: '0.6s',
          }}
        >
          Effectively Than Ever Before!
        </Typography>
      </Box>

      <Box
        sx={{
          width: '100%',
          maxWidth: 400,
          bgcolor: 'rgba(255, 255, 255, 0.1)',
          p: 4,
          borderRadius: 2,
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.3)',
          textAlign: 'center',
          animation: `${fadeIn} 1.2s ease-in-out`,
          animationDelay: '0.5s',
        }}
      >
        <Typography variant="h5" sx={{ color: '#ffa726', fontWeight: 'bold', mb: 2 }}>
          Login
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Email"
          type="email"
          sx={{
            mb: 2,
            '& .MuiOutlinedInput-root': {
              color: '#fff',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            },
          }}
        />
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Password"
          type="password"
          sx={{
            mb: 2,
            '& .MuiOutlinedInput-root': {
              color: '#fff',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            },
          }}
        />

        <Link href="#" sx={{ color: '#ffa726', textDecoration: 'none', mb: 2, display: 'block' }}>
          Forget Password?
        </Link>

        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <AnimatedButton fullWidth variant="contained" sx={{ mb: 2, mr: 1 }}>
            Login
          </AnimatedButton>
        </Box>

        <Typography sx={{ color: '#fff', mt: 1 }}>
          You don't have an account?{' '}
          <Link href="#" sx={{ color: '#ffa726', textDecoration: 'none' }}>
            Sign up
          </Link>
        </Typography>
      </Box>

      <Typography sx={{ color: '#fff', mt: 4, fontWeight: 'bold', animation: `${fadeIn} 1s ease-in-out` }}>
        Innovation Hacks AI
      </Typography>
    </Box>
  );
};

export default Login;
