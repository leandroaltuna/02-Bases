

const emailTemplate = `
    <div>
        <h1>Hi, {{name}}</h1>
        <p>Thank you for your order.</p>
        <p>Order Id:{{orderId}}</p>
    </div>
`;

//console.log(emailTemplate);

module.exports = {
    emailTemplate
}