import axios from 'axios';

async function getPodas() {
  try {
    const response = await axios.get(
      'http://inciclo.us-east-2.elasticbeanstalk.com/podas',
      { headers: { mode: 'cors' } }
    );
    return response;
  } catch (error) {
    return error;
  }
}

export default getPodas;
