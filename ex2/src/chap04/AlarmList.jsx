import React from "react";
import Alarm from "./Alarm";

const reservedAlarms = [
    {
        id: 1,
        message: '[알림] 메세지가 도착했습니다'
    },
    {
        id: 2,
        message: '[기기 로그인 알림]'
    },
    {
        id: 3,
        message: '[픽업완료] 꿀 커피 외 1개'
    }
]

let timer;
let currentAlarmIndex = 0;

const nextAlarm = () => reservedAlarms[currentAlarmIndex++ % reservedAlarms.length]

class AlarmList extends React.Component {
    constructor(props) {
        super(props);

        // 일반 멤버 변수로 선언
        this.alarms = [];

        // state로 변수 선언
        // state 내부에 선언되어 있는 변수를 setState() 메서드로 수정할때마다
        // 해당 컴포넌트의 render()가 자동으로 호출되게끔 설계되어 있다
        this.state = {
            alarm: nextAlarm(),
            alarms: [],
        };
    }

    componentDidMount() {
        // const alarms = this.alarms;
        const alarms = this.state.alarms;

        timer = setInterval(() => {

            // 객체를 전달해서 업데이트하는 setState()
            // this.setState({
            //     alarm: reservedAlarms[++currentAlarmIndex % reservedAlarms.length]
            // });

            // 함수를 전달해서 업데이트하는 setState()
            this.setState(state => ({ alarm: nextAlarm() }));


            // if (alarms.length < reservedAlarms.length) {
            //     const index = alarms.length;

            //     alarms.push(reservedAlarms[index]);

            //     // setState()로 state를 갱신해주면 render()가 호출된다
            //     this.setState({
            //         alarms: alarms
            //     });

            //     console.log(alarms.length);
            //     console.log(`${index}번째 알람추가`);
            // } else {
            //     clearInterval(timer);
            //     console.log('모든 알람이 출력되었습니다.', alarms);
            // }
        }, 1000);
    }

    componentWillUnmount() {
        // null 이나 undefined 가 아니라면 실행
        if (timer) {
            clearInterval(timer);
        }
    }

    render() {
        return (
            <div>
                {
                    <Alarm
                        id={this.state.alarm.id}
                        message={this.state.alarm.message}
                    />
                }
            </div>
        );
    }
}

export default AlarmList;