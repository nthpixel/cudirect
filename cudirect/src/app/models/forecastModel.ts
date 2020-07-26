export interface ForecastApiResponse {
	cod: string,
	message: string,
	cnt: number,
	list: ForecastModel[]
}

export interface ForecastModel {
	date: Date,
	temp: Number,
	humidity: Number
}