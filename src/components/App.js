import React from 'react'
import AddMovie from '../containers/AddMovie'
import VisibleCollection from '../containers/VisibleCollection'
import SearchContainer from '../containers/SearchContainer'
import '../styles/App.css'

const App = () => (
  <main className="movie-collection">
    <h1 className="movie-collection__title">Movie Collection</h1>
    <AddMovie />
    <VisibleCollection />
    <SearchContainer />
  </main>
)

export default App
