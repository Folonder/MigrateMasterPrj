const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport(
    {
        host: 'smtp.mail.ru',
        port: 465,
        secure: true,
        auth: {
            user: 'migrate_master@mail.ru',
            pass: '9x2GFJaCnZjBVxBKDzfB'
        },
        tls:{
            rejectUnauthorized:false
        }
    },
    {
        from: 'Migrate Master <migrate_master@mail.ru>'
    }
)


const mailer = message => {
    transporter.sendMail(message, (err, info) => {
            if (err) return console.log(err)
            console.log('Email sent: ', info)
    })
}

module.exports = mailer