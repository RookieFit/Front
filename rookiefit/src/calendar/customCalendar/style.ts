import styled from "@emotion/styled";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

// 캘린더를 감싸주는 스타일
export const StyledCalendarWrapper = styled.div`
  width: 50vw;
  height: 42vw;
  display: flex;
  justify-content: center;
  position: absolute;

  .react-calendar { 
    margin: 1.5vw auto;
    width: 100%;
    max-width: 35vw;  /* 최대 크기 제한 */
    border: none;
    border-radius: 1rem;
    box-shadow: 4px 2px 10px 0px rgba(0, 0, 0, 0.13);
    padding: 1vw 1vw;
    background-color: white;
    font-size: 18px;
    font-weight: bold;
    line-height: 3.5vw;
  }

  .react-calendar__month-view__weekdays__weekday {
    color: #000;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 0.7vw;
  }

  /* 오늘 날짜 */
  .react-calendar__tile--now {
    background-color: #F05650;
    opacity: 0.6;
    color: #000;
    font-size: 18px;
    font-weight: bold;
    border-radius: 50px;
  }

  /* 오늘 날짜에 마우스 오버 시 색상 변경 제거 */
  .react-calendar__tile--now:hover {
    background-color: #292929;
    color: #000;
  }

  /* 선택된 날짜의 배경색 변경 */
  .react-calendar__tile--active {
    background-color: #51F8C4;
    color: #000;
    font-size: 18px;
    font-weight: bold;
    border-radius: 50px;
  }

  .react-calendar__tile--hasActive {
    background: #51F8C4;
  }

  .react-calendar__tile--active:enabled:hover, .react-calendar__tile--active:enabled:focus {
    background: #51F8C4;
  }

  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background-color: #51F8C4;
    opacity: 0.7;
    border-radius: 50px;
    color: #000;
  }

  /* 네비게이션 폰트 설정 */
  .react-calendar__navigation button {
    font-weight: 800;
    font-size: 1rem;
  }
`
// 캘린더를 불러옴
export const StyledCalendar = styled(Calendar)`
`;