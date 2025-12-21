export interface Project {
  id: UUID;
  name: string;
  owner_id: UUID;
  members: User[];
  tasks: Task[];
  created_at: string;
  description?: string;
  tags: string[];
};

type UUID = string;
type UserRole = 'admin' | 'manager' | 'developer' | 'viewer';
type TaskStatus = 'todo' | 'in_progress' | 'review' | 'done';

interface Comment {
  id: string;
  author_id: string;
  content: string;
  created_at: string;
  updated_at?: string;
};

interface Task {
  id: string;
  title: string;
  status: TaskStatus;
  assignees: UUID;
  comments: Comment[];
  created_at: string;
  description?: string;
  due_date?: string;
};

interface User {
  id: UUID;
  name: string;
  email: string;
  role: UserRole;
  is_active: boolean;
  last_login?: string;
};
