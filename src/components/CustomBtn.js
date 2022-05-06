import { Box } from '@material-ui/core';
import React from "react";
import styled from 'styled-components';

const CustomBtn = ({ width, height, str, fsize, fcolor, bgcolor, border, bradius, fweight, ffamily, lheight, hcolor,hgcolor , hborder }) => {
    return (
        <StyledBtn width={width} height={height} fontSize={fsize} color={fcolor} hcolor={hcolor} hgcolor={hgcolor} bgcolor={bgcolor} border={border} borderRadius={bradius} fontWeight={fweight} fontFamily={ffamily} lineHeight={lheight} hborder={hborder}>
            {str}
        </StyledBtn>
    );
}

const StyledBtn = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .3s;
    &:hover{
        background-color: ${({hgcolor})=>hgcolor};
        color: ${({hcolor})=>hcolor};
        cursor: pointer;
        border: ${({hborder})=>hborder};
        /* box-shadow: 3px 5px 5px rgb(0 0 0 / 50%); */
    }
`

export default CustomBtn;
