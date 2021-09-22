import React, { useContext } from 'react'
import { MenuContext } from '../MainLayout'
import * as Styled from './style'

export default function Burger(props) {

    const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);

    const clickHandler = () => {
        toggleMenuMode();
    };

    return (
        <Styled.StyledBurgerField
              className={isMenuOpen ? 'active' : ''}
              onClick={clickHandler}  
            >
                <Styled.StyledBurger />
                <Styled.StyledBurger />
                <Styled.StyledBurger />
        </Styled.StyledBurgerField>
    )
}
