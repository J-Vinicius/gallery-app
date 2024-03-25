import { ThemeProvider } from "@/components/theme-provider";

import Template from "@/components/Template";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Template />
    </ThemeProvider>
  );
}
