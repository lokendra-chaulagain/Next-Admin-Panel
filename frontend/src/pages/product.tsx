import Box from "@mui/material/Box";
import ProductTable from "../components/ProductTable";

export default function Product() {
  return (
    <Box>
      <h1>Product:Fetching Data in Traditional Way using useState and useEffect</h1>
      <ProductTable />
    </Box>
  );
}
