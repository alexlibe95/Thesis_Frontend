import React, { Component } from 'react';
import  {Carousel, CarouselInner, CarouselItem, View, Mask } from 'mdbreact';

export default class CarouselPage extends Component {
  render(){
    return(

        <Carousel
          activeItem={1}
          length={2}
          showControls={true}
          showIndicators={true}
          className="z-depth-1">
          <CarouselInner>
            <CarouselItem itemId="1">
              <View>
                <img className="d-block w-100" src="assets/111.png" alt="First slide" />
                <Mask overlay="black-slight"></Mask>
              </View>
            </CarouselItem>
            <CarouselItem itemId="2">
              <View>
                <img className="d-block w-100" src="assets/22.png" alt="Second slide" />
                <Mask overlay="black-slight"></Mask>
              </View>
            </CarouselItem>
          </CarouselInner>
        </Carousel>
    );
  }
}
