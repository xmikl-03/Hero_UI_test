import React from 'react';
import { Table, TableBody, TableCell, TableRow, Input } from '@heroui/react';

interface ChartDataRow {
  id: string;
  label: string;
  value: number;
}

interface Props {
  chartKey: string;
}

const sampleData: ChartDataRow[] = [
  { id: '1', label: 'A', value: 100 },
  { id: '2', label: 'B', value: 200 },
  { id: '3', label: 'C', value: 300 },
];

const ChartDataTable: React.FC<Props> = ({ chartKey }) => {
  const [rows, setRows] = React.useState<ChartDataRow[]>(sampleData);

  const updateRow = (id: string, field: 'label' | 'value', newValue: string) => {
    setRows(prev =>
      prev.map(row =>
        row.id === id ? { ...row, [field]: field === 'value' ? Number(newValue) : newValue } : row
      )
    );
  };

  return (
    <div className="overflow-auto">
      <Table removeWrapper>
        <thead>
          <tr>
            <th className="text-left px-4 py-2">Label</th>
            <th className="text-left px-4 py-2">Value</th>
          </tr>
        </thead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>
                <Input
                  value={row.label}
                  onChange={e => updateRow(row.id, 'label', e.target.value)}
                  size="sm"
                />
              </TableCell>
              <TableCell>
                <Input
                  value={row.value.toString()}
                  onChange={e => updateRow(row.id, 'value', e.target.value)}
                  type="number"
                  size="sm"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ChartDataTable;
