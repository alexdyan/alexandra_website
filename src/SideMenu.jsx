import React, {useRef, useEffect, useState} from 'react';
import styled, {keyframes, css} from 'styled-components';

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
`

const Container = styled.div `
    width: 40vh;
    right: 0;
    height: 100vh;
    position: fixed;
    top: 8vh; /* directly below the header */
    z-index: 100;
    transform: ${props =>  props.visible ? 'none' : 'translate3d(20vh, 0, 0)' };
    transition: .3s linear;
`

function SideMenu({visible = false, onClosePressed, children, className}) {
    const ref = useRef();
    useEffect(() => {
        
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                event.stopPropagation();
                onClosePressed();
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref])
    
    return (
        <Container 
            className={`${className}`} 
            ref={ref} 
            visible={visible}
        >
            {children}
        </Container>
    )
}

export default SideMenu;