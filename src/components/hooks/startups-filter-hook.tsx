import { useEffect, useState } from "react";

function getStartupsParam(): string | null {
  if (typeof window === "undefined") return null;
  const params = new URLSearchParams(window.location.search);
  return params.get("startups");
}

export default function useStartupsFilter() {
  const [showStartups, setShowStartups] = useState<boolean>(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    const paramValue = getStartupsParam();
    
    if (paramValue === "true") {
      setShowStartups(true);
      localStorage.setItem("showStartups", "true");
    } else if (paramValue === "false") {
      setShowStartups(false);
      localStorage.setItem("showStartups", "false");
    } else {
      const storedValue = localStorage.getItem("showStartups");
      if (storedValue === "true") {
        setShowStartups(true);
      } else if (storedValue === "false") {
        setShowStartups(false);
      }
    }
  }, []);

  return isClient ? showStartups : false;
}