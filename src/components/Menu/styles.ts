import styled from "styled-components";

export const Container = styled.div`
    position: sticky;
    top: 0;
    flex: 1;
    background-color: #202020;
    height: 100vh;
    color: #fff;
    font-size: 14px;
`;

export const Wrapper = styled.div`
    padding: 18px 26px;
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: bold;
    margin-bottom: 25px;
`;

export const Image = styled.img`
    height: 25px;
`;

export const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    padding: 7.5px 0px;
`;

export const Hr = styled.hr`
    margin: 15px 0px;
    border: 0.5px solid #373737;
`;

export const Login = styled.div``;

export const Button = styled.button`
    padding: 5px 15px;
    background-color: transparent;
    border: 1px solid #3ea6ff;
    color: #3ea6ff;
    border-radius: 3px;
    font-weight: 500;
    margin-top: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
`;