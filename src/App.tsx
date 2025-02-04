import { Helmet, HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import { Toaster } from "sonner";
import { ThemeProvider } from "./components/themes/theme-provider";
export function App() {
  return (
    <>
      <HelmetProvider>
        <ThemeProvider storageKey="e.tasks-ui-theme">
          <Helmet titleTemplate="%s | e.tasks" />
          <Toaster richColors position="bottom-right" />
          <RouterProvider router={routes} />
        </ThemeProvider>
      </HelmetProvider>
    </>
  );
}
