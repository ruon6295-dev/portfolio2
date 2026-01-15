
export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface ServiceResponse {
  success: boolean;
  data?: string;
  error?: string;
}
