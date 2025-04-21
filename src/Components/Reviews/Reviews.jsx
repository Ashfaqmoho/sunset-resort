import React, { useRef } from "react";
import "./Reviews.css";
import next_btn from "../../assets/next-icon.png";
import back_btn from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Reviews = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx = tx - 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx = tx + 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="reviews">
      <img src={next_btn} alt="" className="next-btn" onClick={slideForward} />
      <img src={back_btn} alt="" className="back-btn" onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Sophia Martinez</h3>
                  <span>Miami, USA</span>
                </div>
                <p>★★★★★</p>
              </div>
              <p>
                Our stay at Sunset Resort was nothing short of magical. The
                breathtaking views, luxurious rooms, and exceptional hospitality
                made our vacation unforgettable. The staff went above and beyond
                to make us feel at home. Highly recommend for anyone seeking a
                relaxing retreat!
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>James Oliver</h3>
                  <span>London, UK</span>
                </div>
                <p>★★★★</p>
              </div>
              <p>
                Sunset Resort is a paradise! From the delicious food to the wide
                array of activities like kayaking and beach yoga, every day was
                an adventure. The sunset view from our private balcony was
                simply mesmerizing. Can't wait to come back next year!
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Priya Sharma</h3>
                  <span>Mumbai, India</span>
                </div>
                <p>★★★★★</p>
              </div>
              <p>
                I've never experienced such a perfect blend of luxury and
                comfort. The beachfront dining was an absolute highlight – fresh
                seafood and candlelit tables with the sound of waves in the
                background. Sunset Resort truly knows how to create magical
                moments.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>David Kim</h3>
                  <span>Seoul, South Korea</span>
                </div>
                <p>★★★★★</p>
              </div>
              <p>
                Sunset Resort exceeded all our expectations. The poolside
                cocktails, serene spa treatments, and friendly staff made our
                stay perfect. My kids loved the kids' club and water sports
                activities. This place is great for families! and i really
                enjoyed it
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Reviews;
