
const clickCell = (cellId, row, col) => {
    return {
        type: 'CLICK_CELL',
        cellId,
        row,
        col
    }
}

export default clickCell