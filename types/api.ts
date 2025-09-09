export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface ContactFormRequest {
  name: string;
  email: string;
  message: string;
}

export interface ContactFormResponse {
  success: boolean;
  message: string;
}

export interface EmailService {
  sendEmail: (data: ContactFormRequest) => Promise<ContactFormResponse>;
}

export interface ApiError {
  code: string;
  message: string;
  details?: any;
}

