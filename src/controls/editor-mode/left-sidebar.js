import React from 'react'

import { useStoreState } from '../../store'
import types from '../../constants/types'
import WidgetTypeControls from '../shared/type-controls'
import DomainControls from '../shared/domain-controls'
import MapDomainControls from '../shared/map-domain-controls'
import ValueControls from '../shared/value-controls'
import MapValueControls from '../shared/map-value-controls'
import EditorSidebarBase from './sidebar-base'
import DataTransformationControls from '../shared/data-transformation-controls'
import DataSourceControls from './components/data-source-controls'


const EditorLeftSidebar = () => {
  const type = useStoreState((state) => state.type)
  return (
    <EditorSidebarBase isLeft>
      <DataSourceControls />
      <WidgetTypeControls />
      {
        type && type === types.MAP
          ? <>
            <MapDomainControls />
            <MapValueControls />
          </>
          : <>
            <DomainControls />
            <ValueControls />
            <DataTransformationControls />
          </>
      }
    </EditorSidebarBase>
  )
}

export default EditorLeftSidebar
