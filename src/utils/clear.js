import * as $ from 'jquery'

const clear = (data) => {
    const {current_row , current_box} = data
    const el = document.getElementsByClassName('row')[current_row].children[current_box].children[0]
    $(el).css({
        'transition' : `none`,
        'transform' : `translate(${0}px , ${0}px)`
    })
}

export default clear