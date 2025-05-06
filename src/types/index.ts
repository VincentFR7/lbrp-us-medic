export type UserRole = 'US_ARMY' | 'MEDIC' | 'NCO' | 'OFFICER' | 'STAFF' | 'MP' | 'ADMIN';

export interface User {
  id: string;
  username: string;
  email: string;
  rank?: string;
  unit?: string;
  role: UserRole;
  avatar?: string;
  createdAt: Date;
}

export interface Appointment {
  id: string;
  patientId: string;
  patientName: string;
  doctorId?: string;
  doctorName?: string;
  date: Date;
  reason: string;
  status: 'PENDING' | 'CONFIRMED' | 'COMPLETED' | 'CANCELLED';
  notes?: string;
  createdAt: Date;
}

export interface Casualty {
  id: string;
  name: string;
  rank: string;
  serialNumber: string;
  unit: string;
  injuryDate: Date;
  injuryLocation: string;
  injuries: string;
  treatment: string;
  status: 'CRITICAL' | 'SERIOUS' | 'STABLE' | 'RECOVERED' | 'DECEASED';
  attendingMedicId: string;
  attendingMedicName: string;
  notes: string;
  updatedAt: Date;
}

export interface MedicalGuide {
  id: string;
  title: string;
  category: string;
  content: string;
  author: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ForumCategory {
  id: string;
  name: string;
  description: string;
  allowedRoles: UserRole[];
}

export interface ForumTopic {
  id: string;
  categoryId: string;
  title: string;
  authorId: string;
  authorName: string;
  createdAt: Date;
  lastPostAt: Date;
  postCount: number;
  isPinned: boolean;
  isLocked: boolean;
}

export interface ForumPost {
  id: string;
  topicId: string;
  authorId: string;
  authorName: string;
  content: string;
  createdAt: Date;
  updatedAt?: Date;
  isEdited: boolean;
}