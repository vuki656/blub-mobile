import * as React from 'react'
import renderer from 'react-test-renderer'

import { MonoText } from '../StyledText'

it('renders correctly', () => {
    const component = (
        <MonoText>
            Snapshot test!
        </MonoText>
    )

    const tree = renderer.create(component).toJSON()

    expect(tree).toMatchSnapshot()
})
