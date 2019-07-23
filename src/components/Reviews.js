import React, { Component } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

// import { seventeen } from '../res/img/2017.png';
// import { eighteen } from '../res/img/2018.png';
// import { nineteen } from '../res/img/2019.png';

import ReviewCard from "./ReviewCard";

class Reviews extends Component {
  render() {
    return (
      <div id="reviews" className="Reviews">
        <section className="section-reviews">
          <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-primary">Read What Our Clients Say</h2>
            <div className="carousel_wrapper row container u-margin-center u-margin-top-medium">
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={125}
              totalSlides={13}
            >
            <Slider>
              <Slide index={0}>
                <ReviewCard
                  clientName="Tracy N."
                  clientServ="Dog Walking"
                  highlight1="Friendly &bull;"
                  highlight2="Punctual &bull;"
                  highlight3="Easy to communicate"
                  reviewText="The experience with Gerardo and his team have been great so far! They did their first walk with our bichon/poodle mix and very accommodating to her needs (older dog with a back that acts up sometimes). They're very friendly, punctual, and easy to communicate with. We have our next walk set up in a couple days and plan to use them 1-2 times a week. Would highly recommend!"/>
              </Slide>

              <Slide index={1}>
                <ReviewCard
                clientName="Healy O."
                clientServ="Dog Walking"
                highlight1="Plenty of Play and Exercise"
                reviewText="We love Dog Tales! Gerardo and Romi basically helped raise our puppy, Harper (wheaten terrier). We are both working pup parents, so Romi walked Harper 2x a day and we always felt confident he was having a great time, getting plenty of play & exercise. Great for pup sitting during weekends away as well! And they send great pics :)"/>
              </Slide>

              <Slide index={2}>
                <ReviewCard
                clientName="Arti H."
                clientServ="Dog Walking, Dog Boarding & Cab Service"
                highlight1="Amazing Company"
                reviewText="Dog Tales is an amazing company. Mylo loves going with them and never turns back! Plus, they send me pics of my happy puppy every day!"/>
              </Slide>

              <Slide index={3}>
                <ReviewCard
                clientName="Rouselyn O."
                clientServ="Dog Walking"
                highlight1="Happy  &bull;"
                highlight2="Trust &bull;"
                highlight3="Energetic Level Increased"
                reviewText="We are very happy with Dog Tales! We trust them immensely and our dogs love them. They've helped our over weight pup, start to slim down and her energetic level has increased. Thank you dog tales, Cheers to you!"/>
              </Slide>

              <Slide index={4}>
                <ReviewCard
                clientName="Pamela K."
                clientServ="Dog Walking"
                highlight1="Passion &bull;"
                highlight2="Compassion &bull;"
                highlight3="Integrity"
                reviewText="Had our meet and greet this evening and was very impressed. This is a vibrant young crew, with passion, compassion, and integrity!!! I love it! And my pups loved them. It seems to be a great fit...."/>
              </Slide>

              <Slide index={5}>
                <ReviewCard
                clientName="Jennifer S."
                clientServ="Dog Walking"
                highlight1="Flexible with scheduling"
                reviewText="Gerardo, the owner, is great! I know when my dog has bonded to Gerardo as his walker when we run into him on the streets of SOMA and my dog runs right up to him like it’s been too long. Gerardo is not just great with dogs, but is also flexible when scheduling last minute walks when a work trip has popped up."/>
              </Slide>

              <Slide index={6}>
                <ReviewCard
                clientName="Casey C."
                clientServ="Dog Walking"
                highlight1="Happiest  &bull;"
                highlight2="Responsive &bull;"
                highlight3="Truly Cares"
                reviewText="Zeus is the happiest every day when I get home. Dog Tales is very responsive and truly cares about every dog in the pack!"/>
              </Slide>

              <Slide index={7}>
                <ReviewCard
                clientName="Ana L."
                clientServ="Dog Walking"
                highlight1="Super Accommodating &bull;"
                highlight2="Happy"
                reviewText="Dog Tales is super accommodating to my schedule, as a nurse it is important since I don't have a regular schedule and I work day and night shifts. My dog loves her walker (I was home for a walk recently due to a schedule change); she was SO happy to see him. And she clearly enjoys her time at the park (see picture!)."/>
              </Slide>

              <Slide index={8}>
                <ReviewCard
                clientName="Julie W."
                clientServ="Dog Walking"
                highlight1="Super Professional &bull;"
                highlight2="Authentic &bull;"
                highlight3="Skilled"
                reviewText="Gerardo run an excellent job walking company. They are super professional, organized, and friendly and are authentic about caring about and for dogs - they are skilled at dog walking and run their business like professionals."/>
              </Slide>

              <Slide index={9}>
                <ReviewCard
                clientName="Takara T."
                clientServ="Dog Walking"
                highlight1="Responsive &bull;"
                highlight2="Flexible &bull;"
                highlight3="Attentive"
                reviewText="Dog Tales has been responsive, flexible and most importantly, attentive to Chloe. She is very happy and they show her the care she needs."/>
              </Slide>

              <Slide index={10}>
                <ReviewCard
                clientName="Ching T."
                clientServ="Dog Walking"
                highlight1="On Time &bull;"
                highlight2="Reliable"
                reviewText="Gerardo have been great dog walkers and caretakers for my terrier mix rescue dog. They are always on time and reliable. Would recommend them highly"/>
              </Slide>

              <Slide index={11}>
                <ReviewCard
                clientName="Allan A."
                clientServ="Dog Walking"
                highlight1="Responsive"
                reviewText="Very responsive to calls and text. Luka and Levi seem to enjoy their company."/>
              </Slide>

              <Slide index={12}>
                <ReviewCard
                clientName="Rae S."
                clientServ="Cat Boarding"
                highlight1="One-on-one care &bull;"
                highlight2="Regular updates &bull;"
                highlight3="Completely Relaxed"
                reviewText="This was my first time boarding my cat so I searched for a place I thought she'd be most comfortable. Gerardo was very accommodating and made sure my cat had one-on-one care and the comforts of home, so much better than being in a stressful shelter with other animals. I got regular updates with pictures and my cat was completely relaxed when I picked her up. I'll definitely use Dog Tales again!"/>
              </Slide>

            </Slider>

            <ButtonBack className="carousel_buttons--back"><FontAwesomeIcon className="ChevronLeft" icon={faChevronLeft} /></ButtonBack>
            <ButtonNext className="carousel_buttons--next"><FontAwesomeIcon className="ChevronRight" icon={faChevronRight} /></ButtonNext>

            </CarouselProvider>
            </div>

          </div>

        

        </section>


      </div>
    );
  }
}

export default Reviews;
