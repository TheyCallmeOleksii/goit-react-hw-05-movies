import { NavLink, Outlet } from 'react-router-dom';
import { StyledDNav, StyledLink, StyledLogo } from './Layout.styled';
import Logo_SVG from 'components/Layout/Logo';

const Layout = () => {
  return (
    <div>
      <NavLink to="/">
        <StyledLogo src={Logo_SVG} alt="Netflix" />
      </NavLink>
      <StyledDNav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </StyledDNav>
      <Outlet />
    </div>
  );
};
export default Layout;
