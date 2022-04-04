import React from 'react'

// provide options in case that user don't wanna use something so the user can overwrite these options
function useLocalStorageState(key, defaultValue = 'active', {
  serialize = JSON.stringify,
  deserialize = JSON.parse,
} = {}) {
  // find out the current variant and get the current item out of the local storage
  const [state, setState] = React.useState(() => {
    const valueInLocalStorage = window.localStorage.getItem(key) || defaultValue
    if (valueInLocalStorage) {
      // parse the value we've got
      return deserialize(valueInLocalStorage)
    }
    // default value could be a function
    return typeof defaultValue === 'function' ? defaultValue() : defaultValue
  }
  )

  // if the key changes we want to remove this so we need to track it. It's better for perfomance because we don't trigger rerender
  const prevKeyRef = React.useRef(key)

  // set item to local storage if compontent was rerendered
  React.useEffect(() => {
    const prevKey = prevKeyRef.current

    // remove previous key if we have something
    if (prevKey !== key) {
      window.localStorage.removeItem(prevKey)
    }
    // track the current key
    prevKeyRef.current = key

    // we use JSON.stringify in case if we got a number
    window.localStorage.setItem(key, serialize(state))
  }, [key, serialize, state])

  return [state, setState]
}

export {useLocalStorageState}