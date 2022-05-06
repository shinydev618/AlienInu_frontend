import { Box } from '@material-ui/core';
import styled from "styled-components";
import Topbar from "../topbar/topbar";
import { CgEditBlackPoint } from "react-icons/cg"
// import CustomBtn from '../../components/CustomBtn';
// import CustomInput from "../../components/CustomInput";
import IMG_RANK01 from "../../assets/images/trans1.png";
import IMG_RANK02 from "../../assets/images/trans2.png";
import IMG_RANK03 from "../../assets/images/trans3.png";
import IMG_RANK04 from "../../assets/images/trans4.png";
import IMG_RANK05 from "../../assets/images/trans5.png";
import IMG_RANK06 from "../../assets/images/trans6.png";
import IMG_RANK07 from "../../assets/images/trans7.png";
import IMG_RANK08 from "../../assets/images/trans8.png";
import IMG_RANK09 from "../../assets/images/trans9.png";
import IMG_RANK10 from "../../assets/images/trans10.png";
import IMG_RANK11 from "../../assets/images/trans11.png";
import IMG_RANK12 from "../../assets/images/trans12.png";
import IMG_GRAPH01 from "../../assets/images/graph01.png";
import IMG_HOLDER01 from "../../assets/images/icons/holders.svg";
import IMG_BALANCE from "../../assets/images/icons/balance.svg";
import IMG_TOTALVALUE from "../../assets/images/icons/total-value.svg";
import IMG_BURNT from "../../assets/images/icons/burnt.svg";
import IMG_MARKETCAP from "../../assets/images/icons/market-cap.svg";
import IMG_PRICEETH from "../../assets/images/icons/price-eth.png";
import IMG_TWEETS01 from "../../assets/images/tweets01.png"
import IMG_VAULT01 from "../../assets/images/icons/alincoinvault.svg"
import IMG_MYSTERYBOX01 from "../../assets/images/icons/mystery-box.svg"
import IMG_CEHCK01 from "../../assets/images/daily-missions/icon-status-check.svg"
import IMG_DEXTOOLS01 from "../../assets/images/daily-missions/icon-dextools.svg"
import IMG_COINMARKET01 from "../../assets/images/daily-missions/coinmarketcap.svg"
import IMG_COINGECKO1 from "../../assets/images/daily-missions/icon-coingecko.svg"
import IMG_PlayVideo from "../../assets/images/playvideo.png";
import IMG_ARCADO from "../../assets/images/icons/joystick 1.svg";
import IMG_GAME01 from "../../assets/images/game1.png";
import IMG_GAME02 from "../../assets/images/game2.png";
import IMG_GAME03 from "../../assets/images/game3.png";
import Footer from '../footer/footer';

