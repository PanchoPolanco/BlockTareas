import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <h1>Not Found</h1>
    }
]);