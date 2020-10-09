export function setGreeting(greeting) {
  return {
    type: "SET_GREETING",
    payload: `${greeting.message} ${greeting.subtitle}`
  };
}

export function setLoading(isLoading) {
  return {
    type: "SET_LOADING",
    payload: isLoading
  };
}

export function setError(message) {
  return {
    type: "SET_ERROR",
    payload: message
  };
}

export function fetchGreeting(name) {
  return function(dispatch) {
    dispatch(setLoading(true));

    let result = fetch(`https://foaas.com/off/${name}/Everyone`, {
      headers: {
        Accept: "application/json",
      },
    })
    .then((r) => r.json())
    .then(response => {
      dispatch(setGreeting(response))
    })
    .finally(_ => dispatch(setLoading(false)));
  }
}

export function addTodo(text) {
  return {
    type: "ADD_TODO",
    payload: {
      text: text,
      done: false,
    },
  };
}

export function fetchGreetingPromise(name) {
  return new Promise((resolve, reject) => {
    let result = fetch(`https://foaas.com/off/${name}/Everyone`, {
      headers: {
        Accept: "application/json",
      },
    }).then((r) => r.json()).then(response => resolve(response));
  });
}

