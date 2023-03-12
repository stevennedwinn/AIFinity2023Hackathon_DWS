import { NavLink } from "react-router-dom";
import { FaBars, 
  // FaHome, 
  // FaLock, 
  // FaMoneyBill, 
  // FaUser, 
  FaSolarPanel } from "react-icons/fa";
// import { MdMessage } from "react-icons/md";
import { BiAnalyse, 
  // BiSearch, 
  BiCog } from "react-icons/bi";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaCarBattery } from "react-icons/fa";
import { AiFillBell, 
  // AiFillHeart, 
  // AiTwotoneFileExclamation 
} from "react-icons/ai";
// import { BsCartCheck } from "react-icons/bs";
import { GiElectric} from "react-icons/gi";
import { TbStack3} from "react-icons/tb"
// import { RiNumber1, RiNumber2 } from "react-icons/ri"
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
//routes is an array
const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <AiOutlineDashboard />,
  },
  {
    path: "/summary",
    name: "Summary",
    icon: <AiOutlineDashboard />,
  },
  {
    path: "/settings",
    name: "New / Modify Projects",
    icon: <BiCog />,
  },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
          <div className="bars">
              <FaBars onClick={toggle} />
            </div>
            <AnimatePresence>
              {isOpen && (
                
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                DWS_company
                </motion.h1>
              )}
            </AnimatePresence>
          </div>
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;