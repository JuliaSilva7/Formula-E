
import { useEffect, useState } from "react";

const ModalEquipes = ({
  initialIsOpen,
  nameEquipe,
  descricao,
  pontuacao,
  equipeImages,
}) => {
  const [slide, setSlide] = useState(0);
  const [visible, setVisible] = useState(initialIsOpen);

  const toggleInfoVisibility = () => {
    setVisible((anterior) => !anterior);
  };

  useEffect(() => {
    if (visible) {
      document.body.classList.add("active-pop-up");
    } else {
      document.body.classList.remove("active-pop-up");
    }

    return () => {
      document.body.classList.remove("active-pop-up");
    };
  }, [visible]);

  return (
    <div className="texto">
      <h3>{nameEquipe}</h3>

      <button
        className="openPopupBtn"
        onClick={toggleInfoVisibility}
      >
        Saiba mais sobre a equipe {nameEquipe}
      </button>

      {visible && (
        <div id="popup1" className="popup">
          <div className="popup-content">
            <span
              className="close-btn"
              onClick={toggleInfoVisibility}
            >
              &times;
            </span>

            <div className="slideshow-container">
              {equipeImages.map((image, index) => (
                <div key={index} className="mySlides fade">
                  <div
                    className={
                      slide === index ? "visible" : "non-visible"
                    }
                  >
                    {`${index + 1} / ${equipeImages.length}`}
                  </div>

                  <img
                    src={image}
                    className={
                      slide === index ? "slide" : "slide-hidden"
                    }
                    alt={`${nameEquipe} - imagem ${index + 1}`}
                  />
                </div>
              ))}
            </div>

            <br />

            <div>
              {equipeImages.map((_, index) => (
                <span
                  key={index}
                  className="dot"
                  onClick={() => setSlide(index)}
                ></span>
              ))}
            </div>

            <p className="pop-up-text">{descricao}</p>
            <p className="pop-up-text">{pontuacao}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalEquipes;
