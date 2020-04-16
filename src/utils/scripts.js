
export default function generateRandomOperation() {
    const n1 = Math.floor(Math.random() * 10)
    const n2 = Math.floor(Math.random() * 10)

    const operation = {
        n1,
        n2,
        res: n1 * n2
    }

    return operation;
}
