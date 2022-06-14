import { FC } from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
`
interface IPaneProps{
    weight: number,
}
const Pane = styled.div<IPaneProps>`
flex: ${p => p.weight};
`
interface IProps{
    left: FC,
    right: FC,
    leftWeight: number,
    rightWeight: number

}

export const SplitScreen =  ({
    left: Left,
    right: Right,
    leftWeight = 1,
    rightWeight = 1
}:IProps): JSX.Element => {
    return(
        <Container>
            <Pane weight={leftWeight}>
                <Left />
            </Pane>
            <Pane weight={rightWeight}>
                <Right />
            </Pane>
        </Container>
    )
}