const Content = () => {

    return (
        <StyledComponent>
            <Topbar />
            <Box display={"flex"} width="90%" mt={"50px"}>
                <Layout01>
                    <Box display={"flex"} justifyContent="center" height={"20px"}>
                        <TxtWelcome01>WELCOME BACK TO</TxtWelcome01>
                    </Box>
                    <Box display={"flex"} justifyContent="center" mt={"20px"} height={"20px"}>
                        <TxtWelcome02>THE ALIEN BASE</TxtWelcome02>
                    </Box>
                    <RankPart01>
                        <Box display={"flex"} flex="1" alignItems={"center"} justifyContent="flex-end" width={"100%"} height="100%" mr={"20px"}>
                            <CircleBox01>
                                <img src={IMG_RANK01} width="70px" alt='' />
                            </CircleBox01>
                        </Box>
                        <Box display={"flex"} flex="1" flexDirection={"column"}  >
                            <Box display={"flex"} flex="1" color="#41F50C" fontSize={"2.5rem"} fontFamily="NexaW01-Black" fontWeight="700">
                                1
                            </Box>
                            <Box display={"flex"} flex="1" flexDirection={"column"} color="white" fontSize={"1.3rem"} fontFamily="NexaW01-Black" fontWeight="600">
                                <Box display={"flex"} flex="1">
                                    GALACTIC
                                </Box>
                                <Box display={"flex"} flex="1">
                                    EMPEROR
                                </Box>
                            </Box>
                        </Box>
                    </RankPart01>
                    <RankList>
                        <RankEach mt="50px">
                            <NumberBox01>1</NumberBox01>
                            <ImageBox01><img src={IMG_RANK01} width="42px" alt="" /></ImageBox01>
                            <Box display={"flex"} flex="3" flexDirection={"column"}>
                                <UpLetter01>Galactic Space Emperor</UpLetter01>
                                <DownLetter01>250+ Quintillion</DownLetter01>
                            </Box>
                        </RankEach>
                        <RankEach>
                            <NumberBox01>2</NumberBox01>
                            <ImageBox01><img src={IMG_RANK02} width="42px" alt="" /></ImageBox01>
                            <Box display={"flex"} flex="3" flexDirection={"column"}>
                                <UpLetter01>Galactic Space Emperor</UpLetter01>
                                <DownLetter01>250+ Quintillion</DownLetter01>
                            </Box>
                        </RankEach>
                        <RankEach>
                            <NumberBox01>3</NumberBox01>
                            <ImageBox01><img src={IMG_RANK03} width="42px" alt="" /></ImageBox01>
                            <Box display={"flex"} flex="3" flexDirection={"column"}>
                                <UpLetter01>Galactic Space Emperor</UpLetter01>
                                <DownLetter01>250+ Quintillion</DownLetter01>
                            </Box>
                        </RankEach>
                        <RankEach>
                            <NumberBox01>4</NumberBox01>
                            <ImageBox01><img src={IMG_RANK04} width="42px" alt="" /></ImageBox01>
                            <Box display={"flex"} flex="3" flexDirection={"column"}>
                                <UpLetter01>Galactic Space Emperor</UpLetter01>
                                <DownLetter01>250+ Quintillion</DownLetter01>
                            </Box>
                        </RankEach>
                        <RankEach>
                            <NumberBox01>5</NumberBox01>
                            <ImageBox01><img src={IMG_RANK05} width="42px" alt="" /></ImageBox01>
                            <Box display={"flex"} flex="3" flexDirection={"column"}>
                                <UpLetter01>Galactic Space Emperor</UpLetter01>
                                <DownLetter01>250+ Quintillion</DownLetter01>
                            </Box>
                        </RankEach>
                        <RankEach>
                            <NumberBox01>6</NumberBox01>
                            <ImageBox01><img src={IMG_RANK06} width="42px" alt="" /></ImageBox01>
                            <Box display={"flex"} flex="3" flexDirection={"column"}>
                                <UpLetter01>Galactic Space Emperor</UpLetter01>
                                <DownLetter01>250+ Quintillion</DownLetter01>
                            </Box>
                        </RankEach>
                        <RankEach>
                            <NumberBox01>7</NumberBox01>
                            <ImageBox01><img src={IMG_RANK07} width="42px" alt="" /></ImageBox01>
                            <Box display={"flex"} flex="3" flexDirection={"column"}>
                                <UpLetter01>Galactic Space Emperor</UpLetter01>
                                <DownLetter01>250+ Quintillion</DownLetter01>
                            </Box>
                        </RankEach>
                        <RankEach>
                            <NumberBox01>8</NumberBox01>
                            <ImageBox01><img src={IMG_RANK08} width="42px" alt="" /></ImageBox01>
                            <Box display={"flex"} flex="3" flexDirection={"column"}>
                                <UpLetter01>Galactic Space Emperor</UpLetter01>
                                <DownLetter01>250+ Quintillion</DownLetter01>
                            </Box>
                        </RankEach>
                        <RankEach>
                            <NumberBox01>9</NumberBox01>
                            <ImageBox01><img src={IMG_RANK09} width="42px" alt="" /></ImageBox01>
                            <Box display={"flex"} flex="3" flexDirection={"column"}>
                                <UpLetter01>Galactic Space Emperor</UpLetter01>
                                <DownLetter01>250+ Quintillion</DownLetter01>
                            </Box>
                        </RankEach>
                        <RankEach>
                            <NumberBox01>10</NumberBox01>
                            <ImageBox01><img src={IMG_RANK10} width="42px" alt="" /></ImageBox01>
                            <Box display={"flex"} flex="3" flexDirection={"column"}>
                                <UpLetter01>Galactic Space Emperor</UpLetter01>
                                <DownLetter01>250+ Quintillion</DownLetter01>
                            </Box>
                        </RankEach>
                        <RankEach >
                            <NumberBox01>11</NumberBox01>
                            <ImageBox01><img src={IMG_RANK11} width="42px" alt="" /></ImageBox01>
                            <Box display={"flex"} flex="3" flexDirection={"column"}>
                                <UpLetter01>Galactic Space Emperor</UpLetter01>
                                <DownLetter01>250+ Quintillion</DownLetter01>
                            </Box>
                        </RankEach>
                        <RankEach mb="50px">
                            <NumberBox01>12</NumberBox01>
                            <ImageBox01><img src={IMG_RANK12} width="42px" alt="" /></ImageBox01>
                            <Box display={"flex"} flex="3" flexDirection={"column"}>
                                <UpLetter01>Galactic Space Emperor</UpLetter01>
                                <DownLetter01>250+ Quintillion</DownLetter01>
                            </Box>
                        </RankEach>
                    </RankList>
                </Layout01>
                <Layout02>
                    <Box display={"flex"} justifyContent="center" height={"60px"}>
                    </Box>
                    <Statics01>
                        <StaticEach>
                            <Box display="flex" flex="2" marginBottom={"10px"}>
                                <img src={IMG_HOLDER01} width="35px" height={"35px"} alt="" />
                            </Box>
                            <UpLetter01>
                                Holders
                            </UpLetter01>
                            <DownLetter01>
                                $2500 Dollars
                            </DownLetter01>
                        </StaticEach>
                        <StaticEach>
                            <Box display="flex" flex="2" marginBottom={"10px"}>
                                <img src={IMG_BALANCE} width="35px" height={"35px"} alt="" />
                            </Box>
                            <UpLetter01>
                                Alien Balance
                            </UpLetter01>
                            <DownLetter01>
                                200 Billion
                            </DownLetter01>
                        </StaticEach>
                        <StaticEach>
                            <Box display="flex" flex="2" marginBottom={"10px"}>
                                <img src={IMG_TOTALVALUE} width="35px" height={"35px"} alt="" />
                            </Box>
                            <UpLetter01>
                                Total Value
                            </UpLetter01>
                            <DownLetter01>
                                $330 Dollars
                            </DownLetter01>
                        </StaticEach>
                        <StaticEach>
                            <Box display="flex" flex="2" marginBottom={"10px"}>
                                <img src={IMG_BURNT} width="35px" height={"35px"} alt="" />
                            </Box>
                            <UpLetter01>
                                Tokens Burnt
                            </UpLetter01>
                            <DownLetter01>
                                36%
                            </DownLetter01>
                        </StaticEach>
                        <StaticEach>
                            <Box display="flex" flex="2" marginBottom={"10px"}>
                                <img src={IMG_MARKETCAP} width="35px" height={"35px"} alt="" />
                            </Box>
                            <UpLetter01>
                                Market Cap
                            </UpLetter01>
                            <DownLetter01>
                                4.5 Million
                            </DownLetter01>
                        </StaticEach>
                        <StaticEach>
                            <Box display="flex" flex="2" marginBottom={"10px"}>
                                <img src={IMG_PRICEETH} width="35px" height={"35px"} alt="" />
                            </Box>
                            <UpLetter01>
                                Price ETH
                            </UpLetter01>
                            <DownLetter01>
                                $0.00000012
                            </DownLetter01>
                        </StaticEach>
                    </Statics01>
                    <DateSet01>
                        <DateBox>24h</DateBox>
                        <DateBox>Month</DateBox>
                        <DateBox>Week</DateBox>
                        <DateBox>All time</DateBox>
                    </DateSet01>
                    <GraphBox>
                        <img src={IMG_GRAPH01} width="100%" height={"100%"} alt="" />
                    </GraphBox>
                    <LetterBox01>
                        Latest Tweets
                    </LetterBox01>
                    <TweetsBox01>
                        <TweetsBox02 display={"flex"} alignItems="center">
                            <TweetsEachBox01>
                                <img src={IMG_TWEETS01} width="100%" height={"100%"} alt="" />
                            </TweetsEachBox01>
                            <TweetsEachBox01>
                                <img src={IMG_TWEETS01} width="100%" height={"100%"} alt="" />
                            </TweetsEachBox01>
                            <TweetsEachBox01>
                                <img src={IMG_TWEETS01} width="100%" height={"100%"} alt="" />
                            </TweetsEachBox01>
                            <TweetsEachBox01>
                                <img src={IMG_TWEETS01} width="100%" height={"100%"} alt="" />
                            </TweetsEachBox01>
                            <TweetsEachBox01>
                                <img src={IMG_TWEETS01} width="100%" height={"100%"} alt="" />
                            </TweetsEachBox01>
                            <TweetsEachBox01>
                                <img src={IMG_TWEETS01} width="100%" height={"100%"} alt="" />
                            </TweetsEachBox01>
                        </TweetsBox02>
                    </TweetsBox01>
                </Layout02>
            </Box>
            <Box display={"flex"} width="90%" mt={"50px"}>
                <Layout03>
                    <LetterBox01>
                        Help the invasion!
                    </LetterBox01>
                    <InvasionBox01>
                        <InvasionBox02>
                            <Box display={"flex"} mt="auto" mb={"auto"} fontSize="1.2rem" fontWeight={"600"} ml="20px">Alien Coin Vault</Box>
                            <Box display={"flex"} mt="auto" mb={"auto"} fontSize="1.4rem" fontWeight={"600"} ml="20px">
                                <Box display={"flex"} alignItems="center">
                                    <img src={IMG_VAULT01} width="40px" alt="" />
                                </Box>
                                <Box display={"flex"} ml="10px" alignItems={"center"} justifyContent={"center"} fontSize={"2rem"}>
                                    2
                                </Box>
                            </Box>
                            <Box display={"flex"} mt="auto" mb={"auto"} fontSize="1.2rem" fontWeight={"600"} ml="20px" color={"#41F50C"}>Open vault</Box>
                        </InvasionBox02>
                        <InvasionBox02>
                            <Box display={"flex"} mt="auto" mb={"auto"} fontSize="1.2rem" fontWeight={"600"} ml="20px">Mystery Box</Box>
                            <Box display={"flex"} mt="auto" mb={"auto"} fontSize="1.4rem" fontWeight={"600"} ml="20px">
                                <Box display={"flex"} alignItems="center">
                                    <img src={IMG_MYSTERYBOX01} width="40px" alt="" />
                                </Box>
                                <Box display={"flex"} ml="10px" alignItems={"center"} justifyContent={"center"} fontSize={"2rem"}>
                                    1
                                </Box>
                            </Box>
                            <Box display={"flex"} mt="auto" mb={"auto"} fontSize="1.2rem" fontWeight={"600"} ml="20px" color={"#41F50C"}>Redeem Mystery Box</Box>
                        </InvasionBox02>
                    </InvasionBox01>
                    <LetterBox01>
                        Mission Control
                    </LetterBox01>
                    <MissionBox01>
                        <Box display={"flex"} justifyContent="space-between" mt="auto" mb={"auto"} width="90%">
                            <Box display={"flex"} color="white" fontSize="1.2rem" fontWeight={"600"}>Alien Coins</Box>
                            <Box display={"flex"} alignItems="center">
                                <Box display={"flex"} color="white" fontSize="1.2rem" fontWeight={"600"} mr="5px">
                                    2
                                </Box>
                                <Box display={"flex"} alignItems="center">
                                    <img src={IMG_VAULT01} width="25px" alt='' />
                                </Box>
                            </Box>
                        </Box>
                        <Box display={"flex"} mt="auto" mb={"auto"} fontSize="1.4rem" fontWeight={"600"} width="90%">
                            <StoreCoinsBox01 >
                                Store Coins in Vault
                            </StoreCoinsBox01>
                        </Box>
                        <Box display={"flex"} mt="auto" mb={"auto"} fontSize="1.2rem" fontWeight={"600"} color={"white"} width="90%">1 Diamond</Box>
                    </MissionBox01>
                    <LetterBox01>
                        Daily Missions
                    </LetterBox01>
                    <MissionBox02>
                        <MissionRow01>
                            <Box display={"flex"} alignItems="center">
                                <img src={IMG_CEHCK01} width={"65px"} height="65px" alt="" />
                            </Box>
                            <Box display={"flex"} flexDirection="column">
                                <Box display={"flex"} color="white" fontSize={"1rem"} fontWeight="700" alignItems={"center"}>
                                    <CgEditBlackPoint color='#D62121' fontSize={"14px"} />{'\u00a0'}{'\u00a0'}Status Check
                                </Box>
                                <Box display={"flex"} color="white" fontSize={"1rem"} fontWeight="400">
                                    <Box display={"flex"} color={"#41F50C"}>Click here{'\u00a0'}</Box><Box display={"flex"}> to complete your </Box>
                                </Box>
                                <Box display={"flex"} color="white" fontSize={"1rem"} fontWeight="400">
                                    Status Check Mission
                                </Box>
                                <Box display={"flex"} color="white" fontSize={"0.8rem"} fontWeight="400">
                                    Next Mission in 12h
                                </Box>
                            </Box>
                            <Box display={"flex"} alignItems="center">
                                <Box display={"flex"} alignItems="center" color="white" fontSize="1.2rem" fontWeight={"600"} mr="5px">
                                    + 2
                                </Box>
                                <Box display={"flex"} alignItems="center">
                                    <img src={IMG_VAULT01} width="25px" alt='' />
                                </Box>
                            </Box>
                        </MissionRow01>
                        <MissionRow01>
                            <Box display={"flex"} alignItems="center">
                                <img src={IMG_DEXTOOLS01} width={"65px"} height="65px" alt="" />
                            </Box>
                            <Box display={"flex"} flexDirection="column">
                                <Box display={"flex"} color="white" fontSize={"1rem"} fontWeight="700" alignItems={"center"}>
                                    <CgEditBlackPoint color='#D62121' fontSize={"14px"} />{'\u00a0'}{'\u00a0'}Status Check
                                </Box>
                                <Box display={"flex"} color="white" fontSize={"1rem"} fontWeight="400">
                                    <Box display={"flex"} color={"#41F50C"}>Click here{'\u00a0'}</Box><Box display={"flex"}> to complete your </Box>
                                </Box>
                                <Box display={"flex"} color="white" fontSize={"1rem"} fontWeight="400">
                                    Status Check Mission
                                </Box>
                                <Box display={"flex"} color="white" fontSize={"0.8rem"} fontWeight="400">
                                    Next Mission in 12h
                                </Box>
                            </Box>
                            <Box display={"flex"} alignItems="center">
                                <Box display={"flex"} alignItems="center" color="white" fontSize="1.2rem" fontWeight={"600"} mr="5px">
                                    + 2
                                </Box>
                                <Box display={"flex"} alignItems="center">
                                    <img src={IMG_VAULT01} width="25px" alt='' />
                                </Box>
                            </Box>
                        </MissionRow01>
                        <MissionRow01>
                            <Box display={"flex"} alignItems="center">
                                <img src={IMG_COINMARKET01} width={"65px"} height="65px" alt="" />
                            </Box>
                            <Box display={"flex"} flexDirection="column">
                                <Box display={"flex"} color="white" fontSize={"1rem"} fontWeight="700" alignItems={"center"}>
                                    <CgEditBlackPoint color='#D62121' fontSize={"14px"} />{'\u00a0'}{'\u00a0'}Status Check
                                </Box>
                                <Box display={"flex"} color="white" fontSize={"1rem"} fontWeight="400">
                                    <Box display={"flex"} color={"#41F50C"}>Click here{'\u00a0'}</Box><Box display={"flex"}> to complete your </Box>
                                </Box>
                                <Box display={"flex"} color="white" fontSize={"1rem"} fontWeight="400">
                                    Status Check Mission
                                </Box>
                                <Box display={"flex"} color="white" fontSize={"0.8rem"} fontWeight="400">
                                    Next Mission in 12h
                                </Box>
                            </Box>
                            <Box display={"flex"} alignItems="center">
                                <Box display={"flex"} alignItems="center" color="white" fontSize="1.2rem" fontWeight={"600"} mr="5px">
                                    + 2
                                </Box>
                                <Box display={"flex"} alignItems="center">
                                    <img src={IMG_VAULT01} width="25px" alt='' />
                                </Box>
                            </Box>
                        </MissionRow01>
                        <MissionRow01>
                            <Box display={"flex"} alignItems="center">
                                <img src={IMG_COINGECKO1} width={"65px"} height="65px" alt="" />
                            </Box>
                            <Box display={"flex"} flexDirection="column">
                                <Box display={"flex"} color="white" fontSize={"1rem"} fontWeight="700" alignItems={"center"}>
                                    <CgEditBlackPoint color='#D62121' fontSize={"14px"} />{'\u00a0'}{'\u00a0'}Status Check
                                </Box>
                                <Box display={"flex"} color="white" fontSize={"1rem"} fontWeight="400">
                                    <Box display={"flex"} color={"#41F50C"}>Click here{'\u00a0'}</Box><Box display={"flex"}> to complete your </Box>
                                </Box>
                                <Box display={"flex"} color="white" fontSize={"1rem"} fontWeight="400">
                                    Status Check Mission
                                </Box>
                                <Box display={"flex"} color="white" fontSize={"0.8rem"} fontWeight="400">
                                    Next Mission in 12h
                                </Box>
                            </Box>
                            <Box display={"flex"} alignItems="center">
                                <Box display={"flex"} alignItems="center" color="white" fontSize="1.2rem" fontWeight={"600"} mr="5px">
                                    + 2
                                </Box>
                                <Box display={"flex"} alignItems="center">
                                    <img src={IMG_VAULT01} width="25px" alt='' />
                                </Box>
                            </Box>
                        </MissionRow01>
                        <MissionRow01>
                            <Box display={"flex"} alignItems="center">
                                <img src={IMG_CEHCK01} width={"65px"} height="65px" alt="" />
                            </Box>
                            <Box display={"flex"} flexDirection="column">
                                <Box display={"flex"} color="white" fontSize={"1rem"} fontWeight="700" alignItems={"center"}>
                                    <CgEditBlackPoint color='#D62121' fontSize={"14px"} />{'\u00a0'}{'\u00a0'}Status Check
                                </Box>
                                <Box display={"flex"} color="white" fontSize={"1rem"} fontWeight="400">
                                    <Box display={"flex"} color={"#41F50C"}>Click here{'\u00a0'}</Box><Box display={"flex"}> to complete your </Box>
                                </Box>
                                <Box display={"flex"} color="white" fontSize={"1rem"} fontWeight="400">
                                    Status Check Mission
                                </Box>
                                <Box display={"flex"} color="white" fontSize={"0.8rem"} fontWeight="400">
                                    Next Mission in 12h
                                </Box>
                            </Box>
                            <Box display={"flex"} alignItems="center">
                                <Box display={"flex"} alignItems="center" color="white" fontSize="1.2rem" fontWeight={"600"} mr="5px">
                                    + 2
                                </Box>
                                <Box display={"flex"} alignItems="center">
                                    <img src={IMG_VAULT01} width="25px" alt='' />
                                </Box>
                            </Box>
                        </MissionRow01>
                    </MissionBox02>
                </Layout03>
                <Layout04>
                    <LetterBox01>
                        Play to earn
                    </LetterBox01>
                    <PlayEarnBox01>
                        <Box display={"flex"} width="90%" flex={"1"} alignItems="center" color={"white"} fontSize="1.8rem" fontWeight={"700"}>PLAY GAMES & GET CRYPTO</Box>
                        <Box display={"flex"} width="90%" flex={"2"} alignItems="center">
                            <Box display={'flex'} mr="auto" ml={"auto"}>
                                <Box display={"flex"} color={"white"} fontSize="4rem" fontWeight={"800"} mr="5px">1</Box>
                                <Box display={"flex"} flexDirection="column">
                                    <Box display={"flex"} color={"white"} fontSize="1.8rem" fontWeight={"700"} > PLAY</Box>
                                    <Box display={"flex"} color={"white"} fontSize="1rem" fontWeight={"600"}>From our collection of web and mobile games</Box>
                                </Box>
                            </Box>
                            <Box display={'flex'} mr="auto" ml={"auto"}>
                                <Box display={"flex"} color={"white"} fontSize="4rem" fontWeight={"800"} mr="5px">2</Box>
                                <Box display={"flex"} flexDirection="column">
                                    <Box display={"flex"} color={"white"} fontSize="1.8rem" fontWeight={"700"} > EARN</Box>
                                    <Box display={"flex"} color={"white"} fontSize="1rem" fontWeight={"600"}>Points and cash from playing and competing</Box>
                                </Box>
                            </Box>
                            <Box display={'flex'} mr="auto" ml={"auto"}>
                                <Box display={"flex"} color={"white"} fontSize="4rem" fontWeight={"800"} mr="5px">3</Box>
                                <Box display={"flex"} flexDirection="column">
                                    <Box display={"flex"} color={"white"} fontSize="1.8rem" fontWeight={"700"} > CASH OUT</Box>
                                    <Box display={"flex"} color={"white"} fontSize="1rem" fontWeight={"400"}>Your Alien tokens
                                        or prize money from challenges</Box>
                                </Box>
                            </Box>
                        </Box>
                    </PlayEarnBox01>
                    <LetterBox01>
                        Game of the week
                    </LetterBox01>
                    <GameWeekBox01>
                        <Box display={"flex"} width={"90%"} flexDirection="column">

                        </Box>
                        <Box display={"flex"} width="90%" flex={"1"} flexDirection="column" justifyContent={"center"}>
                            <Box display={"flex"} fontSize={"2rem"} fontWeight={"600"} width="100%">
                                Safemoon Inu
                            </Box>
                            <Box display={"flex"} fontSize={"1rem"} fontWeight={"400"} width="100%">
                                safemooninu.com
                            </Box>
                        </Box>
                        <Box display={"flex"} width="90%" flex={"4"} position="relative">
                            <img src={IMG_PlayVideo} width="100%" height={"90%"} alt="" />
                            <RankIcon01>
                                <Box display={"flex"} color="white" fontSize={"1rem"} fontWeight={"400"}>rank</Box>
                                <Box display={"flex"} color="white" fontSize={"2rem"} fontWeight={"700"}>#1</Box>
                            </RankIcon01>
                        </Box>
                        <Box display={"flex"} width="90%" flex={"1"} fontSize={"1rem"} fontWeight={"400"}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </Box>
                        <Box display={"flex"} width="90%" flex={"1"} justifyContent="flex-end">
                            <PlayButton01 width={"200px"} height="45px" alignItems={"center"} justifyContent="space-between">
                                <Box display={"flex"} ml="20px" fontSize={"1.2rem"} fontWeight="700">
                                    Play now
                                </Box>
                                <Box display={"flex"} mr="20px">
                                    <img src={IMG_ARCADO} width={"30px"} height={'30px'} alt="" />
                                </Box>
                            </PlayButton01>
                        </Box>
                    </GameWeekBox01>
                </Layout04>
            </Box>
            <Box display={"flex"} width="90%" mt={"50px"} flexDirection="column" mb={"100px"}>
                <LetterBox01>More Games</LetterBox01>
                <MoreGamesBox>
                    <Box display={"flex"} flex="1">
                        <Box display={"flex"} flex="1">
                            <img src={IMG_GAME01} width="100%" height={"100%"} style={{
                                borderRadius: "20px 0px 0px 20px",
                            }} alt="" />
                        </Box>
                        <Box display={"flex"} flex="1" flexDirection={"column"} alignContent="center">
                            <Box display={"flex"} mt="auto" mb={"auto"} fontSize={"1.2rem"} fontWeight="700" color={"white"} justifyContent="center" alignItems={"center"}>
                                Polychainmonsters
                            </Box>
                            <Box display={"flex"} mt="auto" mb={"auto"} fontSize={"1rem"} mr="5px" ml={"5px"} textAlign="center" fontWeight="400" color={"white"} justifyContent="center" alignItems={"center"}>
                                Discover, Collect & Play to Earn.
                            </Box>
                            <Box display={"flex"} mt="auto" mb={"auto"} justifyContent="center" alignItems={"center"}>
                                <PlayButton01 width={"180px"} height="45px" alignItems={"center"} justifyContent="space-between">
                                    <Box display={"flex"} ml="20px" fontSize={"1.2rem"} fontWeight="700">
                                        Play now
                                    </Box>
                                    <Box display={"flex"} mr="20px">
                                        <img src={IMG_ARCADO} width={"30px"} height={'30px'} alt="" />
                                    </Box>
                                </PlayButton01>
                            </Box>
                        </Box>
                    </Box>
                    <Box display={"flex"} flex="1">
                        <Box display={"flex"} flex="1">
                            <img src={IMG_GAME02} width="100%" height={"100%"} alt="" />
                        </Box>
                        <Box display={"flex"} flex="1" flexDirection={"column"} alignContent="center">
                            <Box display={"flex"} mt="auto" mb={"auto"} fontSize={"1.2rem"} fontWeight="700" color={"white"} justifyContent="center" alignItems={"center"}>
                                Faraland
                            </Box>
                            <Box display={"flex"} mt="auto" mb={"auto"} fontSize={"1rem"} mr="5px" ml={"5px"} textAlign="center" fontWeight="400" color={"white"} justifyContent="center" alignItems={"center"}>
                                The biggest war game on Blockchain.
                            </Box>
                            <Box display={"flex"} mt="auto" mb={"auto"} justifyContent="center" alignItems={"center"}>
                                <PlayButton01 width={"180px"} height="45px" alignItems={"center"} justifyContent="space-between">
                                    <Box display={"flex"} ml="20px" fontSize={"1.2rem"} fontWeight="700">
                                        Play now
                                    </Box>
                                    <Box display={"flex"} mr="20px">
                                        <img src={IMG_ARCADO} width={"30px"} height={'30px'} alt="" />
                                    </Box>
                                </PlayButton01>
                            </Box>
                        </Box>
                    </Box>
                    <Box display={"flex"} flex="1">
                        <Box display={"flex"} flex="1">
                            <img src={IMG_GAME03} width="100%" height={"100%"} alt="" />
                        </Box>
                        <Box display={"flex"} flex="1" flexDirection={"column"} alignContent="center">
                            <Box display={"flex"} mt="auto" mb={"auto"} fontSize={"1.2rem"} fontWeight="700" color={"white"} justifyContent="center" alignItems={"center"}>
                                Binamon
                            </Box>
                            <Box display={"flex"} mt="auto" mb={"auto"} mr="5px" ml={"5px"} fontSize={"1rem"} textAlign="center" fontWeight="400" color={"white"} justifyContent="center" alignItems={"center"}>
                                A complete Gaming  Metaverse of Digital Monsters
                            </Box>
                            <Box display={"flex"} mt="auto" mb={"auto"} justifyContent="center" alignItems={"center"}>
                                <PlayButton01 width={"180px"} height="45px" alignItems={"center"} justifyContent="space-between">
                                    <Box display={"flex"} ml="20px" fontSize={"1.2rem"} fontWeight="700">
                                        Play now
                                    </Box>
                                    <Box display={"flex"} mr="20px">
                                        <img src={IMG_ARCADO} width={"30px"} height={'30px'} alt="" />
                                    </Box>
                                </PlayButton01>
                            </Box>
                        </Box>
                    </Box>
                </MoreGamesBox>
            </Box>
            <Footer/>
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
const TxtWelcome01 = styled(Box)`
    display: flex;
    font-family: 'NexaW01-Black', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 19px;
    line-height: 17px;
    color: #FFFFFF;

`
const TxtWelcome02 = styled(Box)`
    display: flex;
    font-family: 'NexaW01-Black', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 27px;
    text-align: center;
    color: #FFFFFF;
`

const Layout01 = styled(Box)`
    display: flex;
    width: 100%;
    flex: 1;
    flex-direction: column;
    margin-right: 30px;
`

const Layout02 = styled(Box)`
    display: flex;
    width: 100%;
    flex: 2.3;
    flex-direction: column;
`

const RankPart01 = styled(Box)`
    display: flex;
    margin-top: 30px;
    justify-content: center;
    align-items: center;
    height: 125px;
    width: 100%;
    background: linear-gradient(88.2deg, rgba(196, 196, 196, 0.1) 4.02%, rgba(101, 207, 122, 0.025) 99.99%, rgba(101, 207, 122, 0.1) 100%);
    border: 1px solid #41F50C;
    box-shadow: 5px 5px 10px rgba(101, 207, 122, 0.3);
    border-radius: 20px;
`
const CircleBox01 = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    border-radius: 100%;
    border: 1px solid #41F50C;
    background-color: #2B2B2B;
`

const RankList = styled(Box)`
    display: flex;
    display: flex;
    margin-top: 30px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: linear-gradient(88.2deg, rgba(196, 196, 196, 0.1) 4.02%, rgba(101, 207, 122, 0.025) 99.99%, rgba(101, 207, 122, 0.1) 100%);
    border: 1px solid #41F50C;
    box-shadow: 5px 5px 10px rgba(101, 207, 122, 0.3);
    border-radius: 20px;
`
const RankEach = styled(Box)`
    display: flex;
    width: 100%;
    margin-top: 15px;
    margin-bottom: 15px;
    margin-left: 20px;
    margin-right: 20px;
    justify-content: center;
    align-items: center;
`
const NumberBox01 = styled(Box)`
    display:flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    font-family: 'NexaW01-Black';
    font-style: normal;
    font-weight: 700;
    font-size: 2rem;
    line-height: 40px;
    display: flex;
    align-items: center;
    /* color: #41F50C; */
    color: white;
    margin-left: 20px;
`
const ImageBox01 = styled(Box)`
    display:flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    width: 100%;
`
const UpLetter01 = styled(Box)`
    display:flex;
    flex:1;
    font-family: 'NexaW01-Black';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 14px;
    display: flex;
    align-items: flex-end;
    color: #FFFFFF;

`

const DownLetter01 = styled(Box)`
    display:flex;
    flex:1;
    font-family: 'Myriad Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    display: flex;
    align-items: flex-start;
    color: #FFFFFF;
    margin-top: 3px;
`
const Statics01 = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    grid-template-columns: auto auto auto auto auto auto;
    height: 125px;
    width: 100%;
    background: linear-gradient(88.2deg, rgba(196, 196, 196, 0.1) 4.02%, rgba(101, 207, 122, 0.025) 99.99%, rgba(101, 207, 122, 0.1) 100%);    border: 1px solid #41F50C;
    box-shadow: 5px 5px 10px rgba(101, 207, 122, 0.3);
    border-radius: 20px;
    margin-top: 30px;
`
const StaticEach = styled(Box)`
    display: flex;
    flex: 1;
    width: 80%;
    flex-direction: column;
    align-items: center;
`
const DateSet01 = styled(Box)`
    display: flex;
    margin-top: 30px;
    background: linear-gradient(88.2deg, rgba(196, 196, 196, 0.1) 4.02%, rgba(101, 207, 122, 0.025) 99.99%, rgba(101, 207, 122, 0.1) 100%);    border: 1px solid #41F50C;
    box-shadow: 5px 5px 10px rgba(101, 207, 122, 0.3);
    border-radius: 20px;
    width: 40%;
    font-family: 'NexaW01-Black';
    font-style: normal;
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 13px;
    color: #FFFFFF;
`
const DateBox = styled(Box)`
    display: flex;
    flex:1;
    margin-left: 1px;
    margin-right: 1px;
    align-items: center;
    justify-content: center;
    height: 40px;
    &:hover{
        transition: 0.3s;
        background-color: #41F50C;
        cursor: pointer;
        /* border: 1px solid #41F50C; */
        box-shadow: 0px 1px 15px rgba(101, 207, 122, 0.2);
        border-radius: 50px;
    }
`
const GraphBox = styled(Box)`
    display: flex;
    width: 100%;
    height: 500px;
    margin-top: 10px;
    background: linear-gradient(88.2deg, rgba(196, 196, 196, 0.1) 4.02%, rgba(101, 207, 122, 0.025) 99.99%, rgba(101, 207, 122, 0.1) 100%);    border: 1px solid #41F50C;
    box-shadow: 5px 5px 10px rgba(101, 207, 122, 0.3);
    border-radius: 20px;
`

const LetterBox01 = styled(Box)`
    display: flex;
    width: 100%;
    margin-top: 50px;
    /* height: 30px; */
    font-family: 'NexaW01-Black';
    font-style: normal;
    font-weight: 600;
    font-size: 2rem;
    line-height: 27px;
    color: #FFFFFF;
`
const TweetsBox01 = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    width: 100%;
    height: 280px;
    background: linear-gradient(88.2deg, rgba(196, 196, 196, 0.1) 4.02%, rgba(101, 207, 122, 0.025) 99.99%, rgba(101, 207, 122, 0.1) 100%);    border: 1px solid #41F50C;
    box-shadow: 5px 5px 10px rgba(101, 207, 122, 0.3);
    border-radius: 20px;
`

const TweetsBox02 = styled(Box)`
    display: flex;
    width: 95%;
    height: 100%; 
    align-items: center;
    overflow-x: auto;
    ::-webkit-scrollbar {
        width: 12px;
        height: 7px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #0E750E;
        border-radius: 300px;

    }
`
const TweetsEachBox01 = styled(Box)`
    display: flex;
    min-width: 40%;
    height: 260px;
    /* box-shadow: 5px 5px 10px rgba(101, 207, 122, 0.3);
    border-radius: 20px; */
`
const InvasionBox01 = styled(Box)`
    display: flex; 
    width: 100%;
    margin-top: 30px;
    justify-content: space-between;
`
const InvasionBox02 = styled(Box)`
    display: flex;
    margin-top: auto;
    width: 47%;
    background: linear-gradient(88.2deg, rgba(196, 196, 196, 0.1) 4.02%, rgba(101, 207, 122, 0.025) 99.99%, rgba(101, 207, 122, 0.1) 100%);    border: 1px solid #41F50C;
    box-shadow: 5px 5px 10px rgba(101, 207, 122, 0.3);
    border-radius: 20px;
    height: 130px;
    flex-direction: column;
    justify-content: space-between;
    font-family: 'NexaW01-Black';
    color: white;
`

const Layout03 = styled(Box)`
    display: flex;
    width: 100%;
    flex: 1.2;
    flex-direction: column;
    margin-right: 30px;
`
const Layout04 = styled(Box)`
    display: flex;
    width: 100%;
    flex: 2;
    flex-direction: column;
`
const MissionBox01 = styled(Box)`
    display: flex;
    background: linear-gradient(88.2deg, rgba(196, 196, 196, 0.1) 4.02%, rgba(101, 207, 122, 0.025) 99.99%, rgba(101, 207, 122, 0.1) 100%);    border: 1px solid #41F50C;
    box-shadow: 5px 5px 10px rgba(101, 207, 122, 0.3);
    border-radius: 20px;
    height: 130px;
    width: 100%;
    margin-top: 30px;
    flex-direction: column;
    font-family: 'NexaW01-Black';
    align-items: center;
    /* align-items: center; */
`
const StoreCoinsBox01 = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 45px;
    background: linear-gradient(88.2deg, rgba(196, 196, 196, 0.1) 4.02%, rgba(101, 207, 122, 0.025) 99.99%, rgba(101, 207, 122, 0.1) 100%);    border: 1px solid #41F50C;
    box-shadow: 5px 5px 10px rgba(101, 207, 122, 0.3);
    border-radius: 10px;
    font-family: 'Myriad Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 18px;
    /* identical to box height */
    text-align: center;
    color: #41F50C;
    &:hover{
        transition: 0.3s;
        background: #083204;
        cursor: pointer;
    }
`
const MissionBox02 = styled(Box)`
    display: flex;
    width: 100%;
    height: 510px;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(88.2deg, rgba(196, 196, 196, 0.1) 4.02%, rgba(101, 207, 122, 0.025) 99.99%, rgba(101, 207, 122, 0.1) 100%);    border: 1px solid #41F50C;
    box-shadow: 5px 5px 10px rgba(101, 207, 122, 0.3);
    border-radius: 20px;
    margin-top: 30px;
`
const MissionRow01 = styled(Box)`
    display: flex;
    width: 90%;
    height: 125px;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(119, 119, 119, 0.19);
`
const PlayEarnBox01 = styled(Box)`
    display: flex;
    width: 100%;
    height: 230px;
    background: linear-gradient(88.2deg, rgba(196, 196, 196, 0.1) 4.02%, rgba(101, 207, 122, 0.025) 99.99%, rgba(101, 207, 122, 0.1) 100%);    border: 1px solid #41F50C;
    box-shadow: 5px 5px 10px rgba(101, 207, 122, 0.3);
    border-radius: 20px;
    margin-top: 30px;
    font-family: 'NexaW01-Black';
    font-style: normal;
    color: #FFFFFF;
    flex-direction: column;
    align-items: center;
`
const GameWeekBox01 = styled(Box)`
    display: flex;
    width: 100%;
    height: 650px;
    background: linear-gradient(88.2deg, rgba(196, 196, 196, 0.1) 4.02%, rgba(101, 207, 122, 0.025) 99.99%, rgba(101, 207, 122, 0.1) 100%);    border: 1px solid #41F50C;
    box-shadow: 5px 5px 10px rgba(101, 207, 122, 0.3);
    border-radius: 20px;
    font-family: 'NexaW01-Black';
    margin-top: 30px;
    color: white;
    flex-direction: column;
    align-items: center;
`
const PlayButton01 = styled(Box)`
    display: flex;
    box-shadow: 5px 5px 10px rgba(101, 207, 122, 0.3);
    background: linear-gradient(88.2deg, rgba(196, 196, 196, 0.1) 4.02%, rgba(101, 207, 122, 0.025) 99.99%, rgba(101, 207, 122, 0.1) 100%);    border: 1px solid #41F50C;

    border-radius: 20px;
    font-family: 'NexaW01-Black';
    color: #FFFFFF;
    &:hover{
        transition: 0.3s;
        background: #083204;
        cursor: pointer;
    }
`
const RankIcon01 = styled(Box)`
    display: flex;
    position: absolute;
    bottom: 5px;
    left: 10%;
    background: #1EC951;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    font-family: 'NexaW01-Black';
    width: 65px;
    height: 65px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const MoreGamesBox = styled(Box)`
    display: flex;
    margin-top: 30px;
    width: 100%;
    height: 200px;
    background: linear-gradient(88.2deg, rgba(196, 196, 196, 0.1) 4.02%, rgba(101, 207, 122, 0.025) 99.99%, rgba(101, 207, 122, 0.1) 100%);    border: 1px solid #41F50C;
    box-shadow: 5px 5px 10px rgba(101, 207, 122, 0.3);
    border-radius: 20px;
`

export default Content;
