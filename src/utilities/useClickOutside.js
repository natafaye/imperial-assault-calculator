import { useEffect } from 'react';

/**
 * A hook for listening to clicks anywhere outside of a DOM node
 * @param {Node} targetRef A reference to the DOM node for listening to clicks outside of
 * @param {function} onClickOutside The event listener for outside clicks
 */
export const useClickOutside = (targetRef, onClickOutside) => {
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (targetRef.current && !targetRef.current.contains(event.target)) onClickOutside()
        }
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [targetRef, onClickOutside]);
}