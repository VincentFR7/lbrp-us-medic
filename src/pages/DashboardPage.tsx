import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Calendar, Users, BookOpen, MessageSquare, Clock, PlusCircle, Bell } from 'lucide-react';
import { format } from 'date-fns';

// Mock data
const upcomingAppointments = [
  { id: '1', patientName: 'Pvt. James Miller', date: new Date(2025, 6, 15, 10, 30), reason: 'Shrapnel wounds' },
  { id: '2', patientName: 'Sgt. Robert Johnson', date: new Date(2025, 6, 16, 14, 0), reason: 'Follow-up examination' },
];

const recentCasualties = [
  { id: '1', name: 'Cpl. Thomas Wilson', status: 'STABLE', injuryDate: new Date(2025, 6, 10) },
  { id: '2', name: 'Pvt. Michael Davis', status: 'SERIOUS', injuryDate: new Date(2025, 6, 12) },
  { id: '3', name: 'Sgt. William Brown', status: 'RECOVERED', injuryDate: new Date(2025, 6, 8) },
];

const recentForumPosts = [
  { id: '1', title: 'Field Triage Procedures', author: 'Capt. Richards', replies: 12, lastActivity: new Date(2025, 6, 14) },
  { id: '2', title: 'Requesting Medical Supplies', author: 'Lt. Stevens', replies: 5, lastActivity: new Date(2025, 6, 13) },
];

const DashboardPage: React.FC = () => {
  const { user, hasPermission } = useAuth();
  const currentDate = new Date();
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h1 className="text-3xl font-bold text-olive-900">Welcome, {user?.rank || ''} {user?.username}</h1>
          <p className="text-gray-600">{format(currentDate, 'EEEE, MMMM d, yyyy')}</p>
        </div>
        <div className="mt-4 md:mt-0 flex items-center space-x-4">
          <button className="flex items-center text-sm bg-olive-100 hover:bg-olive-200 text-olive-800 px-3 py-1.5 rounded-md">
            <Bell size={16} className="mr-1" />
            <span>Notifications</span>
            <span className="ml-1 bg-medical-red text-white text-xs px-1.5 py-0.5 rounded-full">3</span>
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-olive-600">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-xl font-bold">Appointments</h2>
            <Calendar size={24} className="text-olive-600" />
          </div>
          <div className="text-3xl font-bold mb-2">{upcomingAppointments.length}</div>
          <p className="text-gray-600 text-sm mb-4">Upcoming appointments</p>
          <Link to="/appointments" className="text-olive-700 hover:text-olive-900 text-sm font-medium flex items-center">
            View all appointments
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        
        {hasPermission(['MEDIC', 'NCO', 'OFFICER', 'STAFF', 'MP', 'ADMIN']) && (
          <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-medical-red">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-bold">Casualties</h2>
              <Users size={24} className="text-medical-red" />
            </div>
            <div className="text-3xl font-bold mb-2">{recentCasualties.length}</div>
            <p className="text-gray-600 text-sm mb-4">Recent casualties</p>
            <Link to="/casualties" className="text-medical-red hover:text-medical-red-dark text-sm font-medium flex items-center">
              View casualty records
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        )}
        
        {hasPermission(['MEDIC', 'NCO', 'OFFICER', 'STAFF', 'MP', 'ADMIN']) && (
          <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-khaki-700">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-bold">Medical Guides</h2>
              <BookOpen size={24} className="text-khaki-700" />
            </div>
            <p className="text-gray-600 text-sm mb-4">Access field manuals and medical procedures</p>
            <Link to="/guides" className="text-khaki-800 hover:text-khaki-900 text-sm font-medium flex items-center">
              Browse medical guides
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        )}
        
        <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-olive-800">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-xl font-bold">Forum</h2>
            <MessageSquare size={24} className="text-olive-800" />
          </div>
          <div className="text-3xl font-bold mb-2">{recentForumPosts.length}</div>
          <p className="text-gray-600 text-sm mb-4">Recent forum discussions</p>
          <Link to="/forum" className="text-olive-800 hover:text-olive-900 text-sm font-medium flex items-center">
            Join discussions
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
          </Link>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Upcoming Appointments */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-olive-700 px-6 py-4 flex justify-between items-center">
            <h2 className="text-lg font-bold text-khaki-100">Upcoming Appointments</h2>
            <Link to="/appointments/new">
              <PlusCircle size={20} className="text-khaki-100 hover:text-khaki-300" />
            </Link>
          </div>
          
          <div className="p-4">
            {upcomingAppointments.length > 0 ? (
              <div className="space-y-4">
                {upcomingAppointments.map(appointment => (
                  <div key={appointment.id} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                    <div className="flex justify-between">
                      <span className="font-medium">{appointment.patientName}</span>
                      <span className="flex items-center text-gray-500 text-sm">
                        <Clock size={14} className="mr-1" />
                        {format(appointment.date, 'h:mm a')}
                      </span>
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      <span>{format(appointment.date, 'MMMM d, yyyy')}</span>
                      <span className="mx-2">•</span>
                      <span>{appointment.reason}</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-4">No upcoming appointments</p>
            )}
          </div>
          
          <div className="bg-gray-50 px-6 py-3 text-center">
            <Link to="/appointments" className="text-olive-700 hover:text-olive-900 text-sm font-medium">
              View all appointments
            </Link>
          </div>
        </div>
        
        {/* Recent Casualties */}
        {hasPermission(['MEDIC', 'NCO', 'OFFICER', 'STAFF', 'MP', 'ADMIN']) && (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-medical-red px-6 py-4">
              <h2 className="text-lg font-bold text-white">Recent Casualties</h2>
            </div>
            
            <div className="p-4">
              {recentCasualties.length > 0 ? (
                <div className="space-y-4">
                  {recentCasualties.map(casualty => (
                    <div key={casualty.id} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                      <div className="flex justify-between">
                        <span className="font-medium">{casualty.name}</span>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          casualty.status === 'STABLE' ? 'bg-blue-100 text-blue-800' :
                          casualty.status === 'SERIOUS' ? 'bg-orange-100 text-orange-800' :
                          casualty.status === 'CRITICAL' ? 'bg-red-100 text-red-800' :
                          casualty.status === 'RECOVERED' ? 'bg-green-100 text-green-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {casualty.status}
                        </span>
                      </div>
                      <div className="text-sm text-gray-500 mt-1">
                        Admitted: {format(casualty.injuryDate, 'MMMM d, yyyy')}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-4">No recent casualties</p>
              )}
            </div>
            
            <div className="bg-gray-50 px-6 py-3 text-center">
              <Link to="/casualties" className="text-medical-red hover:text-medical-red-dark text-sm font-medium">
                View all casualty records
              </Link>
            </div>
          </div>
        )}
        
        {/* Recent Forum Posts */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-olive-800 px-6 py-4">
            <h2 className="text-lg font-bold text-khaki-100">Recent Forum Activity</h2>
          </div>
          
          <div className="p-4">
            {recentForumPosts.length > 0 ? (
              <div className="space-y-4">
                {recentForumPosts.map(post => (
                  <div key={post.id} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                    <div className="font-medium">{post.title}</div>
                    <div className="text-sm text-gray-500 mt-1 flex justify-between">
                      <span>By: {post.author}</span>
                      <span>{post.replies} replies</span>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      Last activity: {format(post.lastActivity, 'MMMM d, yyyy')}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-4">No recent forum activity</p>
            )}
          </div>
          
          <div className="bg-gray-50 px-6 py-3 text-center">
            <Link to="/forum" className="text-olive-800 hover:text-olive-900 text-sm font-medium">
              Visit the forum
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;