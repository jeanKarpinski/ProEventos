using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProEventos.Domain;

namespace ProEventos.Persistence.Contratos
{
    public interface ILotePersist
    {
        /* Método get que retornará uma lista de lotes por eventoId
            eventoId - Código chave da tabela evento
            retorna - Array de Lotes */
        Task<Lote[]> GetLotesByEventoIdAsync(int eventoId);


        /* Método get que retornará apenas 1 lote
            eventoId - Código chave da tabela evento
            id - Código chave da tabela Lote 
            retorna - Apenas 1 lote */
        Task<Lote> GetLoteByIdsAsync(int eventoId, int id);
    }
}