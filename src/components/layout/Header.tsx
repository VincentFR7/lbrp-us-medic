import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { UserCircle, Menu, X, LogOut, Home, Calendar, Clipboard, BookOpen, MessageSquare, Shield } from 'lucide-react';

const Header: React.FC = () => {
  const { user, logout, hasPermission } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="bg-olive-700 text-khaki-100 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img 
              src="https://images.pexels.com/photos/6499018/pexels-photo-6499018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="188th Medical Battalion" 
              className="h-12 w-12 rounded-full mr-3 border-2 border-khaki-300 object-cover"
            />
            <Link to="/" className="font-stencil text-2xl tracking-wider">
              188<sup>th</sup> MEDICAL BATTALION
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {user ? (
              <>
                <Link to="/dashboard" className="nav-link flex items-center">
                  <Home size={18} className="mr-1" /> Dashboard
                </Link>
                <Link to="/appointments" className="nav-link flex items-center">
                  <Calendar size={18} className="mr-1" /> Appointments
                </Link>
                {hasPermission(['MEDIC', 'NCO', 'OFFICER', 'STAFF', 'MP', 'ADMIN']) && (
                  <>
                    <Link to="/casualties" className="nav-link flex items-center">
                      <Clipboard size={18} className="mr-1" /> Casualties
                    </Link>
                    <Link to="/guides" className="nav-link flex items-center">
                      <BookOpen size={18} className="mr-1" /> Guides
                    </Link>
                  </>
                )}
                <Link to="/forum" className="nav-link flex items-center">
                  <MessageSquare size={18} className="mr-1" /> Forum
                </Link>
                {hasPermission(['ADMIN']) && (
                  <Link to="/admin" className="nav-link flex items-center">
                    <Shield size={18} className="mr-1" /> Admin
                  </Link>
                )}
                <div className="relative group">
                  <button className="flex items-center space-x-1 rounded-full bg-olive-800 px-3 py-1">
                    <UserCircle size={20} />
                    <span className="font-medium">{user.username}</span>
                  </button>
                  <div className="absolute right-0 mt-2 w-48 bg-olive-800 rounded-md shadow-lg overflow-hidden z-20 hidden group-hover:block">
                    <div className="px-4 py-2 border-b border-olive-600">
                      <p className="text-sm font-medium">{user.rank || 'Unassigned'}</p>
                      <p className="text-xs opacity-75">{user.unit || 'No Unit'}</p>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="flex items-center w-full px-4 py-2 text-left hover:bg-olive-600"
                    >
                      <LogOut size={16} className="mr-2" />
                      Sign Out
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <Link to="/login" className="nav-link">Sign In</Link>
                <Link to="/register" className="nav-link-btn">Register</Link>
              </>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-khaki-100 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden py-4 border-t border-olive-600">
            <nav className="flex flex-col space-y-3">
              {user ? (
                <>
                  <Link 
                    to="/dashboard" 
                    className="mobile-nav-link"
                    onClick={() => setMenuOpen(false)}
                  >
                    <Home size={18} className="mr-2" /> Dashboard
                  </Link>
                  <Link 
                    to="/appointments" 
                    className="mobile-nav-link"
                    onClick={() => setMenuOpen(false)}
                  >
                    <Calendar size={18} className="mr-2" /> Appointments
                  </Link>
                  {hasPermission(['MEDIC', 'NCO', 'OFFICER', 'STAFF', 'MP', 'ADMIN']) && (
                    <>
                      <Link 
                        to="/casualties" 
                        className="mobile-nav-link"
                        onClick={() => setMenuOpen(false)}
                      >
                        <Clipboard size={18} className="mr-2" /> Casualties
                      </Link>
                      <Link 
                        to="/guides" 
                        className="mobile-nav-link"
                        onClick={() => setMenuOpen(false)}
                      >
                        <BookOpen size={18} className="mr-2" /> Guides
                      </Link>
                    </>
                  )}
                  <Link 
                    to="/forum" 
                    className="mobile-nav-link"
                    onClick={() => setMenuOpen(false)}
                  >
                    <MessageSquare size={18} className="mr-2" /> Forum
                  </Link>
                  {hasPermission(['ADMIN']) && (
                    <Link 
                      to="/admin" 
                      className="mobile-nav-link"
                      onClick={() => setMenuOpen(false)}
                    >
                      <Shield size={18} className="mr-2" /> Admin
                    </Link>
                  )}
                  <div className="pt-2 border-t border-olive-600">
                    <div className="px-2 py-1">
                      <p className="font-medium">{user.username}</p>
                      <p className="text-sm opacity-75">{user.rank || 'Unassigned'} - {user.unit || 'No Unit'}</p>
                    </div>
                    <button
                      onClick={() => {
                        handleLogout();
                        setMenuOpen(false);
                      }}
                      className="flex items-center w-full px-2 py-2 text-left rounded-md hover:bg-olive-600"
                    >
                      <LogOut size={16} className="mr-2" />
                      Sign Out
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <Link 
                    to="/login" 
                    className="mobile-nav-link"
                    onClick={() => setMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link 
                    to="/register" 
                    className="mobile-nav-link"
                    onClick={() => setMenuOpen(false)}
                  >
                    Register
                  </Link>
                </>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;