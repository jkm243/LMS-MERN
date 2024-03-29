import React, { useState } from "react";
import { Link, NavLink, useHistory, withRouter } from "react-router-dom";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ChatIcon from "@material-ui/icons/Chat";
import SettingsIcon from "@material-ui/icons/Settings";
import { Avatar, Button, IconButton } from "@material-ui/core";
import "./Header.css";
import ClearIcon from "@material-ui/icons/Clear";
import DragHandleIcon from "@material-ui/icons/DragHandle";
import NotesIcon from "@material-ui/icons/Notes";
import { useDispatch } from "react-redux";
import logo from "../../assets/logo1.png";

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  const toggleClose=()=>{
    setToggle(false)
    
  }
  return (
    <div className="header">
      <div className="left__header">
        <Link to="/">
          <img src={logo} className="home-logo" alt="Logo" />
          {/* <h4>LMS</h4> */}
        </Link>
      </div>
      <div
        className={`middle__header ${
          toggle ? `show__sidebar__nav` : `sidebar__nav`
        }`}
      >
        {user && (
          <ul>
            {
              user.role==="Teacher" && <> <li>
                <NavLink onClick={toggleClose} to="/teacher-dashboard">Приборная панель</NavLink>
            </li>
            
           

            </>
            
            }
            {
              user.role==="Admin" && <> <li >
                <NavLink onClick={toggleClose} to="/admin-dashboard">Приборная панель</NavLink>
            </li>
            <li className="admin__toggle__menu">
                  <NavLink onClick={toggleClose} to="/admin/course-info">Информация о курсе</NavLink>
            </li>
            <li className="admin__toggle__menu">
                  <NavLink onClick={toggleClose} to="/admin/student-info">Информация о студенте</NavLink>
            </li>
            <li className="admin__toggle__menu">
                  <NavLink onClick={toggleClose} to="/admin/teacher-info">Информация об учителе</NavLink>
            </li>
            
            </>
            }
            {
              user.role==="Student" &&<><li>
                <NavLink onClick={toggleClose} to="/">Приборная панель</NavLink>
            </li>
            <li>
              <NavLink onClick={toggleClose} to="/ucam">UCAM</NavLink>
            </li>

            <li>
                  <NavLink onClick={toggleClose} to="/library">Библиотека</NavLink>
            </li> </> 
            }
            
            <li>
              <Link onClick={toggleClose} to="/profile">Профиль</Link>
            </li>
            <li>
              <NavLink onClick={toggleClose} to="/all-courses">Все курсы</NavLink>
            </li>

            {
              user.role==="Teacher" ?   <li className="">
              <Button
                onClick={() => {
                  localStorage.clear("user");
                  localStorage.clear("auth_token");
                  dispatch({ type: "CLEAR__USER" });
                  history.push("/login");
                }}
              >
                  Выход
              </Button>
            </li> :  <li className="logout__button">
              <Button
                onClick={() => {
                  localStorage.clear("user");
                  localStorage.clear("auth_token");
                  dispatch({ type: "CLEAR__USER" });
                  history.push("/login");
                }}
              >
                Logout
              </Button>
            </li>

            }
           
           

           
          </ul>
        )}
      </div>
      {user ? (
        <div className="right__header">
          <IconButton>
            <VisibilityOffIcon />
          </IconButton>
          <IconButton>
            <NotificationsActiveIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
          <Link to="/profile">
            <Avatar>P</Avatar>
          </Link>
        </div>
      ) : (
        <div className="d-flex list-unstyled">
          <li className="mr-3">
              <NavLink to="/Login">Вход</NavLink>
          </li>
          <li>
              <NavLink id="auth_button_login"
                type="primary" to="/Register">Регистрировать</NavLink>
          </li>
        </div>
      )}

      {user ? (
        <div className="menu__toggle__icon mr-auto">
          <IconButton onClick={() => setToggle(!toggle)}>
            {!toggle ? (
              <NotesIcon fontSize="large" />
            ) : (
              <ClearIcon fontSize="large" />
            )}
          </IconButton>
        </div>
      ) : null}
    </div>
  );
};

export default withRouter(Header);
