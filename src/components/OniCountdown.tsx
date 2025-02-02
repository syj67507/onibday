import Countdown, { CountdownRenderProps } from 'react-countdown';

export function OniCountdown() {
    return (
        <Countdown
            date={new Date("02/05/2025")}
            // date={Date.now() + 5000}
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
            <>
                <p>Oni's Birthday</p>
                <p>{days}:{hours}:{minutes}:{seconds}</p>
            </>
        )
    } else {
        return <p>HAPPY BIRTHDAY ONI</p>
    }
}