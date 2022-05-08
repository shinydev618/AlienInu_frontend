import React from "react";
import { Box } from '@material-ui/core';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    let navigate = useNavigate();
    return (
        <StyledComponent>
            <Box display={"flex"} justifyContent="center" color={"black"} fontSize='1.5rem' fontWeight={"700"} mt="100px">
                Welcome To The Invasoin
            </Box>
            <Box display={"flex"} justifyContent="center" color={"black"} fontSize='1.2rem' fontWeight={"600"} mt="30px">
                It has just only begun.
            </Box>
            <Box display={"flex"} justifyContent="center" color={"black"} textAlign="center" fontSize='1.1rem' fontWeight={"500"} mt="30px" width={"60%"}>
                The information provided on this website does not constitute investment advice,
                financial advice, trading advice, or any other sort of advice and you should not
                treat any of the website's content as such does not recommend that any
                cryptocurrency should be bought, sold, or held by you. Do conduct your own
                due diligence and consult your financial advisor before making any investment
                decisions.
            </Box>
            <Box display={"flex"} mt="30px" justifyContent={"center"}>
                <ButtonHome onClick={() => {
                    navigate("/");
                    window.scrollTo(0, 0);
                }}>
                    HOME
                </ButtonHome>
                <ButtonConnect>
                    CONTACT
                </ButtonConnect>
            </Box>
            <Box display={"flex"} width="90%" marginTop={"100px"} fontSize="1rem" fontWeight={"600"} marginBottom={"50px"}>
                @ 2022, Alien Inu. All Rights Reserved.
            </Box>
            <PalyMusicBox></PalyMusicBox>
        </StyledComponent>
    );
}

const StyledComponent = styled(Box)`
    display: flex;
    width: 100%;
    background: #D3D0CD;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`
const ButtonHome = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 50px;
    background: #41952A;
    color: white;
    font-size: 16px;
    font-weight: 700;
    border: 2px solid black;
    border-radius: 10px;
    &:hover{
        transition: .3s;
        cursor: pointer;
        background:white ;
        color: black;
    }
`
const ButtonConnect = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
    width: 150px;
    height: 50px;
    background: white;
    color: black;
    font-size: 16px;
    font-weight: 700;
    border: 2px solid black;
    border-radius: 10px;
    &:hover{
        transition: .3s;
        cursor: pointer;
        background: #41952A;
        color: white;
    }
`
const PalyMusicBox = styled(Box)`
    display: flex;
    position: absolute;
    width: 230px;
    height: 50px;
    background-image: url("/images/player.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    bottom: 10px;
    right: 10px;
    &:hover{
        cursor: pointer;
    }
`


export default Footer;
