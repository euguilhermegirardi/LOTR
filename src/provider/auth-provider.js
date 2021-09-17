const localStorageKey = '__LOTR_auth_provider_token__'

async function getToken() {
  return window.localStorage.getItem(localStorageKey)
}

function handleUserResponse(username) {
  window.localStorage.setItem(localStorageKey, username)
  return username
}

function login({username, password}) {
  return client({username, password}).then(user => {
    if(user) {
      handleUserResponse(user)
      return user
    }
  })
}

async function logout() {
  window.localStorage.removeItem(localStorageKey)
}

function client({username, password}) {
  return new Promise(function(resolve, reject, error) {
    setTimeout(function() {
      if (username === 'gui' && password === 'xxx') {
        return resolve(username)
      } else {
        return reject('Password or username is incorrect!')
      }
    }, 1500);
  })
}

export {getToken, login, logout, localStorageKey}
