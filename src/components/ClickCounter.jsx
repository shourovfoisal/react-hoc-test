import './ClickCounter.css';
import withCounter from './HOC/withCounter';

const ClickCounter = ({ count, incrementCount }) => {
    return (
        <div>
            <button type='button' onClick={incrementCount}>Clicked { count } Times</button>
        </div>
    )
}

export default withCounter(ClickCounter)