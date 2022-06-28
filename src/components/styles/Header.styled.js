import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  padding: 40px 0;
`;

export const Nav = styled.nav`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  margin-bottom: 50px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

export const Logo = styled.img`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 40px;
  }
`;

export const NavItems = styled.ul`
  list-style: none;
  width: 30%;
  height: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const NavItem = styled.li`
  display: flex;
  align-items: center;
  margin-right: 10px;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 375px;
  margin-left: 40px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 40px 0 30px;
  }
`;
