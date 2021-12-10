import styled from 'styled-components';

export const StyledSidebar = styled.div`
position: absolute;
left: 0px;
z-index: 293;
display: block;
width: 300px;
height: 100%;
margin-top: 0px;
padding-top: 60px;
align-items: stretch;
background-color: #121217;
transform: translateX(-100%);
transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
border-radius: 0px 10px 10px 0px;
display: flex;
flex-direction: column;
justify-content: space-between;

&.open{
    transform: translateX(0);
}
`

export const MenuLink = styled.a`
cursor: pointer;
position: relative;
display: block;
width: 100%;
margin-bottom: 10px;
text-decoration: none;
color: #fff;
transition: color .3s linear;

&:hover{
  color: #a9d9f0;
}

`;

export const StyledBackground = styled.div`
    width:100%;
    height: 100vh;
    top:0;
    left:0;
    background-color: #11111191;
    position: fixed;
    z-index: 3;
    transform: translateX(-100%);

    &.open{
      transform: translateX(0);
    }
`

export const StyledCity = styled.img`
    color: #fff;
`

export const LinkBlock = styled.div`
    width:100%;
    height: 50%
`
export const UserBlock = styled.div`
    width: 100%;
    height: 13%;
`