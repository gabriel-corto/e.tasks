import { Helmet, HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import { Toaster } from "sonner";
import { ThemeProvider } from "./components/themes/theme-provider";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/react-query";
export function App() {
  return (
    <>
      <HelmetProvider>
        <ThemeProvider storageKey="e.tasks-ui-theme">
          <Helmet titleTemplate="%s | e.tasks" />
          <Toaster richColors position="bottom-right" />
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={routes} />
          </QueryClientProvider>
        </ThemeProvider>
      </HelmetProvider>
    </>
  );
}
