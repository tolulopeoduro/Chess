import * as $ from 'jquery'

const animate_move = (data , piece , time) => {

    const {current_piece , current_row , current_box} = data
    const target = document.getElementsByClassName('Row_row__OdnOd')[current_row].children[current_box]

    const topPos = target.getBoundingClientRect().top + window.scrollY;
    const leftPos = target.getBoundingClientRect().left + window.scrollX;
    
    const el = document.getElementsByClassName(piece)[0]
    const el_topPos = el.getBoundingClientRect().top + window.scrollY;
    const el_leftPos = el.getBoundingClientRect().left + window.scrollX;
    const audio = new Audio('https://res.cloudinary.com/dtuafcbbd/video/upload/v1648606384/chess/game-piece-slide-1-sound-effect.mp3')
    audio.play()
    $(el).css({
        'transition' : `all ${time}s`,
        'transform' : `translate(${leftPos -el_leftPos}px , ${topPos - el_topPos}px)`
    })
}

export default animate_move