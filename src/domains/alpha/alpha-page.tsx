import PaginationCtl from "@/components/layout/pagination-bar";
import { AlphaTable } from "./alpha-table/alpha-table";
import useAlpha from "./use-alpha";
import CreateAlphaForm from "./create-alpha-form/create-alpha-form";
import AlphaToolbar from "./alpha-tool-bar/alpha-toolbar";

export default function AlphaPage() {
  const {
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
  } = useAlpha();

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Alpha Page</h1>
      <CreateAlphaForm {...{ refreshAlphas }} />
      <AlphaToolbar
        {...{
          query,
          setQuery,
          orderBy,
          setOrderBy,
        }}
      />
      <AlphaTable {...{ alphas, refreshAlphas }} />
      <PaginationCtl {...{ pageNo, setPageNo, pageTotal }} />
    </div>
  );
}
