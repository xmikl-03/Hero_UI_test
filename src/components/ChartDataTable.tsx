const ChartDataTable: React.FC<{ chartKey: string }> = ({ chartKey }) => {
  const { chartData, updateChartData } = useChartDataContext();
  const data = chartData[chartKey];

  const handleChange = (index: number, field: string, value: string | number) => {
    const newData = [...data];
    newData[index][field] = field === 'value' ? Number(value) : value;
    updateChartData(chartKey, newData);
  };

  return (
    <table>
      <thead><tr><th>Name</th><th>Value</th></tr></thead>
      <tbody>
        {data.map((row, idx) => (
          <tr key={idx}>
            <td><input value={row.name} onChange={e => handleChange(idx, 'name', e.target.value)} /></td>
            <td><input type="number" value={row.value} onChange={e => handleChange(idx, 'value', e.target.value)} /></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
