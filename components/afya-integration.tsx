'use client';

import { useState, useCallback, useEffect } from 'react';
import { initiateHandshake, completeHandshake } from '@/app/actions';
import { HandshakeStatus } from '@/lib/afya-client';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Spinner } from '@/components/ui/spinner';
import { AlertCircle, CheckCircle2, Clock, Key } from 'lucide-react';

export function AfyaIntegration() {
  const [status, setStatus] = useState<HandshakeStatus>({ step: 'idle' });
  const [timeRemaining, setTimeRemaining] = useState<number | null>(null);

  // Calculate time remaining for token expiry
  useEffect(() => {
    if (status.step !== 'completing' && status.step !== 'complete' && status.expiresAt) {
      const expiryTime = new Date(status.expiresAt).getTime();
      const now = new Date().getTime();
      const remaining = Math.max(0, expiryTime - now);

      if (remaining > 0) {
        setTimeRemaining(remaining);
        const timer = setTimeout(() => {
          setTimeRemaining((prev) => (prev ? prev - 1000 : 0));
        }, 1000);

        return () => clearTimeout(timer);
      } else if (status.step === 'initiating') {
        // Auto-complete if we just initiated
        handleCompleteHandshake(status.handshakeToken);
      }
    }
  }, [status.expiresAt, status.step, status.handshakeToken]);

  const handleInitiate = useCallback(async () => {
    setStatus({ step: 'initiating' });
    const result = await initiateHandshake();

    if (result.success && result.data) {
      setStatus({
        step: 'initiating',
        handshakeToken: result.data.handshake_token,
        expiresAt: result.data.expires_at,
      });

      // Auto-complete the handshake immediately
      setTimeout(() => handleCompleteHandshake(result.data.handshake_token), 500);
    } else {
      setStatus({
        step: 'error',
        error: result.error,
      });
    }
  }, []);

  const handleCompleteHandshake = useCallback(async (token: string) => {
    setStatus((prev) => ({ ...prev, step: 'completing' }));
    const result = await completeHandshake(token);

    if (result.success && result.data) {
      setStatus({
        step: 'complete',
        handshakeToken: token,
        accessToken: result.data.access_token,
        refreshToken: result.data.refresh_token,
      });
    } else {
      setStatus({
        step: 'error',
        error: result.error,
      });
    }
  }, []);

  const formatTimeRemaining = (ms: number) => {
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / (1000 * 60)) % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const isLoading = status.step === 'initiating' || status.step === 'completing';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">
            Afyanalytics Integration
          </h1>
          <p className="text-slate-600">
            Secure token-based authentication with two-step handshake
          </p>
        </div>

        <Card className="p-6 mb-6">
          <div className="space-y-6">
            {/* Status Display */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-slate-900">Current Status</h2>

              {status.step === 'idle' && (
                <Alert className="border-slate-200 bg-slate-50">
                  <AlertCircle className="h-4 w-4 text-slate-500" />
                  <AlertDescription className="text-slate-700">
                    Click the button below to initiate the handshake process
                  </AlertDescription>
                </Alert>
              )}

              {status.step === 'initiating' && (
                <Alert className="border-blue-200 bg-blue-50">
                  <Spinner className="h-4 w-4 text-blue-600" />
                  <AlertDescription className="text-blue-700">
                    Initiating handshake... Please wait
                  </AlertDescription>
                </Alert>
              )}

              {status.step === 'completing' && (
                <Alert className="border-blue-200 bg-blue-50">
                  <Spinner className="h-4 w-4 text-blue-600" />
                  <AlertDescription className="text-blue-700">
                    Completing handshake and retrieving access token...
                  </AlertDescription>
                </Alert>
              )}

              {status.step === 'complete' && (
                <Alert className="border-green-200 bg-green-50">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <AlertDescription className="text-green-700">
                    Successfully authenticated! Access token received.
                  </AlertDescription>
                </Alert>
              )}

              {status.step === 'error' && (
                <Alert className="border-red-200 bg-red-50">
                  <AlertCircle className="h-4 w-4 text-red-600" />
                  <AlertDescription className="text-red-700">
                    Error: {status.error}
                  </AlertDescription>
                </Alert>
              )}
            </div>

            {/* Token Information */}
            {status.handshakeToken && (
              <div className="space-y-3 rounded-lg bg-slate-50 p-4 border border-slate-200">
                <div className="flex items-center gap-2 text-slate-900 font-semibold">
                  <Key className="h-4 w-4" />
                  Handshake Token
                </div>
                <code className="block text-xs text-slate-600 break-all bg-white p-2 rounded border border-slate-200">
                  {status.handshakeToken}
                </code>
                {status.expiresAt && (
                  <div className="flex items-center gap-2 text-slate-600 text-sm">
                    <Clock className="h-4 w-4" />
                    <span>
                      {timeRemaining !== null && timeRemaining > 0
                        ? `Expires in: ${formatTimeRemaining(timeRemaining)}`
                        : 'Token expired'}
                    </span>
                  </div>
                )}
              </div>
            )}

            {status.accessToken && (
              <div className="space-y-3 rounded-lg bg-green-50 p-4 border border-green-200">
                <div className="flex items-center gap-2 text-green-900 font-semibold">
                  <CheckCircle2 className="h-4 w-4" />
                  Access Token
                </div>
                <code className="block text-xs text-green-700 break-all bg-white p-2 rounded border border-green-200">
                  {status.accessToken}
                </code>
              </div>
            )}

            {status.refreshToken && (
              <div className="space-y-3 rounded-lg bg-slate-50 p-4 border border-slate-200">
                <div className="flex items-center gap-2 text-slate-900 font-semibold">
                  <Key className="h-4 w-4" />
                  Refresh Token
                </div>
                <code className="block text-xs text-slate-600 break-all bg-white p-2 rounded border border-slate-200">
                  {status.refreshToken}
                </code>
              </div>
            )}

            {/* Action Button */}
            <div className="pt-4">
              <Button
                onClick={handleInitiate}
                disabled={isLoading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300"
              >
                {isLoading ? (
                  <>
                    <Spinner className="mr-2 h-4 w-4" />
                    Processing...
                  </>
                ) : status.step === 'complete' ? (
                  'Authentication Complete'
                ) : (
                  'Initiate Handshake'
                )}
              </Button>
            </div>

            {/* Instructions */}
            <div className="rounded-lg bg-slate-50 p-4 border border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-2">Setup Required</h3>
              <ol className="text-sm text-slate-600 space-y-1 list-decimal list-inside">
                <li>Add environment variables to your project</li>
                <li>Set AFYA_PLATFORM_NAME, AFYA_PLATFORM_KEY, and AFYA_PLATFORM_SECRET</li>
                <li>Click "Initiate Handshake" to start the two-step authentication</li>
                <li>The handshake will complete automatically within the 15-minute window</li>
              </ol>
            </div>
          </div>
        </Card>

        {/* Environment Variables Info */}
        {/* <Card className="p-6 bg-amber-50 border border-amber-200">
          <h3 className="font-semibold text-amber-900 mb-2">Environment Variables</h3>
          <p className="text-sm text-amber-800 mb-3">
            Add these to your project settings:
          </p>
          <div className="space-y-2 text-xs font-mono text-amber-900 bg-white p-3 rounded border border-amber-200">
            <div>AFYA_PLATFORM_NAME=Test Platform v2</div>
            <div>AFYA_PLATFORM_KEY=afya_2d00d74512953c933172ab924f5073fa</div>
            <div>AFYA_PLATFORM_SECRET=e0502a5c052842cf19d0305455437b791d201761c88e2ad641680b2d5d356ba8</div>
          </div>
        </Card> */}
      </div>
    </div>
  );
}
