import { makeStyles } from '@eqworks/lumen-labs'
import React from 'react'
import ReactDOM from 'react-dom'
import modes from './constants/modes'
import sampleConfigs from './sample-configs'
import sampleData from './sample-data'
import Widget from './widget'


console.error = () => {}

const DEFAULT_WL = 2456
const DEFAULT_CU = 27848

const devProps = {
  sampleData,
  sampleConfigs,
  wl: DEFAULT_WL,
  cu: DEFAULT_CU,
}

function App() {
  const classes = makeStyles({
    widget: {
      aspectRatio: 2,
      borderRadius: '0.6rem !important',
    },
  })
  return (
    <>
      <div
        style={{
          padding: '1rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(800px, 1fr))',
          gap: '0.8rem',
        }}
      >
        {Object.keys(sampleConfigs).map((id) => (
          <Widget
            {...devProps}
            key={id}
            mode={modes.COMPACT}
            id={id}
            staticData
            className={classes.widget}
            allowOpenInEditor
          />
        ))}
      </div>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
