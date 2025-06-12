import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Input } from '@heroui/react';

interface DataRow {
  name: string;
  value: number;
}

interface Props {
  chartKey: string;
}

const defaultData: Record<string, DataRow[]> = {
  customerSegmentation: [
    { name: 'Enterprise', value: 400 },
    { name: 'SMB', value: 300 },
    { name: 'Startup', value: 200 },
    { name: 'Individual', value: 100 },
  ],
  dealFunnel: [
    { name: 'Leads', value: 800 },
    { name: 'Opportunities', value: 400 },
    { name: 'Proposals', value: 200 },
    { name: 'Closed', value: 100 },
  ],
  revenueByProduct: [
    { name: 'Product A', value: 12000 },
    { name: 'Product B', value: 9000 },
    { name: 'Product C', value: 6000 },
  ],
};

const ChartDataTable: React.FC<Props> = ({ chartKey }) => {
  const [data, setData] = useState<DataRow[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem(chartKey);
    setData(saved ? JSON.parse(saved) : defaultData[chartKey]);
  }, [chartKey]);

  useEffect(() => {
    localStorage.setItem(chartKey, JSON.stringify(data));
  }, [data, chartKey]);

  const updateRow = (index: number, field: keyof DataRow, value: string) => {
    const newData = [...data];
    newData[index] = {
      ...newData[index],
      [field]: field === 'value' ? parseFloat(value) || 0 : value,
    };
    setData(newData);
  };

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Value</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row, index) => (
          <TableRow key={index}>
            <TableCell>
              <Input
                value={row.name}
                onChange={(e) => updateRow(index, 'name', e.target.value)}
              />
            </TableCell>
            <TableCell>
              <Input
                type="number"
                value={row.value.toString()}
                onChange={(e) => updateRow(index, 'value', e.target.value)}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ChartDataTable;
