import nodemailer from 'nodemailer'
import bcryptjs from 'bcryptjs'
import User from '@/models/userModel'


export const sendEmail = async({email, emailType, userId}:any) => {
    try{

         const hashedToken = await bcryptjs.hash(userId.toString(), 10)

        if(emailType === "VERIFY"){
          await User.findByIdAndUpdate(userId,
            {
              verifyToken:hashedToken, verifyTokenExpiry: Date.now() + 3600000
            })
        }  else if(emailType === "RESET"){
          await User.findByIdAndUpdate(userId,
            {
              forgotPasswordToken:hashedToken, forgotPasswordTokenExpiry: Date.now() + 3600000
            })
        }

        var transport = nodemailer.createTransport({
          host: "sandbox.smtp.mailtrap.io",
          port: 2525,
          auth: {
            user: "0fb6af62bfea69", //
            pass: "d00d6a4a323f84"// 
          }
        });



          const mailOptions = {
            from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
            to: "bar@example.com, baz@example.com", // list of receivers
            subject: emailType === 'VERIFY' ? "Verify your email" : "Reset your password", // Subject line
            html: `<p> Click <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">Here</a> to
            ${emailType==="VERIFY" ? "verify your email" : "reset your password"}
            or copy and paste the link below in your browser.
            <br> ${process.env.DOMAIN}/verifyemail?token=${hashedToken}
            </p>`, // html body
          };


            const mailResponse = await transport.sendMail(mailOptions)
            return mailOptions

    }
    catch(err:any){
        throw new Error(err.message)
    }
}