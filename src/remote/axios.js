import axios from 'axios';

const ngrokUrl = 'http://150d9738.ngrok.io';
const baseUrl = 'http://inciclo.us-east-2.elasticbeanstalk.com';

export async function getPodas() {
  try {
    const response = await axios.get(ngrokUrl + '/podas', { headers: { mode: 'cors' } });
    return response;
  } catch (error) {
    return error;
  }
}

export async function schedulePoda(podaId) {
  try {
    const response = await axios.put(ngrokUrl + '/podas/scheduling/?id=' + podaId, { scheduleType: 'PODA' });
    return response;
  } catch (error) {
    console.log('schedule error', error);
    return error;
  }
}
