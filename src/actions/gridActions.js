
const switchCell = (row, col) => {
    return {
        type: 'SWITCH_CELL',
        row,
        col
    }
}

export default switchCell