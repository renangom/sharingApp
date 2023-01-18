import styled from "styled-components";

export const Container = styled.div`
    position: sticky;
    top: 0;
    flex: 1.5;
    background-color: ${({theme}) => theme.bg};
    height: 100vh;
    color: ${({theme}) => theme.text};
    font-size: 14px;

    &:hover{
        overflow: scroll;
        &::-webkit-scrollbar {
            width: 9px;
            margin: 10px;
        }

        &::-webkit-scrollbar-thumb {
            background-color: #606060;
            border-radius: 20px;
        }
    }
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
    border: 0.01rem solid ${({theme}) => theme.soft};
`;

export const Login = styled.div``;

export const Button = styled.button`
    padding: 5px 15px;
    background-color: transparent;

    border: 1px solid rgba(255,255,255,0.2);
    color: #3ea6ff;
    border-radius: 18px;
    font-weight: 500;
    margin-top: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
`;