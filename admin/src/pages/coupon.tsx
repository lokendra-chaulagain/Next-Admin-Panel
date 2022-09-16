import Appbar from "../components/Topbar";
import LeftAppBar from "../components/LeftBar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CouponTable from "../components/CouponTable";

export default function Coupon() {
  return (
    <Box>
      <h1>Coupon</h1>
      <CouponTable />
    </Box>
  );
}
