const router = require('express').Router();
const Transaction = require('../models/transaction.js');

router.post('/api/transaction', ({ body }, res) => {
  // Transaction.create(body)
  //   .then(dbTransaction => {
  //     res.json(dbTransaction);
  //   })
  //   .catch(err => {
  //     res.status(404).json(err);
  //   });
  // console.log('getting')
});

router.post('/api/transaction/bulk', ({ body }, res) => {
  Transaction.insertMany(body)
    .then((dbTransaction) => {
      res.json(dbTransaction);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});

router.get('/api/transaction', (req, res) => {
  // Transaction.find({}).sort({date: -1})
  //   .then(dbTransaction => {
  //     res.json(dbTransaction);
  //   })
  //   .catch(err => {
  //     res.status(404).json(err);
  //   });
  console.log('good day sir\n from /api/transaction\n');
  res.json([{ name: 'transaction', value: 1000 }]);
});

module.exports = router;
