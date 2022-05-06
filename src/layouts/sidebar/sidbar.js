import React from "react";
import { Box } from '@material-ui/core';
import styled from "styled-components";
import IMG_Logo from "../../assets/images/logo.png";
import IMG_BASE from "../../assets/images/icons/alien-base.svg";
import IMG_ARCADO from "../../assets/images/icons/joystick 1.svg";
import IMG_SWAP from "../../assets/images/icons/align-swap.svg";
import IMG_ALIANCES from "../../assets/images/icons/alien-alleses.svg";
import IMG_MARKET from "../../assets/images/icons/glastic-market.svg";
import IMG_LUNCHPAD from "../../assets/images/icons/alien-lunchpad.svg";
import { FaTelegramPlane, FaTwitter, FaChartArea, FaBattleNet } from "react-icons/fa";


const Sidebar = () => {

    return (
        <StyledComponent>
            <IMGLOGO>
                <img src={IMG_Logo} width="100%" alt="" />
            </IMGLOGO>
            <Box display={"flex"} mt="30px" flexDirection={"column"} alignItems="center" width={"100%"}>
                <LinkIcon01>
                    <LeftText01 ml={"20px"}>
                        Alien Base
                    </LeftText01>
                    <Box display={"flex"} mr={"20px"}>
                        <img src={IMG_BASE} width={"25px"} height="25px" alt="" />
                    </Box>
                </LinkIcon01>
                <LinkIcon01>
                    <LeftText01 ml={"20px"}>
                        Alien Arcado
                    </LeftText01>
                    <Box display={"flex"} mr={"20px"}>
                        <img src={IMG_ARCADO} width={"25px"} height="25px" alt="" />
                    </Box>
                </LinkIcon01>
                <LinkIcon01>
                    <LeftText01 ml={"20px"}>
                        Alien Swap
                    </LeftText01>
                    <Box display={"flex"} mr={"20px"}>
                        <img src={IMG_SWAP} width={"25px"} height="25px" alt="" />
                    </Box>
                </LinkIcon01>
                <LinkIcon01>
                    <LeftText01 ml={"20px"}>
                        Alien Aliances
                    </LeftText01>
                    <Box display={"flex"} mr={"20px"}>
                        <img src={IMG_ALIANCES} width={"25px"} height="25px" alt="" />
                    </Box>
                </LinkIcon01>
                <LinkIcon01>
                    <LeftText01 ml={"20px"}>
                        Galatic Market
                    </LeftText01>
                    <Box display={"flex"} mr={"20px"}>
                        <img src={IMG_MARKET} width={"25px"} height="25px" alt="" />
                    </Box>
                </LinkIcon01>
                <LinkIcon01>
                    <LeftText01 ml={"20px"}>
                        Alien Lunchpad
                    </LeftText01>
                    <Box display={"flex"} mr={"20px"}>
                        <img src={IMG_LUNCHPAD} width={"25px"} height="25px" alt="" />
                    </Box>
                </LinkIcon01>
            </Box>
            <LinkBottom>
                <LinkIcon02>
                    <FaTelegramPlane />
                </LinkIcon02>
                <LinkIcon02>
                    <FaChartArea />
                </LinkIcon02>
                <LinkIcon02>
                    <FaTwitter />
                </LinkIcon02>
                <LinkIcon02>
                    <FaBattleNet />
                </LinkIcon02>
            </LinkBottom>
        </StyledComponent>
    );
}

const StyledComponent = styled(Box)`
    display: flex;
    z-index: 100;
    width: 320px;
    height: 100vh;
    flex-direction: column;
    background: #262525;
    align-items: center;
    box-shadow: 0px 4px 30px rgba(65, 245, 12, 0.2);
    position: fixed;
`
const IMGLOGO = styled(Box)`
    display: flex;
    height: 105px;
    width: 150px;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    &:hover{
        cursor: pointer;
    }

`

const LinkIcon01 = styled(Box)`
    display: flex;
    margin-top: 20px;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    height: 50px;
    border-radius: 30px;
    border: 1px solid #41F50C;
    background-color: #2F2F2F;
    &:hover{
        transition: 0.3s;
        background: #083204;
        cursor: pointer;
    }
`
const LeftText01 = styled(Box)`
    display: flex;
    color: white;
    font-family: 'NexaW01-Black', sans-serif;
    font-size:1rem;
    font-weight: 800;
`
const LinkBottom = styled(Box)`
    display: flex;
    position: absolute;
    width: 100%;
    bottom: 30px;
`
const LinkIcon02 = styled(Box)`
    display: flex;
    margin-left: auto;
    margin-right: auto;
    font-size: 1.2rem;
    color: #41F50C;
    &:hover{
        transition: .5s;
        cursor: pointer;
        color: white;
    }
`

export default Sidebar;
