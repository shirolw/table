import { TDefaultTableItem, TableColumnRender } from "@/@types/table";
import { PropsWithChildren, useEffect } from "react";
import { useTableContext } from "./TableContext";

interface ITableColumnProps<T extends TDefaultTableItem>
  extends PropsWithChildren {
  prop: keyof T;
  label?: string;
  render?: TableColumnRender<T>;
}

export default function TableColumn<T extends TDefaultTableItem>({
  prop,
  label,
  render,
  children,
}: ITableColumnProps<T>): null {
  const { updateColumn } = useTableContext<T>();

  useEffect(() => {
    updateColumn({
      prop,
      label: children || label,
      renderHandler: render,
    });
  }, [children, label, prop, render]);

  return null;
}
