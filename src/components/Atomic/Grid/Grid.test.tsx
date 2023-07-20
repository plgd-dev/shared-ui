import { render } from '@testing-library/react'
import Row from './Row'
import { Column } from './index'

describe('<Grid>', () => {
    it('render correctly - snapshot', () => {
        const { asFragment } = render(
            <div>
                <Row>
                    <Column size={1}>Col 1</Column>
                    <Column size={1}>Col 1</Column>
                    <Column size={1}>Col 1</Column>
                    <Column size={1}>Col 1</Column>
                    <Column size={1}>Col 1</Column>
                    <Column size={1}>Col 1</Column>
                    <Column size={1}>Col 1</Column>
                    <Column size={1}>Col 1</Column>
                    <Column size={1}>Col 1</Column>
                    <Column size={1}>Col 1</Column>
                    <Column size={1}>Col 1</Column>
                    <Column size={1}>Col 1</Column>
                </Row>
                <Row>
                    <Column size={2}>Col 2</Column>
                    <Column size={2}>Col 2</Column>
                    <Column size={2}>Col 2</Column>
                    <Column size={2}>Col 2</Column>
                    <Column size={2}>Col 2</Column>
                    <Column size={2}>Col 2</Column>
                </Row>
                <Row>
                    <Column size={3}>Col 3</Column>
                    <Column size={3}>Col 3</Column>
                    <Column size={3}>Col 3</Column>
                    <Column size={3}>Col 3</Column>
                </Row>
                <Row>
                    <Column size={4}>Col 4</Column>
                    <Column size={4}>Col 4</Column>
                    <Column size={4}>Col 4</Column>
                </Row>
                <Row>
                    <Column size={5}>Col 5</Column>
                    <Column size={7}>Col 7</Column>
                </Row>
                <Row>
                    <Column size={6}>Col 6</Column>
                    <Column size={6}>Col 6</Column>
                </Row>
                <Row>
                    <Column size={7}>Col 7</Column>
                    <Column size={5}>Col 5</Column>
                </Row>
                <Row>
                    <Column size={8}>Col 8</Column>
                    <Column size={4}>Col 4</Column>
                </Row>
                <Row>
                    <Column size={9}>Col 9</Column>
                    <Column size={3}>Col 3</Column>
                </Row>
                <Row>
                    <Column size={10}>Col 10</Column>
                    <Column size={2}>Col 2</Column>
                </Row>
                <Row>
                    <Column size={11}>Col 11</Column>
                    <Column size={1}>Col 1</Column>
                </Row>
                <Row>
                    <Column size={12}>Col 12</Column>
                </Row>
            </div>
        )

        expect(asFragment()).toMatchSnapshot()
    })
})
