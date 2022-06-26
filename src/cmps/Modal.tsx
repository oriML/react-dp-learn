import { useState } from 'react'
import styled from 'styled-components'

const ModalBackground = styled.div`
	position: fixed;
	z-index: 1;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	overflow: auto;
	background-color: rgba(0, 0, 0, 0.5);
    animation: fadein .5s;

    @keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }
`;

const ModalBody = styled.div`
	background-color: white;
	margin: 10% auto;
	padding: 20px;
	width: 50%;
`;

export const Modal = ( {children}: any ) => {

    const [shouldShow, setShouldShow] = useState(false);

    return (
        <>
            <button onClick={() => setShouldShow(true)} >Show Modal</button>
            {
                shouldShow && (
                <ModalBackground onClick={() => setShouldShow(false)} >
                    <ModalBody onClick={e => e.stopPropagation()} >
                        <button onClick={() => setShouldShow(false)}>Close Modal</button>
                        {children}
                    </ModalBody>
                </ModalBackground>
            )}
        </>
    )
}
