import styled from 'styled-components';
const Body = () => {

    const mapIcon = <i className="bi bi-pin-map"></i>;
    const flower = <i className="bi bi-flower1"></i>;
    const handPointer = <i className="bi bi-hand-index"></i>;

    const handleMapClick = () => {
        console.log("Map clicked");
        window.open('https://www.google.com/maps', '_blank');
    }
    const handleAttendanceClick = () => {
        console.log("Attendance clicked");
        window.open('https://docs.google.com/forms/d/1VqopmdVKPAVLmQP6OCGMq2ehTwHDrrCMpoNnj92d6ts/edit', '_blank');
    }
    return (
        <Card>
            <TopCurve>
                <svg viewBox="0 0 500 32" preserveAspectRatio="none">
                    <path
                        d="M0,15 
                                        Q125,0 250,15 Q375,30 500,15 
                                        L500,0 L0,0 Z"
                        fill="#738259"
                    />
                </svg>
            </TopCurve>
            <Content>
                <h3>Te invitamos a celebrar nuestro matrimonio</h3>
                <h1>Francisca & Felipe</h1>
                <hr />
                <h3>El 15 de Marzo de 2025</h3>
                <div className='location'>
                    <h3>En un lugar que no hemos definido</h3> <MapButton onClick={handleMapClick}>{mapIcon}</MapButton>
                </div>
                <h3>a las 14 horas</h3>
                <br />
                <h5>el dress code es: coctel jardín {flower}</h5>
                <AttendanceButton onClick={handleAttendanceClick}>Para confirmar asistencia has click aquí {handPointer}
                </AttendanceButton>
                <h5>Lista de regalos</h5>
            </Content>
            <BottomCurve>
                <svg viewBox="0 0 500 32" preserveAspectRatio="none">
                    <path
                        d="M0,17 Q175,32 300,17 Q425,0 500,17 L500,32 L0,32 Z"
                        fill="#738259"
                    />
                </svg>
            </BottomCurve>
        </Card>
    );
}

export default Body;

const Card = styled.div`
    position: absolute;
    top: -50%;
    width: 100%;
    height: 200%;
    display: flex;
    flex-direction: column;
    background: #F2E7DA;
    overflow: hidden;
`;

const TopCurve = styled.div`
    width: 100%;
    height: 32px;
    position: relative;
    svg {
        position: absolute;
        top: 0; left: 0;
        width: 100%;
        height: 100%;
        display: block;
    }
`;

const BottomCurve = styled.div`
    width: 100%;
    height: 32px;
    position: relative;
    svg {
        position: absolute;
        bottom: 0; left: 0;
        width: 100%;
        height: 100%;
        display: block;
    }
`;

const Content = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;

    h1, h3, h2, h4, h5 {
        margin: 1px;
        text-align: center;
        font-family: fantasy;
    }

    hr{
    width: 100%;
    margin: inherit;
    background-color: #F2E7DA;
    border-width: thin;
    opacity: 21%;
    box-shadow: 0 0px 8px #5c3b09;
    }

    .location {
        display: flex;
        justify-content: center;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        width: 100%;
    }
`;

const MapButton = styled.button`
    width: 32px;
    height: 32px;
    margin: 0;
    background: none;
    border: none;
    pointer-events: auto;
    cursor: pointer;
`;
const AttendanceButton = styled.button`
    margin: 0;
    background: none;
    border: none;
    pointer-events: auto;
    cursor: pointer;
    font-family: fantasy;

    .bi-hand-index {
        display: inline-block;
        transform: rotate(-74deg);
        transition: transform 0.3s;
    }
`;