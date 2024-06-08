import React, { useEffect, useState } from "react";
// import logo from '../../icons/TECH-removebg-preview.png'
import WatchIcon from '@mui/icons-material/Watch';
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import { Link, useNavigate } from "react-router-dom";
import { FaPersonBooth, FaShoppingCart , FaLaptop, FaDesktop, FaHeadphones, FaTabletAlt, FaPhoneSlash, FaOutdent, FaCog, FaSignOutAlt, FaSearch, FaShoppingBasket, FaShoppingBag, FaJediOrder, FaCaretUp, FaCaretDown, FaFirstOrder, FaBox} from "react-icons/fa";
import { BsBag, BsBox, BsCart, BsCart2, BsCart3, BsCart4, BsCartCheckFill, BsCartDash, BsCartFill, BsPersonCircle, BsPhone, BsSearch, BsWatch } from "react-icons/bs";
import SearchBar from "./Search";
import { Box, Card, CardActionArea } from "@mui/material";

const navListMenuItems = [
  {
    title: "Laptops",
    description: "Find the perfect solution for your needs.",
    icon: <FaLaptop/>,
    pathLink:'/products/category/pc'
  },{
    title: "Phones",
    description: "Meet and learn about our dedication",
    icon: <BsPhone/>,
    pathLink:'/products/category/telephone'
  },
  
  {
    title: "Tablets",
    description: "Find the perfect solution for your needs.",
    icon: <FaTabletAlt/>,
    pathLink:'/products/category/tablette'
  },
  {
    title: "Desktops",
    description: "Reach out to us for assistance or inquiries",
    icon: <FaDesktop/>,
    pathLink:'/products/category/ordinateur'
  },
  {
    title: "Headphones",
    description: "Learn how we can help you achieve your goals.",
    icon: <FaHeadphones/>,
    pathLink:'/products/category/ecouteurs'
  },
  {
    title: "Smartwatches",
    description: "Find the perfect solution for your needs.",
    icon: <WatchIcon style={{fontSize:'16px'}}/>
    ,
    pathLink:'/products/category/smartwatch'
  },
];

function DropDownProfile({ isVisible, userData  }) {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      // Perform logout logic here
      window.location.reload()
      navigate('/')
    } catch (error) {
      console.log('error', error);
    }
  }

  return (
    <div className={`flex flex-col dropDownProfile ${isVisible ? 'visible' : 'hidden'}`}>
      <ul className="flex flex-col gap-2">
        <li>{userData.name}</li>
        <hr style={{ width: '100%', color: 'black' }} />
        <li> <Link to={'orders'}> <FaBox/> My Orders</Link></li> 
        <li onClick={logout}> <FaSignOutAlt/> Log out</li>
        {/* <li><FaCog/> Settings</li> */}
      </ul>
    </div>
  );
}

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const renderItems = navListMenuItems.map(
    ({ icon, title, description , pathLink }, key) => (
      <a href="#" key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
        <Link to={pathLink} className="flex items-center gap-3">
          <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
            {icon}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold"
            >
              {title}
            </Typography>
          </div>
          </Link>
        </MenuItem>
      </a>
    ),
  );
 
  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
                Categories
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}
function AccountListMenu() {
  const navigate = useNavigate();
  const logout = async () => {
    try {
      // Perform logout logic here
      navigate('/')
      window.location.reload()
    } catch (error) {
      console.log('error', error);
    }
  }
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="medium" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
                <BsPersonCircle style={{fontSize:'25px'}}/> Account 
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">

            <a href="#" >
        <MenuItem className="flex items-center gap-3 rounded-lg">
        <li to='' className="flex items-center gap-3" onClick={logout}>
          <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
            <FaSignOutAlt/>
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold"
            >
              Log Out
            </Typography>
          </div>
          </li>
        </MenuItem>
      </a>
      <a href="#">
        <MenuItem className="flex items-center gap-3 rounded-lg">
        </MenuItem>
      </a>
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
        <li className="flex items-center gap-3">
           <Link to={'orders'} className="flex items-center gap-3"> 
        <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
        <FaBox/>
        </div>
        <div>
        <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold"
            >
              My Orders
            </Typography>
          </div>
          </Link>
        </li>
        </MenuItem>
        <MenuItem className="flex items-center gap-3 rounded-lg">
        <li className="flex items-center gap-3" onClick={logout}>
          <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
            <FaSignOutAlt/>
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold"
            >
              Log Out
            </Typography>
          </div>
          </li>
        </MenuItem>
        </Collapse>
      </div>
    </React.Fragment>
  );
}

