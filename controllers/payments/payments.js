import mercadopago from 'mercadopago';


const payments = async (req, res, next) => {
  try {
    mercadopago.configure({ access_token: process.env.ACCESS_TOKEN })
    const preference = {
      items: [
        {
          title: "Donation",
          unit_price: Number(req.body.unit_price),
          quantity: 1,
        },
      ],
      back_urls: {
        success: 'http://localhost:5173/',
        failure: 'http://localhost:5173/',
        pending: '',
      },
    };

    const response = await mercadopago.preferences.create(preference);
    res.status(201).json({ preferenceId: response.body.id , message :"succes payment" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Oops! An error occurred while generating the payment.' });
  }
};

export default payments;

