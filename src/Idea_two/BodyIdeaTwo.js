import styled from "styled-components";
import { getRandomGuestName } from "../common/guestList";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const imageList = [
  "1.jpeg",
  "2.jpeg",
  "3.jpeg",
  "4.jpeg",
  "5.jpeg",
  "6.jpeg",
  "7.jpeg",
  "8.jpeg",
  "9.jpeg",
  "10.jpeg",
  "11.jpeg",
  "12.jpeg",
  "13.jpeg",
  "14.jpeg",
  "15.jpeg",
  "16.jpeg",
  "17.jpeg",
  "18.jpeg",
  "19.jpeg",
  "20.jpeg",
  "21.jpeg",
  "22.jpeg",
  "23.jpeg",
];

const BodyIdeaTwo = () => {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const prevImage = () => {
    setCurrent((prev) => (prev - 1 + imageList.length) % imageList.length);
    setAutoPlay(false);
  };

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % imageList.length);
    setAutoPlay(false);
  };

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % imageList.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [autoPlay]);

  const handleMapClick = () => {
    window.open("https://www.google.com/maps", "_blank");
  };
  const handleAttendanceClick = () => {
    console.log("Attendance clicked");
    window.open(
      "https://docs.google.com/forms/d/1VqopmdVKPAVLmQP6OCGMq2ehTwHDrrCMpoNnj92d6ts/edit",
      "_blank"
    );
  };
  const randomGuest = getRandomGuestName();
  return (
    <Container>
      <BodyContainer>
        <Border>
          <Presentation>
            <h4>¡Nos casamos!</h4>
            <h2>
              <span>Felipe</span>
              <br />
              <span>&</span>
              <br />
              <span>Francisca</span>
            </h2>
            <p>
              {randomGuest}, queremos que seas parte de nuestra celebración el
              próximo
            </p>
            <Date>
              <p className="day2">SABADO</p>
              <p className="dayNumberWithYear">
                24
                <span className="year">2026</span>
              </p>
              <p className="month">OCTUBRE</p>
            </Date>
            <br />
            <Place onClick={handleMapClick}>
              <p>A las 12:30 hrs, En un lugar que aún no hemos definido</p>
            </Place>
            <br />
            <p>Dress code</p>
            <p>Formal de jardín</p>
            <Atendance onClick={handleAttendanceClick}>
              <p>Confirmar asistencia</p>
            </Atendance>
            <p>¡Esperamos contar contigo en este día tan especial!</p>
            <p>Con cariño, Felipe & Francisca</p>
          </Presentation>
          <Photos>
            <img
              src={require(`../common/images/${imageList[current]}`)}
              alt={`slide-${current}`}
              style={{ width: "100%", height: "auto", borderRadius: "8px" }}
            />
            <button
              style={{
                position: "absolute",
                top: "50%",
                left: 0,
                transform: "translateY(-50%)",
                background: "rgba(0,0,0,0.3)",
                color: "#fff",
                border: "none",
                borderRadius: "50%",
                width: "32px",
                height: "32px",
                cursor: "pointer",
              }}
              onClick={prevImage}
              aria-label="Anterior"
            >
              &#8592;
            </button>
            <button
              style={{
                position: "absolute",
                top: "50%",
                right: 0,
                transform: "translateY(-50%)",
                background: "rgba(0,0,0,0.3)",
                color: "#fff",
                border: "none",
                borderRadius: "50%",
                width: "32px",
                height: "32px",
                cursor: "pointer",
              }}
              onClick={nextImage}
              aria-label="Siguiente"
            >
              &#8594;
            </button>
          </Photos>
        </Border>
      </BodyContainer>
    </Container>
  );
};

export default BodyIdeaTwo;

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: stretch;
  width: 100%;
  min-height: 100%;
  padding-block: 10%;
  background: #ddded8;
  z-index: 0;
`;
const BodyContainer = styled.div`
  min-width: 80%;
  background-color: #efeee9;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;
const Border = styled.div`
  border: 1px solid darkgoldenrod;
  margin: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;
const Presentation = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  h2 {
    font-family: "Great Vibes", cursive;
    font-size: xxx-large;
    color: #708566;
  }
  h4 {
    font-family: math;
    font-size: larger;
    color: #708566;
  }
  p {
    color: #708566;
  }
`;
const Date = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;

  .day2 {
    text-decoration-line: overline underline;
    text-decoration-thickness: from-font;
    text-underline-offset: 5px;
  }
  .month {
    text-decoration-line: overline underline;
    text-decoration-thickness: from-font;
    text-underline-offset: 5px;
  }
  .dayNumberWithYear {
    position: relative;
    font-size: larger;
    display: inline-block;
    text-align: center;
  }
  .year {
    position: absolute;
    left: 50%;
    top: 100%;
    transform: translateX(-50%);
    color: #708566;
    margin-top: 4px;
  }
`;
const Place = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  p {
    font-family: math;
    font-size: larger;
    color: #708566;
  }
`;
const Atendance = styled.button`
  border: none;
  background: none;
  pointer-events: all;
  cursor: pointer;
  p {
    font-family: math;
    font-size: larger;
    color: #708566;
  }
`;
const Photos = styled.div`
  position: relative;
  max-width: 80%;
  margin: 40px auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
