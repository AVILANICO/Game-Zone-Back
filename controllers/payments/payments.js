import mercadopago from 'mercadopago';
import nodemailer from 'nodemailer'


const payments = async (req, res, next) => {
  let { unit_price, } = req.body
  try {
    mercadopago.configure({ access_token: process.env.ACCESS_TOKEN })
    
    const preference = {
      items: [
        {
          title:"Juegos: " ,
          unit_price: unit_price,
          quantity: 1,
          currency_id: 'USD',
        },
      ],
        back_urls: {
          success: 'http://localhost:5173/',
          failure: 'http://localhost:5173/',
          pending: '',
        },
        auto_return: "approved",
    };

    const response = await mercadopago.preferences.create(preference);
    console.log(response);
    res.status(200).json({ 
      preferenceId: response.body.id , message :"succes payment"
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ 
      error: 'Oops! An error occurred while generating the payment.' 
    });
  }
};

export default payments;

