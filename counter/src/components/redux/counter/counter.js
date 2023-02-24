
import { connect } from 'react-redux'
import { decrement, increment } from './actions'

const counter = ({ count, increment, decrement }) => {

    return (
        <div>counter</div>
    )
}

const mapStateToProps = (state) => {
    return {
        count: state.value
    }
}
const mapStateToDispatch = (dispatch) => {
    return {
        increment: (value) => dispatch(increment(value)),
        decrement: (value) => dispatch(decrement(value))
    }
}

export default connect(mapStateToProps, mapStateToDispatch)
    (counter)