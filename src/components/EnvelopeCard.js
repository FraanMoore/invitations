import React, { useState } from 'react';
import styled from 'styled-components';
import Body from './Body';

const EnvelopCard = () => {
    const [open, setOpen] = useState(false);
    const handleSealClick = () => {
        console.log('Seal clicked');
        setOpen(!open);
    }

    return (
        <Container>
            <EnvelopeContainer>
                {open && (
                    <>
                        <BodyWrapper>

                        <Body />
                        </BodyWrapper>
                        <FrontEnvelope className='front-envelope'>
                            <CurvedLine viewBox="0 0 500 30" flapopen="true">
                                <svg className="flap-open">
                                    <path
                                        className="fill"
                                        d="M0,15 
                                        Q125,0 250,15 Q375,30 500,15 
                                        L500,0 L0,0 Z"
                                        fill="#F2E7DA"
                                    />
                                </svg>
                            </CurvedLine>
                            <OpenSeal className='button-seal-top' onClick={handleSealClick}></OpenSeal>
                        </FrontEnvelope>
                        <BackEnvelope className='back-envelope'>
                            <CurvedLine viewBox="0 0 500 30" flapopen="true">
                                <g className="flap-open-bottom">
                                    <path
                                        className="fill"
                                        d="M0,15 Q125,30 250,15 Q375,0 500,15 L500,30 L0,30 Z"
                                        fill="#F2E7DA"
                                    />
                                </g>
                            </CurvedLine>
                        </BackEnvelope>
                    </>
                )}
                <Envelope className="envelop">
                    <CurvedLine viewBox="0 0 500 30" className={open ? 'open' : ''}>
                        <g className="flap">
                            <path d="M0,29
                                    Q125,-1 250,14 Q375,29 500,9
                                    L500," stroke="#59603b" strokeWidth="1" fill="transparent" />
                        </g>
                    </CurvedLine>
                    <Seal className={`button-seal ${open ? 'open' : ''}`} onClick={handleSealClick}>
                        F&F
                    </Seal>
                </Envelope>
            </EnvelopeContainer>
        </Container>
    );
};

export default EnvelopCard;

const Container = styled.div`     
    display: grid;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    background: #F2E7DA;
    overflow: hidden; 
    box-sizing: border-box;
    z-index: 0;
`;
const EnvelopeContainer = styled.div`
    position: relative;
    width: clamp(280px, 38vw, 640px);
    aspect-ratio: 500 / 302; 
    background: #738259;
    box-shadow: 0 6px 10px #2e3013;  
`;
const Envelope = styled.div`
    position: absolute;
    inset: 0;                                 
    background: #738259;
    z-index: 0;
`;

const FrontEnvelope = styled.div`
--curveH: clamp(12px, 18%, 28px);
    position: absolute;
    top: -50%;
    left: 0;
    width: 100%;                             
    height: 50%;                              
    z-index: 2;
    background:  #738259;

    box-shadow:
        -16px 0 16px -16px #2e3013,
        16px 0 16px -16px #2e3013;
`;

const BackEnvelope = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;                             
    height: 50%;                              
    z-index: 2;
    background: #738259;
    box-shadow:
        -16px 0 16px -16px #2e3013,
        16px 0 16px -16px #2e3013;

    svg {
        top: 65%;
        left: 0;
        width: 100%;                             
        height: 50%;     
    }
`;

const CurvedLine = styled.svg`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
   // z-index: 1;

    width: 100%;
    height: ${({ flapopen }) => flapopen ? 'none' : '-webkit-fill-available'};
    filter: ${({ flapopen }) => flapopen ? 'none' : 'drop-shadow(0 2px 4px #2e3013)'};

    &.open .flap {
    display: none;
    }
`;

const OpenSeal = styled.button`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: clamp(48px, 8vw, 72px);
    height: clamp(48px, 8vw, 72px);   
    left: 50%;
    top: -5%;
    border-radius: 50%;
    transform: translate(-50%, 0); 
   
    background: radial-gradient(circle at 30% 30%, #b88955, #9b6d3d);
    border: 4px solid #AB7F4D;
    color: #5c3b09;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

        &::before {
        content: '';
        position: absolute;
        top: 28%; 
        left: 50%; 
        width: 150%;
        height: 100%;
        background: #738259;
        clip-path: polygon(50% 1, 0 100%, 100% 100%);
        transform: translate(-50%, 0) rotate(185deg);
    }

    `;

const Seal = styled.button`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: clamp(48px, 8vw, 72px);
    height: clamp(48px, 8vw, 72px);   
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    z-index: 1;
   
    background: radial-gradient(circle at 30% 30%, #b88955, #9b6d3d);
    border: 4px solid #AB7F4D;
    box-shadow: inset 4px 4px 8px rgba(255, 255, 255, 0.3),
                inset -4px -4px 8px rgba(0, 0, 0, 0.4),
                0 4px 8px rgba(0, 0, 0, 0.4);
    color: #5c3b09;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    font-size: medium;
    font-family: cursive;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.4),
                -1px -1px 2px rgba(255,255,255,0.3);

    &.open {
    display: none;
    }
    
`;

const BodyWrapper = styled.div`
    position: absolute;
    inset: 0;
    z-index: 10;
    width: auto;
    height: auto;
    margin: 3%;
    pointer-events: auto;
`;