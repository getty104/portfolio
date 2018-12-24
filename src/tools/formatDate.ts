import * as Moment from "moment";

export const formatDate = (date: any) =>
  Moment(date)
    .utcOffset("+18:00")
    .format("YYYY年MM月DD日 HH:mm");
