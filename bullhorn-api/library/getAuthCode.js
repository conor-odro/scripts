import fetch from 'node-fetch';

const getAuthCode = async ({ clientId, username, password }) => {
  const params = new URLSearchParams({
    client_id: clientId,
    response_type: 'code',
    action: 'Login',
    username,
    password,
  });

  const response = await fetch(`https://auth.bullhornstaffing.com/oauth/authorize?${params}`);

  if (!response || response.status !== 200) throw new Error('Failed to fetch Auth Code, please check parameters');

  const { searchParams } = new URL(response.url);
  const code = searchParams.get('code');

  if (!code) {
    console.debug({ response });
    throw new Error('Failed to get Auth Code from response');
  }

  return code;
};

export default getAuthCode;
