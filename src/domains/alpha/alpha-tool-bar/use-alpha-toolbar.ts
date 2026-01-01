import { useEffect, useState } from "react";
import type { AlphaToolbarProps } from "./alpha-toolbar";

export default function useAlphaToolbar(pr: AlphaToolbarProps) {
  const [searchInput, setSearchInput] = useState("");

  // debounce query
  useEffect(() => {
    const timer = setTimeout(() => {
      pr.setQuery(searchInput);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchInput]);

  return {
    searchInput,
    setSearchInput,
  }
}
