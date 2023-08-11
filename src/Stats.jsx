function stats( {data} ){

    return(
        <div className="current-stats">
    <div>
      <div className="current-stats__value">{Math.round(data.daily.temperature_2m_max[0])}&deg;</div>
      <div className="current-stats__label">Max</div>
      <div className="current-stats__value">{Math.round(data.daily.temperature_2m_min[0])}&deg;</div>
      <div className="current-stats__label">Min</div>
    </div>
    <div>
      <div className="current-stats__value">{Math.round(data.current_weather.windspeed)}mph</div>
      <div className="current-stats__label">Vento</div>
      <div className="current-stats__value">{data.daily.rain_sum[0]}mm</div>
      <div className="current-stats__label">Chuva</div>
    </div>
    <div>
      <div className="current-stats__value">{data.daily.sunrise[0].slice(-5)}</div>
      <div className="current-stats__label">Nascer do Sol</div>
      <div className="current-stats__value">{data.daily.sunset[0].slice(-5)}</div>
      <div className="current-stats__label">Pôr do Sol</div>
    </div>
  </div>
    )
}
export default stats