import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter, Link, Outlet } from "react-router-dom";
import { Register } from "./page/register/Register";
import { Login } from "./page/login/Login";
import { UpdatePassword } from "./page/update_password/UpdatePassword";
import { ErrorPage } from "./page/error/ErrorPage";
import { UpdateInfo } from "./page/update_info/UpdateInfo";
import { UserOutlined } from "@ant-design/icons";
import "./index.css";

const routes = [
    {
        path: "/",
        element: <Index></Index>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "update_info",
                element: <UpdateInfo />,
            },
        ],
    },
    {
        path: "login",
        element: <Login />,
    },
    {
        path: "register",
        element: <Register />,
    },
    {
        path: "update_password",
        element: <UpdatePassword />,
    },
];
const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(<RouterProvider router={router} />);

export function Index() {
    return (
        <div id="index-container">
            <div className="header">
                <h1>会议室预定系统</h1>
                <Link to={"/update_info"}>
                    <UserOutlined className="icon" />
                </Link>
            </div>
            <div className="body">
                <Outlet></Outlet>
            </div>
        </div>
    );
}
