const mailer = require("nodemailer");

module.exports = (email, nome) => {
    const smtpTransport = mailer.createTransport({
        host: "",
        port: 0,
        auth: {
            user: "",
            pass: ""
        }
    })

    const mail = {
        from: "",
        to: email,
        subject: `${nome} te enviou uma mensagem`,
        text: "Seja bem-vindo",
        //html: "<b>Opcionalmente, pode enviar como HTML</b>"
    }

    return new Promise((resolve, reject) => {
        smtpTransport.sendMail(mail)
            .then(response => {
                smtpTransport.close();
                return resolve(response);
            })
            .catch(error => {
                smtpTransport.close();
                return reject(error);
            });
    })
}
