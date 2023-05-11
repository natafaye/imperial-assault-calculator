import { faChartSimple, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createColumnHelper } from "@tanstack/react-table";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SummarizedDataLabel, SurgeListLabels, CardLabel } from "../_labels"
import PropertyIcon from "../_icons/PropertyIcon";
import DieIcon from "../_icons/DieIcon";
import { getSearchParamsForAttack } from "../../utilities";
import { ACC, BLACK, DAM, WHITE } from "../../data";

const AverageHeader = ({ die, property }) => (
    <span className="d-inline-flex align-items-center">
        <DieIcon color={die} />
        <span className="mx-1">Avg</span>
        <PropertyIcon property={property} />
    </span>
)

const AccuracyHeader = ({ type }) => (
    <span className="d-inline-flex align-items-center">
        <span className="mx-1">{type}</span>
        <PropertyIcon property={ACC} />
    </span>
)

const ValueCell = ({ value, property, decimalPoints = 2 }) => (
    <span className="d-inline-flex align-items-center">
        <span className="me-1">{value.toFixed(decimalPoints)}</span>
        <PropertyIcon property={property} />
    </span>
)

const RowActions = ({ id, onDelete, searchParams }) => (
    <>
        <Link to={"/?" + searchParams.toString()} className="btn btn-outline-warning btn-sm me-2 mb-2">
            <FontAwesomeIcon icon={faChartSimple} title="See stats for this attack" />
        </Link>
        <Button variant="outline-danger" className="mb-2" size="sm" onClick={() => onDelete(id)}>
            <FontAwesomeIcon icon={faTrash} title="Delete attack" />
        </Button>
    </>
)

const columnHelper = createColumnHelper();

export const getTableColumns = (onDelete) => [
    columnHelper.accessor('name', {
        header: "Name"
    }),
    columnHelper.accessor(row => row.unitData?.cards?.map(c => c.name).join(", "), {
        header: "Cards",
        cell: info => <>
            { info.row.original.unitData?.cards?.map(card => 
                <span className="me-2" key={card.id}>
                    <CardLabel card={card} placement="right"/>
                </span>
            )}
        </>
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
        cell: info => <ValueCell value={info.getValue()} property={DAM} />
    }),
    columnHelper.accessor('whiteAvgDam', {
        header: <AverageHeader die={WHITE} property={DAM} />,
        cell: info => <ValueCell value={info.getValue()} property={DAM} />
    }),
    columnHelper.accessor('minAcc', {
        header: <AccuracyHeader type="Min" />,
        cell: info => <ValueCell value={info.getValue()} property={ACC} decimalPoints={0} />
    }),
    columnHelper.accessor('maxAcc', {
        header: <AccuracyHeader type="Max" />,
        cell: info => <ValueCell value={info.getValue()} property={ACC} decimalPoints={0} />
    }),
    columnHelper.display({
        id: 'actions',
        header: "Actions",
        cell: props => <RowActions id={props.row.original.id} onDelete={onDelete} searchParams={getSearchParamsForAttack(props.row.original)} />
    })
]

export const getInitialColumnVisibility = () => ({
    "minAcc": false,
    "maxAcc": false,
    "Surges": false,
    "Unit": false,
    "Weapon": false,
    "Unit Cost": false,
    "Weapon Cost": false
})