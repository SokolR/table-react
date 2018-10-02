import React from 'react';

export const DynamicTable = ({ cellSize, table, mouseOver }) => {
  return (
    <table className="table" onMouseOver={mouseOver}>
      <tbody>
        {table.map(item => (
          <tr key={item.id} className="row">
            {item.tableArr.map(el => (
              <td
                key={el}
                style={{
                  width: cellSize,
                  height: cellSize,
                }}
                className="cell"
              />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
