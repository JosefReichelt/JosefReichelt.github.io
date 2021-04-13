const BG_COLORS = [
    '#23235c',
    '#41235C',
    '#262626'
]
export function getRandomBackgroundColor(){
    return BG_COLORS[Math.floor(Math.random() * BG_COLORS.length)]
}
