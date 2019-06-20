const dev = {
  API_URL: '150d9738.ngrok.io'
};

const prod = {
  API_URL: 'inciclo.us-east-2.elasticbeanstalk.com'
};

const Config = process.env.APP_STAGE == 'prod' ? prod : dev;

export default Config;
