import React, {createContext, useState} from 'react'
import { Sidebar } from './Sidebar/Sidebar';
import Burger from './BurgerIcon/Burger';
import * as Styled from './style';
import IconsComponent from './IconsComponent/IconsComponent';

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
                    <Styled.StyledHeader > 
                        <IconsComponent to={`/city`} id={'bike'} />
                    </Styled.StyledHeader>
                        <Burger />
                        <Sidebar />
            </MenuContext.Provider>
    )
}
