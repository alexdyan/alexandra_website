import React, {useRef, useState, useEffect} from 'react';
import p5 from 'p5';

const SideCanvas = () => {
    const ref = useRef();

    /* p5 setup function */
    const setup = (p, parent) => {
        const {width, height} = parent.getBoundingClientRect()
        // p.createCanvas(width, height)
        // p.ellipse(width/2, height/2, 50, 50)        
    }

    useEffect(() => {
        const sketch = new p5((p) => {
            p.setup = () => setup(p, ref.current)}, ref.current)
    }, [])
    
    return (
        <div style={{width: '100px', height: '100px'}} ref={ref}></div>
    )
}

export default SideCanvas