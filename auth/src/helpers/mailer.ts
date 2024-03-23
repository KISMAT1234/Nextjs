import nodemailer from 'nodemailer'

export const sendEmail = async({email, emailType, userId}:any) => {
    try{
        const transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, // Use `true` for port 465, `false` for all other ports
            auth: {
              user: "maddison53@ethereal.email",
              pass: "jn7jnAPss4f63QBp6D",
            },
          });



          const mailOptions = {
            from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
            to: "bar@example.com, baz@example.com", // list of receivers
            subject: emailType === 'VERIFY' ? "Verify your email" : "Reset your password", // Subject line
            html: "<b>Hello world?</b>", // html body
          };


            const mailResponse = await transporter.sendMail(mailOptions)
            return mailOptions

    }
    catch(err:any){
        throw new Error(err.message)
    }
}