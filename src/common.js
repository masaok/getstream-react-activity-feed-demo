const isDev = () => {
  return window.location.hostname === 'localhost'
}

export { isDev }
