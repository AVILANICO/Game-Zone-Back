import nodemailer from 'nodemailer'

async function createEmailTransporter (user) {
    
let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, 
    auth: {
        user: process.env.EMAIL, 
        pass: process.env.EMAIL_PASS, 
    },
    });

    // send mail with defined transport object
    let infoEmail = await transporter.sendMail({
        from: '"Game Zone" <zonadejuegos46@gmail.com>',
        to: user.email,
        subject:"Verify your email...",
        html: `<table align="center" border="0" cellpadding="0" cellspacing="0" class="m_-5401722008193577908deviceWidth" style="width:100%;min-width:100%" width="100%">
        <tbody><tr>
        <td align="center" bgcolor="#ffffff">
        
        
        
        <table border="0" cellpadding="0" cellspacing="0" class="m_-5401722008193577908deviceWidth" style="width:100%;max-width:600px" width="600">
        <tbody><tr>
        <td height="32" style="height:32px;min-height:32px;line-height:32px;font-size:1px">
        &nbsp;
        </td>
        </tr>
        <tr>
        <td align="center">
        <img height="auto" src="https://i.postimg.cc/yxfX94z2/logo-minga.png" style="display:block;border:0px;text-decoration:none;border-style:none;color:#ffffff;border-width:0" width="99" class="CToWUd" data-bit="iit">
        </td>
        </tr>
        <tr>
        <td height="32" style="height:32px;min-height:32px;line-height:32px;font-size:1px">
        &nbsp;
        </td>
        </tr>
        </tbody></table>
        
        
        
        
        <table border="0" cellpadding="0" cellspacing="0" class="m_-5401722008193577908deviceWidth" style="max-width:600px" width="100%">
        <tbody><tr>
        <td align="center" bgcolor="#ffffff">
        <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tbody><tr>
        <td valign="top">
        <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tbody><tr>
        <td style="width:13%;min-width:40px" width="13%">&nbsp;</td>
        <td align="center">
        <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%">
        
        <tbody><tr>
        <td align="center" style="padding-top:16px">
        
        <img height="auto" src="https://i.postimg.cc/CKL8Grcg/image-2.png" style="display:block;border:0px;width:60%;max-width:180px;min-width:180px" width="180" class="CToWUd a6T" data-bit="iit" tabindex="0"><div class="a6S" dir="ltr" style="opacity: 0.01; left: 554px; top: 215.062px;"><div id=":os" class="T-I J-J5-Ji aQv T-I-ax7 L3 a5q" role="button" tabindex="0" aria-label="Descargar el archivo adjunto " jslog="91252; u014N:cOuCgd,Kr2w4b,xr6bB; 4:WyIjbXNnLWY6MTc2MTM1MDYzNjMxMzQ3MzQwMiIsbnVsbCxbXV0." data-tooltip-class="a1V" data-tooltip="Descargar"><div class="akn"><div class="aSK J-J5-Ji aYr"></div></div></div></div>
        
        
        </td>
        </tr>
        
        <tr>
        <td align="center" style="padding-top:16px">
        <h1 class="m_-5401722008193577908f48" style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:28px;line-height:38px;font-weight:bold;color:#4b4b4b">
        Verify your email
        
        </h1>
        
        </td>
        </tr>
        
        <tr>
        <td align="center" style="padding-top:16px">
        <p style="font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:26px;font-weight:normal;color:#777777;max-width:380px;text-align:center">
        ¡Thank you for helping us make your account more secure! Click the button below to finish verifying your email.
        
        
        </p>
        
        </td>
        </tr>
        
        <tr>
        <td align="center" style="padding-top:16px">
        <div>
        
        
        <table border="0" cellpadding="0" cellspacing="0" style="width:215px;border-spacing:0;border-collapse:collapse" width="215">
        <tbody><tr>
        <td align="center" height="43" style="border-collapse:collapse;background-color:#F472B6;border-radius:9px;white-space:nowrap">
        <a href='http://localhost:8000/auth/verify/?verify_code=${user.verify_code}' style="display:inline-block;width:100%;font-family:Arial,Helvetica,sans-serif;font-size:16px;font-weight:bold;line-height:19px;color:#ffffff;text-align:center;text-decoration:none;background-color:#F472B6;border-radius:14px;border-top:12px solid #F472B6;border-bottom:12px solid #F472B6;text-transform:uppercase" target="_blank" data-saferedirecturl="    ">
        &nbsp;&nbsp;CONFIRM EMAIL
        &nbsp;&nbsp;
        </a>
        </td>
        </tr>
        </tbody></table>
        
        
        </div>
        
        </td>
        </tr>
        
        <tr>
        <td align="center" style="padding-top:16px">
        <p style="font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:26px;font-weight:normal;color:#777777;max-width:380px;text-align:center">
        ¿Didn't create an account? Contact us to remove this email address.
        
        
        </p>
        
        </td>
        </tr>
        
        
        </tbody></table>
        </td>
        <td style="width:13%;min-width:40px" width="13%">&nbsp;</td>
        </tr>
        </tbody></table>
        
        </td>
        </tr>
        <tr>
        <td height="50" style="height:50px;min-height:50px;line-height:50px;font-size:1px;border-bottom:2px solid #f2f2f2">
        &nbsp;
        </td>
        </tr>
        </tbody></table>
        </td>
        </tr>
        </tbody></table>
        
        
        
        
        <table border="0" cellpadding="0" cellspacing="0" class="m_-5401722008193577908deviceWidth" width="100%">
        <tbody><tr>
        <td align="center" style="padding-top:23px">
        <table border="0" cellpadding="0" cellspacing="0" style="max-width:600px" width="100%">
        <tbody><tr>
        <td style="width:32px;min-width:32px;max-width:32px" width="32">
        &nbsp;
        </td>
        <td valign="top">
        
        <table align="right" border="0" cellpadding="0" cellspacing="0" class="m_-5401722008193577908responsive-table" style="min-width:100%;width:20%;max-width:100%;min-width:-webkit-calc(20%);min-width:calc(20%);width:-webkit-calc(287296px - 53600%);width:calc(287296px - 53600%)" width="105">
        <tbody><tr>
        <td align="left" style="padding-top:4px;padding-bottom:16px">
        <table border="0" cellpadding="0" cellspacing="0" width="105">
        <tbody><tr>
        <td>
        <a href="https://www.instagram.com" style="color:#a7a7a7" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.instagram.com/duolingo/&amp;source=gmail&amp;ust=1680106173146000&amp;usg=AOvVaw14Hw1bjIJxcxwLmJmJkJHx"><img alt="Instagram" height="auto" src="https://ci3.googleusercontent.com/proxy/RfiWmOL8tZiBtAVtByvEJrvgGfr5kWT5yS9uNmrJQ5_UdwTXdtyL_ywzQijrgoMkS7uTFhTWDSu-JnXe3itbFJo-4qE=s0-d-e1-ft#http://dzvpwvcpo1876.cloudfront.net/Instagram.png" style="display:block;border:0" width="25" class="CToWUd" data-bit="iit">
        </a>
        </td>
        <td style="width:15px;min-width:15px;font-size:1px" width="15">
        &nbsp;&nbsp;
        </td>
        <td>
        <a href="https://twitter.com" style="color:#a7a7a7" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://twitter.com/duolingo&amp;source=gmail&amp;ust=1680106173147000&amp;usg=AOvVaw0c-KvaHjhTKe4ogBG0yxEo"><img alt="Twitter" height="auto" src="https://ci4.googleusercontent.com/proxy/gYtvkz_HwJhZgdIoQD89Z6FQr1QPWtIGgnegZd-8WPrv9sksH48ZtHG_DjAdmQj5K4SIJzjkaf7ryINvbFYR6bTb=s0-d-e1-ft#http://dzvpwvcpo1876.cloudfront.net/Twitter.png" style="display:block;border:0" width="25" class="CToWUd" data-bit="iit">
        </a>
        </td>
        <td style="width:15px;min-width:15px;font-size:1px" width="15">
        &nbsp;&nbsp;
        </td>
        <td>
        <a href="https://www.facebook.com" style="color:#a7a7a7" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.facebook.com/duolingo&amp;source=gmail&amp;ust=1680106173147000&amp;usg=AOvVaw2ekMVj9Wsao84g_IUIQVJM"><img alt="Facebook" height="auto" src="https://ci3.googleusercontent.com/proxy/lDP515ageK0gC1NAKnESFQB2-boG4D7Mtu1C8zJyaXbdfLnlY1cx1c775c-k4nGm9qjEoE8EOvTYq9cS6wojR-_2qg=s0-d-e1-ft#http://dzvpwvcpo1876.cloudfront.net/Facebook.png" style="display:block;border:0" width="25" class="CToWUd" data-bit="iit">
        </a>
        </td>
        </tr>
        </tbody></table>
        </td>
        </tr>
        </tbody></table>
        
        
        <table align="left" border="0" cellpadding="0" cellspacing="0" class="m_-5401722008193577908responsive-table" style="min-width:100%;width:54%;max-width:100%;min-width:-webkit-calc(54%);min-width:calc(54%);width:-webkit-calc(287296px - 53600%);width:calc(287296px - 53600%)" width="290">
        <tbody><tr>
        <td align="center">
        
        <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%">
        <tbody><tr>
        <td align="left">
        <p style="Margin:0;margin:0;font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:15px;font-weight:400;color:#a7a7a7">
        5900 Penn Avenue, Pittsburgh PA 15206, USA
        </p>
        </td>
        </tr>
        </tbody></table>
        
        
        </td>
        </tr>
        </tbody></table>
        
        
        </td>
        <td style="width:32px;min-width:32px;max-width:32px" width="32">
        &nbsp;
        </td>
        </tr>
        </tbody></table>
        </td>
        </tr>
        
        <tr>
        <td height="60" style="height:60px;min-height:60px;line-height:60px;font-size:1px">
        &nbsp;
        </td>
        </tr>
        </tbody></table>
        
        
        
        
        </td>
        </tr>
        </tbody></table>`
    });
}


export default createEmailTransporter
