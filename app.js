const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissor = document.querySelector('#scissor')
const board = document.querySelector("#board")


const handler = (e) => {
    const action = e.target.id
//     if (action === 'rock') {
//         board.innerHTML = "Rock crushes scissors"
//     } else if (action === 'paper') {
//         board.innerHTML = "Paper traps Rock"
//     } else if (action === 'scissor') {
//         board.innerHTML = "Scissor cuts paper"
//     } else {
//         board.innerHTML = "Click something"
//     }
// }

switch (action) {
    case "rock":
        board.innerHTML = "Rock crushes scissors"
        break;
    case 'paper':
        board.innerHTML = "Paper traps Rock"
        break;
    case 'scissor':
        board.innerHTML = "Scissor cuts paper"
        break;
    default:
        board.innerHTML = "Click something"
}
}

rock.addEventListener('click', handler)
paper.addEventListener('click', handler)
scissor.addEventListener('click', handler)