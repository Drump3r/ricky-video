class MediaPlayer {
    media: HTMLMediaElement
    plugins: Array<any>
    constructor(config) {
        this.media = config.el
        this.plugins = config.plugins || []
        this.intPlugins()
    }
    private intPlugins() {
        this.plugins.forEach(plugin => {
            plugin.run(this)
        })
    }
    play() {
        this.media.play()
    }
    pause() {
        this.media.pause()
    }
    mute() {
        this.media.muted = true
    }
    unMute() {
        this.media.muted = false
    }
    togglePlay() {
        if (this.media.paused) {
            this.play()
        } else {
            this.pause()
        }
    }
    toggleMute() {
        this.media.muted = !this.media.muted
    }
}



export default MediaPlayer