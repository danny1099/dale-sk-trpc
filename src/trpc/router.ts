import { procedure, router } from "@/trpc/init";

export const appRouter = router({
  health: procedure.query(() => "Server is healthy!"),
});

export type AppRouter = typeof appRouter;
