import * as Path from 'node:path'
import * as URL from 'node:url'

const __filename = URL.fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)

export default {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: Path.join(__dirname, 'dev.sqlite3'),
    },
    pool: {
      afterCreate: (conn, cb) => conn.run('PRAGMA foreign_keys = ON', cb),
    },
  },
  useNullAsDefault: true,

  test: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: ':memory:',
    },
    migrations: {
      directory: Path.join(__dirname, 'migrations'),
    },
    seeds: {
      directory: Path.join(__dirname, 'seeds'),
    },
    pool: {
      afterCreate: (conn, cb) => conn.run('PRAGMA foreign_keys = ON', cb),
    },
  },

  production: {
    client: 'pg',
    connection:
      'postgresql://postgres:rzumwKVNrSSbFkHKtZZFeVqFFrfJIhNE@junction.proxy.rlwy.net:21245/railway',
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: Path.join(__dirname, 'migrations'),
    },
    seeds: {
      directory: Path.join(__dirname, 'seeds'),
    },
  },
}
