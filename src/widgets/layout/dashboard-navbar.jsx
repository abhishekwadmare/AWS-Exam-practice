import { useLocation, Link } from "react-router-dom";
import { Navbar, Typography, IconButton } from "@material-tailwind/react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import {
  useMaterialTailwindController,
  setOpenSidenav,
} from "@/context";

export function DashboardNavbar() {
  const [controller, dispatch] = useMaterialTailwindController();
  const { openSidenav } = controller;
  const { pathname } = useLocation();
  const pageName = pathname === "/questions" ? "Question Bank" : "Portal";

  return (
    <Navbar
      color="transparent"
      className="rounded-xl transition-all px-0 py-1"
      fullWidth
      blurred={false}
    >
      <div className="flex items-center justify-between gap-6">
        <div className="capitalize">
          <Link to="/">
            <Typography variant="small" className="font-normal text-aws-muted">
              AWS CLF-C02 Practice Exam Portal
            </Typography>
          </Link>
          <Typography variant="h6" className="text-aws-text">
            {pageName}
          </Typography>
        </div>
        <IconButton
          variant="text"
          className="grid xl:hidden text-aws-text"
          onClick={() => setOpenSidenav(dispatch, !openSidenav)}
        >
          <Bars3Icon strokeWidth={3} className="h-6 w-6" />
        </IconButton>
      </div>
    </Navbar>
  );
}

DashboardNavbar.displayName = "/src/widgets/layout/dashboard-navbar.jsx";

export default DashboardNavbar;
