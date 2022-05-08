import { Box } from '@material-ui/core';
import styled from "styled-components";
import Topbar from "../topbar/topbar";
import Footer from '../footer/footer';
import IMG_CHARACTER01 from "../../assets/images/slider-1.png";
import IMG_SLIDE from "../../assets/images/Group 1368.png";
import { useNavigate } from "react-router-dom";
import IMG_CIRCLE from "../../assets/images/slider-2.png";

const GalaticMarket = () => {
    let navigate = useNavigate();

    return (
        <StyledComponent>
            <Topbar />
            <Box display={"flex"} width="90%" mt={"50px"} flexDirection="column">
                <LetterBox01>
                    Welcome to the Gallactic Market
                </LetterBox01>
                <LetterBox02>
                    Check our exclusive NFT Aliens Collection
                </LetterBox02>
                <CharacterBox01>
                    <BigImage01>
                        <ImageArea>
                        </ImageArea>
                    </BigImage01>
                    <SmallImage01>
                        <Box display={"flex"}>
                            <img src={IMG_CHARACTER01} style={{
                                borderRadius: "20px",
                            }} width="200px" height="200px" alt=""></img>
                        </Box>
                        <Box display={"flex"}>
                            <img src={IMG_CHARACTER01} style={{
                                borderRadius: "20px",
                            }} width="200px" height="200px" alt=""></img>
                        </Box>
                        <Box display={"flex"}>
                            <img src={IMG_CHARACTER01} style={{
                                borderRadius: "20px",
                            }} width="200px" height="200px" alt=""></img>
                        </Box>
                        <Box display={"flex"}>
                            <img src={IMG_CHARACTER01} style={{
                                borderRadius: "20px",
                            }} width="200px" height="200px" alt=""></img>
                        </Box>
                        <Box display={"flex"}>
                            <img src={IMG_CHARACTER01} style={{
                                borderRadius: "20px",
                            }} width="200px" height="200px" alt=""></img>
                        </Box>
                        <Box display={"flex"}>
                            <img src={IMG_CHARACTER01} style={{
                                borderRadius: "20px",
                            }} width="200px" height="200px" alt=""></img>
                        </Box>
                    </SmallImage01>
                </CharacterBox01>
                <LetterBox01>
                    Top 10 Alien Artists Collections
                </LetterBox01>
                <Artists01>
                    <ArtCollections01 display={"flex"} alignItems="center" justifyContent={"center"} onClick={() => {
                navigate("/art_collections");
                window.scrollTo(0, 0);
            }}>
                        <Box display={"flex"} color="white" fontSize="2rem" fontWeight={"700"}>
                            1
                        </Box>
                        <Box display={"flex"} borderRadius="100%" border="1px solid #41F50C" width={"40px"} height="40px" ml="30px">
                            <img src={IMG_CIRCLE} width="100%" height="100%" alt="" style={{
                                borderRadius:"100%"
                            }} />
                        </Box>
                        <CollectionLetter01 display={"flex"} ml="10px" flexDirection="column" color="white" fontSize="1rem" fontWeight={"600"}>
                            <Box display={"flex"}>ALIEN INVASION CLUB</Box>
                            <Box display={"flex"}>$7,659,944</Box>
                        </CollectionLetter01>
                    </ArtCollections01>
                    <ArtCollections01 display={"flex"} alignItems="center" justifyContent={"center"} onClick={() => {
                navigate("/art_collections");
                window.scrollTo(0, 0);
            }}>
                        <Box display={"flex"} color="white" fontSize="2rem" fontWeight={"700"}>
                            2
                        </Box>
                        <Box display={"flex"} borderRadius="100%" border="1px solid #41F50C" width={"40px"} height="40px" ml="30px">
                            <img src={IMG_CIRCLE} width="100%" height="100%" alt="" style={{
                                borderRadius:"100%"
                            }} />
                        </Box>
                        <CollectionLetter01 display={"flex"} ml="10px" flexDirection="column" color="white" fontSize="1rem" fontWeight={"600"}>
                            <Box display={"flex"}>ALIEN INVASION CLUB</Box>
                            <Box display={"flex"}>$7,659,944</Box>
                        </CollectionLetter01>
                    </ArtCollections01>
                    <ArtCollections01 display={"flex"} alignItems="center" justifyContent={"center"} onClick={() => {
                navigate("/art_collections");
                window.scrollTo(0, 0);
            }}>
                        <Box display={"flex"} color="white" fontSize="2rem" fontWeight={"700"}>
                            3
                        </Box>
                        <Box display={"flex"} borderRadius="100%" border="1px solid #41F50C" width={"40px"} height="40px" ml="30px">
                            <img src={IMG_CIRCLE} width="100%" height="100%" alt="" style={{
                                borderRadius:"100%"
                            }} />
                        </Box>
                        <CollectionLetter01 display={"flex"} ml="10px" flexDirection="column" color="white" fontSize="1rem" fontWeight={"600"}>
                            <Box display={"flex"}>ALIEN INVASION CLUB</Box>
                            <Box display={"flex"}>$7,659,944</Box>
                        </CollectionLetter01>
                    </ArtCollections01>
                    <ArtCollections01 display={"flex"} alignItems="center" justifyContent={"center"} onClick={() => {
                navigate("/art_collections");
                window.scrollTo(0, 0);
            }}>
                        <Box display={"flex"} color="white" fontSize="2rem" fontWeight={"700"}>
                            4
                        </Box>
                        <Box display={"flex"} borderRadius="100%" border="1px solid #41F50C" width={"40px"} height="40px" ml="30px">
                            <img src={IMG_CIRCLE} width="100%" height="100%" alt="" style={{
                                borderRadius:"100%"
                            }} />
                        </Box>
                        <CollectionLetter01 display={"flex"} ml="10px" flexDirection="column" color="white" fontSize="1rem" fontWeight={"600"}>
                            <Box display={"flex"}>ALIEN INVASION CLUB</Box>
                            <Box display={"flex"}>$7,659,944</Box>
                        </CollectionLetter01>
                    </ArtCollections01>
                    <ArtCollections01 display={"flex"} alignItems="center" justifyContent={"center"} onClick={() => {
                navigate("/art_collections");
                window.scrollTo(0, 0);
            }}>
                        <Box display={"flex"} color="white" fontSize="2rem" fontWeight={"700"}>
                            5
                        </Box>
                        <Box display={"flex"} borderRadius="100%" border="1px solid #41F50C" width={"40px"} height="40px" ml="30px">
                            <img src={IMG_CIRCLE} width="100%" height="100%" alt="" style={{
                                borderRadius:"100%"
                            }} />
                        </Box>
                        <CollectionLetter01 display={"flex"} ml="10px" flexDirection="column" color="white" fontSize="1rem" fontWeight={"600"}>
                            <Box display={"flex"}>ALIEN INVASION CLUB</Box>
                            <Box display={"flex"}>$7,659,944</Box>
                        </CollectionLetter01>
                    </ArtCollections01>
                    <ArtCollections01 display={"flex"} alignItems="center" justifyContent={"center"} onClick={() => {
                navigate("/art_collections");
                window.scrollTo(0, 0);
            }}>
                        <Box display={"flex"} color="white" fontSize="2rem" fontWeight={"700"}>
                            6
                        </Box>
                        <Box display={"flex"} borderRadius="100%" border="1px solid #41F50C" width={"40px"} height="40px" ml="30px">
                            <img src={IMG_CIRCLE} width="100%" height="100%" alt="" style={{
                                borderRadius:"100%"
                            }} />
                        </Box>
                        <CollectionLetter01 display={"flex"} ml="10px" flexDirection="column" color="white" fontSize="1rem" fontWeight={"600"}>
                            <Box display={"flex"}>ALIEN INVASION CLUB</Box>
                            <Box display={"flex"}>$7,659,944</Box>
                        </CollectionLetter01>
                    </ArtCollections01>
                    <ArtCollections01 display={"flex"} alignItems="center" justifyContent={"center"} onClick={() => {
                navigate("/art_collections");
                window.scrollTo(0, 0);
            }}>
                        <Box display={"flex"} color="white" fontSize="2rem" fontWeight={"700"}>
                            7
                        </Box>
                        <Box display={"flex"} borderRadius="100%" border="1px solid #41F50C" width={"40px"} height="40px" ml="30px">
                            <img src={IMG_CIRCLE} width="100%" height="100%" alt="" style={{
                                borderRadius:"100%"
                            }} />
                        </Box>
                        <CollectionLetter01 display={"flex"} ml="10px" flexDirection="column" color="white" fontSize="1rem" fontWeight={"600"}>
                            <Box display={"flex"}>ALIEN INVASION CLUB</Box>
                            <Box display={"flex"}>$7,659,944</Box>
                        </CollectionLetter01>
                    </ArtCollections01>
                    <ArtCollections01 display={"flex"} alignItems="center" justifyContent={"center"} onClick={() => {
                navigate("/art_collections");
                window.scrollTo(0, 0);
            }}>
                        <Box display={"flex"} color="white" fontSize="2rem" fontWeight={"700"}>
                            8
                        </Box>
                        <Box display={"flex"} borderRadius="100%" border="1px solid #41F50C" width={"40px"} height="40px" ml="30px">
                            <img src={IMG_CIRCLE} width="100%" height="100%" alt="" style={{
                                borderRadius:"100%"
                            }} />
                        </Box>
                        <CollectionLetter01 display={"flex"} ml="10px" flexDirection="column" color="white" fontSize="1rem" fontWeight={"600"}>
                            <Box display={"flex"}>ALIEN INVASION CLUB</Box>
                            <Box display={"flex"}>$7,659,944</Box>
                        </CollectionLetter01>
                    </ArtCollections01>
                    <ArtCollections01 display={"flex"} alignItems="center" justifyContent={"center"} onClick={() => {
                navigate("/art_collections");
                window.scrollTo(0, 0);
            }}>
                        <Box display={"flex"} color="white" fontSize="2rem" fontWeight={"700"}>
                            9
                        </Box>
                        <Box display={"flex"} borderRadius="100%" border="1px solid #41F50C" width={"40px"} height="40px" ml="30px">
                            <img src={IMG_CIRCLE} width="100%" height="100%" alt="" style={{
                                borderRadius:"100%"
                            }} />
                        </Box>
                        <CollectionLetter01 display={"flex"} ml="10px" flexDirection="column" color="white" fontSize="1rem" fontWeight={"600"}>
                            <Box display={"flex"}>ALIEN INVASION CLUB</Box>
                            <Box display={"flex"}>$7,659,944</Box>
                        </CollectionLetter01>
                    </ArtCollections01>
                    <ArtCollections01 display={"flex"} alignItems="center" justifyContent={"center"} onClick={() => {
                navigate("/art_collections");
                window.scrollTo(0, 0);
            }}>
                        <Box display={"flex"} color="white" fontSize="2rem" fontWeight={"700"}>
                            10
                        </Box>
                        <Box display={"flex"} borderRadius="100%" border="1px solid #41F50C" width={"40px"} height="40px" ml="30px">
                            <img src={IMG_CIRCLE} width="100%" height="100%" alt="" style={{
                                borderRadius:"100%"
                            }} />
                        </Box>
                        <CollectionLetter01 display={"flex"} ml="10px" flexDirection="column" color="white" fontSize="1rem" fontWeight={"600"}>
                            <Box display={"flex"}>ALIEN INVASION CLUB</Box>
                            <Box display={"flex"}>$7,659,944</Box>
                        </CollectionLetter01>
                    </ArtCollections01>
                    <ArtCollections01 display={"flex"} alignItems="center" justifyContent={"center"} onClick={() => {
                navigate("/art_collections");
                window.scrollTo(0, 0);
            }}>
                        <Box display={"flex"} color="white" fontSize="2rem" fontWeight={"700"}>
                            11
                        </Box>
                        <Box display={"flex"} borderRadius="100%" border="1px solid #41F50C" width={"40px"} height="40px" ml="30px">
                            <img src={IMG_CIRCLE} width="100%" height="100%" alt="" style={{
                                borderRadius:"100%"
                            }} />
                        </Box>
                        <CollectionLetter01 display={"flex"} ml="10px" flexDirection="column" color="white" fontSize="1rem" fontWeight={"600"}>
                            <Box display={"flex"}>ALIEN INVASION CLUB</Box>
                            <Box display={"flex"}>$7,659,944</Box>
                        </CollectionLetter01>
                    </ArtCollections01>
                    <ArtCollections01 display={"flex"} alignItems="center" justifyContent={"center"} onClick={() => {
                navigate("/art_collections");
                window.scrollTo(0, 0);
            }}>
                        <Box display={"flex"} color="white" fontSize="2rem" fontWeight={"700"}>
                            12
                        </Box>
                        <Box display={"flex"} borderRadius="100%" border="1px solid #41F50C" width={"40px"} height="40px" ml="30px">
                            <img src={IMG_CIRCLE} width="100%" height="100%" alt="" style={{
                                borderRadius:"100%"
                            }} />
                        </Box>
                        <CollectionLetter01 display={"flex"} ml="10px" flexDirection="column" color="white" fontSize="1rem" fontWeight={"600"}>
                            <Box display={"flex"}>ALIEN INVASION CLUB</Box>
                            <Box display={"flex"}>$7,659,944</Box>
                        </CollectionLetter01>
                    </ArtCollections01>
                </Artists01>
                <LetterBox01>
                    The hotest gems
                </LetterBox01>
                <SliderImageBox01>
                    <Box display="flex">
                        <img src={IMG_SLIDE} width="310px" height={"450px"} alt="" />
                    </Box>
                    <Box display="flex">
                        <img src={IMG_SLIDE} width="310px" height={"450px"} alt="" />
                    </Box>
                    <Box display="flex">
                        <img src={IMG_SLIDE} width="310px" height={"450px"} alt="" />
                    </Box>
                    <Box display="flex">
                        <img src={IMG_SLIDE} width="310px" height={"450px"} alt="" />
                    </Box>
                </SliderImageBox01>
                <LetterBox01>
                    Top Sellers
                </LetterBox01>
                <Artists01>
                    <Box display={"flex"} alignItems="center" justifyContent={"center"}>
                        <Box display={"flex"} color="white" fontSize="2rem" fontWeight={"700"}>
                            1
                        </Box>
                        <Box display={"flex"} borderRadius="100%" border="1px solid #41F50C" width={"40px"} height="40px" ml="30px">
                        </Box>
                        <Box display={"flex"} ml="10px" flexDirection="column" color="white" fontSize="1rem" fontWeight={"600"}>
                            <Box display={"flex"}>ALIEN INVASION CLUB</Box>
                            <Box display={"flex"}>$7,659,944</Box>
                        </Box>
                    </Box>
                    <Box display={"flex"} alignItems="center" justifyContent={"center"}>
                        <Box display={"flex"} color="white" fontSize="2rem" fontWeight={"700"}>
                            2
                        </Box>
                        <Box display={"flex"} borderRadius="100%" border="1px solid #41F50C" width={"40px"} height="40px" ml="30px">
                        </Box>
                        <Box display={"flex"} ml="10px" flexDirection="column" color="white" fontSize="1rem" fontWeight={"600"}>
                            <Box display={"flex"}>ALIEN INVASION CLUB</Box>
                            <Box display={"flex"}>$7,659,944</Box>
                        </Box>
                    </Box>
                    <Box display={"flex"} alignItems="center" justifyContent={"center"}>
                        <Box display={"flex"} color="white" fontSize="2rem" fontWeight={"700"}>
                            3
                        </Box>
                        <Box display={"flex"} borderRadius="100%" border="1px solid #41F50C" width={"40px"} height="40px" ml="30px">
                        </Box>
                        <Box display={"flex"} ml="10px" flexDirection="column" color="white" fontSize="1rem" fontWeight={"600"}>
                            <Box display={"flex"}>ALIEN INVASION CLUB</Box>
                            <Box display={"flex"}>$7,659,944</Box>
                        </Box>
                    </Box>
                    <Box display={"flex"} alignItems="center" justifyContent={"center"}>
                        <Box display={"flex"} color="white" fontSize="2rem" fontWeight={"700"}>
                            4
                        </Box>
                        <Box display={"flex"} borderRadius="100%" border="1px solid #41F50C" width={"40px"} height="40px" ml="30px">
                        </Box>
                        <Box display={"flex"} ml="10px" flexDirection="column" color="white" fontSize="1rem" fontWeight={"600"}>
                            <Box display={"flex"}>ALIEN INVASION CLUB</Box>
                            <Box display={"flex"}>$7,659,944</Box>
                        </Box>
                    </Box>
                    <Box display={"flex"} alignItems="center" justifyContent={"center"}>
                        <Box display={"flex"} color="white" fontSize="2rem" fontWeight={"700"}>
                            5
                        </Box>
                        <Box display={"flex"} borderRadius="100%" border="1px solid #41F50C" width={"40px"} height="40px" ml="30px">
                        </Box>
                        <Box display={"flex"} ml="10px" flexDirection="column" color="white" fontSize="1rem" fontWeight={"600"}>
                            <Box display={"flex"}>ALIEN INVASION CLUB</Box>
                            <Box display={"flex"}>$7,659,944</Box>
                        </Box>
                    </Box>
                    <Box display={"flex"} alignItems="center" justifyContent={"center"}>
                        <Box display={"flex"} color="white" fontSize="2rem" fontWeight={"700"}>
                            6
                        </Box>
                        <Box display={"flex"} borderRadius="100%" border="1px solid #41F50C" width={"40px"} height="40px" ml="30px">
                        </Box>
                        <Box display={"flex"} ml="10px" flexDirection="column" color="white" fontSize="1rem" fontWeight={"600"}>
                            <Box display={"flex"}>ALIEN INVASION CLUB</Box>
                            <Box display={"flex"}>$7,659,944</Box>
                        </Box>
                    </Box>
                    <Box display={"flex"} alignItems="center" justifyContent={"center"}>
                        <Box display={"flex"} color="white" fontSize="2rem" fontWeight={"700"}>
                            7
                        </Box>
                        <Box display={"flex"} borderRadius="100%" border="1px solid #41F50C" width={"40px"} height="40px" ml="30px">
                        </Box>
                        <Box display={"flex"} ml="10px" flexDirection="column" color="white" fontSize="1rem" fontWeight={"600"}>
                            <Box display={"flex"}>ALIEN INVASION CLUB</Box>
                            <Box display={"flex"}>$7,659,944</Box>
                        </Box>
                    </Box>
                    <Box display={"flex"} alignItems="center" justifyContent={"center"}>
                        <Box display={"flex"} color="white" fontSize="2rem" fontWeight={"700"}>
                            8
                        </Box>
                        <Box display={"flex"} borderRadius="100%" border="1px solid #41F50C" width={"40px"} height="40px" ml="30px">
                        </Box>
                        <Box display={"flex"} ml="10px" flexDirection="column" color="white" fontSize="1rem" fontWeight={"600"}>
                            <Box display={"flex"}>ALIEN INVASION CLUB</Box>
                            <Box display={"flex"}>$7,659,944</Box>
                        </Box>
                    </Box>
                    <Box display={"flex"} alignItems="center" justifyContent={"center"}>
                        <Box display={"flex"} color="white" fontSize="2rem" fontWeight={"700"}>
                            9
                        </Box>
                        <Box display={"flex"} borderRadius="100%" border="1px solid #41F50C" width={"40px"} height="40px" ml="30px">
                        </Box>
                        <Box display={"flex"} ml="10px" flexDirection="column" color="white" fontSize="1rem" fontWeight={"600"}>
                            <Box display={"flex"}>ALIEN INVASION CLUB</Box>
                            <Box display={"flex"}>$7,659,944</Box>
                        </Box>
                    </Box>
                    <Box display={"flex"} alignItems="center" justifyContent={"center"}>
                        <Box display={"flex"} color="white" fontSize="2rem" fontWeight={"700"}>
                            10
                        </Box>
                        <Box display={"flex"} borderRadius="100%" border="1px solid #41F50C" width={"40px"} height="40px" ml="30px">
                        </Box>
                        <Box display={"flex"} ml="10px" flexDirection="column" color="white" fontSize="1rem" fontWeight={"600"}>
                            <Box display={"flex"}>ALIEN INVASION CLUB</Box>
                            <Box display={"flex"}>$7,659,944</Box>
                        </Box>
                    </Box>
                    <Box display={"flex"} alignItems="center" justifyContent={"center"}>
                        <Box display={"flex"} color="white" fontSize="2rem" fontWeight={"700"}>
                            11
                        </Box>
                        <Box display={"flex"} borderRadius="100%" border="1px solid #41F50C" width={"40px"} height="40px" ml="30px">
                        </Box>
                        <Box display={"flex"} ml="10px" flexDirection="column" color="white" fontSize="1rem" fontWeight={"600"}>
                            <Box display={"flex"}>ALIEN INVASION CLUB</Box>
                            <Box display={"flex"}>$7,659,944</Box>
                        </Box>
                    </Box>
                    <Box display={"flex"} alignItems="center" justifyContent={"center"}>
                        <Box display={"flex"} color="white" fontSize="2rem" fontWeight={"700"}>
                            12
                        </Box>
                        <Box display={"flex"} borderRadius="100%" border="1px solid #41F50C" width={"40px"} height="40px" ml="30px">
                        </Box>
                        <Box display={"flex"} ml="10px" flexDirection="column" color="white" fontSize="1rem" fontWeight={"600"}>
                            <Box display={"flex"}>ALIEN INVASION CLUB</Box>
                            <Box display={"flex"}>$7,659,944</Box>
                        </Box>
                    </Box>
                </Artists01>
                <LetterBox01>
                    Live bids
                </LetterBox01>
                <SliderImageBox01>
                    <Box display="flex">
                        <img src={IMG_SLIDE} width="310px" height={"450px"} alt="" />
                    </Box>
                    <Box display="flex">
                        <img src={IMG_SLIDE} width="310px" height={"450px"} alt="" />
                    </Box>
                    <Box display="flex">
                        <img src={IMG_SLIDE} width="310px" height={"450px"} alt="" />
                    </Box>
                    <Box display="flex">
                        <img src={IMG_SLIDE} width="310px" height={"450px"} alt="" />
                    </Box>
                </SliderImageBox01>
                <LetterBox01>
                    Explore
                </LetterBox01>
                <SliderImageBox01 mb="100px">
                    <Box display="flex">
                        <img src={IMG_SLIDE} width="310px" height={"450px"} alt="" />
                    </Box>
                    <Box display="flex">
                        <img src={IMG_SLIDE} width="310px" height={"450px"} alt="" />
                    </Box>
                    <Box display="flex">
                        <img src={IMG_SLIDE} width="310px" height={"450px"} alt="" />
                    </Box>
                    <Box display="flex">
                        <img src={IMG_SLIDE} width="310px" height={"450px"} alt="" />
                    </Box>
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

const LetterBox01 = styled(Box)`
    display: flex;
    width: 100%;
    margin-top: 50px;
    font-family: 'NexaW01-Black';
    font-style: normal;
    font-weight: 600;
    font-size: 2rem;
    line-height: 27px;
    color: #FFFFFF;
`
const LetterBox02 = styled(Box)`
    display: flex;
    width: 100%;
    margin-top: 10px;
    font-family: 'NexaW01-Black';
    font-style: normal;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 27px;
    color: #FFFFFF;
`
const CharacterBox01 = styled(Box)`
    display: flex;
    width: 100%;
    height: 440px;
    margin-top: 20px;
`
const BigImage01 = styled(Box)`
    display: flex;
    flex: 1;
    justify-content: flex-start;
    align-items: center;

`
const SmallImage01 = styled(Box)`
    display: grid;
    flex: 1.5;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto auto;   
`

const ImageArea = styled(Box)`
    background: linear-gradient(88.2deg, rgba(196, 196, 196, 0.1) 4.02%, rgba(101, 207, 122, 0.025) 99.99%, rgba(101, 207, 122, 0.1) 100%);    
    border: 1px solid #41F50C;
    box-shadow: 5px 5px 10px rgba(101, 207, 122, 0.3);
    border-radius: 20px;
    height: 440px;
    width: 440px;
`
const Artists01 = styled(Box)`
    display: grid;
    margin-top:30px;
    grid-template-columns: auto auto auto auto;
    grid-template-rows: auto auto auto;   
    grid-row-gap: 20px;
`
const SliderImageBox01 = styled(Box)`
    display: flex;
    /* width: 100%; */
    width: 100%;
    margin-top: 30px;
    justify-content: space-between;
`
const ArtCollections01 = styled(Box)`
    &:hover{
        cursor: pointer;
    }
`
const CollectionLetter01 =styled(Box)`
    display: flex;
    margin-left: 10px;
    flex-direction: column;
    color: white;
    font-size: 1rem;
    font-weight: 600;
    &:hover{
        transition: .5s;
        cursor: pointer;
        color: #41F50C;
    }
`

export default GalaticMarket;
