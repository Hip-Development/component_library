import "./table.scss";

function Table({
  caption,
  headings,
  rows,
  footers,
}: Readonly<{
  caption: string;
  headings: string[];
  rows: string[][];
  footers: string[];
}>) {
  return (
    <table>
      <caption>{caption}</caption>
      <thead>
        {headings.map((h, i) => (
          <tr key={i}>{h}</tr>
        ))}
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i}>
            {r.map((d, j) => (
              <td key={j}>{d}</td>
            ))}
          </tr>
        ))}
        <tr></tr>
        <tr></tr>
        <tr></tr>
        <tr></tr>
      </tbody>
      <tfoot>
        {footers.map((h, i) => (
          <tr key={i}>{h}</tr>
        ))}
      </tfoot>
    </table>
  );
}

export default Table;
