import { useEffect, useState } from "react";
import type { Alpha } from "./alpha-types";
import { alphaService } from "./alpha-service";

export default function useAlpha() {
  const [alphas, setAlphas] = useState<Alpha[]>([]);
  const [pageNo, setPageNo] = useState(1);
  const [pageSz, setPageSz] = useState(5);
  const [pageTotal, setPageTotal] = useState(0);
  const [query, setQuery] = useState<string>("");
  const [orderBy, setOrderBy] = useState<string>("");

  const refreshAlphas = async () => {
    try {
      const res = await alphaService.listAlphas(pageNo, pageSz);
      console.log(res);
      setAlphas(res.data.content);
      setPageTotal(res.data.totalPages);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    (async () => {
      await refreshAlphas();
    })();
  }, [pageNo, pageSz, query]);

  return {
    alphas,
    setAlphas,
    pageNo,
    setPageNo,
    pageSz,
    setPageSz,
    pageTotal,
    setPageTotal,
    query,
    setQuery,
    orderBy,
    setOrderBy,
    refreshAlphas,
  };
}
