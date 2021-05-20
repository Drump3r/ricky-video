function MediaPlayer(config) {
    this.media = config.el
    this.plugins = config.plugins || []
    this._intPlugins()
}

MediaPlayer. prototype._intPlugins = function () {
    this.plugins.forEach(plugin => {
        plugin.run(this)
    });
}

MediaPlayer.prototype.play = function() {
    this.media.play()
    console.log('hola')
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

export default MediaPlayer