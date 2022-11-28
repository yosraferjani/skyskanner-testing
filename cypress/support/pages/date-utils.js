const MONTHS = [
  ["01", "janvier"],
  ["02", "fevrier"],
  ["03", "mars"],
  ["04", "avril"], 
  ["05", "mai"],
  ["06", "juin"],
  ["07", "juillet"],
  ["08", "août"],
  ["09", "septembre"],
  ["10", "octobre"],
  ["11", "novembre"],
  ["12", "décembre"],
];
const MY_MAP = new Map(MONTHS);
class DateUtils {
  static getMonth(date) {
    var dateSplited = date.split("/")
    return `${MY_MAP.get(dateSplited[1])} ${dateSplited[2]}`;
  }
  static getDay(date) {
    return `${date.split("/")[0]}`
  }
}
export default DateUtils
