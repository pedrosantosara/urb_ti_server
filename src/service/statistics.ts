function calcularDiaMaisChamados(chamados: any[]): { diaComMaisChamados: string | null; totalChamadosPorDia: Map<string, number> } {
    const contagemPorDia = new Map<string, number>();
  
    // Preencher o mapa com a contagem de chamados para cada dia
    chamados.forEach((chamado) => {
      const dataFormatada = chamado.criadoEm.toISOString().split('T')[0]; // Obter a parte da data
      contagemPorDia.set(dataFormatada, (contagemPorDia.get(dataFormatada) || 0) + 1);
    });
  
    // Encontrar o dia com o máximo de chamados
    let diaComMaisChamados: string | null = null;
    let maxChamados = 0;
  
    contagemPorDia.forEach((contagem, dia) => {
      if (contagem > maxChamados) {
        diaComMaisChamados = dia;
        maxChamados = contagem;
      }
    });
  
    return { diaComMaisChamados, totalChamadosPorDia: contagemPorDia };
  }

  export default calcularDiaMaisChamados;