let number=100;
const getData = (req, res) => {
  res.status(200).json(number);
};
const UpdateData = (req, res) => {
  number += Number(req.body.value);
  res.status(200).json(Number(number));
};
const deleteData = (req, res) => {
  number = 100;
  res.status(200).json(Number(number));
};
module.exports={getData,UpdateData,deleteData}