export default function NavBar2() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);

  const handleDropDownToggle = () => {
    setIsDropDownVisible(!isDropDownVisible);
  };

  const handleWindowClick = (event) => {
    if (event.target.closest(".dropDownProfile") === null) {
      setIsDropDownVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleWindowClick);
    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, []);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem('loggedIn');
    const storedUserData = localStorage.getItem('userData');
    if (loggedInStatus === 'true' && storedUserData) {
      setIsLoggedIn(true);
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  return (
    <div className="container">
      <Navbar className="p-0 max-w-full shadow-none border-none lg:px-2 lg:py-0">
        <div className="relative mx-auto flex items-center text-blue-gray-900 ">
          <Link
            to="/"
            className="mr-4 block py-1.5 font-medium leading-relaxed "
          >
            {/* <img src={logo} alt="Logo" className="brand-logo" /> */}
          </Link>
          <div className="absolute left-2/4 hidden -translate-x-2/4 lg:block">
            <SearchBar />
          </div>
          <div className="hidden lg:block">
            <NavListMenu />
          </div>
          <div className="ml-auto flex gap-4">
            <Button
              variant="text"
              color="blue-gray"
              className="flex items-center gap-2 font-medium"
            >
              <Link to={'/cart'}>
                <FaShoppingCart />
              </Link>
            </Button>
            <IconButton
              variant="text"
              className=" ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              {isNavOpen ? (
                <XMarkIcon className="h-6 w-6" strokeWidth={2} />
              ) : (
                <Bars3Icon className="h-6 w-6" strokeWidth={2} />
              )}
            </IconButton>
            {isLoggedIn ? (
              <div className="relative flex items-center">
                <div
                  className="flex items-center cursor-pointer"
                  onClick={handleDropDownToggle}
                >
                  <BsPersonCircle style={{ fontSize: '25px' }} />
                </div>
                <DropDownProfile isVisible={isDropDownVisible} userData={userData} />
              </div>
            ) : (
              <Link to='/login' className="hidden items-center gap-2 lg:flex">
                <FaPersonBooth className="text-[20px]" />
                <Typography
                  as="div"
                  variant="small"
                  className="font-medium"
                >
                  Sign In
                </Typography>
              </Link>
            )}
          </div>
        </div>
        <Collapse open={isNavOpen} className="overflow-scroll">
          <div className="container mx-auto">
            <SearchBar />
            <NavListMenu />
            <div className="flex w-full items-center gap-2 lg:hidden">
              <Link to='/login' className="hidden items-center gap-2 lg:flex">
                <FaPersonBooth className="text-[20px]" />
                <Typography
                  as="div"
                  variant="small"
                  className="font-medium"
                >
                  Sign In
                </Typography>
              </Link>
              <Link
                to="/contact"
                className="hidden items-center gap-2 lg:flex"
              >
                <PhoneIcon className="h-[18px] w-[18px]" />
                <Typography
                  as="div"
                  variant="small"
                  className="font-medium"
                >
                  Contact Us
                </Typography>
              </Link>
              <Link
                to="/about-us"
                className="hidden items-center gap-2 lg:flex"
              >
                <RectangleGroupIcon className="h-[18px] w-[18px]" />
                <Typography
                  as="div"
                  variant="small"
                  className="font-medium"
                >
                  About Us
                </Typography>
              </Link>
            </div>
            {isLoggedIn ? (
              <div className="lg:hidden">
                <AccountListMenu />
              </div>
            ) : (
              <div className="lg:hidden">
                <Link to='/login' className="flex items-center gap-2">
                  <FaPersonBooth className="text-[20px]" />
                  <Typography
                    as="div"
                    variant="small"
                    className="font-medium"
                  >
                    Sign In
                  </Typography>
                </Link>
              </div>
            )}
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}
