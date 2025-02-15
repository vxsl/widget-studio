import React, { useMemo, useState } from 'react'
import PropTypes from 'prop-types'

import { getTailwindConfigColor, makeStyles } from '@eqworks/lumen-labs'
import { nanoid } from 'nanoid'


const classes = makeStyles({
  outerContainer: {
    fontSize: '0.857rem',
    width: '100%',
    display: 'flex',
  },
  label: {
    color: getTailwindConfigColor('secondary-800'),
    marginLeft: '0.4rem',
    marginRight: '1.7rem',
  },
  disabledLabel: {
    color: getTailwindConfigColor('secondary-500'),
    userSelect: 'none',
    cursor: 'default',
  },
})

const CustomRadio = ({ labels, value, update, disableFirst, disableSecond }) => {
  const [id] = useState(nanoid())
  const elValues = useMemo(() => (
    value === undefined
      ? ['false', 'false']
      : [value.toString(), (!value).toString()]
  ), [value])
  return (
    <fieldset
      className={classes.outerContainer}
    >
      <div>
        <input
          type="radio"
          name={id}
          disabled={disableFirst}
          value={elValues[0]}
          checked={elValues[0] === 'true'}
          onChange={() => update(true)}
        />
        <span className={`${classes.label} ${disableFirst ? classes.disabledLabel : ''}`}>
          {labels[0]}
        </span>
      </div>
      <div>
        <input
          type="radio"
          name={id}
          disabled={disableSecond}
          value={elValues[1]}
          checked={elValues[1] === 'true'}
          onChange={() => update(false)}
        />
        <span className={`${classes.label} ${disableSecond ? classes.disabledLabel : ''}`}>
          {labels[1]}
        </span>
      </div>
    </fieldset >
  )
}

CustomRadio.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.bool.isRequired,
  update: PropTypes.func.isRequired,
  disableFirst: PropTypes.bool,
  disableSecond: PropTypes.bool,
}

CustomRadio.defaultProps = {
  labels: ['', ''],
  disableFirst: false,
  disableSecond: false,
}

export default CustomRadio
