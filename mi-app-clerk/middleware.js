import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware();

export const config = {
  matcher: [
    '/dashboard(.*)', // Protege el dashboard y sus subrutas
  ],
};
