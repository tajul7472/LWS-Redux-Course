import rootReducer from "../rootReducer"

//create a middleware

const myLogger = (store) => (next) => (action) => {
    console.log(`Action: ${JSON.stringify(action)}`)
    console.log(`Before:${JSON.stringify(store.getState())}`)

    const upComingState = [action].reduce(rootReducer, store.getState())

    console.log(`UpComing:${JSON.stringify(upComingState)}`)

    //Pass action
    return next(action)
}
export default myLogger