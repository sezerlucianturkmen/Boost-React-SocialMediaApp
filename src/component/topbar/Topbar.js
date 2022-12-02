import {
  Chat,
  Logout,
  Notifications,
  Person,
  Search,
  Settings,
} from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./topbar.css";
import {
  Avatar,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/features/AuthSlice";
import { findbyTokenwithAxios } from "../../store/features/UserSlice";
import SearchComponent from "../search/SearchComponent";
function Topbar() {
  const user = useSelector((state) => state.user.userProfile);
  const isAuthanticated = useSelector((state) => state.auth.isAuthanticated);
  const [anchorEl, setAnchorEl] = useState(null);
  const token = useSelector((state) => state.auth.token);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const getUser = async () => {
    const response = await dispatch(findbyTokenwithAxios({ token }));
  };
  const navigate = useNavigate();
  const gotoprofile = () => {
    navigate("/profile/" + user.id);
  };
  useEffect(() => {
    getUser();
  }, []);
  const dispatch = useDispatch();
  const logoutTop = () => {
    dispatch(logout());
    console.log(isAuthanticated);
  };
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Social Media</span>
      </div>
      <div className="topbarCenter">
        <SearchComponent></SearchComponent>
      </div>

      <div className="topbarRight">
        <div className="topbarLinks">
          <Link
            to={"/"}
            //   onClick={() => dispatch(setUserIdforPosts(""))}
            className="topbarLink hover:text-lime-300"
          >
            Ana Sayfa
          </Link>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <div>
          <IconButton
            className=" hover:scale-125"
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <img
              width={500}
              src="/assets/person/1.jpeg"
              alt=""
              className="topbarImg"
            />
          </IconButton>

          <Menu
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            className="mt-4"
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem>
              <Avatar />
              <button onClick={gotoprofile} className=" mx-2">
                {user.username}
              </button>
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              <span className=" mx-2">Ayarlar</span>
            </MenuItem>
            <MenuItem>
              <button onClick={logoutTop} className=" mx-2">
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Çıkış
              </button>
            </MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
