import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {filter: 'ALL', status: 'In Progress', data: []}

  componentDidMount() {
    this.getReposOnCategory()
  }

  getReposOnCategory = async () => {
    const {filter} = this.state
    const responseObj = await fetch(
      `https://apis.ccbp.in/popular-repos?language=${filter}`,
    )

    const data = await responseObj.json()

    if (responseObj.ok === true) {
      this.setState({status: true, data: data.popular_repos})
    } else {
      this.setState({status: false})
    }
  }

  getClickedFilter = id => {
    this.setState({filter: id, status: 'In Progress'}, this.getReposOnCategory)
  }

  renderOnStatus = s => {
    const {data} = this.state
    switch (s) {
      case 'In Progress':
        return (
          <div data-testid="loader">
            <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
          </div>
        )

      case true:
        return (
          <li>
            {data.map(eachRepo => (
              <RepositoryItem key={eachRepo.id} repoInfo={eachRepo} />
            ))}
          </li>
        )

      default:
        return <h1>oij</h1>
    }
  }

  render() {
    const {filter, status, data} = this.state

    return (
      <div className="main-container">
        <h1 className="main-heading">Popular</h1>
        <li className="filterOnLanguageContainer">
          {languageFiltersData.map(language => (
            <LanguageFilterItem
              key={language.id}
              languageDetails={language}
              toGetFilter={this.getClickedFilter}
              activeFilter={filter}
            />
          ))}
        </li>
        {this.renderOnStatus(status)}
      </div>
    )
  }
}

export default GithubPopularRepos
