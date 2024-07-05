import './Impressoras.css';

export default function Impressoras() {
  return (
    <>
      <h1>Impressoras</h1>

      <div className="search-bar">
        <input type="search" name="" id="" placeholder="Search..." />
        <select name="" id="">
          <option value="">Selecione um mês inicial</option>
          {/* Adicione outras opções de mês aqui */}
        </select>
        <select name="" id="">
          <option value="">Selecione um mês final</option>
          {/* Adicione outras opções de mês aqui */}
        </select>
        <input type="button" value="Filtros" />
      </div>
      <div className="table-im">
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Mês</th>
              <th>Preto</th>
              <th>Colorido</th>
              <th>Ciano</th>
              <th>Magenta</th>
              <th>Amarelo</th>
            </tr>
          </thead>
          <tbody>
            {/* Adicione linhas de dados aqui */}
          </tbody>
        </table>
      </div>
    </>
  );
}
