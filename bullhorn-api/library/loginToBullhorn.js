import fetch from 'node-fetch';

const loginToBullhorn = async ({ accessToken }) => {
  const params = new URLSearchParams({
    version: '*',
    access_token: accessToken,
  });

  const response = await fetch(`https://rest.bullhornstaffing.com/rest-services/login?${params}`, { method: 'POST' });

  if (!response || response.status !== 200) throw new Error('Failed to Login, please check parameters');

  const { BhRestToken, restUrl } = await response.json();

  return { BhRestToken, restUrl };
};

export default loginToBullhorn;
