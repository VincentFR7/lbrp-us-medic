import React, { createContext, useState, useContext, useEffect } from 'react';
import { User, UserRole } from '../types';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (username: string, password: string) => Promise<void>;
  register: (username: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  hasPermission: (requiredRoles: UserRole[]) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user data for demo purposes
const MOCK_USERS = [
  {
    id: '1',
    username: 'admin',
    email: 'admin@example.com',
    password: 'admin123',
    role: 'ADMIN' as UserRole,
    rank: 'Colonel',
    unit: '188th Medical Battalion',
    avatar: '',
    createdAt: new Date()
  },
  {
    id: '2',
    username: 'medic',
    email: 'medic@example.com',
    password: 'medic123',
    role: 'MEDIC' as UserRole,
    rank: 'Private First Class',
    unit: '188th Medical Battalion',
    avatar: '',
    createdAt: new Date()
  },
  {
    id: '3',
    username: 'soldier',
    email: 'soldier@example.com',
    password: 'soldier123',
    role: 'US_ARMY' as UserRole,
    rank: 'Private',
    unit: '101st Airborne Division',
    avatar: '',
    createdAt: new Date()
  }
];

// Role hierarchy for permission checks
const ROLE_HIERARCHY: Record<UserRole, number> = {
  'US_ARMY': 1,
  'MEDIC': 2,
  'NCO': 3,
  'OFFICER': 4,
  'MP': 5,
  'STAFF': 6,
  'ADMIN': 7
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is already logged in (session storage for demo)
    const storedUser = sessionStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (username: string, password: string) => {
    setLoading(true);
    
    // In a real app, this would be an API call
    // Simulating API call delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const foundUser = MOCK_USERS.find(
      u => u.username === username && u.password === password
    );
    
    if (!foundUser) {
      setLoading(false);
      throw new Error('Invalid username or password');
    }
    
    // Remove password before storing
    const { password: _, ...userWithoutPassword } = foundUser;
    
    // Store user in session storage (for demo purposes)
    sessionStorage.setItem('user', JSON.stringify(userWithoutPassword));
    setUser(userWithoutPassword);
    setLoading(false);
  };

  const register = async (username: string, email: string, password: string) => {
    setLoading(true);
    
    // In a real app, this would be an API call
    // Simulating API call delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Check if username or email already exists
    if (MOCK_USERS.some(u => u.username === username || u.email === email)) {
      setLoading(false);
      throw new Error('Username or email already exists');
    }
    
    // Create new user (in a real app, this would be saved to a database)
    const newUser = {
      id: String(MOCK_USERS.length + 1),
      username,
      email,
      password,
      role: 'US_ARMY' as UserRole, // Default role for new users
      createdAt: new Date()
    };
    
    MOCK_USERS.push(newUser);
    
    // Remove password before storing
    const { password: _, ...userWithoutPassword } = newUser;
    
    // Store user in session storage (for demo purposes)
    sessionStorage.setItem('user', JSON.stringify(userWithoutPassword));
    setUser(userWithoutPassword);
    setLoading(false);
  };

  const logout = () => {
    sessionStorage.removeItem('user');
    setUser(null);
  };

  const hasPermission = (requiredRoles: UserRole[]) => {
    if (!user) return false;
    
    // Check if user's role is in the allowed roles
    if (requiredRoles.includes(user.role)) return true;
    
    // Check if user's role has higher permission level than required roles
    const userRoleLevel = ROLE_HIERARCHY[user.role];
    return requiredRoles.some(role => userRoleLevel >= ROLE_HIERARCHY[role]);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout, hasPermission }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};