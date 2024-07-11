import './SearchBar.css';

export default function SearchBar() {
  return (
    <div className="search-bar">
      <div className="search-container">
        <img src="src\assets\search.svg" alt="icon search"/>
        <input type="search" name="" id="" placeholder="Search..." />
      </div>
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
  );
}
