import mercadopago from 'mercadopago';
import nodemailer from 'nodemailer'

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, 
  auth: {
      user: process.env.EMAIL, 
      pass: process.env.EMAIL_PASS, 
  },
  });

const payments = async (req, res, next) => {

  let { unit_price, } = req.body
  let {user} = req
  

    mercadopago.configure({ access_token: process.env.ACCESS_TOKEN })
    
    const message = {

      from: '"Game Zone" <zonadejuegos46@gmail.com>',
      to: user.email,
      subject: "Thank you for your purchase! Below we will show you the details of your order.",
      html: `<div  style=" text-align:center;" > 
      <img  style="width: 100%; " src="http://localhost:3000/static/media/logo.69cd86d90139cc3bb574.png" alt="photo" /> 
      <h3 style="font-size:20px; text-align:center">Thank you for your purchase!</h3>
      <p style="font-size:16px; text-align:center">Below we will show you the details of your order:</p>
      
      <p>"Enjoy our products and we look forward to showing you our latest updates!"</p>
      </div>`

  };
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

    mercadopago.preferences
      .create(preference)
      
      .then( response => {
        transporter.sendMail(message,(error, info)=> {
          if(error){
            console.log(error);
          } else {
            console.log('Sent mail: ' + info.response);
          }
        })
        return res
          .status(200)
          .json({
            response,
            preferenceId: response.body.id
          })
      })
      .catch(err => console.log(err));

};

export default payments;

