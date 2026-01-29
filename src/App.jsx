import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./components/Layout";
import ErrorPage from "./routes/ErrorPage";
import Home from "./routes/Home.jsx";
import Contact from "./routes/Contact";
import CommunicationPub from "./routes/CommunicationPub";
import PromotionImmobiliere from "./routes/PromotionImmobiliere";
import ProtectedPage from "./routes/Admin/ProtectedPage";
import AdminLayout from "./components/AdminLayout";
import DashboardAdmin from "./routes/Admin/DashboardAdmin";
import EditImages from "./routes/Admin/EditImages";
import EditText from "./routes/Admin/EditText";
import EditPW from "./routes/Admin/EditPW";
import { homeLoader } from "./utils/homeLoader";
import PageLoader from "./components/PageLoader";

// 1. Create a Root component to provide the location context to all routes.

const router = createBrowserRouter([
  {
    errorElement: <ErrorPage />,
    hydrateFallbackElement: <PageLoader />,
    path: "/",
    element: <Layout />,

    children: [
      {
        children: [{ index: true, element: <Home />, loader: homeLoader }],
      },
      { path: "/contact", element: <Contact /> },
      { path: "promotionimmobiliere", element: <PromotionImmobiliere /> },
      { path: "/communicationpub", element: <CommunicationPub /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
  {
    path: "/admin",
    element: (
      <ProtectedPage>
        <AdminLayout />
      </ProtectedPage>
    ),
    children: [
      { index: true, element: <DashboardAdmin /> },
      { path: "editImages", element: <EditImages /> },
      { path: "editText", element: <EditText /> },
      { path: "editerMDP", element: <EditPW /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
