import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createColumnHelper } from "@tanstack/react-table";
import { Button } from "react-bootstrap";
import UnitLabel from "../../components/labels-with-popovers/UnitLabel"
import WeaponLabel from "../../components/labels-with-popovers/WeaponLabel"
import SummarizedDataLabel from "../../components/labels/SummarizedDataLabel";
import SurgeListLabels from "../../components/labels/SurgeListLabels";
import PropertyIcon from "../../components/icons/PropertyIcon";
import DieIcon from "../../components/icons/DieIcon";
import { ACC, BLACK, DAM, WHITE } from "../../data";

const AverageHeader = ({ die, property }) => (
    <span className="d-inline-flex align-items-center">
        <DieIcon color={die} />
        <span className="mx-1">Avg</span>
        <PropertyIcon property={property} />
    </span>
)

const AverageCell = ({ value, property }) => (
    <span className="d-inline-flex align-items-center">
        <span className="me-1">{value.toFixed(2)}</span>
        <PropertyIcon property={property} />
    </span>
)

const CostCell = ({ weapon, unit }) => {
    if(weapon && weapon.cost) 
        return weapon.cost
    else if(unit && unit.deploymentCost) 
        return unit.deploymentCost + (unit.reinforceCost ? " | " + unit.reinforceCost : "")
    return undefined
}

const RowActions = ({ id, onDelete }) => (
    <Button variant="outline-danger" size="sm" onClick={() => onDelete(id)}>
        <FontAwesomeIcon icon={faTrash} title="Delete Attack" />
    </Button>
)

const columnHelper = createColumnHelper();

export const getTableColumns = (onDelete) => [
    columnHelper.accessor('name', {
        header: "Name"
    }),
    columnHelper.accessor(row => row.unitData.unit?.name, {
        header: "Unit",
        cell: info => <UnitLabel unit={info.row.original.unitData.unit} placement="right"/>
    }),
    columnHelper.accessor(row => row.unitData.weapon?.name, {
        header: "Weapon",
        cell: info => <WeaponLabel weapon={info.row.original.unitData.weapon} placement="right"/>
    }),
    columnHelper.accessor(row => row.unitData.unit?.deploymentCost, {
        header: "Unit Cost",
        cell: info => <CostCell unit={info.row.original.unitData.unit}/>
    }),
    columnHelper.accessor(row => row.unitData.weapon?.cost, {
        header: "Weapon Cost",
        cell: info => <CostCell weapon={info.row.original.unitData.weapon}/>
    }),
    columnHelper.accessor(row => row.dice, {
        header: "Stats",
        cell: info => <SummarizedDataLabel
            data={info.row.original}
            expandSurges={false}
            labelAttack={false}
            isAttack
        />
    }),
    columnHelper.accessor(row => row.surgeAbilities, {
        header: "Surges",
        cell: info => <SurgeListLabels abilities={info.row.original.surgeAbilities} showHRBelow={false} />
    }),
    columnHelper.accessor('blackAvgDam', {
        header: <AverageHeader die={BLACK} property={DAM} />,
        cell: info => <AverageCell value={info.getValue()} property={DAM} />
    }),
    columnHelper.accessor('whiteAvgDam', {
        header: <AverageHeader die={WHITE} property={DAM} />,
        cell: info => <AverageCell value={info.getValue()} property={DAM} />
    }),
    columnHelper.accessor('blackAvgAcc', {
        header: <AverageHeader die={BLACK} property={ACC} />,
        cell: info => <AverageCell value={info.getValue()} property={ACC} />
    }),
    columnHelper.accessor('whiteAvgAcc', {
        header: <AverageHeader die={WHITE} property={ACC} />,
        cell: info => <AverageCell value={info.getValue()} property={ACC} />
    }),
    columnHelper.display({
        id: 'actions',
        header: "Actions",
        cell: props => <RowActions id={props.row.original.id} onDelete={onDelete} />
    })
]

export const getInitialColumnVisibility = () => ({
    "blackAvgAcc": false,
    "whiteAvgAcc": false,
    "Surges": false,
    "Unit": false,
    "Weapon": false,
    "Unit Cost": false,
    "Weapon Cost": false
})