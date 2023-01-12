const saveCompany = require('../infrastructure/repositories/companyRepository.js')
const mailer = require('../infrastructure/nodemailer.js')

function addCompany(companyInfo){
    calcScore(companyInfo)
    saveCompany(companyInfo)
    mailCompany(companyInfo)
}


function calcScore(companyInfo){
    companyInfo.score = 5.0
}

function mailCompany(companyInfo){
    const message = {
        to: companyInfo.mail,
        subject: "Уведомление о регистрации",
        text: `Поздравляем, Вы успешно зарегистрировались на нашем сайте!
            Ваш результат: ${companyInfo.score}

            Данное письмо не требует ответа.`
    }
    mailer(message)
}

module.exports = addCompany
