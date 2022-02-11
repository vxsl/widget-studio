import React, { useMemo } from 'react'

import { useStoreState, useStoreActions } from '../../store'
import CustomSelect from '../../components/custom-select'
import WidgetControlCard from '../shared/components/widget-control-card'
import { renderRow, renderSection } from './util'
import { MAP_LAYER_VIS, MAP_LAYER_GEO_KEYS } from '../../constants/map'


const MapDomainControls = () => {
  // common actions
  const update = useStoreActions(actions => actions.update)
  const userUpdate = useStoreActions(actions => actions.userUpdate)

  // common state
  const columns = useStoreState((state) => state.columns)
  const mapGroupKey = useStoreState((state) => state.mapGroupKey)
  const validMapGroupKeys = useStoreState((state) => state.validMapGroupKeys)
  const valueKeys = useStoreState((state) => state.valueKeys)
  const domain = useStoreState((state) => state.domain)


  const eligibleDomainValues = useMemo(() => (
    columns.map(({ name }) => name)
      .filter(c =>
        !(valueKeys.map(({ key }) => key).includes(c))
        && validMapGroupKeys.includes(c)
      )
  ), [columns, validMapGroupKeys, valueKeys])

  const mapLayer = useMemo(() => (
    Object.keys(MAP_LAYER_VIS)
      .find(layer => MAP_LAYER_GEO_KEYS[layer].includes(mapGroupKey))
  ), [mapGroupKey])

  return (
    <WidgetControlCard title={'Layer Configuration'} >
      {
        renderSection(null,
          renderRow('Column',
            <CustomSelect
              fullWidth
              data={eligibleDomainValues}
              value={domain.value}
              onSelect={val => {
                // update groupKey with mapGroupKey value to have it available if we switch to a chart widget type
                userUpdate({ mapGroupKey: val, groupKey: val })
                const newLayer = Object.keys(MAP_LAYER_VIS)
                  .find(layer => MAP_LAYER_GEO_KEYS[layer].includes(val))
                // reset mapValueKeys when we change to a mapGroupKey that requires a different layer, as different layer requires different visualization types
                if (newLayer !== mapLayer) {
                  update({ mapValueKeys: [] })
                }
              }}
              onClear={() => userUpdate({
                groupKey: null,
                indexKey: null,
                mapGroupKey: null,
                mapValueKeys: [],
              })}
              placeholder={'Select a column to group by'}
            />
          )
        )
      }
    </WidgetControlCard>
  )
}

export default MapDomainControls