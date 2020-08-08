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
    width: 40%;
    height: 100vh;
    position: fixed;
    top: 8vh; /* directly below the header */
    z-index: 100;
    transition: linear .2s;
`

// const CloseIcon = styled.svg`
//     width: 24px;
//     height: 24px;
//     padding: 5%;
//     cursor: pointer;
// `

function SideMenu({visible, onClosePressed, children, className}) {
    const ref = useRef();
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const {width} = ref.current.getBoundingClientRect()
        setWidth(width)
        
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
        <Container className={`${className}`} ref={ref} style={{right: (visible ? 0 : -width)}} >
            {/* <CloseIcon viewBox={[0, 0, 100, 100]} onClick={onClosePressed}>
                <line x1='0' y1='0' x2='100' y2='100' stroke="white" strokeWidth='8'></line>
                <line x1='100' y1='0' x2='0' y2='100' stroke='white' strokeWidth='8'></line>
            </CloseIcon> */}
            {children}
        </Container>
    )
}

export default SideMenu;