import Table from "@/Table";
import { ReactElement, ReactNode } from "react";

interface ITestDataProps {
  name: string;
  age: string;

  action?: string;
}

function handleRender(
  value: unknown,
  rowData: unknown,
  index: unknown
): ReactElement {
  function handleConsoleValues(): void {
    console.log(value, rowData, index);
  }

  return <button onClick={handleConsoleValues}>Deletar</button>;
}

export default function Home(): JSX.Element {
  const testData: ITestDataProps[] = [
    {
      name: "Rafael J.",
      age: "19/01/2002",
      action: "Deletar",
    },
    {
      name: "Rafael T.",
      age: "20/01/2002",
    },
    {
      name: "Rafael L.",
      age: "21/01/2002",
    },
  ];

  return (
    <Table<ITestDataProps> data={testData}>
      <Table.Column<ITestDataProps> prop="name" label="Nome" />
      <Table.Column<ITestDataProps> prop="age" label="Idade" />
      <Table.Column<ITestDataProps>
        label="Ação"
        prop="action"
        render={handleRender}
      />
    </Table>
  );
}
