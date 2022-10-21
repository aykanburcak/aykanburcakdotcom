import sgMail from '@sendgrid/mail'
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export default async (req, res) => {
  if (req.method === 'POST') {
    const {name, email, subject, message} = req.body
    const emailObject = {
      to: 'aykanburcak@gmail.com',
      from: 'aykanburcak@gmail.com',
      subject: `Web sitesinden mesaj (${subject})`,
      text: `Email = ${email}`,
      html: `
        <div>
            <b>Gönderen</b>
            <div>${name}</div>
        </div>
        <div>
            <b>Eposta</b>
            <div>${email}</div>
        </div>
        <div>
            <b>Konu</b>
            <div>${subject}</div>
        </div>
        <div>
            <b>Mesaj</b>
            <div>${message}</div>
        </div>
      `
    }

    try {
      await sgMail.send(emailObject)
      res.status(200).json({success: true})
    } catch (error) {
      res.status(200).json({success: false})
    }

  }
}
