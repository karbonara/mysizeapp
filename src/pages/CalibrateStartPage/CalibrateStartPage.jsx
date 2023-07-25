import { Link } from 'react-router-dom'

export const CalibrateStartPage = () => {
  return (
    <>
      <div id="__layout">
        <div data-v-0b575bfc="" id="app" className="overflow-hidden relative">
          <div
            data-v-5f8b795e=""
            data-v-0b575bfc=""
            className="logo flex justify-center flex-grow-0"
            style={{ top: 36, width: 120 }}
          >
            <picture data-v-5f8b795e="">
              <source
                srcSet="https://www.mysize-measure.com/my-size_logo.webp"
                type="image/webp"
                data-v-5f8b795e=""
              />{" "}
              <img
                src="https://www.mysize-measure.com/my-size_logo.webp"
                alt="MY.SIZE logo"
                width={229}
                height={230}
                type="image/png"
                data-v-5f8b795e=""
              />
            </picture>
          </div>{" "}
          <div
            data-v-0b575bfc=""
            className="calibrate-start flex-grow flex flex-col items-center justify-between p-4 page"
            style={{ opacity: 1 }}
          >
            <div className="swiper-container h-full w-full swiper-container-initialized swiper-container-horizontal swiper-container-android">
              <div
                className="swiper-wrapper"
                style={{ transform: "translate3d(0px, 0px, 0px)", justifyContent: "center" }}
              >
                <div
                  className="h-full w-full swiper-slide swiper-slide-active"
                  style={{ width: 288 }}
                >
                  <span
                    className="copy fade-in text-xl text-center block"
                    style={{
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    <p>&nbsp;</p>
                    <p>
                      Telefonunuzun fiziksel boyutunu ayarlamak için bir kredi kartına ihtiyacınız var
                      ekranın boyutunu ayarlamak için.
                    </p>
                    <p>&nbsp;</p>
                    <p>
                      <strong>
                        Endişelenmeyin, para çekilmeyecek - ve hiçbir dickpic çekilmeyecek
                        yapılmış
                      </strong>
                    </p>
                  </span>{" "}
                  <div className="absolute bottom-0 w-full flex justify-center">
                    <Link to="/calibrate" className="button rounded-full flex items-center justify-center flex-shrink-0 relative">
                      <div className="button__bg bg-purple" /> {/**/}{" "}
                      <span className="button__text relative uppercase font-semibold text-lg">
                        Anlaşıldı
                      </span>
                    </Link>
                  </div>
                </div>{" "}

              </div>
              <span
                className="swiper-notification"
                aria-live="assertive"
                aria-atomic="true"
              />
            </div>
          </div>
          <div
            data-v-26322303=""
            data-v-0b575bfc=""
            className="cookie-consent"
            style={{ display: "none" }}
          >
            <div data-v-26322303="" className="cookie-consent__overlay" />{" "}
            <div
              data-v-26322303=""
              className="cookie-consent__modal flex flex-col relative"
            >
              <div
                data-v-26322303=""
                className="cookie-consent__modal-wrapper p-4 text-black flex-grow overflow-auto"
              >
                <span data-v-26322303="" className="text-2xl block font-bold">
                  Çerezleri ve diğer teknolojileri kullanıyoruz
                </span>{" "}
                <span data-v-26322303="" className="block mt-2">
                  <p>
                    Bu web sitesi, çerezleri ve benzer işlevleri son işlem için kullanır
                    cihaz bilgileri ve kişisel veriler. İşleme aşağıdakilere hizmet eder
                    içeriğin, harici hizmetlerin ve üçüncü taraf unsurlarının entegrasyonu
                    taraflar, istatistiksel analiz/ölçüm, kişiselleştirilmiş
                    reklam ve sosyal medya entegrasyonu. Bağlı olarak
                    işlevini yerine getirirken, veriler süreç içinde üçüncü taraflara aktarılabilir
                    ve yeterli seviyenin bulunmadığı ülkelerde üçüncü taraflara
                    ve onlar tarafından işlenir, örneğin ABD. Sizin
                    onay her zaman gönüllülük esasına dayanır, kullanımımız için gerekli değildir
                    adresindeki simge aracılığıyla herhangi bir zamanda reddedilebilir veya iptal edilebilir.
                    sol altta.
                  </p>
                </span>
              </div>{" "}
              <footer
                data-v-26322303=""
                className="bg-white p-4 flex flex-wrap items-center justify-center"
              >
                <button
                  data-v-26322303=""
                  className="mt-2 mx-2 button rounded-full flex items-center justify-center flex-shrink-0 relative"
                >
                  <div className="button__bg bg-black" /> {/**/}{" "}
                  <span className="button__text relative uppercase font-semibold text-lg">
                    Özelleştirme
                  </span>
                </button>{" "}
                <button
                  data-v-26322303=""
                  className="mt-2 mx-2 button rounded-full flex items-center justify-center flex-shrink-0 relative"
                >
                  <div className="button__bg bg-green" /> {/**/}{" "}
                  <span className="button__text relative uppercase font-semibold text-lg">
                    Katılıyorum.
                  </span>
                </button>
              </footer>
            </div>
          </div>{" "}
          <div
            data-v-159707f8=""
            data-v-0b575bfc=""
            className="cookie-settings"
            style={{ display: "none" }}
          >
            <div data-v-159707f8="" className="cookie-settings__overlay" />
            <div
              data-v-159707f8=""
              className="cookie-settings__modal flex flex-col relative"
            >
              <div
                data-v-159707f8=""
                className="cookie-settings__modal-wrapper p-4 text-black flex-grow overflow-auto"
              >
                <span data-v-159707f8="" className="text-2xl block font-bold">
                  Çerez Ayarları
                </span>{" "}
                <span data-v-159707f8="" className="block mt-2">
                  <p>Burada ayarları değiştirebilirsiniz.</p>
                </span>{" "}
                <label
                  data-v-83b7f8d4=""
                  data-v-159707f8=""
                  className="wrapper flex items-center mt-4 disabled"
                >
                  Gerekli
                  <input
                    data-v-83b7f8d4=""
                    type="checkbox"
                    className="checkbox"
                    defaultValue=""
                  />{" "}
                  <span data-v-83b7f8d4="" className="checkmark" />
                </label>{" "}
                <label
                  data-v-83b7f8d4=""
                  data-v-159707f8=""
                  className="wrapper flex items-center"
                >
                  Pazarlama
                  <input
                    data-v-83b7f8d4=""
                    type="checkbox"
                    className="checkbox"
                    defaultValue=""
                  />{" "}
                  <span data-v-83b7f8d4="" className="checkmark" />
                </label>
              </div>{" "}
              <footer data-v-159707f8="" className="flex justify-center pb-4">
                <button
                  data-v-159707f8=""
                  className="mt-2 mx-2 button rounded-full flex items-center justify-center flex-shrink-0 relative"
                >
                  <div className="button__bg bg-black" /> {/**/}{" "}
                  <span className="button__text relative uppercase font-semibold text-lg">
                    Kapat
                  </span>
                </button>
              </footer>
            </div>
          </div>{" "}
          <div
            data-v-0b575bfc=""
            className="turn-device hidden landscape:flex items-center justify-center"
          >
            <img
              src="data:image/svg+xml;base64,PHN2ZyBpZD0ic3ZnOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMzM3LjU2IDYxNC42NyI+CiAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTI5Mi4yMiwwSDQ1LjM1QTQ1LjM0LDQ1LjM0LDAsMCwwLDAsNDUuMzR2NTI0YTQ1LjM1LDQ1LjM1LDAsMCwwLDQ1LjM1LDQ1LjM1SDI5Mi4yMmE0NS4zNCw0NS4zNCwwLDAsMCw0NS4zNC00NS4zNXYtNTI0QTQ1LjM0LDQ1LjM0LDAsMCwwLDI5Mi4yMiwwWk0xMzIuODgsMTguOWE1LjEsNS4xLDAsMCwxLDMuNjItMS41aDY0LjU3YTUuMTMsNS4xMywwLDAsMSwwLDEwLjI1SDEzNi41YTUuMTMsNS4xMywwLDAsMS0zLjYyLTguNzVabTM1LjksNTg1LjY5YTIyLDIyLDAsMSwxLDIyLjA1LTIyQTIyLDIyLDAsMCwxLDE2OC43OCw2MDQuNTlaTTMzMCw1MzcuMjFhMTguMjcsMTguMjcsMCwwLDEtMTguMjYsMTguMjZIMjUuODJBMTguMjcsMTguMjcsMCwwLDEsNy41Niw1MzcuMjFWNjEuMDlBMTguMjcsMTguMjcsMCwwLDEsMjUuODIsNDIuODJIMzExLjc1QTE4LjI3LDE4LjI3LDAsMCwxLDMzMCw2MS4wOVoiLz4KPC9zdmc+Cg=="
              alt=""
            />{" "}
            <span className="absolute bottom-4 block text-center uppercase">
              Cihazınızı çevirin
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

