import React, {useRef, useState, useEffect} from 'react';

function MenuIcon({style, onClick}) {
    const ref = useRef()

    const [size, setSize] = useState({width: 0, height: 0})

    useEffect(() => {
        const bounds = ref.current.getBoundingClientRect()
        setSize({width: bounds.width, height: bounds.height})
    }, [ref])

    return (
        <svg style={style} ref={ref} viewBox={[0, 0, size.width, size.height]} onClick={onClick}>
            <rect width={size.width} height={size.height/5} fill='#ebe6e6' ></rect>
            <rect y={size.height/5 * 2} width={size.width} height={size.height/5} fill='#ebe6e6' ></rect>
            <rect y={size.height/5 * 4} width={size.width} height={size.height/5} fill='#ebe6e6' ></rect>
        </svg>
    )
}


export default MenuIcon;