
import { Box, Container, Typography, Button, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import AppleIcon from '@mui/icons-material/Apple';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

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

const SignUpCard = styled(Box)({
  backgroundColor: '#fff',
  borderRadius: '16px',
  padding: '32px',
  width: '100%',
  maxWidth: '400px',
  boxShadow: '0 4px 24px rgba(0, 0, 0, 0.1)',
  position: 'relative'
});

const SocialButton = styled(Button)(({ theme }) => ({
  width: '48px',
  height: '48px',
  minWidth: '48px',
  borderRadius: '50%',
  border: '1px solid #e0e0e0',
  color: '#424446',
  padding: 0,
  '&:hover': {
    backgroundColor: '#f5f5f5',
    borderColor: '#d0d0d0'
  }
}));

const StyledDivider = styled(Divider)({
  margin: '24px 0',
  '&::before, &::after': {
    borderColor: '#e0e0e0'
  }
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

const MainButton = styled(Button)({
  borderRadius: '24px',
  padding: '12px',
  textTransform: 'none',
  fontSize: '0.95rem',
  fontWeight: 500,
});

const SignIn = () => {
  const navigate = useNavigate();

  const handleEmailClick = () => {
    navigate('/signin/email');
  };

  return (
    <WaveBackground>
      <BackButton startIcon={<ArrowBackIcon />} onClick={() => navigate('/')}>
        Go back
      </BackButton>
      
      <SignUpCard>
        <Box sx={{ textAlign: 'center', mb: 3 }}>
          <img src="/yuja-logo.svg" alt="YuJa Logo" style={{ height: '32px', marginBottom: '24px' }} />
          <Typography variant="h5" sx={{ fontWeight: 600, color: '#424446', mb: 3 }}>
            Log in or sign up
          </Typography>
        </Box>

        <MainButton
          variant="contained"
          fullWidth
          startIcon={<GoogleIcon />}
          sx={{
            backgroundColor: '#462872',
            color: '#fff',
            mb: 2,
            '&:hover': {
              backgroundColor: '#3b2260'
            }
          }}
        >
          Continue with Google
        </MainButton>

        <MainButton
          variant="outlined"
          fullWidth
          startIcon={<img src="/sso-icon.svg" alt="SSO" style={{ width: 20, height: 20 }} />}
          sx={{
            borderColor: '#e0e0e0',
            color: '#424446',
            '&:hover': {
              borderColor: '#d0d0d0',
              backgroundColor: '#f5f5f5'
            }
          }}
        >
          Continue with SSO
        </MainButton>

        <StyledDivider>or</StyledDivider>

        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 3 }}>
          <SocialButton>
            <GitHubIcon />
          </SocialButton>
          <SocialButton>
            <AppleIcon />
          </SocialButton>
          <SocialButton>
            <LinkedInIcon />
          </SocialButton>
          <SocialButton>
            <FacebookIcon />
          </SocialButton>
        </Box>

        <Button
          variant="text"
          fullWidth
          onClick={handleEmailClick}
          sx={{
            color: '#462872',
            textTransform: 'none',
            fontSize: '0.9rem',
            fontWeight: 500,
            '&:hover': {
              backgroundColor: 'transparent',
              textDecoration: 'underline'
            }
          }}
        >
          Continue with email address
        </Button>

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
          By logging in or signing up using the options above, you agree to YuJa's{' '}
          <Box component="span" sx={{ color: '#462872', cursor: 'pointer' }}>
            Terms & Conditions
          </Box>
          {' '}and{' '}
          <Box component="span" sx={{ color: '#462872', cursor: 'pointer' }}>
            Privacy Policy
          </Box>
        </Typography>
      </SignUpCard>
    </WaveBackground>
  );
};

export default SignIn; 