import styled from 'styled-components';


export const StyledBurgerField = styled.div`
    width:55px;
    height: 50px;
    cursor: pointer;
    background-color: transparent;
    position: fixed;
    z-index: 5;
    margin-left: 7px;
    margin-top: 4px;
    transform-origin: 16px 11px;

    span {
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    :focus {
    border: medium none rgb(111, 255, 176);
    box-shadow: rgb(111, 255, 176) 0 0 2px 2px;
    outline: 0;
    }

    :hover {
    span:nth-of-type(1) {
        width: 53px;
    }

    span:nth-of-type(2) {
        width: 60px;
    }

    span:nth-of-type(3) {
        width: 50px;
    }
    }

    &.active {
        z-index: 294;
    span:nth-of-type(1) {
        transform: rotate(45deg) translate(8px,9px);
        width: 40px;
        background-color: #fff;
        height: 6px;
    }

    span:nth-of-type(2) {
        opacity: 0;
        pointer-events: none;
    }

    span:nth-of-type(3) {
        transform: rotate(-45deg) translate(9px, -10px);
        width: 40px;
        background-color: #fff;
        height: 6px;
    }
    }
`

export const StyledBurger = styled.span`
    display: block;
    width: 55px;
    height: 8px;
    background-color: #fff;
    padding: 0;
    margin: 6px 0;
    border-radius: 5px;
`