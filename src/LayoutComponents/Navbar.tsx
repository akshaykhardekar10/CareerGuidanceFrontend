import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Box,
  Container,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const NavButton = styled(Button)(() => ({
  color: '#666',
  padding: '8px 12px',
  fontSize: '0.95rem',
  fontWeight: 500,
  textTransform: 'none',
  minWidth: 'auto',
  '&:hover': {
    backgroundColor: 'transparent',
    color: '#5E35B1',
  },
}));

const SignUpButton = styled(Button)(() => ({
  backgroundColor: '#462872',
  color: '#fff',
  padding: '8px 24px',
  borderRadius: '20px',
  fontSize: '0.9rem',
  fontWeight: 500,
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#3b2260',
  },
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  maxWidth: '1400px !important',
  padding: '0 64px',
  [theme.breakpoints.down('lg')]: {
    padding: '0 32px',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '0 16px',
  },
}));

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSignedIn] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  const handleLogoClick = () => navigate('/');
  const handleMobileMenuToggle = () => setMobileMenuOpen(prev => !prev);
  const handleGoToClassroom = () =>
    navigate(isSignedIn ? '/dashboard/overview' : '/signup');

  return (
    <>
      <AppBar
        position="fixed"
        color="transparent"
        elevation={0}
        sx={{ borderBottom: '1px solid #eee', backgroundColor: '#fff', pt: 2 }}
      >
        <StyledContainer>
          <Toolbar disableGutters sx={{ minHeight: '72px' }}>
            <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
              <img
                src="/yuja-logo.svg"
                alt="Logo"
                style={{ height: 32, marginRight: 48, cursor: 'pointer' }}
                onClick={handleLogoClick}
              />
              {!isMobile ? (
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <NavButton onClick={() => navigate('/about')}>About Us</NavButton>
                  <NavButton onClick={() => navigate('/contact')}>Contact Us</NavButton>
                  <NavButton onClick={() => navigate('/signup')}>Sign Up</NavButton>
                  <NavButton onClick={() => navigate('/signin')}>Sign In</NavButton>
                </Box>
              ) : (
                <IconButton onClick={handleMobileMenuToggle} sx={{ ml: 'auto' }}>
                  <MenuIcon />
                </IconButton>
              )}
            </Box>

            {!isMobile && (
              <Box sx={{ ml: 3 }}>
                <SignUpButton endIcon={<ArrowForwardIcon />} onClick={handleGoToClassroom}>
                  Go to Classroom
                </SignUpButton>
              </Box>
            )}
          </Toolbar>
        </StyledContainer>
      </AppBar>

      <Toolbar sx={{ minHeight: '88px !important' }} />

      {/* Mobile Dropdown Menu */}
      {isMobile && mobileMenuOpen && (
        <Box
          className="fixed left-0 right-0 bg-white shadow-md p-4 z-[1000]"
          sx={{ top: '88px' }}
        >
          <Box className="flex flex-col gap-4">
            <NavButton onClick={() => navigate('/about')}>About Us</NavButton>
            <NavButton onClick={() => navigate('/contact')}>Contact Us</NavButton>
            <NavButton onClick={() => navigate('/signup')}>Sign Up</NavButton>
            <NavButton onClick={() => navigate('/signin')}>Sign In</NavButton>
            <SignUpButton endIcon={<ArrowForwardIcon />} onClick={handleGoToClassroom}>
              Go to Classroom
            </SignUpButton>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Navbar;
