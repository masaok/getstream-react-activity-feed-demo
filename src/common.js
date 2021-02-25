const inDevMode = () => {
  return window.location.hostname === 'localhost'
}

export { inDevMode }
