import * as Moment from "moment";

export const formatDate = (date: any) => Moment(date).format("YYYY年MM月DD日");
