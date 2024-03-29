import React, { useEffect } from 'react'
// import { Link, Scroller } from 'react-scroll'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

const Demo = () => {
    useEffect(() => {
        Events.scrollEvent.register('begin', (to, element) => {
            console.log('begin', to, element);
        });

        Events.scrollEvent.register('end', (to, element) => {
            console.log('end', to, element);
        });

        scrollSpy.update();

        return () => {
            Events.scrollEvent.remove('begin');
            Events.scrollEvent.remove('end');
        };
    }, []);

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    const scrollToBottom = () => {
        scroll.scrollToBottom();
    };

    const scrollTo = () => {
        scroll.scrollTo(100);
    };

    const scrollMore = () => {
        scroll.scrollMore(100);
    };

    const handleSetActive = (to: string) => {
        console.log(to);
    };

    return (
        <div>
            <Link
                activeClass="active"
                to="test1"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onSetActive={handleSetActive}
            >
                Test 1
            </Link>

            <Element name="test1" className="element">
                test 1
            </Element>
            <Element name="test2" className="element">
                test 2
            </Element>
            <div id="anchor" className="element">
                test 6 (anchor)
            </div>

            <Link to="firstInsideContainer" containerId="containerElement">
                Go to first element inside container
            </Link>
            <Link to="secondInsideContainer" containerId="containerElement">
                Go to second element inside container
            </Link>

            <div className="element" id="containerElement">
                <Element name="firstInsideContainer">
                    first element inside container
                </Element>
                <Element name="secondInsideContainer">
                    second element inside container
                </Element>
            </div>

            <a onClick={scrollToTop}>To the top!</a>
            <br />
            <a onClick={scrollToBottom}>To the bottom!</a>
            <br />
            <a onClick={scrollTo}>Scroll to 100px from the top</a>
            <br />
            <a onClick={scrollMore}>Scroll 100px more from the current position!</a>
        </div>
    );
};





export default Demo