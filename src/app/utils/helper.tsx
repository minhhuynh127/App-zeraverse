import moment from "moment";

const formatDate = (date: Date) => {
  if (!date) return;
  return moment(new Date(date)).format("MM/DD/YYYY h:mm A");
};

const getBetweenTwoDate = (value: Date) => {
  const currentDay = new Date();
  const prevTime = new Date(value);
  let diff =
    (currentDay.getTime() - prevTime.getTime()) / (1000 * 60 * 60 * 24);
  let betweenTwoDate;
  let string = "";

  // eslint-disable-next-line radix
  switch (Math.floor(diff)) {
    case 0:
      if (diff * 24 >= 1) {
        string = "hours ago";
        // eslint-disable-next-line radix
        betweenTwoDate = `${parseInt((diff * 24).toString())}`;
        return [betweenTwoDate, " ", string];
      }

      string = "minutes ago";
      // eslint-disable-next-line radix
      betweenTwoDate = `${parseInt((diff * 24 * 60).toString())}`;
      break;

    case 1:
      string = "day ago";
      betweenTwoDate = "1";
      break;

    case 2:
      string = "day ago";
      betweenTwoDate = "2";
      break;

    default:
      string = "";
      betweenTwoDate = moment(value).format("MM/DD/YYYY");
      break;
  }

  return [betweenTwoDate, " ", string];
};

const toUpperCaseFirstLetter = (str: string) => {
  if (str?.includes("/")) {
    return (
      str.split("/")[0]?.charAt(0)?.toUpperCase() +
      str.split("/")[0]?.slice(1)?.toLowerCase() +
      " / " +
      str.split("/")?.slice(-1).pop()?.charAt(0)?.toUpperCase() +
      str.split("/")?.slice(-1).pop()?.slice(1)?.toLowerCase()
    );
  } else {
    return str?.charAt(0)?.toUpperCase() + str?.slice(1)?.toLowerCase();
  }
};

const abbreviateNumber = (num: number) => {
  if (!num) return 0;

  const unit = Math.floor(
      Math.round(num / 1.0e1)
        .toLocaleString()
        .replaceAll(",", "").length
    ),
    wunit = [
      "K",
      "M",
      "B",
      "T",
      "Quadrillion",
      "Quintillion",
      "Sextillion",
      "Septillion",
      "Octillion",
      "Nonillion",
      "Decillion",
      "Undecillion",
      "Duodecillion",
      "Tredecillion",
      "Quattuordecillion",
      "Quindecillion",
      "Sexdecillion",
      "Septemdecillion",
      "Octodecillion",
      "Novemdecillion",
      "Vigintillion",
      "Unvigintillion",
      "Duovigintillion",
      "Trevigintillion",
      "Quattuorvigintillion",
      "Quinvigintillion",
      "Sexvigintillion",
      "Septvigintillion",
      "Octovigintillion",
      "Nonvigintillion",
      "Trigintillion",
      "Untrigintillion",
      "Duotrigintillion",
    ][Math.floor(unit / 3) - 1],
    funit = Math.abs(Number(num)) / Number("1.0e+" + (unit - (unit % 3)));
  return wunit ? funit.toLocaleString() + "" + wunit : num.toString();
};

const isLogged = () => {
  if (typeof window === "undefined") return false;

  const accessToken = localStorage.getItem("accessToken");
  const username = localStorage.getItem("username");

  return !!accessToken && !!username;
};

const parseTagLabel = (tagSlug: string) => {
  return toUpperCaseFirstLetter(
    tagSlug?.split("/")?.slice(-1)[0]?.replaceAll("-", " ") || ""
  );
};
const getTimeRemaining = (time: number) => {
  if (time === 0 || time < 0 || !time) {
    return {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
      time: 0,
      isTimeOut: true,
    };
  }
  time = time * 1000;
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((time % (1000 * 60)) / 1000);
  return {
    days: days > 9 ? days : "0" + days,
    hours: hours > 9 ? hours : "0" + hours,
    minutes: minutes > 9 ? minutes : "0" + minutes,
    seconds: seconds > 9 ? seconds : "0" + seconds,
    time,
    isTimeOut: false,
  };
};
export {
  getBetweenTwoDate,
  toUpperCaseFirstLetter,
  abbreviateNumber,
  isLogged,
  parseTagLabel,
  formatDate,
  getTimeRemaining,
};
