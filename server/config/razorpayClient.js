const Razorpay = require('razorpay');

apiKey="rzp_test_R4MHa57Aj4xVdE"
apiSecret="jP77oJHOQFMIfCula4ZILSmA"

const razorpay = new Razorpay({
    key_id: apiKey,
    key_secret: apiSecret,
  });


  module.exports=razorpay;