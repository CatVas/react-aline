exports.sendMessage = function(req, res, next) {
  res.send({
    data: req.body,
    status: 'success',
  });
}
