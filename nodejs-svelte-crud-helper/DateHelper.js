export const humanReadble = (str)=>{
  let dt = new Date(str);
  return dt.toDateString();
};
