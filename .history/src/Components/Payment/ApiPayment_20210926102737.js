import Stripe from 'stripe'

const stripe = new Stripe('sk_test_51Jcol7DphoWPHqYkVbxfuR1g5KqwW5Sq65QJrwkFB0mu9gZvx3MHa3JOGDc68FOeHjVue5AircGpNVQH8HGS7rrJ000b2Vyn72')

export default async (req, res) => {
    const { id } = req.body;
     try{
        const payment = await stripe.paymentIntents.create({
            payment_method: id,
            currency: 'HRN',
            description:'Test',
            confirm: true
        })

        res.status(200).json({ status: payment.status })
     }catch(e){
        res.status(400).send(e.message)
     }
}