import { TDefaultTableItem } from "@/@types/table";
import { useTableContext } from "./TableContext";

import TableCell from "./TableCell";
import React from "react";

interface ITableBodyProps<T extends TDefaultTableItem> {
  data: Array<T>;
}

export default function TableBody<T extends TDefaultTableItem>({
  data,
}: ITableBodyProps<T>) {
  const { columns } = useTableContext<T>();

  return (
    <tbody>
      {data.map((row, index) => {
        return (
          <tr key={`tbody-row-${index}`}>
            <TableCell<T> columns={columns} row={row} rowIndex={index} />
          </tr>
        );
      })}
    </tbody>
  );
}
