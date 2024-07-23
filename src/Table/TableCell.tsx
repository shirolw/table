import { IDefaultTableColumnProps, TDefaultTableItem } from "@/@types/table";
import React, { Fragment } from "react";

interface Props<TableDataItem extends TDefaultTableItem> {
  columns: Array<IDefaultTableColumnProps<TableDataItem>>;
  row: TableDataItem;
  rowIndex: number;
}

export type TableCellData<TableDataItem> = {
  row: number;
  column: number;
  rowValue: TableDataItem;
};

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props<any>>;
export type TableCellProps<TableDataItem extends TDefaultTableItem> =
  Props<TableDataItem> & NativeAttrs;

export default function TableCell<TableDataItem extends TDefaultTableItem>({
  columns,
  row,
  rowIndex,
}: TableCellProps<TableDataItem>): JSX.Element {
  return (
    <Fragment>
      {columns.map(({ prop, renderHandler }, index) => {
        const currentRowValue = row[prop];

        const cellValue = currentRowValue;

        const shouldBeRenderElement = renderHandler
          ? renderHandler(currentRowValue, row, rowIndex)
          : null;

        return (
          <td key={`row-td-${index}`} className="px-6 py-4">
            <div>
              {shouldBeRenderElement ? shouldBeRenderElement : cellValue}
            </div>
          </td>
        );
      })}
    </Fragment>
  );
}
