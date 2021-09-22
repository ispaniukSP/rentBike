import styled from 'styled-components';


export const ButtonStyled = styled.button`
${props=> props.width ? `width: ${props.width}` : null};
${props=> props.height ? `height: ${props.height}` : null};
${props=> props.margin ? `margin: ${props.margin}` : null};
${props=> props.padding ? `padding: ${props.padding}` : null};
${props=> props.mTop ? `margin-top: ${props.mTop}` : null};

border: none;
background-color: transparent;
padding: 5px 15px;
font-size: 15px;
border: 1px solid ${props => props.color || '#d2d2d2'};
border-radius: 5px;
color: ${props => props.color || '#d2d2d2'};
transition: color .3s linear,
border .3s linear;
font-family: 'Merriweather', serif;
&:hover{
    color: ${props => props.hovColor || 'grey'};
    border: 1px solid ${props => props.hovBorColor || 'grey'};
}
`
