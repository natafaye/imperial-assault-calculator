import { useSpring, animated } from '@react-spring/web'
import styles from './hover-peek-button.module.css'

type HoverPeekButtonProps<C extends React.ElementType> = { 
    children: React.ReactNode, 
    peekClassName: string
    as?: C,
    className?: string
    peekTextColor?: string
} & React.ComponentPropsWithoutRef<C>

/**
 * A button that has a different background that slides in when the button is hovered or focused
 */
export default function HoverPeekButton<C extends React.ElementType = "button">({ 
    children, peekClassName, as, className = "", peekTextColor = "white", ...props 
}: HoverPeekButtonProps<C>) {
    const [{ y }, api] = useSpring(() => ({ y: 100 }))

    const Component = as || "button";

    const show = () => api.start({ y: 0 });
    const hide = () => api.start({ y: 100 })

    return (
        <Component 
            className={`${styles.button} ${className}`}
            onMouseEnter={show}
            onMouseLeave={hide}
            onFocus={show}
            onBlur={hide}
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
