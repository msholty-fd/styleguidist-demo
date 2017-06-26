import React from 'react'
import renderer from 'react-test-renderer'
import TextField from './TextField'
import { describe, it, expect } from 'global'

const component = <TextField name='jest' />

describe('<TextField />', () => {
  it('should match the snapshot', () => {
    const renderedComponent = renderer.create(component)
    const tree = renderedComponent.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
