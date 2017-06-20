import React from 'react'
import renderer from 'react-test-renderer'

import MenuItem from 'material-ui/MenuItem'
import DropDownMenu from './DropDownMenu'
import { describe, it, expect } from 'global'

jest.mock('material-ui/DropDownMenu', () => 'DropDownMenu')
jest.mock('material-ui/MenuItem', () => 'MenuItem')

const component = (
  <DropDownMenu
    value={3}
    style={{
      marginRight: 10
    }}
    maxHeight={300}
  >
    <MenuItem value={1} primaryText='Never' />
    <MenuItem value={2} primaryText='Every Night' />
    <MenuItem value={3} primaryText='Weeknights' />
    <MenuItem value={4} primaryText='Weekends' />
    <MenuItem value={5} primaryText='Weekly' />
  </DropDownMenu>
)

describe('<DropDownMenu />', () => {
  it('should match the snapshot', () => {
    const renderedComponent = renderer.create(component)
    const tree = renderedComponent.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
