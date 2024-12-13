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

const classes = makeStyles({
  root: {
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    backgroundColor: '#eaeaea',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.5rem',
    backgroundColor: '#222',
    color: '#fff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  },
  title: {
    fontSize: '1.5rem',
    margin: 0,
  },
  link: {
    color: '#61dafb',
    textDecoration: 'none',
    fontSize: '1rem',
  },
  'p-link': {
    color: '#1a65e8',
  },
  intro: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '2rem',
    padding: '3rem',
    alignItems: 'center',
    backgroundColor: '#fff',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
  },
  textBlock: {
    maxWidth: '600px',
    fontSize: '1.2rem',
    lineHeight: '1.6',
  },
  widgetsSection: {
    padding: '3rem',
    backgroundColor: '#f4f4f4',
  },
  widgetsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(800px, 1fr))',
    gap: '1.5rem',
  },
  widget: {
    aspectRatio: 2,
    borderRadius: '0.6rem',
    backgroundColor: '#fff',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)',
  },
})

function App() {
  const firstWidgetId = Object.keys(sampleConfigs)[0]

  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <h1 className={classes.title}>Widget Studio</h1>
        <a
          href="https://github.com/vxsl/widget-studio"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          GitHub
        </a>
      </header>

      <div className={classes.intro}>
        <div className={classes.textBlock}>
          <p>
            This is a quick demo of{' '}
            <a className={classes['p-link']} href="https://eqworks.com/">
              EQ Works
            </a>
            &apos; <strong>Widget Studio</strong>, a browser-based tool for
            interactively creating data visualizations. This demo showcases the
            capabilities of the project as it was during my time leading its
            development at EQ Works. Explore a widget in editor mode and
            browse additional widgets in the collection, which can also be
            configured by clicking on the cog icons in the top-right.
          </p>
        </div>
        <div>
          <Widget
            {...devProps}
            id={firstWidgetId}
            mode={modes.EDITOR}
            className={classes.widget}
            allowOpenInEditor
          />
        </div>
      </div>

      <section className={classes.widgetsSection}>
        <h2>Explore Other Widgets</h2>
        <div className={classes.widgetsGrid}>
          {Object.keys(sampleConfigs).map((id) =>
            id !== firstWidgetId ? (
              <Widget
                {...devProps}
                key={id}
                mode={modes.COMPACT}
                id={id}
                staticData
                className={classes.widget}
                allowOpenInEditor
              />
            ) : null
          )}
        </div>
      </section>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
