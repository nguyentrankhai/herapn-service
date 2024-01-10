// app.js (hoặc server.js)
const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes/route');
const CustomException = require('./exception/CustomException');
const ResultData = require('./models/sys/Result');
const app = express();
const port = process.env.PORT || 5000;


const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200, // một số trình duyệt có thể không xử lý nguồn 204
};
app.use(cors(corsOptions));
app.use(express.json());

const checkRequestMiddleware = (req, res, next) => {
  // let token = req.body?.token;
  // if (token != "HUYSAMA") {
  //   let rs = new ResultData(500, 'ERROR', null, new CustomException("TOKEN hết hạn"));
  //   res.status(500).json(rs);
  // }
  // else {
  //   next();
  // }
  next()
};
app.use(checkRequestMiddleware);

const afterResponseMiddleware = (req, res, next) => {
  // console.log('Middleware after response:', res);
  res.on('finish', () => {
    // res.json({huy:"huýamas"})
  });
  next();
};
app.use(afterResponseMiddleware);

app.use('/api', apiRoutes);

const errorHandlerMiddleware = (err, req, res, next) => {
  let ex;
  if (err instanceof CustomException) {
    ex = err;
  } else {
    ex = new CustomException("Lỗi hệ thông")
  }
  console.log("REQUEST ERORR");
  let rs = new ResultData(500, 'ERROR', null, ex);
  res.status(500).json(rs);
};
app.use(errorHandlerMiddleware);

app.use((req, res, next) => {
  let rs = new ResultData(401, 'ERROR', null, new CustomException("NOT FOUND", {}, 401));
  res.status(401).json(rs);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
