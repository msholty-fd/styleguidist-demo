import React from 'react'
import renderer from 'react-test-renderer'
import SettingsButton from './SettingsButton'
import { describe, it, expect } from 'global'

jest.mock('material-ui/IconButton', () => 'IconButton')
jest.mock('material-ui/svg-icons/action/settings', () => 'Settings')
jest.mock('material-ui/svg-icons/navigation/arrow-drop-down', () => 'ArrowDropDown')

const component = <SettingsButton />

describe('<SettingsButton />', () => {
  it('should match the snapshot', () => {
    const renderedComponent = renderer.create(component)
    const tree = renderedComponent.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
