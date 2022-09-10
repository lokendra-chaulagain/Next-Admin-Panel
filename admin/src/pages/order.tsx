import Appbar from "../components/Appbar";
import LeftAppBar from "../components/LeftBar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import OrderTable from "../components/OrderTable";

export default function Order() {
  return (
    <Box>
      <h1>Order</h1>
      <OrderTable />
    </Box>
  );
}
