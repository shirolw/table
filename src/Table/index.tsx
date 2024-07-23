import React, { PropsWithChildren, useEffect, useMemo, useState } from "react";

import { TDefaultTableItem, IDefaultTableColumnProps } from "@/@types/table";
import { TableContext, TableConfig } from "./TableContext";

import TableColumn from "./TableColumn";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

interface ITableProps<T extends TDefaultTableItem> extends PropsWithChildren {
  data?: Array<T>;
}

export default function Table<T extends TDefaultTableItem>({
  children,
  data: customData,
}: ITableProps<T>): JSX.Element {
  const [columns, setColumns] = useState<Array<IDefaultTableColumnProps<T>>>(
    []
  );
  const [data, setData] = useState<Array<T>>([]);

  const updateColumn = (column: IDefaultTableColumnProps<T>) => {
    setColumns((last) => {
      const hasColumn = last.find((item) => item.prop === column.prop);
      if (!hasColumn) return [...last, column];
      return last.map((item) => {
        if (item.prop !== column.prop) return item;
        return column;
      });
    });
  };

  const contextValue = useMemo<TableConfig<T>>(
    () => ({
      columns,
      updateColumn,
    }),
    [columns]
  );

  useEffect(() => {
    if (customData) setData(customData);
  }, [customData]);

  return (
    <TableContext.Provider value={contextValue}>
      <table className="border border-solid border-white">
        <TableHead columns={columns} />
        <TableBody<T> data={data} />
        {children}
      </table>
    </TableContext.Provider>
  );
}

Table.Column = TableColumn;
