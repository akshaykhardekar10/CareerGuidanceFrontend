import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  ActivitySquare, 
  BookOpen, 
  Code, 
  User, 
  MessageSquare,
  Users,
  Headphones,
  Settings,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

interface SidebarProps {
  onCollapse: (collapsed: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onCollapse }) => {
  const { user } = useAuth();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  
  const toggleSidebar = () => {
    const newCollapsed = !collapsed;
    setCollapsed(newCollapsed);
    onCollapse(newCollapsed);
  };
  
  const navItems = [
    { path: '/dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { path: '/assessment', label: 'Assessment', icon: <ActivitySquare size={20} /> },
    { path: '/learning', label: 'Learning', icon: <BookOpen size={20} /> },
    { path: '/code-editor', label: 'Code Editor', icon: <Code size={20} /> },
    { path: '/profile', label: 'Profile', icon: <User size={20} /> },
  ];
  
  const secondaryNavItems = [
    { path: '/community', label: 'Community', icon: <Users size={20} /> },
    { path: '/mentors', label: 'Mentors', icon: <MessageSquare size={20} /> },
    { path: '/support', label: 'Support', icon: <Headphones size={20} /> },
    { path: '/settings', label: 'Settings', icon: <Settings size={20} /> },
  ];
  
  if (!user) return null;
  
  return (
    <motion.aside 
      className={`fixed left-0 top-16 h-[calc(100vh-4rem)] bg-white shadow-md transition-all duration-300 z-40 ${
        collapsed ? 'w-16' : 'w-64'
      }`}
      initial={{ x: -280 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col h-full">
        {/* Toggle button */}
        <button
          className="absolute -right-3 top-8 bg-white rounded-full p-1 shadow-md"
          onClick={toggleSidebar}
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
        
        {/* User profile snippet */}
        <div className={`p-4 border-b border-gray-200 ${collapsed ? 'items-center justify-center' : ''}`}>
          {collapsed ? (
            <div className="flex justify-center">
              <img 
                src={user.avatar || 'https://i.pravatar.cc/150?u=1'} 
                alt="User" 
                className="w-8 h-8 rounded-full"
              />
            </div>
          ) : (
            <div className="flex items-center space-x-3">
              <img 
                src={user.avatar || 'https://i.pravatar.cc/150?u=1'} 
                alt="User" 
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h3 className="font-medium text-gray-900">{user.name}</h3>
                <p className="text-xs text-gray-600">{user.email}</p>
              </div>
            </div>
          )}
        </div>
        
        {/* Navigation */}
        <nav className="flex-1 py-4 overflow-y-auto">
          <div className="px-3 space-y-1">
            {!collapsed && (
              <h3 className="text-xs font-semibold text-gray-600 uppercase tracking-wider px-3 mb-2">
                Main
              </h3>
            )}
            
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center ${collapsed ? 'justify-center' : 'justify-between'} px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <div className={`flex items-center ${collapsed ? '' : 'space-x-3'}`}>
                  <span className="text-gray-600">{item.icon}</span>
                  {!collapsed && <span>{item.label}</span>}
                </div>
                
                {!collapsed && location.pathname === item.path && (
                  <span className="h-2 w-2 rounded-full bg-primary-600"></span>
                )}
              </Link>
            ))}
          </div>
          
          <div className="mt-6 px-3 space-y-1">
            {!collapsed && (
              <h3 className="text-xs font-semibold text-gray-600 uppercase tracking-wider px-3 mb-2">
                Secondary
              </h3>
            )}
            
            {secondaryNavItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center ${collapsed ? 'justify-center' : 'space-x-3'} px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors`}
              >
                <span className="text-gray-600">{item.icon}</span>
                {!collapsed && <span>{item.label}</span>}
              </Link>
            ))}
          </div>
        </nav>
        
        {/* Version info */}
        {!collapsed && (
          <div className="p-4 text-xs text-gray-600">
            <p>CareerCompass v1.0.0</p>
          </div>
        )}
      </div>
    </motion.aside>
  );
};

export default Sidebar; 