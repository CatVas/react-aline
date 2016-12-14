exports.sendMessage = function(req, res, next) {
  console.log(req.body);
  res.send({
    status: 'success',
  });
}
