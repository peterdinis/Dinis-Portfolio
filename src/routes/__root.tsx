import { createRootRoute, Outlet } from "@tanstack/react-router";
import NotFoundWrapper from "../components/NotFoundWrapper";

export const Route = createRootRoute({
  component: () => <Outlet />,
  notFoundComponent: () => <NotFoundWrapper />,
});
