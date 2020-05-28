const isCollapse = true;
let msg = "您有一条新消息";
function setMsg (value) {
  this.msg = value;
  console.log(this.msg);
};
export default {
  msg,
  setMsg
};
