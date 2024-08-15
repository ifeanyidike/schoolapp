
import { initializeAuth0 } from '@/auth0';
import { type NextRequest, type NextResponse } from 'next/server';

export const GET = (req: NextRequest, res: NextResponse) => {
  const host = req.headers.get('host');
  const auth0 = initializeAuth0(host!);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
  return auth0.handleAuth()(req, res);
};