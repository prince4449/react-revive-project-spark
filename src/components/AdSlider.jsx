import React from 'react'

const AdSlider = () => {
  return (
    <>
      <section>
        <div
          id="demo"
          className="carousel slide cate-sli caro-home"
          data-ride="carousel"
        >
          <div className="container">
            <div className="row">
              <div className="inn">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="/assets/images/slider/90890557952.jpg"
                      alt="Los Angeles"
                      width={1100}
                      height={500}
                    />
                    <a href="demo.html" target="_blank" />
                  </div>
                  <div className="carousel-item ">
                    <img
                      src="/assets/images/slider/27459517111.jpg"
                      alt="Los Angeles"
                      width={1100}
                      height={500}
                    />
                    <a href="demo.html" target="_blank" />
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#demo"
                  data-slide="prev"
                >
                  <span className="carousel-control-prev-icon" />
                </a>
                <a
                  className="carousel-control-next"
                  href="#demo"
                  data-slide="next"
                >
                  <span className="carousel-control-next-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AdSlider
