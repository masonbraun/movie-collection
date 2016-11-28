import { connect } from 'react-redux'
import Search from '../components/Search'
import { updateSearchTerm } from '../actions'

const mapStateToProps = (state) => ({
  searchterm: ''
})

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (term) => {
    dispatch(updateSearchTerm(term));
  }
})

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)

export default SearchContainer
