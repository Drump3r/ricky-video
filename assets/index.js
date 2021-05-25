import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'
import AutoPause from './plugins/AutoPause.js'

const video = document.querySelector('video')
const button = document.querySelector('button')
const btnUnmute = document.querySelector('.btnUnmute')

const player = new MediaPlayer({
    el: video, 
    plugins: [new AutoPlay(), new AutoPause()]
})
button.onclick = () => player.togglePlay()
btnUnmute.onclick = () => player.toggleMute()

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message)
    })
}
