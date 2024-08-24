import { useTheme } from "@/components/theme-provider";
import { useState } from "react";
import { DarkModeIcon, LightModeIcon } from "@/icons/theme-icons";
import { Button } from "./ui/button";

export function ModeToggle() {
  const { setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<"dark" | "light">("dark");

  const toggleTheme = () => {
    if (currentTheme === "dark") {
      setTheme("light");
      setCurrentTheme("light");
    } else if (currentTheme === "light") {
      setTheme("dark");
      setCurrentTheme("dark");
    }
  };

  return (
    <div className="m-2 flex items-center justify-center">
      <Button
        variant={"outline"}
        className="h-full w-full p-2"
        onClick={() => toggleTheme()}
      >
        <div className="dark:hidden">
          <LightModeIcon />
        </div>
        <div className="hidden dark:block">
          <DarkModeIcon />
        </div>
      </Button>
    </div>
  );
}
