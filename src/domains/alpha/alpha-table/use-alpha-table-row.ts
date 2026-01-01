import { alphaService } from "../alpha-service";
import type { AlphaTableRowProps } from "./alpha-table-row";

export default function useAlphaTableRow(pr: AlphaTableRowProps) {
  const onClickDelete = async () => {
    try {
      const res = await alphaService.deleteAlpha(pr.alpha.id);
      console.log(res);
      pr.refreshAlphas();
      
    } catch (error) {
      console.log(error);
    }
  };

  return {
    onClickDelete,
  };
}
