import axios from 'axios';

const ngrokUrl = 'http://a171cce4.ngrok.io';
const baseUrl = 'http://inciclo.us-east-2.elasticbeanstalk.com';

async function getPodas() {
  try {
    const response = await axios.get(baseUrl + '/podas', { headers: { mode: 'cors' } });
    return response;
  } catch (error) {
    return error;
  }
}

export default getPodas;
