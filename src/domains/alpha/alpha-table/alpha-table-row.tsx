import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import type { Alpha } from "../alpha-types";
import UpdateAlphaDialog from "../update-alpha-dialog/update-alpha-dialog";
import useAlphaTableRow from "./use-alpha-table-row";

export interface AlphaTableRowProps {
  alpha: Alpha;
  refreshAlphas: () => Promise<void>;
}

export function AlphaTableRow(pr: AlphaTableRowProps) {
  const { onClickDelete } = useAlphaTableRow(pr);

  return (
    <TableRow className={`w-full`}>
      <TableCell className="w-1/6 text-center">{pr.alpha.id}</TableCell>
      <TableCell className="w-1/6 text-center">{pr.alpha.name}</TableCell>
      <TableCell className="w-1/6 text-center">{pr.alpha.price}</TableCell>
      <TableCell className="w-2/6 text-center">
        <div className="flex flex-col md:flex-row md:items-center gap-2">
          <Button
            id={pr.alpha.id}
            variant="destructive"
            className="flex-1"
            onClick={onClickDelete}
          >
            Delete
          </Button>
          <UpdateAlphaDialog
            {...{ alpha: pr.alpha, refreshAlphas: pr.refreshAlphas }}
          />
        </div>
      </TableCell>
    </TableRow>
  );
}
