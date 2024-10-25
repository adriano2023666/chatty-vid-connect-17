export interface Message {
  id: string;
  content: string;
  timestamp: Date;
  type: 'welcome' | 'user' | 'system';
}