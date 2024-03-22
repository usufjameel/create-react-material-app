import moment from "moment";

let pluralize = require('pluralize')

class DateHelper {
    static getDisplayDate(date) {
        return moment(new Date(date)).format('YYYY-MM-DD')
    }

    static getServerDate(date) {
        return moment(new Date(date)).format('YYYY/MM/DD')
    }

    static getDisplayDate2(date) {
        return moment(new Date(date)).utcOffset(+660).format('DD MMM YYYY - hh:mm a')
    }

    static getDisplayDate3(date) {
        return moment(new Date(date)).utcOffset(+660).format('DD MMM YYYY')
    }

    static getDate(date) {
        return moment(date, 'YYYY-MM-DD').toDate()
    }

    static addDays(date, days) {
        return moment(date).add(days, 'days').toDate()
    }

    static addDaysToString(date, days) {
        return moment(date).format('YYYY-MM-DD').add(days, 'days')
    }

    static getDuration(startDate, endDate) {
        let start = moment(new Date(startDate))
        let end = moment(new Date(endDate))
        let days = end.diff(start, 'day')

        return days + " " + pluralize("day", days)
    }

    static getDurationFromNow(date) {
        let start = moment(new Date(date))
        let end = moment(new Date())
        let years = end.diff(start, 'year')
        return years + " " + pluralize("year", years)
    }


}

export default DateHelper
