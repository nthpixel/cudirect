export interface ForecastModel {
	city: string,
	forecastDays: ForecastDayModel[],
	error: string
}

export interface ForecastDayModel {
	date: Date,
	forecastHours: ForecastHourModel[]
}

export interface ForecastHourModel {
	date: Date,
	main: string,
	description: string,
	temp: number,
	humidity: number
}