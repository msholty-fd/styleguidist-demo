import React from 'react'
import renderer from 'react-test-renderer'
import { MenuItem } from 'material-ui'
import { describe, it, expect } from 'global'

import Menu from './Menu'

jest.mock('material-ui/Menu', () => 'Menu')
jest.mock('material-ui/MenuItem', () => 'MenuItem')

const component = (
  <Menu>
    <MenuItem value={1} primaryText='Never' />
    <MenuItem value={2} primaryText='Every Night' />
    <MenuItem value={3} primaryText='Weeknights' />
    <MenuItem value={4} primaryText='Weekends' />
    <MenuItem value={5} primaryText='Weekly' />
  </Menu>
)

describe('<Menu />', () => {
  it('should match the snapshot', () => {
    const renderedComponent = renderer.create(component)
    const tree = renderedComponent.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
