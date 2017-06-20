import React from 'react'
import renderer from 'react-test-renderer'
import RaisedButton from './RaisedButton'
import { describe, it, expect } from 'global'

const component = <RaisedButton label='Primary' primary />

describe('<RaisedButton />', () => {
  it('should match the snapshot', () => {
    const renderedComponent = renderer.create(component)
    const tree = renderedComponent.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
