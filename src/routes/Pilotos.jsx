
import { PilotosStyle } from "../css/PilotosStyle";
import pilotos from "../../lista-pilotos.json";
import ModalEquipes from "../components/ModalPilotos";
import Carrousel from "../components/Carrousel";

// Carrega todas as imagens diretamente da pasta pilotos
const arquivosImagem = import.meta.glob(
  "../assets/img/pilotos/*",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

// Busca a imagem pelo nome do arquivo
const obterImagem = (caminho) => {
  const nomeArquivo = caminho.split("/").pop().toLowerCase();

  const entrada = Object.entries(arquivosImagem).find(
    ([arquivo]) => arquivo.split("/").pop().toLowerCase() === nomeArquivo
  );

  if (!entrada) {
    console.error("Imagem de piloto não encontrada:", nomeArquivo);
    return "";
  }

  return entrada[1];
};

const Pilotos = () => {
  const pilotosComImagens = pilotos.map((piloto) => ({
    ...piloto,
    imagensProcessadas: piloto.equipeImages
      .map((imagem) => obterImagem(imagem))
      .filter(Boolean),
  }));

  const imagens = pilotosComImagens
    .map((piloto) => piloto.imagensProcessadas[0])
    .filter(Boolean);

  return (
    <PilotosStyle>
      <Carrousel delay="3000" slideArr={imagens} />

      <div className="texto-inicio">
        <p>Temporada 23/24</p>
      </div>

      <section id="card-wrapper">
        <div className="box-area">
          {pilotosComImagens.map((piloto) => {
            const {
              nameEquipe,
              descricao,
              pontuacao,
              pontuacaoPorRodada,
              imagensProcessadas,
            } = piloto;

            return (
              <div className="box" key={nameEquipe}>
                <img
                  src={imagensProcessadas[0] || ""}
                  id="card-img"
                  alt={`Imagem do piloto ${nameEquipe}`}
                />

                <div className="texto">
                  <h3>{nameEquipe}</h3>

                  <button className="openPopupBtn">
                    Saiba mais sobre o piloto {nameEquipe}
                  </button>

                  <ModalEquipes
                    nameEquipe={nameEquipe}
                    descricao={descricao}
                    pontuacao={pontuacao}
                    pontuacaoPorRodada={pontuacaoPorRodada}
                    initialIsOpen={false}
                    equipeImages={imagensProcessadas}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </PilotosStyle>
  );
};

export default Pilotos;
