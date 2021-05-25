function MediaPlayer(config) {
    this.media = config.el
    this.plugins = config.plugins || []
    this._intPlugins()
}

MediaPlayer. prototype._intPlugins = function () {
    const player = {
        play: () => this.play(),
        pause: () => this.pause(),
        media: this.media,
        get muted() {
            return this.media.muted
        },
        set muted(value) {
            this.media.muted = value
        }
    }
    this.plugins.forEach(plugin => {
        plugin.run(player)
    });
}

MediaPlayer.prototype.play = function() {
    this.media.play()
}
MediaPlayer.prototype.pause = function() {
    this.media.pause()
}
MediaPlayer.prototype.mute = function() {
    this.media.muted = true
}
MediaPlayer.prototype.unMute = function() {
    this.media.muted = false
}
MediaPlayer.prototype.togglePlay = function () {
    if (this.media.paused) {
        this.play()
    } else {
        this.pause()
    }
}
MediaPlayer.prototype.toggleMute = function () {
    this.media.muted = !this.media.muted 
}

export default MediaPlayer