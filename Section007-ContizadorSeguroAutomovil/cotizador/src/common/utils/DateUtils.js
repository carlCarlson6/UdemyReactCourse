class DateUtils {
    calculateYearDiference(year) {
        let actualYear = new Date().getFullYear();
        let yearDiference = actualYear - year;
        return yearDiference;
    }
}

export default DateUtils;