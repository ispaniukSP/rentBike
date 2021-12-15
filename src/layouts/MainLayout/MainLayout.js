import React, {createContext, useState} from 'react'
import { Sidebar } from './Sidebar/Sidebar';
import Burger from './BurgerIcon/Burger';
import * as Styled from './style';
import IconsComponent from './IconsComponent/IconsComponent';
import { Flex } from '../../components/Flex/Flex';

export const MenuContext = createContext({
    isMenuOpen: true,
    toggleMenu: () => {},
});

export default function MainLayout() {
    const [isMenuOpen, toggleMenu] = useState(false);

    function toggleMenuMode() {
        toggleMenu(!isMenuOpen);
    }

    return (
            <MenuContext.Provider value={{isMenuOpen, toggleMenuMode}}>
                <Flex align="center" justify="center">
                    <Styled.StyledHeader > 
                        <IconsComponent id={'bike'} />
                    </Styled.StyledHeader>
                        <Burger />
                        <Sidebar />
                </Flex>
            </MenuContext.Provider>
    )
}
