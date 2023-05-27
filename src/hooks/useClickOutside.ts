import { useEffect } from 'react';

/**
 * A hook for listening to clicks anywhere outside of a DOM element
 */
export const useClickOutside = (targetRef: React.RefObject<Element>, onClickOutside: EventListener) => {
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (targetRef.current && !targetRef.current.contains(event.target as Element)) 
                onClickOutside(event)
        }
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [targetRef, onClickOutside]);
}