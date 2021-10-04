import React, {useContext} from 'react'
import { MenuContext } from '../MainLayout';
import * as Styled from './style'
import LinkItem from '../LinkItem/LinkItem';


export function Sidebar() {
    const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);

    const clickHandler = () => {
        toggleMenuMode();
    };

    return (
        <Styled.StyledBackground className={isMenuOpen ? 'open' : ''} onClick={clickHandler}> 
            <Styled.StyledSidebar className={isMenuOpen ? 'open' : ''} onClick={clickHandler}>
                <Styled.LinkBlock>
                    <LinkItem link="/city" id='city' text="City" />               
                    <LinkItem link="/payment" id='card' text="Payment" />               
                    <LinkItem link="/history" id='history' text="History" />               
                    <LinkItem link="/app" id='map' text="Map" />               
                </Styled.LinkBlock>
                
                <Styled.UserBlock>
                    <LinkItem link="/city" id='city' text="User" />               
                </Styled.UserBlock>
            </Styled.StyledSidebar>
        </Styled.StyledBackground>
    )
}