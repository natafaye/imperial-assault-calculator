import { useCollapseAll } from './CollapseProvider';

type CollapseAllButtonProps<C extends React.ElementType> = { 
    children: (allCollapsed: boolean) => React.ReactNode, 
    as?: C 
} & React.ComponentPropsWithoutRef<C>

export default function CollapseAllButton<C extends React.ElementType = "button">(
    { children, as, ...props }: CollapseAllButtonProps<C>
) {
    const [allCollapsed, setCollapseAll] = useCollapseAll()
    
    const Component = as || "button";

    return (
        <Component {...props} onClick={() => setCollapseAll(!allCollapsed)}>
            { children(allCollapsed) }
        </Component>
    )
}
