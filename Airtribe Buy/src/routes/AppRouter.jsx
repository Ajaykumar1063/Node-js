import {createHashRouter,RouterProvider } from "react-router-dom";
import ProductsPage from "../pages/ProductsPage";
//import {ProductDetailsPage} from "../pages/ProductDetailsPage.Jsx";
import CartPage from "../pages/CartPage.Jsx";
import CheckoutPage from "../pages/CheckoutPage";
import AppLayout from "../pages/AppLayout";


const router = createHashRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
          {
            index: true,
            element: <ProductsPage />,
          },
        //   {
        //     path: "/:productId",
        //     element: <ProductDetailsPage />,
        //   },
          {
            path: "/cart",
            element: <CartPage />,
          },
          {
            path: "/checkout",
            element: <CheckoutPage/>,
          },
        ],
      },
    ]);
    
    export default function AppRouter() {
        return <RouterProvider router={router} />;
      }