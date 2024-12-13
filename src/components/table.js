import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { Table as ReactLabsTable } from '@eqworks/react-labs'
import { makeStyles } from '@eqworks/lumen-labs'


/* based on https://github.com/EQWorks/lumen-table/blob/af9f54cbb6e8c6e7a44e1bf44645f5da631a14e1/src/table-toolbar/download.js#L15-L44 */
const jsonToCsv = ({ data, rows, visibleColumns, visCols = false, filteredRows = false }) => {
}

// formerly from util/helpers
const formatCell = ({ value }) => {
  // value is falsey or boolean
  if (!value || !!value === value) {
    return mapFalsy[value]
  }
  // value is array or object
  if (typeof value === 'object') {
    return (
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          JSON
        </AccordionSummary>
        <AccordionDetails>
          <pre>{JSON.stringify(value, undefined, 2)}</pre>
        </AccordionDetails>
      </Accordion>
    )
  }
  return value
}

// formerly from util/helpers
const mapFalsy = {
  0: '0',
  undefined: 'Undefined',
  false: 'False',
  true: 'True',
  null: 'NULL',
  '': 'Unknown',
}

const classes = makeStyles({
  container: {
    '& > .MuiToolbar-root': {
      display: 'none',
    },
  },
})

const Table = ({ rows, showHeader }) => {
  const _rows = useMemo(() => rows || [], [rows])
  const renderTable = (
    <ReactLabsTable
      data={_rows}
      downloadFn={jsonToCsv}
    >
      {Object.keys(_rows[0] || {})?.map((d) => (
        <ReactLabsTable.Column
          key={d}
          Header={d}
          accessor={d}
          Cell={formatCell}
        />
      ))}
    </ReactLabsTable>
  )
  return (
    showHeader
      ? renderTable
      : <div className={classes.container}>{renderTable}</div>
  )
}

Table.propTypes = {
  rows: PropTypes.array,
  showHeader: PropTypes.bool,
}
Table.defaultProps = {
  results: [],
  showHeader: true,
}

export default Table
