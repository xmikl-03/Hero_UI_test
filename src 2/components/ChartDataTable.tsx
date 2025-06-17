import React from 'react';
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, Input } from '@heroui/react';

interface Props {
  chartKey: string;
}

const ChartDataTable: React.FC<Props> = ({ chartKey }) => {
  const [data, setData] = React.useState<{ label: string; value: number }[]>([
    { label: 'Segment A', value: 400 },
    { label: 'Segment B', value: 300 },
    { label: 'Segment C', value: 300 },
  ]);

  const updateValue = (index: number, key: 'label' | 'value', value: string) => {
    const newData = [...data];
    if (key === 'value') {
      newData[index][key] = parseFloat(value) || 0;
    } else {
      newData[index][key] = value;
    }
    setData(newData);
  };

  return (
    <Table aria-label="Chart data table">
      <TableHeader>
        <TableColumn>Label</TableColumn>
        <TableColumn>Value</TableColumn>
      </TableHeader>
      <TableBody>
        {data.map((item, index) => (
          <TableRow key={index}>
            <TableCell>
              <Input
                size="sm"
                value={item.label}
                onChange={(e) => updateValue(index, 'label', e.target.value)}
              />
            </TableCell>
            <TableCell>
              <Input
                size="sm"
                type="number"
                value={item.value}
                onChange={(e) => updateValue(index, 'value', e.target.value)}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ChartDataTable;
