import React from "react";
import styled from "styled-components";
import { Box } from '@material-ui/core';
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Content from "./layouts/content/content";
import Sidebar from "./layouts/sidebar/sidbar";
import GalaticMarket from "./layouts/galatic_market/galatic_market";
import ArtCollections from "./layouts/art_collections/art_collections";
import ArtDetails from "./layouts/art_details/art_details";

function getLibrary(provider) {
  const library = new Web3Provider(provider);
  library.pollingInterval = 8000;
  return library;
}

function App() {
  return (
    <>
      <Web3ReactProvider getLibrary={getLibrary}>
        <StyledComponent>
          <BrowserRouter>
            <Sidebar />
            <Routes>
              <Route path="/" element={<Content />}></Route>
              <Route path="/galatic_market" element={<GalaticMarket />}></Route>
              <Route path="/art_collections" element={<ArtCollections />}></Route>
              <Route path="/art_details" element={<ArtDetails />}></Route>
            </Routes>
          </BrowserRouter>

        </StyledComponent>
      </Web3ReactProvider>
    </>
  );
}

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  height: 100%;
`
export default App;
