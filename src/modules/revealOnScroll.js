import throttle from 'lodash/throttle';
import debounce from 'lodash/debounce';

class RevealOnScroll {
    constructor(elements, threshold) {
        this.revealItems = elements;
        this.threshold = threshold
        this.browserHeight = window.innerHeight;
        this.hideInitially();
        // Use throttle to run calCaller every 200 ms
        this.scrollThrottle = throttle(this.calcCaller, 200).bind(this);
        this.events();
    }

    events() {
        window.addEventListener("scroll", this.scrollThrottle);
        // Use debounce to run calculate window.innerHeight after resize finished 500 ms 
        window.addEventListener("resize", debounce(() => {
            this.browserHeight = window.innerHeight;
        }, 500));
    }

    calcCaller() {
        this.revealItems.forEach((el) => {
            // To save computing power, only run when this element is not yet revealed
            if(!el.isRevealed) {
                this.calculateIfScrollTo(el);
            }
        });
    }

    calculateIfScrollTo(el) {
        // Only when scroll near the target run it.
        if(window.scrollY + this.browserHeight > el.offsetTop) {
            let percentScroll = (el.getBoundingClientRect().top / this.browserHeight) * 100;
            // When percentScroll is smaller than threshold. Ex. 75, means to start at scoll 25%
            if(percentScroll < this.threshold) {
                el.classList.add("reveal-item--is-visible");
                el.isRevealed = true;

                // When everything needs to reveal on page is revealed, cancel this event listener to save computing power.
                if(el.isLastItem) {
                    window.removeEventListener("scroll", this.scrollThrottle);
                }
            }
        }
    }
    
    hideInitially() {
        this.revealItems.forEach((el) => {
            el.classList.add("reveal-item");
            el.isRevealed = false;  // Initial this proptery as false.
        });
        // Get the last item which needs to reveal to assign isLastItem property
        this.revealItems[this.revealItems.length - 1].isLastItem = true;
    }
}
export default RevealOnScroll;