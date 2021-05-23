class AutoPause {
    constructor() {
        this.threshold = 0.25
        this.handleIntersection = this.handleIntersection.bind(this)
    } 
    run(player) {
        const observer = new IntersectionObserver(this.handleIntersection,{
            threshold: this.threshold
        })
        observer.observe(player.media)
    }
    handleIntersection(entries) {
        const entry = entries[0]
        const isVisible = entry.IntersectionObserver >= this.threshold
        console.log(isVisible)
        if (isVisible){
            this.play()
        } else {
            player.media.pause()
        }
    }
}

export default AutoPause