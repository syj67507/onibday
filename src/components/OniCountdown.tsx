import Countdown, { CountdownRenderProps } from 'react-countdown';

export function OniCountdown() {
    return (
        <Countdown
            // date={new Date("02/05/2025")}
            date={Date.now() + 5000}
            intervalDelay={0}
            precision={3}
            renderer={props => <Timer {...props} />}
        >
            <h1>Completed</h1>
        </Countdown>
    )
}

function Timer(props: CountdownRenderProps) {
    const days = props.days.toString().padStart(2, "0");
    const hours = props.hours.toString().padStart(2, "0");
    const seconds = props.seconds.toString().padStart(2, "0");
    const milliseconds = props.milliseconds.toString().padStart(2, "0");

    return (
        <h1>{days}:{hours}:{seconds}:{milliseconds}</h1>
    )
}