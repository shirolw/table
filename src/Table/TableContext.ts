import { IDefaultTableColumnProps, TDefaultTableItem } from "@/@types/table";
import React from "react";

export interface TableConfig<T extends TDefaultTableItem> {
  columns: Array<IDefaultTableColumnProps<T>>;
  updateColumn: (column: IDefaultTableColumnProps<T>) => void;
}

const defaultContext = {
  columns: [],
  updateColumn: () => {},
};

export const TableContext =
  React.createContext<TableConfig<any>>(defaultContext);

export function useTableContext<T extends TDefaultTableItem>(): TableConfig<T> {
  return React.useContext<TableConfig<T>>(TableContext);
}
