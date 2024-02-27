import React from "react";
import Alarm from "./Alarm";

class AlarmList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            alarms: [],
        };
    }

    render() {
        return (
            <div>
                <Alarm message="[알림] 메세지가 도착했습니다" />
                <Alarm message="[기기 로그인 알림]" />
                <Alarm message="[픽업완료] 꿀 커피 외 1개" />
            </div>
        );
    }
}

export default AlarmList;

