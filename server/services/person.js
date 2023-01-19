const savePerson = require('../infrastructure/repositories/personRepository.js')
const mailer = require('../infrastructure/nodemailer.js')

function addPerson(personInfo){
    // score = calcScore(personInfo)
    console.log(personInfo)
    savePerson(personInfo)
    mailPerson(personInfo)
}


function calcScore(personInfo){
    return 5
}
function mailPerson(personInfo){
    const message = {
        to: personInfo.email,
        subject: "Уведомление о регистрации",
        text: `Поздравляем, Вы успешно зарегистрировались на нашем сайте!

            Данное письмо не требует ответа.`
    }
    mailer(message)
}

module.exports = addPerson
