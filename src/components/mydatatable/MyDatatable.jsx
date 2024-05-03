import "./mydatatable.scss";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 130 },
];

const rows = [
  { id: 1, name: "Coffee" },
  { id: 2, name: "Non Coffee" },
  { id: 3, name: "Cake" },
  { id: 4, name: "Pastry" },
  { id: 5, name: "Cookie" },
];
const actionColumn = [];
const MyDatatable = ({ title }) => {
  return (
    <div className="datatable">
      <div className="datatableTitle">{title}</div>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default MyDatatable;
