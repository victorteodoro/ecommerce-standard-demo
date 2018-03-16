import React from 'react';

import CarouselIndicator from './CarouselIndicator/';
import CarouselRightArrow from './CarouselRightArrow/';
import CarouselLeftArrow from './CarouselLeftArrow/';
import CarouselSlide from './CarouselSlide/';

import styles from './styles.css';

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.goToSlide = this.goToSlide.bind(this);
    this.goToPrevSlide = this.goToPrevSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);

    this.state = {
      activeIndex: 0
    };
  }

  goToSlide(index) {
    this.setState({
      activeIndex: index
    });
  }

  goToPrevSlide(e) {
    e.preventDefault();

    let index = this.state.activeIndex;
    const { slides } = this.props;
    const slidesLength = slides.length;

    if (index < 1) {
      index = slidesLength;
    }

    index -= 1;

    this.setState({
      activeIndex: index
    });
  }

  goToNextSlide(e) {
    e.preventDefault();

    let { activeIndex: index } = this.state;
    const { slides } = this.props;
    const slidesLength = slides.length - 1;

    if (index === slidesLength) {
      index = -1;
    }

    index += 1;

    this.setState({
      activeIndex: index
    });
  }

  render() {
    return (
      <div className={styles.carousel}>
        <CarouselLeftArrow onClick={e => this.goToPrevSlide(e)} />

<ul className={styles.carouselSlides}>
  {this.props.slides.map((slide, index) =>
                         <CarouselSlide
                              key={index}
                              index={index}
                              activeIndex={this.state.activeIndex}
                              color={slide.color}
                            />)}
      </ul>

        <CarouselRightArrow onClick={e => this.goToNextSlide(e)} />

        <ul className={styles.carouselIndicators}>
        {this.props.slides.map((slide, index) =>
                               <CarouselIndicator
                               key={index}
                               index={index}
                               activeIndex={this.state.activeIndex}
                               isActive={this.state.activeIndex === index}
                               onClick={() => this.goToSlide(index)}
                               />)}
      </ul>
        </div>
    );
  }
}

export default Carousel;
