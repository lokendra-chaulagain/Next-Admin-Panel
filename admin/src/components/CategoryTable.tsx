import * as React from "react";
import { useQuery, QueryCache } from "@tanstack/react-query"; //hook
import axios from "axios";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function CategoryTable() {
  //useQuery hook requires at least two arguments
  //first argument is unique key to identify this query
  //second argument is a function that returns a promise
  const fetchProduct = async () => {
    return await axios.get("http://localhost:4000/api/product/get");
  };
  // const data = useQuery(["RQ-productData"], fetchProduct);
  //destructure
  const { isLoading, isFetching, data, isError, error }: any = useQuery(
    ["RQ-productData"],
    fetchProduct,
    {
      // refetchOnMount: true, //default
      // refetchOnMount: false,
      // refetchOnMount: always,
      //every time we enter in this component the api request will be called
      // refetchOnWindowFocus==========
      //in traditional method when we update something on backend data will not automatically fetched we have to refresh
      //but react Query will directly update on frontend if changes happen on backend
      //Our UI is in sink with th remote data this is possible due to refetchOnWindowFocus configuration
      // refetchOnWindowFocus: true, //default
      // refetchOnWindowFocus:false
      // refetchOnWindowFocus:always
      //Polling =====================
      //Polling refers to the fetching of data at regular interval
      // real time stock like in every second
      //ui becomes in sync with remote data
      // refetchInterval: false, //default
      // refetchInterval: 2000,//query will fetch data in every 2 second
      //watch api request you will understand
      //Polling is paused if the window loose its focus
      //if we want background fetching the we should use
      // refetchIntervalInBackground:true
    }
  );

  console.log({ isLoading, isFetching });

  if (isLoading) {
    return <h2>Loading....</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }
  //Note:Before showing error message RQ tries 3 times to get the data when api request failed

  return (
    <>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />

        {/* Dummy test jsx */}
      </div>
      <div>
        {data?.data.map((item: any, index: any) => (
          <div key={index}>
            <span>{item.name}</span>
            <span>{item.comment}</span>
            <span>{item.price}</span>
          </div>
        ))}
      </div>
    </>
  );
}
