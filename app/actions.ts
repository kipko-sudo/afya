'use server';

import { afyaClient, InitiateHandshakeResponse, CompleteHandshakeResponse } from '@/lib/afya-client';

export async function initiateHandshake() {
  try {
    const platformName = process.env.AFYA_PLATFORM_NAME;
    const platformKey = process.env.AFYA_PLATFORM_KEY;
    const platformSecret = process.env.AFYA_PLATFORM_SECRET;

    if (!platformName || !platformKey || !platformSecret) {
      throw new Error('Missing required environment variables');
    }

    const response = await afyaClient.post<InitiateHandshakeResponse>(
      '/initiate-handshake',
      {
        platform_name: platformName,
        platform_key: platformKey,
        platform_secret: platformSecret,
        callback_url: 'http://localhost:3000/callback',
      }
    );

    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Failed to initiate handshake';
    console.error('Initiate handshake error:', error);
    return {
      success: false,
      error: errorMessage,
    };
  }
}

export async function completeHandshake(handshakeToken: string) {
  try {
    const platformKey = process.env.AFYA_PLATFORM_KEY;
    const platformSecret = process.env.AFYA_PLATFORM_SECRET;

    if (!platformKey || !platformSecret) {
      throw new Error('Missing required environment variables');
    }

    const response = await afyaClient.post<CompleteHandshakeResponse>(
      '/complete-handshake',
      {
        handshake_token: handshakeToken,
        platform_key: platformKey,
        platform_secret: platformSecret,
      }
    );

    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Failed to complete handshake';
    console.error('Complete handshake error:', error);
    return {
      success: false,
      error: errorMessage,
    };
  }
}
