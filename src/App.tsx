import { Routes,Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Navbar from './LayoutComponents/Navbar';
import Hero from './LandingPageSection/Hero';
import SignUp from './AuthenticationPage/SignUp';
import SignIn from './AuthenticationPage/SignIn';
import SignInWithEmail from './AuthenticationPage/SignInWithEmail';
import Onboarding from './components/Onboarding';
import Quiz from './components/Quiz';
import Roadmap from './components/Roadmap';
import WeekPlan from './components/WeekPlan';
import DashboardOverview from './components/DashboardOverview';
import DashboardRoadmap from './components/dashboard/DashboardRoadmap';
import Profile from './components/dashboard/Profile';
import ResumeBuilder from './components/ResumeBuilder';
import IndustryInsights from './components/IndustryInsights';
import Jobs from './components/Jobs';
import Footer from './LayoutComponents/Footer';

const theme = createTheme({
  palette: {
    primary: {
      main: '#5E35B1',
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h6: {
      lineHeight: 1.6,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          padding: '10px 24px',
        },
      },
    },
  },
});

const HomePage = () => (
  <>
    <Navbar />
    <Hero />
    <Footer/>
  </>
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Box sx={{ 
          width: '100%',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn/>} />
            <Route path="/signin/email" element={<SignInWithEmail />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/dashboard/assessment" element={<Quiz />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/week-plan" element={<WeekPlan />} />
            <Route path="/industry-insights" element={<IndustryInsights />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/dashboard/overview" element={<DashboardOverview />} />
            <Route path="/dashboard/roadmap" element={<DashboardOverview />}>
              <Route index element={<DashboardRoadmap />} />
            </Route>
            <Route path="/dashboard/profile" element={<DashboardOverview />}>
              <Route index element={<Profile />} />
            </Route>
            <Route path="/dashboard/resume-builder" element={<DashboardOverview />}>
              <Route index element={<ResumeBuilder />} />
            </Route>
          </Routes>
        </Box>
    </ThemeProvider>
  );
}

export default App;
