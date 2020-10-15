
const switchCell = (cellId, row, col) => {
    return {
        type: 'SWITCH_CELL',
        cellId,
        row,
        col
    }
}

export default switchCell