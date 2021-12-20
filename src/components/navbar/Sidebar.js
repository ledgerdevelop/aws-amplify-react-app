import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import { Auth } from "aws-amplify";
import { SidebarLabel, DropdownLink } from './SubMenu';

const Nav = styled.div`
  zIndex: 100;
  background: #ffffff;
  border-bottom-style: solid; 
  border-bottom-width: thin;
  // border-bottom-color: #1b72fe;
  border-bottom: 100%;
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: top;
  position: sticky;
  top: 0;
`;

const NavIcon = styled(Link)`
  margin-left: 1.3rem;
  margin-right: 1.3rem;
  height: 50px;
  font-size: 1.5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
`;

const SidebarNav = styled.nav`
  background: linear-gradient(270deg, #1F75FE, #014ecb);
  width: 190px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 400ms;
  z-index: 90;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = (props) => {

  const handleLogOut = () => {
    Auth.signOut();
    // LogOut User
    props.auth.setAuthStatus(false);
    props.auth.setUser(null);
  }

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#000000' }}>
        <Nav>
          <NavIcon to='#'>
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
          <NavIcon to='#'>
            <p className='logo'>Logo</p>
          </NavIcon>
          {/* ADD Login Logout on Main Navbar 
           {!props?.auth?.isAuthenticated && (
            <NavIcon to='/login'>
            <FaIcons.FaSignInAlt />
          </NavIcon>
          )}
          {props?.auth?.isAuthenticated && props?.auth?.user && (
            <NavIcon to='/home'>
              <FaIcons.FaSignOutAlt onClick={handleLogOut} />
            </NavIcon>
          )} */}
        </Nav>
      </IconContext.Provider> 
      <IconContext.Provider value={{ color: '#ffffff' }}> 
        <SidebarNav sidebar={sidebar} onClick={showSidebar}>
          <SidebarWrap>
            <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index}/>;
            })}
             {!props?.auth?.isAuthenticated && (   
            <DropdownLink to='/login'>
            <AiIcons.AiOutlineLogin />
            <SidebarLabel>Login</SidebarLabel>
          </DropdownLink>
          )}
          {props?.auth?.isAuthenticated && props?.auth?.user && (
            <DropdownLink to='/home' onClick={handleLogOut}>
            <AiIcons.AiOutlineLogout/>
            <SidebarLabel>Logout</SidebarLabel>
          </DropdownLink>
          )}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
