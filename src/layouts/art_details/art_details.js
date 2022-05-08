import { Box } from '@material-ui/core';
import styled from "styled-components";
import Topbar from "../topbar/topbar";
import Footer from '../footer/footer';
import IMG_SLIDE from "../../assets/images/Group 1361.png";
import { useNavigate } from "react-router-dom";
import IMG_DETAIL01 from "../../assets/images/slider-1.png"
import { IoIosBonfire } from "react-icons/io"
import CustomBtn from '../../components/CustomBtn';
import { MdRefresh, MdOutlineShare, MdSystemUpdateAlt } from "react-icons/md";
import IMG_ETH from "../../assets/images/icons/ETH_ICON01.png"

const ArtDetails = () => {
    let navigate = useNavigate();
    return (
        <StyledComponent>
            <Topbar />
            <Box display={"flex"} width="90%" mt={"50px"} >
                <LeftPart01 mr="50px">
                    <Box display={"flex"} width="440px" height={"440px"} border="1px solid black" borderRadius={"20px"}>
                        <img src={IMG_DETAIL01} width="100%" alt='' style={{
                            borderRadius: '20px'
                        }} />
                    </Box>
                    <Box display={"flex"} fontSize="1.1rem" fontWeight={"600"} mt="30px">Sale ends January 12, 2022 at 6:19pm WET </Box>
                    <Box display={"flex"} fontSize="1rem" fontWeight={"500"} mt="30px">14 hours 13 minutes 45 seconds </Box>
                    <TimeBox01>
                        <Box display={"flex"} alignItems="center" ml={"auto"} mr="auto">
                            <IoIosBonfire color='#FACB00' fontSize={"1.2rem"} />
                        </Box>
                        <Box display={"flex"} alignItems="center" ml={"auto"} mr="auto" fontWeight={"700"}>1:45:35</Box>
                    </TimeBox01>
                    <Box display={"flex"} mt="30px">
                        <CustomBtn width={"215px"} height="50px" str="Make an offer" fsize={"1.2rem"} fcolor={"black"} bgcolor="#41F50C" bradius={"10px"} fweight="600" hcolor={"white"} hgcolor={"#59A907"}></CustomBtn>
                    </Box>
                </LeftPart01>
                <LeftPart01 >
                    <Box display={"flex"} >
                        <Box display={"flex"} flex="1" >
                            <Box display={"flex"} mr="30px" color={"white"} fontSize="2rem">
                                <MdRefresh />
                            </Box>
                            <Box display={"flex"} mr="30px" color={"white"} fontSize="2rem">
                                <MdSystemUpdateAlt />
                            </Box>
                            <Box display={"flex"} mr="30px" color={"white"} fontSize="2rem">
                                <MdOutlineShare />
                            </Box>
                        </Box>
                        <Box display={"flex"} flex="1" >
                            <Box display={"flex"} alignItems="center">
                                <img src={IMG_ETH} width="35px" height={"60px"} alt="" />
                            </Box>
                            <Box display={"flex"} flexDirection="column" fontSize="1.5rem" fontWeight={"700"} ml="30px">
                                <Box display={"flex"} flex="1" alignItems={"flex-start"} fontWeight={"400"}>Current Price</Box>
                                <Box display={"flex"} flex="1" alignItems={"flex-end"}>96 ETH{'\u00a0'}{'\u00a0'}{'\u00a0'}{'\u00a0'}{'\u00a0'}$310,863.72</Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box display={"flex"} mt="30px" >
                        <Box display={"flex"} flex="1" >
                            <Box display={"flex"} flexDirection="column" fontSize="1.5rem" fontWeight={"700"} >
                                <Box display={"flex"} flex="1" alignItems={"flex-start"} fontWeight={"700"}>Collection title</Box>
                                <Box display="flex" flex="1" fontSize={"1.3rem"} fontWeight={"400"} mt="20px">Created by<Box display={"flex"} color="#41F50C">{"\u00a0"}Username</Box></Box>
                            </Box>
                        </Box>
                        <Box display={"flex"} flex="1" alignItems={"center"}>
                            <CustomBtn width={"215px"} height="60px" str="Buy Now" fsize={"1.2rem"} fcolor={"black"} bgcolor="#41F50C" bradius={"10px"} fweight="600" hcolor={"white"} hgcolor={"#59A907"}></CustomBtn>

                        </Box>
                    </Box>
                    <Box display={"flex"} fontSize="2rem" fontWeight={"700"} mt="30px" alignItems={"center"}>
                        <Box display="flex" flex="1">Artwork Title</Box>
                        <Box display="flex" flex="1" fontSize={"1.3rem"} fontWeight={"400"}>Owned by<Box display={"flex"} color="#41F50C">{"\u00a0"}Username</Box></Box>
                    </Box>
                    <Box display={"flex"} fontSize="1.5rem" fontWeight={"700"} mt="30px">Description</Box>
                    <Box display={"flex"} fontSize="1.2rem" fontWeight={"400"} mt="30px">
                        Meet the star of our galaxy. Alien Inu is there to take over whatever area he lands in. He's a fun-loving alien with bright, fun colors that are sure to command attention. He can also connect to other Brio wooden railway systems, as well as vehicles with the power of magnets through is mind!
                    </Box>
                    <Box display={"flex"} fontSize="1.5rem" fontWeight={"700"} mt="30px">Number of atributes 5</Box>
                    <Box display="flex" mt="50px" width="100%">
                        <CustomButton01>
                            <Box display={"flex"} mt="auto" mb="auto">Aantenna</Box>
                        </CustomButton01>
                        <CustomButton01>
                            <Box display={"flex"} mt="auto" mb="auto">Eyes</Box>
                        </CustomButton01>
                        <CustomButton01>
                            <Box display={"flex"} mt="auto" mb="auto">Hands</Box>
                        </CustomButton01>
                    </Box>
                    <Box display="flex" mt="30px" width="100%">
                        <CustomButton01>
                            <Box display={"flex"} mt="auto" mb="auto">Body</Box>
                        </CustomButton01>
                        <CustomButton01>
                            <Box display={"flex"} mt="auto" mb="auto">Background</Box>
                        </CustomButton01>
                        <CustomButton01>
                            <Box display={"flex"} mt="auto" mb="auto">Noise</Box>
                        </CustomButton01>
                    </Box>
                    <Box display={"flex"} fontSize="1.5rem" fontWeight={"700"} mt="30px">Collection Details</Box>
                    <Box display={"grid"} fontSize="1.3rem" fontWeight={"400"} mt="30px" gridTemplateColumns={"auto auto auto auto"} gridTemplateRows="auto auto" gridRowGap={"10px"}>
                        <Box display={"flex"}>TOKEN STARE</Box>
                        <Box display={"flex"}>Blockchain</Box>
                        <Box display={"flex"}>Contract Address</Box>
                        <Box display={"flex"}>Token ID</Box>
                        <Box display={"flex"}>ERC20</Box>
                        <Box display={"flex"}>Ethereum</Box>
                        <Box display={"flex"}>0x6042...163e</Box>
                        <Box display={"flex"}>154</Box>
                    </Box>
                    <Box display="flex" mt="50px" width="100%" justifyContent={"space-between"}>
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
                </LeftPart01>
            </Box>

            <Box display={"flex"} width="90%" mt={"50px"} flexDirection="column">
                <Box display={"flex"} fontSize="2rem" fontWeight={"700"} mt="30px" color={"white"} >More Alien Art Collections</Box>
                <SliderImageBox01>
                    <SlideImageBox display="flex" onClick={() => {
                        navigate("/collection_detail");
                        window.scrollTo(0, 0);
                    }}>
                        <img src={IMG_SLIDE} width="310px" height={"450px"} alt="" />
                    </SlideImageBox>
                    <SlideImageBox display="flex" onClick={() => {
                        navigate("/collection_detail");
                        window.scrollTo(0, 0);
                    }}>
                        <img src={IMG_SLIDE} width="310px" height={"450px"} alt="" />
                    </SlideImageBox>
                    <SlideImageBox display="flex" onClick={() => {
                        navigate("/collection_detail");
                        window.scrollTo(0, 0);
                    }}>
                        <img src={IMG_SLIDE} width="310px" height={"450px"} alt="" />
                    </SlideImageBox>
                    <SlideImageBox display="flex" onClick={() => {
                        navigate("/collection_detail");
                        window.scrollTo(0, 0);
                    }}>
                        <img src={IMG_SLIDE} width="310px" height={"450px"} alt="" />
                    </SlideImageBox>
                </SliderImageBox01>
                <SliderImageBox01>
                    <SlideImageBox display="flex" onClick={() => {
                        navigate("/collection_detail");
                        window.scrollTo(0, 0);
                    }}>
                        <img src={IMG_SLIDE} width="310px" height={"450px"} alt="" />
                    </SlideImageBox>
                    <SlideImageBox display="flex" onClick={() => {
                        navigate("/collection_detail");
                        window.scrollTo(0, 0);
                    }}>
                        <img src={IMG_SLIDE} width="310px" height={"450px"} alt="" />
                    </SlideImageBox>
                    <SlideImageBox display="flex" onClick={() => {
                        navigate("/collection_detail");
                        window.scrollTo(0, 0);
                    }}>
                        <img src={IMG_SLIDE} width="310px" height={"450px"} alt="" />
                    </SlideImageBox>
                    <SlideImageBox display="flex" onClick={() => {
                        navigate("/collection_detail");
                        window.scrollTo(0, 0);
                    }}>
                        <img src={IMG_SLIDE} width="310px" height={"450px"} alt="" />
                    </SlideImageBox>
                </SliderImageBox01>
                <SliderImageBox01 mb="100px">
                    <SlideImageBox display="flex" onClick={() => {
                        navigate("/collection_detail");
                        window.scrollTo(0, 0);
                    }}>
                        <img src={IMG_SLIDE} width="310px" height={"450px"} alt="" />
                    </SlideImageBox>
                    <SlideImageBox display="flex" onClick={() => {
                        navigate("/collection_detail");
                        window.scrollTo(0, 0);
                    }}>
                        <img src={IMG_SLIDE} width="310px" height={"450px"} alt="" />
                    </SlideImageBox>
                    <SlideImageBox display="flex" onClick={() => {
                        navigate("/collection_detail");
                        window.scrollTo(0, 0);
                    }}>
                        <img src={IMG_SLIDE} width="310px" height={"450px"} alt="" />
                    </SlideImageBox>
                    <SlideImageBox display="flex" onClick={() => {
                        navigate("/collection_detail");
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
    margin-top: 50px;
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
const LeftPart01 = styled(Box)`
    display: flex;
    flex-direction: column;
    color: white;
`
const TimeBox01 = styled(Box)`
    display: flex;
    width: 110px;
    height: 30px;
    margin-top: 30px;
    justify-content: center;
    align-items: center;
    border: 2px solid black;
    border-radius: 8px;
    box-shadow: 5px 5px 10px rgba(101, 207, 122, 0.3);
`

export default ArtDetails;
