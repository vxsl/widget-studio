import React from 'react'
import PropTypes from 'prop-types'
import { DropdownSelect, Icons } from '@eqworks/lumen-labs'


export const DROPDOWN_SELECT_CLASSES = {
  root: 'shadow-light-10 border-2 border-secondary-200 rounded-md',
  button: 'tracking-widest border-none max-h-20 overflow-y-auto',
  menu: 'w-full z-50',
  content: 'children:fill-current children:text-secondary-500',
  selectedOptionTitle: 'normal-case text-primary-600 truncate overflow-hidden',
  listContainer: 'normal-case',
  innerButton: 'truncate',
}
const { root, ...baseClasses } = DROPDOWN_SELECT_CLASSES

const CustomSelect = ({ classes, onClear, fullWidth, ...props }) => (
  <DropdownSelect simple
    classes={{
      root: fullWidth ? [root, 'w-full'].join(' ') : root,
      ...baseClasses,
      ...classes,
    }}
    overflow='vertical'
    endIcon={<Icons.ArrowDown size='md' />}
    onDelete={onClear}
    {...props}
  />
)


CustomSelect.propTypes = {
  classes: PropTypes.object,
  data: PropTypes.array,
  multiSelect: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),
  onSelect: PropTypes.func.isRequired,
  onClear: PropTypes.func,
  fullWidth: PropTypes.bool,
}
CustomSelect.defaultProps = {
  classes: {},
  data: [],
  multiSelect: false,
  value: '',
  onClear: () => { },
  fullWidth: false,
}

export default CustomSelect