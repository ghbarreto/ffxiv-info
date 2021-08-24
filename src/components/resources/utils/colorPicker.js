export const colorPicker = (value) => {
    switch (value) {
        case 'Preferred':
            return 'lightgreen'
        case 'Congested':
            return 'salmon'
        default:
            return 'white'
    }
}