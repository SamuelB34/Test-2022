import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const items = [
  {
    src:'https://scontent.fmxl1-1.fna.fbcdn.net/v/t1.15752-9/283538496_376471581111775_2457171218780181005_n.png?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeEtvDx9T9feuK8KixrdE8CK5tZBG87xNnHm1kEbzvE2cULt0JGzHD0V5L-AdwG3F0Usj3AZFhz5TJy7cRWXakuh&_nc_ohc=SrXCYc5Mvm4AX9oqULY&_nc_ht=scontent.fmxl1-1.fna&oh=03_AVKA2uBMKIO_fTF2-3TNejFtuNVyqE7fzK29QE0Vy_4MEA&oe=62B90840'
    // altText: 'Slide 1',
    // caption: 'Slide 1'
  },
  {
    src: 'https://scontent.fmxl1-1.fna.fbcdn.net/v/t1.15752-9/282793737_539136464488122_6106359251917367110_n.png?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeFogzja0DFUtZhE8jDw_X3iAf0oKelt_BMB_Sgp6W38E3CgFO2RoUXaLw7CiZ4pKKTZL-4NSyKWcF97KbDNSnSx&_nc_ohc=0TbP8sWBajoAX_0UeKy&tn=4jgn-KBZxKODjjKa&_nc_ht=scontent.fmxl1-1.fna&oh=03_AVI4jxtAOcQI-jTn8sUxu2wZTZ1xO_DJ8F0VzwGMuePU3w&oe=62B7E9AD',
    // altText: 'Slide 2',
    // caption: 'Slide 2'
  },
  {
    src: 'https://scontent.fmxl1-1.fna.fbcdn.net/v/t1.15752-9/284413520_366286735482858_1861775366924490679_n.png?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeHg6XMEDia1mLKU8OYoG6iZsSzr4_lOgQKxLOvj-U6BAk0wp-Wk3e0YpoCVFosIHXroA0UixXSzZKoJZoxkKOcZ&_nc_ohc=gwofp62ygLEAX-xbW7U&_nc_ht=scontent.fmxl1-1.fna&oh=03_AVInmTG38FlHFrnk3qSqjlYIkrrOOvDTLrJKhUtRiXVuQQ&oe=62B93A5C',
    // altText: 'Slide 3',
    // caption: 'Slide 3'
  },
  {
    src: 'https://scontent.fmxl1-1.fna.fbcdn.net/v/t1.15752-9/281606125_550629629954297_1638085127490722703_n.png?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeHh9aviucOgKRr-V8ORA3bt7T0wpwD7jWftPTCnAPuNZxXjO_lv3TDPGGECAS3vdgP-vXCc3L3UzmK4ymfYuFwn&_nc_ohc=sg_0rakWItQAX8Bip6t&_nc_ht=scontent.fmxl1-1.fna&oh=03_AVKBNwIDrU7VByJReeyLiJV0TTWhd2gbRDSZbcgwH2yoEA&oe=62BA38DA',
    // altText: 'Slide 3',
    // caption: 'Slide 3'
  },
  {
    src: 'https://scontent.fmxl1-1.fna.fbcdn.net/v/t1.15752-9/283910231_1032159644374484_8508870554284980257_n.png?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeGo_Z6QQeoJ1hX2RW675IrELloxavdd3HMuWjFq913cc2g-feeOeH2-JoLgeyBJIPHgFVlNTahcXhnjS9B-1KFl&_nc_ohc=rJtBINeCMhIAX_CPO2U&_nc_ht=scontent.fmxl1-1.fna&oh=03_AVIVvWTvxJeS4wCyCRZixoSbGloir-muU98DF69WgSuYag&oe=62BA0E4F',
    // altText: 'Slide 3',
    // caption: 'Slide 3'
  }
];

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}


export default Example;