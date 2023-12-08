import moment from "moment";

const formatCreatedAt = (createdAt: any) => {
  const formattedDate = moment(createdAt).format("DD, YYYY hh:mm:ss");
  return formattedDate;
};

export default formatCreatedAt;
