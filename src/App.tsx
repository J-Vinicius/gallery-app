import { ThemeProvider } from "@/components/theme-provider";

import { Header } from "./components/Header";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
    </ThemeProvider>
  );
}
