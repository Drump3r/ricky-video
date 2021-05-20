import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'

const video = document.querySelector('video')
const button = document.querySelector('button')
const btnUnmute = document.querySelector('.btnUnmute')

const player = new MediaPlayer({el: video, plugins: [new AutoPlay()]})
button.onclick = () => player.togglePlay()
btnUnmute.onclick = () => player.toggleMute()
