import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Briefcase,
  GraduationCap,
  Award,
  Github,
  Linkedin,
  Twitter,
  Edit2,
  X,
  Check,
  User,
  BarChart3,
  BookOpen,
  Star
} from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { Box, Container } from '@mui/material';

const glass =
  'bg-white dark:bg-white backdrop-blur-md border border-gray-100 dark:border-gray-200 shadow-xl';

const ProfilePage: React.FC = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: user?.name || 'Jordan Hughes',
    title: 'Full Stack Developer',
    location: 'San Francisco, CA',
    bio: 'Building beautiful web apps and loving every minute. Coffee enthusiast. Dreamer.',
    avatar: user?.avatar || 'https://i.pravatar.cc/150?u=1',
    experience: [
      { company: 'Tech Corp', position: 'Senior Developer', duration: '2022 - Present', description: 'Leading a team of frontend engineers.' },
      { company: 'StartUp Inc', position: 'Developer', duration: '2020 - 2022', description: 'Built scalable web applications.' },
    ],
    education: [
      { school: 'University of Technology', degree: 'B.Sc. Computer Science', year: '2018-2022' },
    ],
    skills: [
      { name: 'JavaScript', level: 90 },
      { name: 'React', level: 85 },
      { name: 'Node.js', level: 80 },
      { name: 'UI/UX', level: 70 },
    ],
    social: {
      github: 'https://github.com/johndoe',
      linkedin: 'https://linkedin.com/in/johndoe',
      twitter: 'https://twitter.com/johndoe',
    },
    email: user?.email || 'jordan@example.com',
    phone: '+1 (555) 123-4567',
    achievements: [
      { name: 'Top Learner', icon: <Star size={20} className="text-yellow-400" />, description: 'Completed 100+ hours of learning.' },
      { name: 'React Pro', icon: <Award size={20} className="text-primary-500" />, description: 'Mastered React course.' },
    ],
    learningProgress: [
      { name: 'Web Dev', completed: 12, total: 20 },
      { name: 'UI/UX', completed: 8, total: 15 },
      { name: 'Data', completed: 5, total: 18 },
      { name: 'Mobile', completed: 3, total: 10 },
    ],
  });

  // Modal edit handlers
  const handleEdit = () => setIsEditing(true);
  const handleSave = () => setIsEditing(false);
  const handleCancel = () => setIsEditing(false);

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      py: { xs: 2, sm: 3, md: 4 },
      px: { xs: 1, sm: 2, md: 3 },
      background: `
        linear-gradient(135deg, 
          rgba(var(--primary-100-rgb), 0.95) 0%, 
          rgba(255, 255, 255, 0.95) 50%, 
          rgba(var(--primary-50-rgb), 0.95) 100%
        ),
        url('https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1920') center/cover no-repeat
      `,
      dark: {
        background: `
          linear-gradient(135deg, 
            rgba(var(--primary-950-rgb), 0.95) 0%, 
            rgba(var(--primary-900-rgb), 0.95) 50%, 
            rgba(var(--primary-950-rgb), 0.95) 100%
          ),
          url('https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1920') center/cover no-repeat
        `,
      }
    }}>
      <Container maxWidth="lg">
        <div className="min-h-screen flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8">
          {/* Left Panel - Removed */}
          <main className="flex-1 w-full max-w-4xl flex flex-col gap-4 md:gap-6 lg:gap-8">
            {/* Overview with Profile Header */}
            <motion.section 
              className={`${glass} rounded-2xl p-4 md:p-6 lg:p-8`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="flex flex-col items-center">
                  <img 
                    src={profile.avatar} 
                    alt="Profile" 
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-primary-300 shadow-lg object-cover" 
                  />
                  <button className="btn btn-primary mt-4 flex items-center justify-center gap-2 text-sm md:text-base" onClick={handleEdit}>
                    <Edit2 size={16}/> Edit Profile
                  </button>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{profile.name}</h2>
                  <p className="text-base md:text-lg text-gray-600 font-medium mb-2">{profile.title}</p>
                  <div className="flex items-center justify-center md:justify-start text-gray-500 text-sm md:text-base gap-1 mb-4">
                    <MapPin size={18} /> {profile.location}
                  </div>
                  <p className="text-sm md:text-base text-gray-600 mb-4">{profile.bio}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-2 text-sm md:text-base text-gray-600">
                      <Mail size={18} className="text-primary-400" />{profile.email}
                    </div>
                    <div className="flex items-center gap-2 text-sm md:text-base text-gray-600">
                      <Phone size={18} className="text-primary-400" />{profile.phone}
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
            {/* Achievements/Badges */}
            <motion.section className={`${glass} rounded-2xl p-4 md:p-6 lg:p-8`}>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2"><Award size={22} className="text-primary-400" />Achievements & Badges</h3>
              <div className="flex flex-wrap gap-6">
                {profile.achievements.map((ach, idx) => (
                  <div key={idx} className="flex flex-col items-center bg-gray-50 rounded-xl p-4 min-w-[120px] shadow">
                    {ach.icon}
                    <span className="font-semibold mt-2 text-gray-900">{ach.name}</span>
                    <span className="text-xs text-gray-500 text-center mt-1">{ach.description}</span>
                  </div>
                ))}
              </div>
            </motion.section>
            {/* Learning Progress */}
            <motion.section className={`${glass} rounded-2xl p-4 md:p-6 lg:p-8`}>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2"><BarChart3 size={22} className="text-primary-400" />Learning Progress</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {profile.learningProgress.map((lp, idx) => (
                  <div key={idx} className="flex flex-col gap-1">
                    <span className="font-medium text-gray-700">{lp.name}</span>
                    <div className="w-full bg-gray-100 rounded-full h-3">
                      <div className="bg-primary-500 h-3 rounded-full transition-all" style={{ width: `${Math.round((lp.completed / lp.total) * 100)}%` }}></div>
                    </div>
                    <span className="text-xs text-primary-500">{lp.completed} of {lp.total} completed</span>
                  </div>
                ))}
              </div>
            </motion.section>
            {/* Experience */}
            <motion.section className={`${glass} rounded-2xl p-4 md:p-6 lg:p-8`}>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2"><Briefcase size={22} className="text-primary-400" />Experience</h3>
              <ol className="relative border-l-2 border-gray-200 ml-2">
                {profile.experience.map((exp, idx) => (
                  <li key={idx} className="mb-8 ml-4">
                    <div className="absolute w-3 h-3 bg-primary-400 rounded-full -left-1.5 border-2 border-white"></div>
                    <div className="flex flex-col md:flex-row md:items-center md:gap-4">
                      <span className="font-bold text-gray-900">{exp.position}</span>
                      <span className="text-primary-600 font-medium">@ {exp.company}</span>
                      <span className="text-sm text-gray-500 md:ml-auto">{exp.duration}</span>
                    </div>
                    <div className="text-gray-600 ml-0 md:ml-6">{exp.description}</div>
                  </li>
                ))}
              </ol>
            </motion.section>
            {/* Skills */}
            <motion.section className={`${glass} rounded-2xl p-4 md:p-6 lg:p-8`}>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2"><BarChart3 size={22} className="text-primary-400" />Skills</h3>
              <div className="space-y-4">
                {profile.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-xs text-primary-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-3">
                      <div className="bg-primary-500 h-3 rounded-full transition-all" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
            {/* Education */}
            <motion.section className={`${glass} rounded-2xl p-4 md:p-6 lg:p-8`}>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2"><GraduationCap size={22} className="text-primary-400" />Education</h3>
              <ol className="relative border-l-2 border-gray-200 ml-2">
                {profile.education.map((edu, idx) => (
                  <li key={idx} className="mb-8 ml-4">
                    <div className="absolute w-3 h-3 bg-primary-400 rounded-full -left-1.5 border-2 border-white"></div>
                    <div className="flex flex-col md:flex-row md:items-center md:gap-4">
                      <span className="font-bold text-gray-900">{edu.degree}</span>
                      <span className="text-gray-600">{edu.school}</span>
                      <span className="text-sm text-gray-500 md:ml-auto">{edu.year}</span>
                    </div>
                  </li>
                ))}
              </ol>
            </motion.section>
            {/* Social & Contact */}
            <motion.section className={`${glass} rounded-2xl p-4 md:p-6 lg:p-8`}>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2"><Mail size={22} className="text-primary-400" />Social & Contact</h3>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 text-gray-600"><Mail size={18} className="text-primary-400" />{profile.email}</div>
                <div className="flex items-center gap-2 text-gray-600"><Phone size={18} className="text-primary-400" />{profile.phone}</div>
                <div className="flex items-center gap-2 text-gray-600"><Github size={18} className="text-primary-400" /><a href={profile.social.github} target="_blank" rel="noopener noreferrer" className="hover:underline">{profile.social.github}</a></div>
                <div className="flex items-center gap-2 text-gray-600"><Linkedin size={18} className="text-primary-400" /><a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">{profile.social.linkedin}</a></div>
                <div className="flex items-center gap-2 text-gray-600"><Twitter size={18} className="text-primary-400" /><a href={profile.social.twitter} target="_blank" rel="noopener noreferrer" className="hover:underline">{profile.social.twitter}</a></div>
              </div>
            </motion.section>
          </main>
          {/* Edit Modal */}
          <AnimatePresence>
            {isEditing && (
              <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className={`${glass} rounded-2xl p-4 md:p-6 lg:p-8 w-full max-w-lg relative`}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                >
                  <button className="absolute top-4 right-4 text-gray-400 hover:text-primary-500" onClick={handleCancel}><X size={20} /></button>
                  <h3 className="text-lg md:text-xl font-bold mb-4 text-gray-900">Edit Profile</h3>
                  <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1 text-gray-700">Name</label>
                    <input 
                      type="text" 
                      className="input input-bordered w-full text-sm md:text-base" 
                      value={profile.name} 
                      onChange={e => setProfile(p => ({ ...p, name: e.target.value }))} 
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1 text-gray-700">Bio</label>
                    <textarea 
                      className="input input-bordered w-full min-h-[80px] text-sm md:text-base" 
                      value={profile.bio} 
                      onChange={e => setProfile(p => ({ ...p, bio: e.target.value }))} 
                    />
                  </div>
                  <div className="flex justify-end gap-2 mt-6">
                    <button className="btn btn-outline border-gray-300 text-gray-700 hover:bg-gray-100 text-sm md:text-base" onClick={handleCancel}>
                      <X size={16} className="mr-1" />Cancel
                    </button>
                    <button className="btn btn-primary bg-primary-600 hover:bg-primary-700 text-white text-sm md:text-base" onClick={handleSave}>
                      <Check size={16} className="mr-1" />Save
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </Box>
  );
};

export default ProfilePage; 