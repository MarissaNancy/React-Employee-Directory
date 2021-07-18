import React from "react";
import DataContent from "./DataContent"

function Table({ headings, users, handleSort }) {
  return (
    <div className="datatable">
      <table id="table" className="table">
        <thead>
          <tr>
            {headings.map(({ name, width }) => {
              return (
                <th
                  className="col"
                  key={name}
                  style={{ width }}
                  onClick={() => {
                    handleSort(name.toLowerCase());
                  }}
                >
                  {name}
                  <span className="pointer"></span>
                </th>
              );
            })}
          </tr>
        </thead>

        <DataContent users={users} />
      </table>
    </div>
  );
}

export default Table;
