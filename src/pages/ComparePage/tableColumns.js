import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createColumnHelper } from "@tanstack/react-table";
import { Button } from "react-bootstrap";
import DieIcon from "../../components/icons/DieIcon";
import SummarizedDataLabel from "../../components/labels/SummarizedDataLabel";
import SurgeListLabels from "../../components/labels/SurgeListLabels";
import PropertyIcon from "../../components/icons/PropertyIcon";
import { ACC, BLACK, DAM, WHITE } from "../../data/dice";

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
    "Surges": false
})