
import { useEffect, useState } from "react";
import { ClassificacaoStyle } from "../css/ClassificacaoStyle";

const API_URL = "https://formula-e-api.onrender.com";

const Classificacao = () => {
  const [ranking, setRanking] = useState([]);

  useEffect(() => {
    const calcularPontuacao = (usuario) => {
      const {
        corridaPrincipal,
        corridaClassificatoria,
        pilotosPontuacao,
        equipePontuacao,
      } = usuario.resultados;

      const totalPilotos = pilotosPontuacao.reduce((acc, piloto) => {
        return (
          acc +
          piloto.corridaPrincipal +
          piloto.corridaClassificatoria
        );
      }, 0);

      return (
        corridaPrincipal +
        corridaClassificatoria +
        totalPilotos +
        equipePontuacao.principal +
        equipePontuacao.classificatoria
      );
    };

    const fetchRankingData = async () => {
      try {
        const response = await fetch(`${API_URL}/usuarios`);

        if (!response.ok) {
          throw new Error("Erro ao buscar os dados dos usuários");
        }

        const dados = await response.json();

        const rankingUsuarios = dados
          .map((usuario) => ({
            usuario: usuario.usuario,
            totalPontuacao: calcularPontuacao(usuario),
          }))
          .sort((a, b) => b.totalPontuacao - a.totalPontuacao);

        setRanking(rankingUsuarios);
      } catch (error) {
        console.error("Erro ao carregar o ranking:", error);
      }
    };

    fetchRankingData();
  }, []);

  return (
    <ClassificacaoStyle className="margin-bottom-100">
      <h1 className="h1-classificacao">Ranking 23/24</h1>

      <div className="horizontal-line"></div>

      <table>
        <thead>
          <tr className="tabela">
            <th title="Posição">Posição</th>
            <th title="Jogador">Jogador</th>
            <th title="Pontuação">Pontuação</th>
          </tr>
        </thead>

        <tbody>
          {ranking.map((usuario, index) => (
            <tr key={usuario.usuario}>
              <td title="Posição">{index + 1}</td>
              <td title="Jogador">{usuario.usuario}</td>
              <td title="Pontuação">{usuario.totalPontuacao}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </ClassificacaoStyle>
  );
};

export default Classificacao;
