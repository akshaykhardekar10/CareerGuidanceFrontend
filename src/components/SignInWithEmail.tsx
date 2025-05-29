import React from 'react';
import { Box, Typography, Button, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const WaveBackground = styled(Box)({
  position: 'relative',
  background: `linear-gradient(135deg, rgba(0, 0, 0, 0) 0%, rgba(0,0, 0, 0) 100%),
               url('/purple-bg.svg') no-repeat center center`,
  backgroundSize: 'cover',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '40px 20px'
});

const SignInCard = styled(Box)({
  backgroundColor: '#fff',
  borderRadius: '16px',
  padding: '32px',
  width: '100%',
  maxWidth: '400px',
  boxShadow: '0 4px 24px rgba(0, 0, 0, 0.1)',
  position: 'relative'
});

const BackButton = styled(Button)({
  position: 'absolute',
  top: '24px',
  left: '24px',
  color: '#666',
  textTransform: 'none',
  fontSize: '0.9rem',
  '&:hover': {
    backgroundColor: 'transparent',
    color: '#462872'
  }
});

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    borderRadius: '24px',
    backgroundColor: '#fff',
    '& fieldset': {
      borderColor: '#e0e0e0',
    },
    '&:hover fieldset': {
      borderColor: '#d0d0d0',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#462872',
      borderWidth: '1px',
    },
  },
  '& .MuiOutlinedInput-input': {
    padding: '14px 20px',
    fontSize: '0.95rem',
  },
});

const ContinueButton = styled(Button)({
  borderRadius: '24px',
  padding: '12px',
  marginTop: '12px',
  marginBottom: '24px',
  textTransform: 'none',
  fontSize: '0.95rem',
  fontWeight: 500,
});

const BackToLoginButton = styled(Button)({
  color: '#462872',
  textTransform: 'none',
  fontSize: '0.9rem',
  fontWeight: 500,
  padding: '8px',
  '&:hover': {
    backgroundColor: 'transparent',
    textDecoration: 'none',
  },
  '& .MuiButton-startIcon': {
    marginRight: '4px',
  }
});

const SignInWithEmail = () => {
  const navigate = useNavigate();

  return (
    <WaveBackground>
      <BackButton startIcon={<ArrowBackIcon />} onClick={() => navigate('/')}>
        Go back
      </BackButton>
      
      <SignInCard>
        <Box sx={{ textAlign: 'center', mb: 3 }}>
          <img src="/yuja-logo.svg" alt="YuJa Logo" style={{ height: '32px', marginBottom: '24px' }} />
          <Typography variant="h5" sx={{ fontWeight: 600, color: '#424446', mb: 3 }}>
            Sign in with email
          </Typography>
        </Box>

        <StyledTextField
          fullWidth
          placeholder="Enter your email address"
          variant="outlined"
          type="email"
        />

        <ContinueButton
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: '#462872',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#3b2260'
            }
          }}
        >
          Continue
        </ContinueButton>

        <Box sx={{ textAlign: 'center' }}>
          <BackToLoginButton
            startIcon={<KeyboardBackspaceIcon />}
            onClick={() => navigate('/signup')}
          >
            Back to login options
          </BackToLoginButton>
        </Box>

        <Typography 
          variant="caption" 
          sx={{ 
            display: 'block', 
            textAlign: 'center', 
            mt: 2,
            color: '#666',
            fontSize: '0.75rem'
          }}
        >
          By continuing, you agree to YuJa's{' '}
          <Box component="span" sx={{ color: '#462872', cursor: 'pointer' }}>
            Terms & Conditions
          </Box>
          {' '}and{' '}
          <Box component="span" sx={{ color: '#462872', cursor: 'pointer' }}>
            Privacy Policy
          </Box>
        </Typography>
      </SignInCard>
    </WaveBackground>
  );
};

export default SignInWithEmail; 