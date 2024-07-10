import "./Impressoras.css";

export default function Impressoras() {
  return (
    <>
      <h1>Impressoras</h1>

      <div className="table-im">
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Modelo</th>
              <th>Usuário</th>
              <th>IP</th>
            </tr>
          </thead>
          <tbody>
            
            <td>Compras - HP 9020 (11)</td>
            <td>HP OfficeJet Pro 9020</td>
            <td>Geral</td>
            <td><a href="https://10.21.5.11">10.21.5.11</a></td>
          </tbody>
        </table>
      </div>
    </>
  );
}
