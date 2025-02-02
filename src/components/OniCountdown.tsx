import Countdown, { CountdownRenderProps } from 'react-countdown';

export function OniCountdown() {
    return (
        <Countdown
            date={new Date("02/05/2025")}
            renderer={props => <Timer {...props} />}
        />
        
    )
}

function Timer(props: CountdownRenderProps) {
    const days = props.days.toString().padStart(2, "0");
    const hours = props.hours.toString().padStart(2, "0");
    const minutes = props.minutes.toString().padStart(2, "0");
    const seconds = props.seconds.toString().padStart(2, "0");

    if (!props.completed) {
        return (
            <h1>{days}:{hours}:{minutes}:{seconds} until Oni's Birthday</h1>
        )
    } else {
        return <h1>HAPPY BIRTHDAY ONI</h1>
    }
}