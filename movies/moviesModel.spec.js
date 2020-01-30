const db = require('../data/dbConfig')
const Movies = require('./moviesModel')

beforeEach(async () => {
  await db('movies').truncate()
})

describe('Movies model', () => {
  describe('insert()', () => {
    it('inserts the correct number of movies', async () => {
      // setup
      await Movies.insert({ name: 'Terminator' })
      await Movies.insert({ name: 'Titanic' })
      const movies = await db('movies')
      // assertion
      expect(movies).toHaveLength(2)
    })

    it('inserts the movies without breaking them', async () => {
      const movie = await Movies.insert({ name: 'Terminator' })
      expect(movie).toMatchObject({ name: 'Terminator' })
    })

    it('can find a movie in the db', async () => {
      // first we need a movie actually there
      // remember the db gets truncated after each test
      // don't entangle yourself with other model functions
      await db('movies').insert({ name: 'Terminator' })
      const Terminator = await Movies.findById(1)
      expect(Terminator).toMatchObject({ name: 'Terminator' })
    })
  })
})
