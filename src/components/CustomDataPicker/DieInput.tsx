import { useCallback, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import DieSelectMenu from "./DieSelectMenu";
import { changenumber, deleteDie } from "./useCustomData";
import { useClickOutside } from "../../hooks/useClickOutside";
import DieIcon from "../_icons/DieIcon";

type DieInputProps = {
    color: Die,
    index: number,
    dispatch: CustomDispatch,
    side?: number,
    picknumbers?: boolean
}

export default function DieInput({ color, index, dispatch, side, picknumbers = false }: DieInputProps) {
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

    const menuRef = useRef(null)
    const closeMenu = useCallback(() => setIsSideMenuOpen(false), [])
    useClickOutside(menuRef, closeMenu)

    const onDeleteDie = (index: number) => dispatch(deleteDie(index))

    const onSideChange = (value: number) => {
        dispatch(changenumber({ index, value }))
        setIsSideMenuOpen(false)
    }

    return (
        <div className="flex-shrink-0 my-1" style={{ flexBasis: "90px" }}>
            <div className="d-flex">
                <div ref={menuRef} style={{ lineHeight: "0" }}>
                    { !picknumbers ?
                        <div className="border border-secondary rounded-0 rounded-start py-2 px-2" style={{ lineHeight: "0" }}>
                            <DieIcon color={color} side={side} size={2} />
                        </div>
                        :
                        <>
                            <button className="btn btn-outline-secondary flex-shrink-0 rounded-0 rounded-start p-2" onClick={() => setIsSideMenuOpen(!isSideMenuOpen)}>
                                <DieIcon color={color} side={side} size={3} />
                            </button>
                            <DieSelectMenu
                                isOpen={isSideMenuOpen}
                                onChange={onSideChange}
                                selected={side || 0}
                                options={Array(6).fill(null).map((_, sideIndex) =>
                                    ({ value: sideIndex, label: <DieIcon color={color} side={sideIndex as number} size={3} /> })
                                )}
                            />
                        </>
                    }
                </div>
                <Button
                    variant="outline-secondary"
                    size="sm"
                    onClick={() => onDeleteDie(index)}
                    className="border-start-0 rounded-0 rounded-end me-2"
                >
                    <FontAwesomeIcon icon={faXmark} title={`Delete ${color} die`} />
                </Button>
            </div>
        </div>
    )
}