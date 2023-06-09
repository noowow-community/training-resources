class Configuration {
  get apiUrl () { return 'http://localhost:8033' }
  get userPath () { return 'users' }
}

const config = new Configuration()

export default config
