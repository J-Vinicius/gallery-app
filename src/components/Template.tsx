import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import shadcnUILogo from "/shadcnui.svg";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

export default function Template() {
  const [count, setCount] = useState(0);
  return (
    <main className="flex min-h-screen place-content-center">
      <div className="m-auto space-y-8 flex flex-col place-content-center">
        <ModeToggle />
        <div className="flex items-center justify-between">
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
          <a href="https://ui.shadcn.com/" target="_blank">
            <img
              src={shadcnUILogo}
              className="bg-white rounded"
              alt="ShadcnUI logo"
            />
          </a>
        </div>
        <h1 className="text-center">Vite + React + ShadcnUI</h1>
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Exclude <code>components/Template.tsx</code> and edit the rest.
        </p>
        <p className="read-the-docs">
          Click on the Vite, React and ShadcnUI logos to learn more.
        </p>
      </div>
    </main>
  );
}
