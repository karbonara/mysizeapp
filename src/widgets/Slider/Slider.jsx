import React, { Component } from "react";
import Slider from "react-slick";
import { ImagesItems } from "../../app/providers/data";

export default class AsNavFor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nav1: null,
      nav2: null,
      activeSlide: 0,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  toggleMoreInfo = () => {
    this.setState((prevState) => ({
      showMoreInfo: !prevState.showMoreInfo,
    }));
  };

  afterSlideChange = (currentSlide) => {
    this.setState({
      activeSlide: currentSlide,
    });
  };

  render() {
    const { showMoreInfo } = this.state;
    const sliderSettings = {
      asNavFor: this.state.nav2,
      ref: (slider) => (this.slider1 = slider),
      arrows: false,
      afterChange: this.afterSlideChange, // Добавляем обработчик после смены слайда
      initialSlide: this.activeSlide,
    };
    return (
      <div
        className="product-wrapper p-4 pb-8 flex-grow w-full"
        style={{
          height: "90vh",
        }}
      >
        <Slider {...sliderSettings}
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
          arrows={false}
          initialSlide={Math.floor(ImagesItems.length / 2)}
        >
          {ImagesItems.map((item, index) => {
            return (
              <div key={index}>
                <div
                  className="product__content flex-grow"
                  style={{
                    height: "65vh",
                    overflow: "scroll",
                  }}
                >
                  <img className="product__image block mt-8" style={{ margin: "0 auto", width: "50%" }} src={item.img} alt="" />
                  <span
                    className="copy text-xl"
                    style={{
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    <p>
                      <strong>
                        Extra dünn – angenehmer Duft – perfekter Sitz
                        <br />
                      </strong>
                    </p>
                  </span>
                  <table
                    className="product__details mt-4 text-white text-base w-full"
                    style={{
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    <tbody>
                      <tr>
                        <td className="pl-2">Nominale Breite</td>{" "}
                        <td className="text-right pr-2">{item.width}</td>
                      </tr>
                      <tr
                        style={{
                          backgroundColor: "#19294d"
                        }}
                      >
                        <td className="pl-2">Kondomlänge</td>{" "}
                        <td className="text-right pr-2">{item.length}</td>
                      </tr>
                      <tr>
                        <td className="pl-2">Material</td>{" "}
                        <td className="text-right pr-2">{item.material}</td>
                      </tr>
                      {showMoreInfo && (
                        <React.Fragment>
                          <tr
                            style={{
                              backgroundColor: "#19294d"
                            }}
                          >
                            <td className="pl-2">Shape</td>{" "}
                            <td className="text-right pr-2">{item.shape}</td>
                          </tr>
                          <tr>
                            <td className="pl-2">Lubricant</td>{" "}
                            <td className="text-right pr-2">{item.lubricant}</td>
                          </tr>
                          <tr
                            style={{
                              backgroundColor: "#19294d"
                            }}
                          >
                            <td className="pl-2">Wall thickness</td>{" "}
                            <td className="text-right pr-2">{item.wallThickness}</td>
                          </tr>
                          <tr>
                            <td className="pl-2">Surface</td>{" "}
                            <td className="text-right pr-2">{item.surface}</td>
                          </tr>
                          <tr
                            style={{
                              backgroundColor: "#19294d"
                            }}
                          >
                            <td className="pl-2">Color</td>{" "}
                            <td className="text-right pr-2">{item.color}</td>
                          </tr>
                          <tr>
                            <td className="pl-2">Quality</td>{" "}
                            <td className="text-right pr-2">{item.quality}</td>
                          </tr>
                          <tr
                            style={{
                              backgroundColor: "#19294d"
                            }}
                          >
                            <td className="pl-2">Available packaging</td>{" "}
                            <td className="text-right pr-2">{item.aviailable}</td>
                          </tr>
                        </React.Fragment>
                      )}
                    </tbody>
                  </table>
                  <span
                    className="block uppercase text-blue cursor-pointer text-right mt-4"
                    onClick={this.toggleMoreInfo} // При нажатии на "+ mehr infos" вызывается функция toggleMoreInfo
                  >
                    {showMoreInfo ? "- weniger infos" : "+ mehr infos"} {/* Изменяем текст кнопки в зависимости от состояния showMoreInfo */}
                  </span>
                  <span class="copy text-base block mt-4">
                    <p>İpucu:
                      <strong>Seks sırasında daha fazla zaman geçirmek mi istersiniz - yoksa daha yoğun hissetmeyi mi tercih edersiniz?
                        Hissetmek mi? Tavsiye edilenden daha dar veya daha geniş bir beden deneyin. Prezervatif şunları yapmamalıdır
                        kaymaz veya sıkışmaz. Penisinizin şekli günden güne değiştiği için boyutlarla oynayın:
                        Hangi genişliğin size en uygun olduğunu sadece siz hissedebilirsiniz. Şimdi penis uzmanlığınızın yolculuğu başlıyor!
                      </strong>
                    </p>
                  </span>
                </div>
              </div>
            )
          })}
        </Slider>
        <Slider
          asNavFor={this.state.nav1}
          ref={(slider) => (this.slider2 = slider)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
          arrows={false}
          centerMode={true}
          initialSlide={Math.floor(ImagesItems.length / 2)}
        >
          {ImagesItems.map((item, index) => {
            return (
              <div key={index}>
                <div data-v-410f9dfe="" className="swiper__bubble">
                  <div
                    data-v-410f9dfe=""
                    className="swiper__bubble-bg"
                    style={{ backgroundColor: item.background }}
                  >
                    <span data-v-410f9dfe="" className="relative">
                      {item.id}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </Slider>
        <hr style={{
          width: "54px",
        }} class="product__line mx-auto mt-2"></hr>
      </div>
    );
  }
}