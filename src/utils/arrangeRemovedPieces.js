
const arrangeRemovedPieces = (ar , player) => {
    const a = {king : 0 , queen : 0, rook : 0 , bishop : 0, knight : 0 , pawn : 0}
    const b = []
        for (let i = 0; i < ar.length; i++) {
            a[ar[i].split('_')[0]] += 1
        }
        const p = Object.keys(a).map(r => {
            return {name : `${r}_${player}` , qty : a[r]}
        })
        p.map(a => a.qty <1)
        return p
        
}

export default arrangeRemovedPieces