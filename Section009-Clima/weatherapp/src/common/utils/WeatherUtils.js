class WeatherUtils {
    KelvinToCelsius(temperature) {
        const kelvin = 273.15;
        let result = temperature - kelvin 
        return parseFloat(result, 10).toFixed(2);
    }
}

export default WeatherUtils;