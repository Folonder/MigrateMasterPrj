const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport(
    {
        host: 'smtp.mail.ru',
        port: 465,
        secure: true,
        auth: {
            user: 'migratemaster@mail.ru',
            pass: 'eSew3wDqFxbZU3g97y3v'
        },
        tls:{
            rejectUnauthorized:false
        }
    },
    {
        from: 'Migrate Master <migratemaster@mail.ru>'
    }
)


const mailer = message => {
    transporter.sendMail(message, (err, info) => {
            if (err) return console.log(err)
            console.log('Email sent: ', info)
    })
}

module.exports = mailer