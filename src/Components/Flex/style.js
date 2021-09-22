import styled from "styled-components";

export const StyledFlex = styled.div`
    margin: ${({margin}) => margin || '0px'} ;
    padding: ${({padding}) => padding || '0px'};
    ${props=> props.mTop ? `margin-top: ${props.mTop}` : null};
    ${props=> props.mBottom ? `margin-bottom: ${props.mBottom}` : null};
    ${props=> props.mRight ? `margin-right: ${props.mRight}` : null};
    ${props=> props.mLeft ? `margin-left: ${props.mLeft}` : null};
    ${props=> props.pTop ? `padding-top: ${props.pTop}` : null};
    ${props=> props.pBottom ? `padding-bottom: ${props.pBottom}` : null};
    ${props=> props.pRight ? `padding-right: ${props.pRight}` : null};
    ${props=> props.pLeft ? `padding-left: ${props.pLeft}` : null};

    ${props=> props.width ? `width: ${props.width}` : null};
    ${props=> props.minWidth ? `min-width: ${props.minWidth}` : null};
    ${props=> props.maxWidth ? `max-width: ${props.maxWidth}` : null};

    ${props=> props.height ? `height: ${props.height}` : null};
    ${props=> props.minHeight ? `min-height: ${props.minHeight}` : null};
    ${props=> props.maxHeight ? `max-height: ${props.maxHeight}` : null};

    ${props=> props.position ? `position: ${props.position}` : null};

    display: flex;
    flex-direction: ${props => props.direction || 'row'} ;
    ${props=> props.justify ? `justify-content: ${props.justify}` : null};
    ${props=> props.align ? `align-items: ${props.align}` : null};
    ${props=> props.grow ? `flex-grow: ${props.grow}` : null};
    ${props=> props.wrap ? `flex-wrap: ${props.wrap}` : null};
`