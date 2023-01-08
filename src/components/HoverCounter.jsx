import withCounter from "./HOC/withCounter"

const HoverCounter = ({count, incrementCount}) => {

    return (
        <div>
            <h1 onMouseOver={incrementCount}>Hovered { count } Times</h1>
        </div>
    )
}

export default withCounter(HoverCounter)