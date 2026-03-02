export interface Agent {
  id: string;
  name: string;
  role: string;
  status: 'active' | 'idle' | 'offline';
  apiId?: string;
  description: string;
}

export interface ApiConfig {
  id: string;
  name: string;
  provider: string;
  key: string;
  version: string;
}

export interface Connection {
  id: string;
  name: string;
  ip: string;
  port: string;
  token: string;
  isActive: boolean;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'queued' | 'in-progress' | 'complete' | 'on-hold';
  priority: 'high' | 'medium' | 'low';
  category: 'research' | 'development' | 'marketing' | 'scheduling' | 'security';
  progress: number;
  stage: 'initiating' | 'in-action' | 'wrapping';
  duration: string;
  cost: string;
  assignedAgentIds: string[];
  needsAttention: boolean;
  highlights?: string;
}

export interface Meeting {
  id: string;
  title: string;
  agenda: string;
  dateTime: string;
  agentIds: string[];
}

export interface MissionDocument {
  id: string;
  name: string;
  content: string;
  type: string;
  size: string;
  updatedAt: string;
}

export interface AppState {
  agents: Agent[];
  apis: ApiConfig[];
  connections: Connection[];
  tasks: Task[];
  documents: MissionDocument[];
  meetings: Meeting[];
  notes: string;
  theme: 'light' | 'dark';
}
