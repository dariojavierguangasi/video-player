const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')

$play.addEventListener('click', handlePlay)
$pause.addEventListener('click', handlePause)

function handlePlay() {
    $play.hidden = true;
    $pause.hidden = false;
    $video.play()
}

function handlePause() {
    $play.hidden = false;
    $pause.hidden = true;
    $video.pause()
}

$backward.addEventListener('click', handleBackward)

function handleBackward() {
    $video.currentTime -= 10
}

$forward.addEventListener('click', handleForward)

function handleForward() {
    $video.currentTime += 10
}

const $progresss = document.querySelector('#progress')
$video.addEventListener('loadedmetadata', hendleLoaded)

function hendleLoaded() {
    $progresss.max = $video.duration
}

$video.addEventListener('timeupdate', handleTimeUpdate)

function handleTimeUpdate() {
    $progresss.value = $video.currentTime
}

$progresss.addEventListener('input', handleInput)

function handleInput() {
    $video.currentTime = $progresss.value
}