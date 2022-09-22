import Box from "@mui/material/Box";
import CustomerTable from "../components/CustomerTable";

export default function Customer() {
  return (
    <Box>
      <h1>Customer:data fetched using Redux ToolKit And RTK Query</h1>
      <CustomerTable />
    </Box>
  );
}
