import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    // Scroll restoration intercepts and cancels in-page #hash scrolling; this
    // is a two-page brochure site, so native browser behavior is all we need.
    scrollRestoration: false,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
