import { TDefaultTableItem, IDefaultTableColumnProps } from "@/@types/table";

interface Props<T extends TDefaultTableItem> {
  columns: Array<IDefaultTableColumnProps<T>>;
}

export default function TableHead<T extends TDefaultTableItem>({
  columns,
}: Props<T>): JSX.Element {
  return (
    <thead>
      <tr>
        {columns.map(({ label }, index) => (
          <th key={`table-th-${label}-${index}`}>
            <div>{label}</div>
          </th>
        ))}
      </tr>
    </thead>
  );
}
