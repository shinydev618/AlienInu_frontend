import { Box } from '@material-ui/core';
import styled from "styled-components";
import Topbar from "../topbar/topbar";
import Footer from '../footer/footer';
import IMG_SLIDE from "../../assets/images/Group 1361.png";
import { useNavigate } from "react-router-dom";
import IMG_ART02 from "../../assets/images/allien-inu.png"


const ArtCollections = () => {
    let navigate = useNavigate();
    return (
        <StyledComponent>
            <Topbar />
            <Box display={"flex"} width="90%" mt={"50px"} flexDirection="column">
                <TopBox01 >
                    <Box display={"flex"} position="absolute" left="calc(50% - 100px)" bottom="-100px">
                        <img src={IMG_ART02} width="200px" height="200px" alt="" />

                    </Box>
                </TopBox01>
                <Box display={"flex"} width="100%" mt="200px" justifyContent={"center"} color="white" fontWeight={"700"} fontSize="2rem">
                    Alien Art Collections
                </Box>
                <Box display={"flex"} width="100%" mt="30px" justifyContent={"center"} color="white" fontWeight={"500"} fontSize="1.5rem">
                    Check our exclusive NFT Aliens Collection
                </Box>
                <Box display="flex" mt="50px" width="100%" justifyContent={"center"}>
                    <CustomButton01>
                        <Box display={"flex"} mt="auto" mb="auto">1001 ETH</Box>
                        <Box display={"flex"} mt="auto" mb="auto">Items</Box>
                    </CustomButton01>
                    <CustomButton01>
                        <Box display={"flex"} mt="auto" mb="auto">1001 ETH</Box>
                        <Box display={"flex"} mt="auto" mb="auto">Items</Box>
                    </CustomButton01>
                    <CustomButton01>
                        <Box display={"flex"} mt="auto" mb="auto">1001 ETH</Box>
                        <Box display={"flex"} mt="auto" mb="auto">Items</Box>
                    </CustomButton01>
                    <CustomButton01>
                        <Box display={"flex"} mt="auto" mb="auto">1001 ETH</Box>
                        <Box display={"flex"} mt="auto" mb="auto">Items</Box>
                    </CustomButton01>

                </Box>
                <SliderImageBox01>
                    <SlideImageBox display="flex" onClick={() => {
                        navigate("/art_details");
                        window.scrollTo(0, 0);
                    }}>
                        <img src={IMG_SLIDE} width="310px" height={"450px"} alt="" />
                    </SlideImageBox>
                    <SlideImageBox display="flex" onClick={() => {
                        navigate("/art_details");
                        window.scrollTo(0, 0);
                    }}>
                        <img src={IMG_SLIDE} width="310px" height={"450px"} alt="" />
                    </SlideImageBox>
                    <SlideImageBox display="flex" onClick={() => {
                        navigate("/art_details");
                        window.scrollTo(0, 0);
                    }}>
                        <img src={IMG_SLIDE} width="310px" height={"450px"} alt="" />
                    </SlideImageBox>
                    <SlideImageBox display="flex" onClick={() => {
                        navigate("/art_details");
                        window.scrollTo(0, 0);
                    }}>
                        <img src={IMG_SLIDE} width="310px" height={"450px"} alt="" />
                    </SlideImageBox>
                </SliderImageBox01>
                <SliderImageBox01>
                    <SlideImageBox display="flex" onClick={() => {
                        navigate("/art_details");
                        window.scrollTo(0, 0);
                    }}>
                        <img src={IMG_SLIDE} width="310px" height={"450px"} alt="" />
                    </SlideImageBox>
                    <SlideImageBox display="flex" onClick={() => {
                        navigate("/art_details");
                        window.scrollTo(0, 0);
                    }}>
                        <img src={IMG_SLIDE} width="310px" height={"450px"} alt="" />
                    </SlideImageBox>
                    <SlideImageBox display="flex" onClick={() => {
                        navigate("/art_details");
                        window.scrollTo(0, 0);
                    }}>
                        <img src={IMG_SLIDE} width="310px" height={"450px"} alt="" />
                    </SlideImageBox>
                    <SlideImageBox display="flex" onClick={() => {
                        navigate("/art_details");
                        window.scrollTo(0, 0);
                    }}>
                        <img src={IMG_SLIDE} width="310px" height={"450px"} alt="" />
                    </SlideImageBox>
                </SliderImageBox01>
                <SliderImageBox01 mb="100px">
                    <SlideImageBox display="flex" onClick={() => {
                        navigate("/art_details");
                        window.scrollTo(0, 0);
                    }}>
                        <img src={IMG_SLIDE} width="310px" height={"450px"} alt="" />
                    </SlideImageBox>
                    <SlideImageBox display="flex" onClick={() => {
                        navigate("/art_details");
                        window.scrollTo(0, 0);
                    }}>
                        <img src={IMG_SLIDE} width="310px" height={"450px"} alt="" />
                    </SlideImageBox>
                    <SlideImageBox display="flex" onClick={() => {
                        navigate("/art_details");
                        window.scrollTo(0, 0);
                    }}>
                        <img src={IMG_SLIDE} width="310px" height={"450px"} alt="" />
                    </SlideImageBox>
                    <SlideImageBox display="flex" onClick={() => {
                        navigate("/art_details");
                        window.scrollTo(0, 0);
                    }}>
                        <img src={IMG_SLIDE} width="310px" height={"450px"} alt="" />
                    </SlideImageBox>
                </SliderImageBox01>

            </Box>
            <Footer />
        </StyledComponent >
    );
}

const StyledComponent = styled(Box)`
    display: flex;
    width: 100%;
    background: #121010;
    flex-direction: column;
    align-items: center;
    margin-left: 320px;
`

const SliderImageBox01 = styled(Box)`
    display: flex;
    /* width: 100%; */
    width: 100%;
    margin-top: 150px;
    justify-content: space-between;
`
const TopBox01 = styled(Box)`
    display: flex;
    width: 100%;
    margin-top: 50px;
    height: 680px;
    position: relative;
    background-image: url("images/art01.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 20px;
    box-shadow: 5px 5px 10px rgba(101, 207, 122, 0.3);
`
const CustomButton01 = styled(Box)`
    display: flex;
    width: 150px;
    height:50px;
    flex-direction: column;
    align-items: center;
    color: white;
    font-weight: 600;
    font-size: 1rem;
    background: linear-gradient(88.2deg, rgba(196, 196, 196, 0.1) 4.02%, rgba(101, 207, 122, 0.025) 99.99%, rgba(101, 207, 122, 0.1) 100%);    
    border: 1px solid #41F50C;
    border-radius: 20px;
    margin-left: 10px;
    margin-right: 10px;
    &:hover{
        transition: .3s;
        cursor: pointer;
        background: #083204;
    }
`
const SlideImageBox = styled(Box)`
    &:hover{
        cursor:pointer;
        >img{
            width:320px;
            height: 460px;
        }
    }
`

export default ArtCollections;
