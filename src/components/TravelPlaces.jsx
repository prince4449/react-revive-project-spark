import React from "react";

const TravelPlaces = () => {
  const places = [
    {
      name: "Eiffel Tower",
      type: "Historical places",
      imgSrc: "/assets/images/places/1.jpg",
      link: "details.html",
    },
    {
      name: "Taj Mahal, India",
      type: "Historical places",
      imgSrc: "/assets/images/places/2.jpg",
      link: "details.html",
    },
    {
      name: "Bondi Beach, Sydney",
      type: "Beach",
      imgSrc: "/assets/images/places/3.jpg",
      link: "details.html",
    },
    {
      name: "Sydney Opera House",
      type: "Beach",
      imgSrc: "/assets/images/places/4.jpg",
      link: "details.html",
    },
    {
      name: "Goa Beach",
      type: "Beach",
      imgSrc: "/assets/images/places/5.jpg",
      link: "details.html",
    },
    {
      name: "Niagara Falls, North America",
      type: "Waterfalls",
      imgSrc: "/assets/images/places/6.jpg",
      link: "details.html",
    },
  ];

  return (
    <section>
      <div className="plac-hom-bd">
        <div className="container">
          <div className="row">
            <div className="plac-hom-tit plac-hom-tit-ic-pla">
              <h2>Travel places</h2>
              <p>
                Start planning your next trip with a little help from
                <b>Bizbook</b>
              </p>
            </div>
            <div className="plac-hom-all-pla">
              <ul>
                {places.map((place, index) => (
                  <li key={index}>
                    <div className="plac-hom-box">
                      <div className="plac-hom-box-im">
                        <img
                          src={place.imgSrc}
                          alt={place.name}
                          loading="lazy"
                        />
                        <h4>{place.name}</h4>
                      </div>
                      <div className="plac-hom-box-txt">
                        <span>{place.type}</span>
                        <span>More details</span>
                      </div>
                      <a href={place.link} className="fclick" />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelPlaces;
