import { ReactNode } from "react";

export type TDefaultTableItem = Record<string, any>;

export type TableColumnRender<Item extends TDefaultTableItem> = (
  value: Item[keyof Item],
  rowData: Item,
  rowIndex: number
) => JSX.Element | void;

export interface IDefaultTableColumnProps<T extends TDefaultTableItem> {
  prop: keyof T;
  label: ReactNode | string;

  renderHandler?: TableColumnRender<T>;
}
