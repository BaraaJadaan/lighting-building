import React from "react";
import Slider from "react-slick";
import customar1 from "../assets/customar1.png";

function CustomarCarousal() {
  const data = [
    { img: customar1, name: "Sam McMillan", title: "Manager", description: "I selected Spectrum because of their architects' rigorous design background and education. They exceeded my expectations and did a great job on extending and redesigning my house." },
    { img: customar1, name: "Jane Doe", title: "Lead", description: "I was looking for top-notch creativity and quality service and I found what I needed in your team. You took all my ideas and demands into consideration and made a great project." },
    { img: customar1, name: "John Smith", title: "Junior", description: "I have worked with many companies offering design & architecture services, and out of all you were one who really stood out from the rest and did a great job." },
  ];

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    arrows: false,
  };

  return (
    <div className="relative slider-container p-4 lg:p-8 mx-[10%] lg:mx-[20%]">
      <Slider {...settings}>
        {data.map((customer, index) => (
          <div key={index} className="testimonial-card text-left p-4 lg:p-8 relative mt-16">
            <p className="text-lg lg:text-2xl mb-4 lg:mb-10">{customer.description}</p>
            <div className="flex items-center mt-4">
              <img src={customer.img} alt={customer.name} className="rounded w-12 h-12 lg:w-16 lg:h-16 object-cover" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-white">{customer.name}</h3>
                <p className="text-sm text-gray-400">{customer.title}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CustomarCarousal;
