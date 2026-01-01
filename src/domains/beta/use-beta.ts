import { useState } from "react";

export default function useBeta() {
  const [counter, setCounter] = useState<number>(0);
  return { counter };
}
