import styled from 'styled-components'

export const StyledSVG = styled.div`
    & svg {
        height: 35px;
        color: white;
        transition: color .3s linear;
    }
    & svg:hover{
        color: #ccc
    }
`
export const StyledLogoSVG = styled.a`
    margin-right: 20px;
    & svg {
        height: 35px;
        color: white;
        transition: color .3s linear;
    }
    & svg:hover{
        color: #ccc
    }
`
export const StyledPin = styled.a`
    & svg{
        width:21px;
        height: 30px;
        color: #ec0000;
    }
`