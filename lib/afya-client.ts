import axios from 'axios';

export const afyaClient = axios.create({
  baseURL: 'https://staging.collabmed.net/api/external',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface InitiateHandshakeRequest {
  platform_name: string;
  platform_key: string;
  platform_secret: string;
  callback_url: string;
}

export interface InitiateHandshakeResponse {
  handshake_token: string;
  expires_at: string;
  message?: string;
}

export interface CompleteHandshakeRequest {
  handshake_token: string;
  platform_key: string;
  platform_secret: string;
}

export interface CompleteHandshakeResponse {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  message?: string;
}

export interface HandshakeStatus {
  step: 'idle' | 'initiating' | 'completing' | 'complete' | 'error';
  handshakeToken?: string;
  expiresAt?: string;
  accessToken?: string;
  refreshToken?: string;
  error?: string;
}
