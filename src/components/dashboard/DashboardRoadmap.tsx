import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface RoadmapCardProps {
  title: string;
  subtitle: string;
  description: string;
  color: string;
  position: 'left' | 'right';
}

const roadmapData = [
  {
    title: 'Frontend',
    subtitle: 'HTML, CSS, JS',
    description: 'Begin your journey with core web technologies. Learn HTML to structure web pages, CSS for design and layout, and JavaScript to make your pages interactive and dynamic. Build solid fundamentals in responsive design and browser compatibility.',
    color: '#462872', // Purple
  },
  {
    title: 'React.js',
    subtitle: 'Modern UI Library',
    description: 'Dive into building modern, reusable components using React. Understand state, props, hooks, and how to create performant, maintainable frontends. Build real-world projects to solidify your understanding.',
    color: '#3b82f6', // Blue
  },
  {
    title: 'Backend',
    subtitle: 'Node.js, Express',
    description: 'Learn how to build scalable server-side applications. Handle routing, APIs, and middlewares using Express with Node.js. Understand server-side logic, database connectivity, and security best practices.',
    color: '#22c55e', // Green
  },
  {
    title: 'Database',
    subtitle: 'MongoDB & SQL',
    description: 'Master both SQL and NoSQL databases. Learn data modeling, querying, and optimization. Understand when to use different database types and how to integrate them with your applications.',
    color: '#f59e0b', // Orange
  },
  {
    title: 'DevOps',
    subtitle: 'Deployment & CI/CD',
    description: 'Explore modern deployment practices. Learn Docker, Kubernetes, and cloud platforms. Implement continuous integration and deployment pipelines for efficient development workflows.',
    color: '#ef4444', // Red
  },
];

const RoadmapCard: React.FC<RoadmapCardProps> = ({ title, subtitle, description, color, position }) => {
  const navigate = useNavigate();
  
  return (
    <div 
      className={`w-[45%] relative mb-20 bg-white rounded-xl shadow-lg p-8 min-h-[200px] flex flex-col
                  ${position === 'left' ? 'ml-0' : 'ml-auto'}`}
      style={{
        '--card-color': color,
      } as React.CSSProperties}
    >
      <div className="absolute top-1/2 -translate-y-1/2 w-[12.5%] h-0.5 bg-[var(--card-color)]"
           style={{
             [position === 'left' ? 'right' : 'left']: '-12.5%',
           }}
      />
      <div className="absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-white border-2 z-10"
           style={{
             borderColor: color,
             [position === 'left' ? 'right' : 'left']: '-12.5%',
             transform: `translate(${position === 'left' ? '20%' : '-15%'}, -50%)`,
           }}
      />
      <div className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full z-20"
           style={{
             backgroundColor: color,
             [position === 'left' ? 'right' : 'left']: '-12.5%',
             transform: `translate(${position === 'left' ? '-10%' : '15%'}, -50%)`,
           }}
      />
      
      <h3 className="text-[1.75rem] font-semibold mb-3 font-inter"
          style={{ color }}
      >
        {title}
      </h3>
      <h4 className="text-[1.1rem] text-gray-600 font-medium mb-4 font-inter">
        {subtitle}
      </h4>
      <div className="w-12 h-[3px] mb-6" style={{ backgroundColor: color }} />
      <p className="text-gray-600 leading-[1.7] text-base font-inter mb-5">
        {description}
      </p>
      <button
        onClick={() => navigate('/dashboard/assessment')}
        className="mt-auto self-start px-3 py-1.5 rounded text-sm font-medium text-white transition-opacity hover:opacity-90"
        style={{ backgroundColor: color }}
      >
        Take Assessment
      </button>
    </div>
  );
};

const DashboardRoadmap = () => {
  return (
    <Box sx={{ 
      width: '100%',
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '0 32px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <div className="relative z-10 w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-[2.5rem] font-bold text-[#462872] mb-2 font-inter tracking-tight">
            Developer Roadmap
          </h1>
          <h2 className="text-[1.25rem] text-gray-600 font-normal font-inter max-w-[600px] mx-auto">
            Follow the path to become a full stack web developer
          </h2>
        </div>

        {/* Timeline */}
        <div className="w-full max-w-[1200px] mx-auto relative px-4">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full z-0"
               style={{
                 background: 'linear-gradient(to bottom, #8b5cf6, #3b82f6, #22c55e, #f59e0b, #ef4444)',
               }}
          />
          
          {/* Cards */}
          {roadmapData.map((item, index) => (
            <RoadmapCard
              key={index}
              {...item}
              position={index % 2 === 0 ? 'left' : 'right'}
            />
          ))}
        </div>
      </div>
    </Box>
  );
};

export default DashboardRoadmap; 