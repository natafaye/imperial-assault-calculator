import React from 'react'
import { useSpring, animated } from '@react-spring/web'
import styles from './hover-peek-button.module.css'

export default function HoverPeekButton({ children, as = "button", onClick, className = "", peekClassName, peekTextColor = "white", ...props }) {
    const [{ y }, api] = useSpring(() => ({ y: 100 }))

    const Component = as;

    const show = () => api.start({ y: 0 });
    const hide = () => api.start({ y: 100 })

    return (
        <Component 
            className={`${styles.button} ${className}`}
            onMouseEnter={show}
            onMouseLeave={hide}
            onFocus={show}
            onBlur={hide}
            onClick={onClick}
            {...props}
        >
            <animated.div 
                style={{ transform: y.to(v => `translateY(${v}%)`) }} 
                className={`${styles.peek} ${peekClassName}`}
            />
            <animated.span 
                className={styles.content} 
                style={{ color: y.to(v => v < 50 ? peekTextColor : "" )}}
            >
                {children}
            </animated.span>
        </Component>
    )
}
