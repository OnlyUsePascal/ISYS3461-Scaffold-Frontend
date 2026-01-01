import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { Alpha } from "../alpha-types";
import { AlphaTableRow } from "./alpha-table-row";

interface AlphaTableProps {
  alphas: Alpha[];
  refreshAlphas: () => Promise<void>;
}

export function AlphaTable(pr: AlphaTableProps) {
  // const {} = useAlphaTable();

  return (
    <div className="container md:mx-auto w-full md:max-w-6xl">
      <Table className="table-fixed w-full">
        <TableCaption>A list of properties</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-2/6 text-center">#</TableHead>
            <TableHead className="w-1/6 text-center">Name</TableHead>
            <TableHead className="w-1/6 text-center">Price</TableHead>
            <TableHead className="w-2/6 text-center">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {pr.alphas.length > 0 &&
            pr.alphas.map((alpha, index) => (
              <AlphaTableRow
                key={alpha.id}
                {...{ alpha, refreshAlphas: pr.refreshAlphas }}
              />
            ))}
        </TableBody>
      </Table>
    </div>
  );
}
