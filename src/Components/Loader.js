import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const StyledLoader = styled.div`
    width: 10px;
    height: 10px;
    margin: 40px auto;
    border-radius: 50%;
    ${props => props.color ? `background:${props.color};` : `background: #fff;`}
`

const loaderVariants = {
    animationOne: {
        x: [-20, 20],
        y: [0, -30],
        transition: {
            x: {
                yoyo: Infinity,
                duration: 0.5
            },
            y: {
                yoyo: Infinity,
                duration: 0.25,
                ease: "easeOut"
            }
        }
    }
}

export const Loader = (props) => {
    return(
        <>
            <StyledLoader
                {...props} 
                as={motion.div}
                variants={loaderVariants}
                animate="animationOne" />
        </>
    )
}
