import { createBrowserRouter } from "react-router-dom";
import BoasVindas from "../page/BoasVindas";
import Carrinho from "../page/Carrinho";
import Loja from "../page/Loja";


const router = createBrowserRouter([
  {
    path: "/",
    element: <BoasVindas />
  },
  {
    path: "/carrinho",
    element: <Carrinho />
  },
{
  path: "/loja",
  element: <Loja />
}
]);

export default router;