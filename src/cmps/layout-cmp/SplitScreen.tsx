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
    children: React.ReactNode[],
    leftWeight: number,
    rightWeight: number

}

export const SplitScreen =  ({
    children,
    leftWeight = 1,
    rightWeight = 1
}:IProps): JSX.Element => {
    const [ left, right ] = children;
    return(
        <Container>
            <Pane weight={leftWeight}>
                {left}
            </Pane>
            <Pane weight={rightWeight}>
            {right}
            </Pane>
        </Container>
    )
}