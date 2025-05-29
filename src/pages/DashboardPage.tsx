import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, LineChart, Line } from 'recharts';
import { ArrowRight, Zap, BookOpen, Trophy, Star, Clock, Calendar, BarChart3 } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const DashboardPage: React.FC = () => {
  const { user } = useAuth();
  
  // Sample data for charts
  const skillsData = [
    { name: 'Programming', value: 75 },
    { name: 'Design', value: 60 },
    { name: 'Communication', value: 85 },
    { name: 'Problem Solving', value: 80 }
  ];
  
  const learningProgressData = [
    { name: 'Web Dev', completed: 12, total: 20 },
    { name: 'UI/UX', completed: 8, total: 15 },
    { name: 'Data', completed: 5, total: 18 },
    { name: 'Mobile', completed: 3, total: 10 }
  ];
  
  const activityData = [
    { day: 'Mon', hours: 2.5 },
    { day: 'Tue', hours: 3.2 },
    { day: 'Wed', hours: 1.8 },
    { day: 'Thu', hours: 4.0 },
    { day: 'Fri', hours: 3.5 },
    { day: 'Sat', hours: 2.0 },
    { day: 'Sun', hours: 1.2 }
  ];
  
  // Colors for charts
  const COLORS = ['#8b5cf6', '#0ea5e9', '#ec4899', '#10b981'];
  
  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-950 py-0 px-4 md:px-12 lg:px-16 overflow-hidden" style={{
      background: `linear-gradient(135deg, rgba(0, 0, 0, 0) 0%, rgba(0,0, 0, 0) 100%),
                   url('/purple-bg.svg') no-repeat center center`,
      backgroundSize: 'cover'
    }}>
      {/* Decorative SVG Wave at the top */}
      <svg
        className="absolute top-0 left-0 w-full pointer-events-none z-0"
        height="160"
        viewBox="0 0 1440 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ minWidth: '100%' }}
      >
        <path
          d="M0,60 C400,180 1040,0 1440,100 L1440,0 L0,0 Z"
          fill="url(#waveGradientTop)"
          opacity="0.5"
        />
        <defs>
          <linearGradient id="waveGradientTop" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6d28d9" />
            <stop offset="1" stopColor="#7c3aed" />
          </linearGradient>
        </defs>
      </svg>

      <motion.div
        className="space-y-6 relative z-10 pt-12 max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Welcome Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div 
            className="lg:col-span-2 bg-white dark:bg-white rounded-lg shadow-lg border border-gray-100 dark:border-gray-200 p-6"
            variants={item}
            initial="hidden"
            animate="show"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h1 className="text-2xl font-bold mb-2">Welcome back, {user?.name}!</h1>
                <p className="text-gray-600 dark:text-gray-400">
                  Here's what's happening with your career journey today.
                </p>
              </div>
              <Link to="/assessment" className="btn btn-primary whitespace-nowrap">
                Continue Assessment
              </Link>
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center gap-4">
                <div className="bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 p-3 rounded-lg">
                  <Trophy size={24} />
                </div>
                <div>
                  <h3 className="font-medium">Career Progress</h3>
                  <div className="mt-1 flex items-center gap-2">
                    <div className="w-48 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary-600 dark:bg-primary-400 rounded-full" 
                        style={{ width: '65%' }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">65%</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 p-3 rounded-lg">
                  <Star size={24} />
                </div>
                <div>
                  <h3 className="font-medium">Learning Streak</h3>
                  <p className="text-2xl font-bold">7 days</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-white rounded-lg shadow-lg border border-gray-100 dark:border-gray-200 p-6"
            variants={item}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold">Upcoming Sessions</h2>
              <Calendar size={18} className="text-gray-400" />
            </div>
            
            <div className="space-y-4">
              {[
                { time: 'Today, 2:00 PM', title: 'Resume Review', host: 'with Sarah M.' },
                { time: 'Tomorrow, 10:00 AM', title: 'Tech Interview Prep', host: 'with Michael P.' }
              ].map((session, index) => (
                <div key={index} className="border-l-2 border-primary-500 pl-3 py-1">
                  <p className="text-xs text-gray-500 dark:text-gray-400">{session.time}</p>
                  <p className="font-medium">{session.title}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{session.host}</p>
                </div>
              ))}
              
              <Link to="/schedule" className="flex items-center text-sm text-primary-600 dark:text-primary-400 font-medium hover:underline">
                View all sessions <ArrowRight size={14} className="ml-1" />
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Stats Row */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {[
            { icon: <Zap size={20} />, label: 'Completed Lessons', value: '47', color: 'primary' },
            { icon: <BookOpen size={20} />, label: 'Learning Hours', value: '38.5', color: 'secondary' },
            { icon: <Clock size={20} />, label: 'Next Assessment', value: '2 days', color: 'accent' },
            { icon: <Star size={20} />, label: 'Career Match Score', value: '85%', color: 'green' }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              className="bg-white dark:bg-white rounded-lg shadow-lg border border-gray-100 dark:border-gray-200 p-4"
              variants={item}
            >
              <div className={`bg-${stat.color}-100 dark:bg-${stat.color}-900/30 text-${stat.color}-600 dark:text-${stat.color}-400 p-2 rounded-lg w-fit mb-4`}>
                {stat.icon}
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</p>
              <p className="text-2xl font-bold mt-1">{stat.value}</p>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Skills Analysis */}
          <motion.div 
            className="bg-white dark:bg-white rounded-lg shadow-lg border border-gray-100 dark:border-gray-200 p-5"
            variants={item}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-semibold">Skills Analysis</h2>
              <BarChart3 size={18} className="text-gray-400" />
            </div>
            
            <div className="h-[220px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={skillsData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={2}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    labelLine={false}
                  >
                    {skillsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            
            <div className="mt-4 flex justify-center gap-4">
              {skillsData.map((skill, index) => (
                <div key={index} className="flex items-center">
                  <div 
                    className="w-3 h-3 rounded-full mr-1" 
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  ></div>
                  <span className="text-xs text-gray-600 dark:text-gray-400">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Learning Progress */}
          <motion.div 
            className="bg-white dark:bg-white rounded-lg shadow-lg border border-gray-100 dark:border-gray-200 p-5"
            variants={item}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-semibold">Learning Progress</h2>
              <BarChart3 size={18} className="text-gray-400" />
            </div>
            
            <div className="h-[220px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={learningProgressData}
                  layout="vertical"
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <XAxis type="number" hide />
                  <YAxis dataKey="name" type="category" width={80} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="completed" name="Completed" fill="#8b5cf6" radius={[0, 4, 4, 0]} />
                  <Bar dataKey="total" name="Total" fill="#e5e7eb" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
          
          {/* Activity Tracker */}
          <motion.div 
            className="bg-white dark:bg-white rounded-lg shadow-lg border border-gray-100 dark:border-gray-200 p-5"
            variants={item}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-semibold">Weekly Activity</h2>
              <BarChart3 size={18} className="text-gray-400" />
            </div>
            
            <div className="h-[220px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={activityData}
                  margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
                >
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="hours" stroke="#8b5cf6" strokeWidth={2} activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            
            <div className="mt-4 flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Total this week</p>
                <p className="text-xl font-bold">18.2 hours</p>
              </div>
              <div className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-2 py-1 rounded text-xs font-medium">
                +12% vs last week
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Recommended Section */}
        <motion.div 
          className="bg-white dark:bg-white rounded-lg shadow-lg border border-gray-100 dark:border-gray-200 p-5"
          variants={item}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.6 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-semibold">Recommended For You</h2>
            <Link to="/learning" className="text-sm text-primary-600 dark:text-primary-400 hover:underline">View all</Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Frontend Development Fundamentals",
                type: "Course",
                duration: "8 hours",
                image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600"
              },
              {
                title: "Technical Interview Preparation",
                type: "Workshop",
                duration: "3 hours",
                image: "https://images.pexels.com/photos/1181615/pexels-photo-1181615.jpeg?auto=compress&cs=tinysrgb&w=600"
              },
              {
                title: "UI/UX Design Principles",
                type: "Course",
                duration: "6 hours",
                image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600"
              }
            ].map((item, index) => (
              <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <img src={item.image} alt={item.title} className="w-full h-36 object-cover" />
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium line-clamp-2">{item.title}</h3>
                    <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs px-2 py-1 rounded">
                      {item.type}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <Clock size={14} className="mr-1" />
                    {item.duration}
                  </div>
                  <button className="mt-3 text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline">
                    Start Learning
                  </button>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative SVG Wave at the bottom */}
      <svg
        className="absolute bottom-0 left-0 w-full pointer-events-none z-0"
        height="180"
        viewBox="0 0 1440 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ minWidth: '100%' }}
      >
        <path
          d="M0,80 C360,180 1080,0 1440,100 L1440,180 L0,180 Z"
          fill="url(#waveGradient)"
          opacity="0.7"
        />
        <defs>
          <linearGradient id="waveGradient" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6d28d9" />
            <stop offset="1" stopColor="#7c3aed" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default DashboardPage; 