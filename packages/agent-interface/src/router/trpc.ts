import { initTRPC } from '@trpc/server';
import { transformer } from '../transformer';

// biome-ignore lint/complexity/noBannedTypes: Context is simply empty right now
type Context = {};

/**
 * Initialization of tRPC backend
 * Should be done only once per backend!
 */
const t = initTRPC.context<Context>().create({
  transformer: transformer,
});

/**
 * Export reusable router and procedure helpers
 * that can be used throughout the router
 */
export const router = t.router;
export const procedure = t.procedure;
