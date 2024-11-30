
import { EquipesStyle } from "../css/EquipesStyle";
import equipes from "../../lista-equipes.json";
import ModalEquipes from "../components/ModalEquipes";
import Carrousel from "../components/Carrousel";

// Carrega todas as imagens das equipes
const arquivosImagem = import.meta.glob(
  "../assets/img/equipes/**/*",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

// Localiza a imagem pelo caminho do JSON
const obterImagem = (caminho) => {
  const caminhoRelativo = caminho.replace(
    "src/assets/img/equipes/",
    ""
  );

  const caminhoProcurado =
    `../assets/img/equipes/${caminhoRelativo}`.toLowerCase();

  const entrada = Object.entries(arquivosImagem).find(
    ([arquivo]) => arquivo.toLowerCase() === caminhoProcurado
  );

  if (!entrada) {
    console.error("Imagem não encontrada:", caminho);
    return "";
  }

  return entrada[1];
};

const Equipes = () => {
  const equipesComImagens = equipes.map((equipe) => ({
    ...equipe,
    imagensProcessadas: equipe.equipeImages
      .map(obterImagem)
      .filter(Boolean),
  }));

  // Mantém as imagens específicas do carrossel original
  const imagens = [
    obterImagem("src/assets/img/equipes/ds/ds5.jpg"),
    obterImagem("src/assets/img/equipes/mahindra/mahindra4.webp"),
    obterImagem("src/assets/img/equipes/maserati/maserati.jpg"),
    obterImagem("src/assets/img/equipes/mclaren/mclaren.jpg"),
    obterImagem("src/assets/img/equipes/nissan/nissan.jpg"),
  ].filter(Boolean);

  return (
    <EquipesStyle>
      <Carrousel delay="3000" slideArr={imagens} />

      <div className="texto-inicio">
        <p>Temporada 23/24</p>
      </div>

      <section id="card-wrapper">
        <div className="box-area">
          {equipesComImagens.map((equipe) => {
            const {
              nameEquipe,
              descricao,
              equipeId,
              imagensProcessadas,
            } = equipe;

            // Imagem principal original do card
            const imagemPrincipal = obterImagem(
              `src/assets/img/equipes/${equipeId}/${equipeId}.jpg`
            );

            return (
              <div className="box" key={equipeId}>
                <img
                  src={imagemPrincipal}
                  id="card-img"
                  alt={`Equipe ${nameEquipe}`}
                />

                <ModalEquipes
                  nameEquipe={nameEquipe}
                  descricao={descricao}
                  initialIsOpen={false}
                  equipeImages={imagensProcessadas}
                />
              </div>
            );
          })}
        </div>
      </section>
    </EquipesStyle>
  );
};

export default Equipes;
