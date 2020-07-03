// // export default function ({ dispatch }) {
// //     // funkcja next odnosi się do nastepnego middlewera
// //     return function (next) {
// //         // tu bierzemy akcje ktora wchodzi do middlewera z type i payload
// //         return function (action) {
// //
// //         }
// //     }
// // }
// // destrukturyzacja:
export default ({ dispatch }) => (next) => (action) => {
    // Gdy akcja jest bez payload lub nie jest promisem wyslij do nastepnego middleware
    if (!action.payload || !action.payload.then) {
        return next(action)
    }
    async function f() {
        const data = await action.payload
        const newAction = { ...action, payload: data}
        dispatch(newAction)
    }
    next(action)
    // f()

}