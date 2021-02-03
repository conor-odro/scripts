import fetch from 'node-fetch';

const getAccessToken = async ({ clientId, clientSecret, authCode }) => {
  const params = new URLSearchParams({
    client_id: clientId,
    client_secret: clientSecret,
    grant_type: 'authorization_code',
    code: authCode,
  });

  const response = await fetch(`https://auth.bullhornstaffing.com/oauth/token?${params}`, { method: 'POST' });

  if (!response || response.status !== 200) {
    console.debug({ response });
    throw new Error('Failed to fetch Access Token, please check parameters');
  }

  const { access_token: accessToken, refresh_token: refreshToken } = await response.json();

  return { accessToken, refreshToken };
};

export default getAccessToken;
