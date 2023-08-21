import { Link } from 'react-router-dom'

export const MainPage = () => {
  return (
    <>
      <div data-v-0b575bfc="" id="app" className="overflow-hidden relative">
        <div
          data-v-5f8b795e=""
          data-v-0b575bfc=""
          className="logo flex justify-center flex-grow-0"
          style={{ top: "calc(50% - 256px)" }}
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
          data-v-ff708fc4=""
          data-v-0b575bfc=""
          className="page-index w-full text-center text-white text-2xl flex flex-col p-4 page"
        >
          <div data-v-ff708fc4="">
            <div data-v-ff708fc4="" className="copy fade-in">
              <p>MESSLATTE</p>
            </div>{" "}
            <div data-v-ff708fc4="" className="copy fade-in">
              <p>&nbsp;</p>
              <p>
                <strong>MÜKEMMEL UYUM İÇİN  </strong>
              </p>
              <p>
                <strong>EN İYİSİ.</strong>
              </p>
            </div>
          </div>{" "}
          <div data-v-ff708fc4="" className="flex-grow flex flex-col justify-center">
            <div data-v-ff708fc4="" className="fade-in text-blue text-base">
              MY.SIZE prezervatif için bedeninizi bulun
            </div>{" "}
            <Link

              to="/calibrate-start"
              className="mx-auto mt-2 button rounded-full flex items-center justify-center flex-shrink-0 relative"
            >
              <div className="button__bg bg-blue" />
              <span className="button__text relative uppercase font-semibold text-lg"
                style={{
                  fontSize: "0.9rem",
                }}
              >
                Telefonunu uygun duruma getirmek için devam et
              </span>
            </Link>
          </div>
        </div>{" "}
        <div
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
                Çerezleri ve diğer teknolojileri kullanıyoruz.
              </span>{" "}
              <span data-v-26322303="" className="block mt-2">
                <p>
                  <span className="block mt-2" data-v-fb684792="">
                    Bu web sitesi çerezleri ve benzer işlevleri şu amaçlarla kullanır
                    son cihaz bilgilerinin ve kişisel verilerin işlenmesi
                    Veri. İşleme, içeriklerin entegrasyonuna hizmet eder,
                    üçüncü tarafların harici hizmetleri ve unsurları, istatistiksel
                    analiz/ölçüm, kişiselleştirilmiş reklamcılık ve sosyal medya entegrasyonu.
                    sosyal medya. İşleve bağlı olarak, veriler üçüncü taraflara aktarılabilir
                    üçüncü taraflara ve yeterli yasal düzenlemelerin bulunmadığı ülkelerdeki üçüncü taraflara
                    veri koruma seviyesi mevcuttur ve bunlar tarafından işlenmektedir, örn.
                    ABD. İzniniz her zaman gönüllülük esasına dayanır ve verilerimizin kullanımı için gerekli değildir.
                    web sitemizin kullanımı ve herhangi bir zamanda reddedilebilir veya iptal edilebilir.
                    sol alt köşedeki simgesine tıklayın.
                  </span>
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
                  Uyum sağla
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
          <div data-v-159707f8="" className="cookie-settings__overlay" />{" "}
          <div
            data-v-159707f8=""
            className="cookie-settings__modal flex flex-col relative"
          >
            <div
              data-v-159707f8=""
              className="cookie-settings__modal-wrapper p-4 text-black flex-grow overflow-auto"
            >
              <span data-v-159707f8="" className="text-2xl block font-bold">
                Çerez ayarları
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
    </>
  )
}