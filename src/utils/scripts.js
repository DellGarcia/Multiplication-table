
export default function generateRandomOperation(limit) {
    const n1 = Math.floor(Math.random() * limit)
    const n2 = Math.floor(Math.random() * limit)

    const operation = {
        n1,
        n2,
        res: n1 * n2
    }

    return operation;
}
