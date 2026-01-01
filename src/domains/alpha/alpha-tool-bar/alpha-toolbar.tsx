import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import useAlphaToolbar from "./use-alpha-toolbar";

export interface AlphaToolbarProps {
  query: string;
  setQuery: (query: string) => void;
  orderBy: string;
  setOrderBy: (orderBy: string) => void;
}

export default function AlphaToolbar(pr: AlphaToolbarProps) {
  const { searchInput, setSearchInput } = useAlphaToolbar(pr);

  return (
    <div className="flex flex-row">
      <div className="p-1 flex-auto">
        <Input
          placeholder="Search alpha..."
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
      </div>
      <div className="p-1">
        <Select onValueChange={pr.setOrderBy}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort By" />
          </SelectTrigger>

          <SelectContent>
            <SelectGroup>
              <SelectLabel>Sort by</SelectLabel>
              <SelectItem value="name">name</SelectItem>
              <SelectItem value="price">price</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
