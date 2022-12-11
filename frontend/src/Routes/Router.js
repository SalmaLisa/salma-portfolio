import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Blog from "../pages/Blog";
import Home from "../pages/Home";
import ProjectDetails from "../pages/ProjectDetails";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path: '/blog',
        element:<Blog></Blog>
      },
      {
        path: '/projectDetails/:id',
        element: <ProjectDetails></ProjectDetails>,
        loader:({params})=>fetch(`https://salma-portfolio-server.vercel.app/projects/${params.id}`)
      },
    ]
  }
])