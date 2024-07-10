export default function Comparador() {
    return (
      <>
      <h1>Comparador de Meses</h1>
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
      </>
    )
  }