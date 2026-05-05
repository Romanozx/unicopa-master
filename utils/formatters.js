export const formatarData = (data) => {
  const [ano, mes, dia] = data.split('-');
  return `${dia}/${mes}`;
};

export const agruparPorData = (jogos) => {
  const agrupados = jogos.reduce((acc, jogo) => {

    const data = jogo.data_brasilia;

    if (!acc[data]) {
      acc[data] = [];
    }

    acc[data].push(jogo);

    return acc;

  }, {});

  Object.keys(agrupados).forEach((data) => {
    agrupados[data].sort((a, b) => {
      return a.hora_brasilia.localeCompare(b.hora_brasilia);
    });
  });

  return agrupados;
};