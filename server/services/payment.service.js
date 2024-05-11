const razorpay = require("../config/razorpayClient");
const orderService = require("../services/order.service.js");

const createPaymentLink = async (orderId) => {
    try {
        // Fetch order details
        const order = await orderService.findOrderById(orderId);

        // Calculate amount in paisa (Razorpay expects amount in smallest currency unit)
        const amountInPaisa = Math.round(order.totalDiscountedPrice * 100);

        // Construct payment link request
        const paymentLinkRequest = {
            amount: amountInPaisa,
            currency: 'INR',
            customer: {
                name: `${order.user.firstName} ${order.user.lastName}`,
                contact: order.user.mobile,
                email: order.user.email,
            },
            notify: {
                sms: true,
                email: true,
            },
            reminder_enable: true,
            //callback_url: `https://example.com/payment/${orderId}`, // Replace with your callback URL
            callback_method: 'get',
        };

        // Create payment link
        const paymentLink = await razorpay.paymentLink.create(paymentLinkRequest);

        // Extract payment link ID and URL
        const { id: paymentLinkId, short_url: payment_link_url } = paymentLink;

        // Return payment link details
        return { paymentLinkId, payment_link_url };
    } catch (error) {
        console.error('Error creating payment link:', error);
        throw new Error('Failed to create payment link');
    }
};


    const updatePaymentInformation = async (req, res) => {
        try {
            // Extract payment ID and order ID from request body
            const { payment_id: paymentId, order_id: orderId } = req.body;

            // Fetch order details
            const order = await orderService.findOrderById(orderId);

            // Fetch payment details using payment ID
            const payment = await razorpay.payments.fetch(paymentId);

            // Check if payment status is 'captured'
            if (payment.status === 'captured') {
                // Update order payment details and status
                order.paymentDetails.paymentId = paymentId;
                order.paymentDetails.status = 'COMPLETED';
                order.orderStatus = 'PLACED';

                // Save updated order details
                await order.save();

                // Return success response
                res.status(200).json({ message: 'Your order is placed', success: true });
            } else {
                // Return error response if payment status is not 'captured'
                res.status(400).json({ message: 'Payment status is not captured', success: false });
            }
        } catch (error) {
            console.error('Error processing payment:', error);
            res.status(500).json({ error: 'Failed to process payment' });
        }
    };


    module.exports = { createPaymentLink, updatePaymentInformation };
