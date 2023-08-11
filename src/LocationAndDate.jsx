export default function LocationAndDate({ data }) {

  const dataCriada = new Date(data);
  const dataFormatada = dataCriada.toLocaleDateString('pt-BR', {
    timeZone: 'UTC',
  });


  return (
    <div className="location-and-date">
      <h1 className="location-and-date__location">Belém</h1>
      <div>{dataFormatada}</div>
    </div>
  )
}