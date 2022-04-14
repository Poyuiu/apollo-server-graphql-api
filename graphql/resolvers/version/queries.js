import { version } from '../../../config/environment'

const versionQueries = {
  version: async () => {
    return version
  },
  typeInt: async () => {
    return 1
  },
  typeString: async () => {
    return 'hello'
  },
  typeBool: async () => {
    return true
  },
  typeFloat: async () => {
    return 1.1
  }
}

export default versionQueries
