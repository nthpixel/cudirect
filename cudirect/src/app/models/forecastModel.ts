export interface ForecastModel {
	city: string,
	forecastDays: ForecastDayModel[]
}

export interface ForecastDayModel {
	date: Date,
	forecastHours: ForecastHourModel[]
}

export interface ForecastHourModel {
	date: Date,
	temp: number,
	humidity: number
}