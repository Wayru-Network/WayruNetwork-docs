import config from "./auth_config";
import createAuth0Client from "@auth0/auth0-spa-js";

async function createClient() {
  return createAuth0Client({
    domain: config.domain,
    client_id: config.clientId,
  });
}

async function loginWithPopup(client, options) {
  try {
    await client.loginWithPopup(options);
  } catch (e) {
    console.error(e);
  }
}

function logout(client) {
  return client.logout();
}

const auth = {
  createClient,
  loginWithPopup,
  logout,
};

export default auth;