import styled from 'styled-components';

export const NavContainer = styled.header`
    display: flex;
`;

export const NavBarStyle = styled.div`
    color: #fff;
    position: fixed;
    box-shadow: 5px 0 5px -2px #888;
    min-height: 100vh;
    background-color: rgba(45,99,127,1);
`;

export const Sidebar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    min-height: 100vh;
    width: 3.5em;
    background-color: rgba(45,99,127,1);
    position: fixed;
    box-shadow: 5px 0 5px -2px #888;
`;

export const sidebarText = {
    transform: "rotate(-90deg)",
    color: "#fff",
    fontSize: "1.5em",
    textDecoration: "none",
    size: "30%",
    marginTop: "2em",
    marginBottom: "3em",
};
