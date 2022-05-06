import React from "react";
import { Box } from '@material-ui/core';
import styled from "styled-components";
import { MdOutlineSettings } from "react-icons/md";
import { FaWallet, FaCaretDown } from "react-icons/fa";

const Topbar = () => {

    return (
        <StyledComponent>
            <Box display={"flex"} justifyContent="flex-end" width={"90%"}>
                <Link01>Link01</Link01>
                <Link01>Link02</Link01>
                <Link01>Link03</Link01>
                <Link01>Link04</Link01>
                <Link01>Link05</Link01>
                <BTNNETWORK>
                    <Box display={"flex"} ml={"auto"} mr={"auto"}>
                        <FaWallet />
                    </Box>
                    <Box display={"flex"} ml={"auto"} mr={"auto"}>
                        Ethereum
                    </Box>
                    <Box display={"flex"} ml={"auto"} mr={"auto"}>
                        <FaCaretDown />
                    </Box>
                </BTNNETWORK>
                <BTNCONNECT>
                    <Box display={"flex"} ml={"auto"} mr={"auto"}>
                        <FaWallet />
                    </Box>
                    <Box display={"flex"} ml={"auto"} mr={"auto"}>
                        Connect Wallet
                    </Box>
                </BTNCONNECT>
                <BTNSETTING><MdOutlineSettings /></BTNSETTING>
            </Box>

        </StyledComponent>
    );
}

const StyledComponent = styled(Box)`
    display: flex;
    width: 100%;
    height: 80px;
    background: #121010;
    justify-content: center;
    align-items: center;
`
const BTNNETWORK = styled(Box)`
    display: flex;
    align-items: center;   
    width: 170px;
    height: 35px;
    border-radius: 8px;
    border: 1px solid ;
    color: white;
    background: linear-gradient(90deg, #41F50C -2.65%, rgba(127, 249, 0, 0.44) 97.34%);
    font-family: 'Myriad Pro';
    border: 1px solid #41F50C;
    margin-right: 30px;
    font-weight: 600;
    font-size: 1.2rem;
    &:hover{
        transition: .3s;
        cursor: pointer;
        background: #083204;
    }
`
const BTNCONNECT = styled(Box)`
    display: flex;
    align-items: center;
    width: 170px;
    height: 35px;
    color: #41F50C;
    background: black;
    border-radius: 8px;
    border: 1px solid #41F50C;
    font-family: 'Myriad Pro', sans-serif;
    margin-right: 20px;
    font-weight: 600;
    font-size: 1.2rem;
    &:hover{
        transition: .3s;
        cursor: pointer;

        background: #083204;
        cursor: pointer;
    }
`
const BTNSETTING = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #41F50C;
    font-size: 2rem;
    &:hover{
        transition: .3s;
        cursor: pointer;
        color: white;
    }
`
const Link01 = styled(Box)`
    display: flex;
    align-items: center;
    font-family: 'Myriad Pro', sans-serif;
    margin-right: 50px;
    font-weight: 600;
    font-size: 1.2rem;
    color: white;
    &:hover{
        transition: .3s;
        cursor: pointer;
        color: #41F50C;
    }
`


export default Topbar;
