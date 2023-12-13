import { createBrowserRouter } from "react-router-dom";
import Create from "./pages/Create";
import Notes from "./pages/Notes";


export const router = createBrowserRouter([
    {
        path: "/",
        children: [
            { index: true, element: <Notes /> },
            { path: "create", element: <Create /> }
        ],
    },
]);
