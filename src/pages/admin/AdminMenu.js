import menuData from "../../components/menuData";
import "../../assets/styles/menu.css";
<<<<<<< HEAD
import logo from "../../assets/imgs/SWICO-LOGO.png";
import logoSm from "../../assets/imgs/SWICO-LOGO-sm.png";
=======
>>>>>>> 0d47b77138df1e594b214bd566a6ff6edf9cfe4a
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import MobileNav from "../../components/menu/MobileNav";
import SideBar from "../../components/menu/SideBar";
import MinimisedSideBar from "../../components/menu/MinimisedSideBar";
import { authentication } from "../../helpers/firebase";
import { Link } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import DefaultAvatar from "../../components/DefaultAvatar";
<<<<<<< HEAD
import { Badge } from "react-bootstrap";
=======
>>>>>>> 0d47b77138df1e594b214bd566a6ff6edf9cfe4a
import { ImProfile } from "react-icons/im";
import useDialog from "../../hooks/useDialog";
import useAuth from "../../contexts/Auth";
import { MdSettings } from "react-icons/md";

export default function AdminMenu({ minimiseMenu, maximiseMenu }) {
  const preferredToggleMenu =
    localStorage.getItem("preferredToggleMenu") || true;
  const { Admin } = menuData;
  const [toggleMenu, showToggleMenu, hideToggleMenu] = useDialog(
    JSON.parse(preferredToggleMenu)
  );
  const [show, handleShow, handleClose] = useDialog();

<<<<<<< HEAD
  const { logout } = useAuth();
=======
  const { logout, logo, logoSm } = useAuth();
>>>>>>> 0d47b77138df1e594b214bd566a6ff6edf9cfe4a
  const handleLogout = async () => {
    try {
      localStorage.removeItem("onRefresh");
      await logout();
    } catch (error) {}
  };

  if (show) {
    window.onclick = (event) =>
      !event.target.matches(".footerContext") ? handleClose() : null;
  }

  return (
    <div className="menuSide">
      <MobileNav
        role={Admin}
        user="admin"
        displayName={authentication?.currentUser?.displayName}
      />
      {toggleMenu ? (
        <nav className="sidebar">
          <div id="brand">
            <img width={150} src={logo} alt="SWICO" />
            <div
              id="arrowCircle"
              onClick={() => {
                hideToggleMenu();
                minimiseMenu();
              }}
            >
              <HiOutlineChevronLeft
                style={{ color: "#c6c7c8", fontSize: "15px" }}
              />
            </div>
          </div>
          <SideBar role={Admin} />
          <footer
            className="footerContext"
            onClick={(event) => {
              show ? handleClose() : handleShow();
              event.stopPropagation();
            }}
          >
            <div className="footerContext tw-w-full tw-h-full tw-flex tw-px-3 tw-py-2 tw-gap-3 tw-items-center">
              {authentication?.currentUser.photoURL !==
                "https://firebasestorage.googleapis.com/v0/b/car-insurance-app.appspot.com/o/default-user-image.png?alt=media&token=f9f8f8e9-f8f8-4f8f-8f8f-f8f8f8f8f8f8" &&
              authentication?.currentUser.photoURL !==
                "https://example.com/jane-doe/photo.jpg" ? (
                <img
                  src={authentication?.currentUser.photoURL}
                  alt={authentication?.currentUser.displayName}
                  width={50}
                  height={50}
                  className="tw-rounded-full tw-overflow-hidden"
                />
              ) : (
                <DefaultAvatar />
              )}
              <div className="">
                <p className="tw-font-medium tw-text-lg tw-m-0">
                  <span>
                    {(authentication?.currentUser?.displayName).split(" ")[0]}{" "}
                  </span>
                  <span>
                    {(authentication?.currentUser?.displayName).split(" ")[1]}
                  </span>
                </p>
                <span className="tw-text-gray-400 tw-text-sm">Admin</span>
              </div>
            </div>
            <ul
              className={
                show
                  ? "tw-flex tw-flex-col tw-bg-white tw-border tw-border-gray-300 tw-rounded-lg tw-text-sm tw-py-4 tw-px-2 tw-text-gray-500 tw-shadow-lg tw-absolute tw-bottom-20"
                  : "tw-hidden"
              }
              id="contextUl"
            >
              <Link
                to="/admin/settings"
                className="tw-flex tw-hover:bg-gray-100 tw-gap-2 tw-cursor-pointer tw-items-center tw-py-3 tw-text-gray-500 hover:tw-text-gray-500 hover:tw-bg-gray-100 tw-px-5 tw-rounded"
                onClick={() =>
                  localStorage.setItem("onRefresh", "/admin/settings")
                }
              >
                <ImProfile /> My Profile
              </Link>
              <div className="tw-flex tw-hover:bg-gray-100 tw-gap-2 tw-cursor-pointer tw-items-center tw-py-3 tw-text-gray-500 hover:tw-text-gray-500 hover:tw-bg-gray-100 tw-px-5 tw-rounded">
                <MdSettings /> Account Settings
              </div>

              <hr className="tw-my-3 tw-border-gray-600" />

              <li
                onClick={handleLogout}
                className="tw-flex tw-hover:bg-gray-100 tw-gap-2 tw-cursor-pointer tw-items-center tw-py-3 tw-text-gray-500 hover:tw-text-gray-500 hover:tw-bg-gray-100 tw-px-5 tw-rounded"
              >
                <MdLogout /> Logout
              </li>
            </ul>
          </footer>
        </nav>
      ) : (
        <nav className="sidebar-m">
          <section id="brand_m">
            <img width={35} src={logoSm} alt="SWICO" />
            <div
              id="arrowOutCircle"
              onClick={() => {
                showToggleMenu();
                maximiseMenu();
              }}
            >
              <HiOutlineChevronRight
                style={{ color: "#c6c7c8", fontSize: "15px" }}
              />
            </div>
          </section>
          <MinimisedSideBar role={Admin} />
          <footer
            onClick={(event) => {
              show ? handleClose() : handleShow();
              event.stopPropagation();
            }}
            className="tw-relative"
          >
            <div className="tw-flex tw-justify-center tw-items-center tw-w-full tw-h-full tw-px-3 tw-py-2 tw-gap-3">
              <DefaultAvatar />
            </div>
            <ul
              className={
                show
                  ? "tw-flex tw-flex-col tw-bg-white tw-border tw-border-gray-300 tw-w-52 tw-rounded-lg tw-text-sm tw-py-4 tw-px-2 tw-text-gray-500 tw-shadow-lg tw-absolute tw-bottom-5 tw-left-16"
                  : "tw-hidden"
              }
              id="contextUl"
            >
              <Link
                to="/admin/settings"
                className="tw-flex tw-hover:bg-gray-100 tw-gap-2 tw-cursor-pointer tw-items-center tw-py-3 tw-text-gray-500 hover:tw-text-gray-500 hover:tw-bg-gray-100 tw-px-5 tw-rounded"
                onClick={() =>
                  localStorage.setItem("onRefresh", "/admin/settings")
                }
              >
                <ImProfile /> My Profile
              </Link>
              <div className="tw-flex tw-hover:bg-gray-100 tw-gap-2 tw-cursor-pointer tw-items-center tw-py-3 tw-text-gray-500 hover:tw-text-gray-500 hover:tw-bg-gray-100 tw-px-5 tw-rounded">
                <MdSettings /> Account Settings
              </div>

              <hr className="tw-my-3 tw-border-gray-600" />

              <li
                onClick={handleLogout}
                className="tw-flex tw-hover:bg-gray-100 tw-gap-2 tw-cursor-pointer tw-items-center tw-py-3 tw-text-gray-500 hover:tw-text-gray-500 hover:tw-bg-gray-100 tw-px-5 tw-rounded"
              >
                <MdLogout /> Logout
              </li>
            </ul>
          </footer>
        </nav>
      )}
    </div>
  );
}
