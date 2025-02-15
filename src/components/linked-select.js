import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import clsx from 'clsx'
import { makeStyles, Icons, Tooltip } from '@eqworks/lumen-labs'

import CustomSelect from '../components/custom-select'
import CustomButton from '../components/custom-button'


const useStyles = ({ showDelete }) => makeStyles({
  deleteButtonContainer: {
    marginLeft: '0.2rem',
    display: 'flex',
    alignItems: 'stretch',
    width: showDelete ? '2rem' : 0,
    transition: 'width 0.3s',
    overflow: 'hidden',
  },
  deleteButton: {
    border: 'none !important',
    width: '100% !important',
    justifyContent: 'center !important',
  },
})

const LinkedSelect = ({
  className,
  deletable,
  deleteCallback,
  showDelete,
  callback,
  data,
  init,
  subData,
  subInit,
  placeholders,
  disableSub,
  disableSubMessage,
  customRender,
  customRenderSub,
  icons,
}) => {
  const [choice, setChoice] = useState(init)
  const [subChoice, setSubChoice] = useState(subInit)
  const classes = useStyles({ showDelete })

  useEffect(() => {
    setChoice(init)
    setSubChoice(subInit)
  }, [subInit, init])

  useEffect(() => {
    if (callback) {
      callback([choice, subChoice])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [choice, subChoice])

  const renderSub =
    customRenderSub
      ? customRenderSub(subChoice)
      : <CustomSelect
        classes={{
          root: 'w-full shadow-light-10 border-2 border-r-0 border-secondary-200 rounded-md rounded-r-none',
        }}
        data={subData}
        value={disableSub ? '' : subChoice}
        onSelect={setSubChoice}
        disabled={disableSub}
        onClear={() => setSubChoice('')}
        placeholder={disableSub ? 'N/A' : placeholders[1]}
        endIcon={disableSub ? null : <Icons.ArrowDown size='md' />}
      />

  const renderPrimary =
    <div className='border-l border-secondary-50'>
      {
        customRender
          ? customRender(choice)
          : <CustomSelect
            classes={{ root: 'w-full shadow-light-10 border-2 border-secondary-200 rounded-md border-l-0 rounded-l-none' }}
            data={data}
            value={choice}
            onSelect={setChoice}
            onClear={() => setChoice('')}
            placeholder={placeholders[0]}
            {...(icons && { icons })}
          />
      }
    </div>

  const renderDelete =
    <div className={`${classes.deleteButtonContainer} ${className}`}>
      <CustomButton
        classes={{ button: classes.deleteButton }}
        variant='outlined'
        type='error'
        onClick={() => deleteCallback([choice, subChoice])}
      >
        <Icons.Trash size='md' />
      </CustomButton>
    </div>

  return (
    <>
      <div className={`col-span-1 ${className}`}>
        {
          disableSub
            ? <Tooltip
              classes={{ container: 'w-full' }}
              arrow={false}
              description={disableSubMessage}
            >
              {renderSub}
            </Tooltip>
            : renderSub
        }
      </div>
      <div className={clsx(`min-w-0 ${className}`, {
        'col-span-2': !deletable,
        'col-span-1': deletable,
      })}>
        {renderPrimary}
      </div>
      {deletable && renderDelete}
    </>
  )
}
LinkedSelect.propTypes = {
  className: PropTypes.string,
  deletable: PropTypes.bool,
  deleteCallback: PropTypes.func,
  showDelete: PropTypes.bool,
  callback: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
  subData: PropTypes.arrayOf(PropTypes.any).isRequired,
  init: PropTypes.any,
  subInit: PropTypes.any,
  placeholders: PropTypes.arrayOf(PropTypes.string),
  disableSub: PropTypes.bool,
  disableSubMessage: PropTypes.string,
  customRender: PropTypes.func,
  customRenderSub: PropTypes.func,
  icons: PropTypes.array,
}

LinkedSelect.defaultProps = {
  className: '',
  deletable: false,
  deleteCallback: () => console.error('Not implemented'),
  showDelete: false,
  init: '',
  subInit: '',
  placeholders: ['Select', 'Select'],
  disableSub: false,
  disableSubMessage: '',
  customRender: null,
  customRenderSub: null,
  icons: null,
}

export default LinkedSelect
