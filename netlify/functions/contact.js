const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

exports.handler = async function(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const data = JSON.parse(event.body);

  try {
    await resend.emails.send({
      from: 'Wrench Digital <info@wrenchdigital.ca>',
      to: 'shaan.wrench14@gmail.com',
      replyTo: data.email,
      subject: `New Quote Request — ${data.business || data.name}`,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Business:</strong> ${data.business || 'N/A'}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || 'N/A'}</p>
        <p><strong>Industry:</strong> ${data.industry || 'N/A'}</p>
        <p><strong>Package:</strong> ${data.package || 'N/A'}</p>
        <p><strong>Ongoing Services:</strong> ${data.ongoing_services || 'N/A'}</p>
        <p><strong>Message:</strong> ${data.message || 'N/A'}</p>
      `
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};