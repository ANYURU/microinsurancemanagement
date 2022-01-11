import menuData from "../../parts/menuData";
import "../../assets/styles/menu.css";
import { useState, useEffect } from "react";
import logo from "../../assets/imgs/britam-logo2.png";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import MobileNav from "../../parts/menu/MobileNav";
import SideBar from "../../parts/menu/SideBar";
import MinimisedSideBar from "../../parts/menu/MinimisedSideBar";
import { authentication } from "../../helpers/firebase";
import { Link } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import DefaultAvatar from "../../parts/DefaultAvatar";
import { Badge } from "react-bootstrap";

export default function AdminMenu({ setLargeContentClass, largeContentClass }) {
  const { Admin } = menuData;
  const [selected, setSelected] = useState({ activeObject: null, Admin });
  const [toggleMenu, setToggeMenu] = useState(true);

  useEffect(() => {
    sessionStorage.getItem("session1")
      ? setSelected({
          ...selected,
          activeObject: selected.Admin[sessionStorage.getItem("session1") - 1],
        })
      : setSelected({ ...selected, activeObject: selected.Admin[0] });
  }, []);

  const toggleActive = (index) => {
    setSelected({ ...selected, activeObject: selected.Admin[index] });
    sessionStorage.setItem("session1", selected.Admin[index]["number"]);
  };

  const toggleActiveClassStyle = (index) =>
    selected.Admin[index] === selected.activeObject
      ? "nav-linked selected"
      : "nav-linked";

  return (
    <div className="menuSide">
      <MobileNav role={Admin} user="admin" displayName={authentication?.currentUser?.displayName}/>
      {toggleMenu === true ? (
        <nav className="sidebar">
            <div id='brand'>
                <img width={150} src={logo} alt="Britam" />
                <div id="arrowCircle" onClick={() => {
                        setToggeMenu(!toggleMenu)
                        setLargeContentClass(!largeContentClass)
                        }}>
                        
                        <HiOutlineChevronLeft style={{color: "#c6c7c8", fontSize: "15px"}}/>
                        
                        
                </div>
            </div>
            <SideBar role={Admin} />
            <footer>
                <ul>
                    <li><Link to="/admin/settings">My Profile</Link></li>
                    <li><Link to="/logout"><MdLogout /> Logout</Link></li>
                </ul>
                <Link to='/admin/settings'>
                    <DefaultAvatar />
                    <div>
                        <p style={{"fontWeight": "500", "fontSize": "1.05rem"}}>{authentication?.currentUser?.displayName}</p>
                        <p style={{"color": "#646464"}}>
                            <Badge bg="warning">admin</Badge>
                        </p>
                    </div>
                    <div id="eclipse"><div></div><div></div><div></div></div>
                </Link>
            </footer>
        </nav>
      ) : (
        <nav className='sidebar-m'>
                <section id='brand_m'>
                    <div id="arrowOutCircle" onClick={() => {
                        setToggeMenu(!toggleMenu)
                        setLargeContentClass(!largeContentClass)
                        }}>
                        
                            <HiOutlineChevronRight style={{color: "#c6c7c8", fontSize: "15px"}}/>
                        
                        
                </div>
                </section>
                <MinimisedSideBar role={Admin} displayName={authentication?.currentUser?.displayName}/>
            
            </nav>
      )}
    </div>
  );
}
