import './index.css'

const RepositoryItem = props => {
  const {repoInfo} = props
  const objCaseConvert = {
    name: repoInfo.name,
    issuesCount: repoInfo.issues_count,
    forksCount: repoInfo.forks_count,
    starsCount: repoInfo.stars_count,
    avatarUrl: repoInfo.avatar_url,
  }
  const {name, avatarUrl, starsCount, issuesCount, forksCount} = objCaseConvert
  return (
    <li>
      <img src={avatarUrl} className="repo-logo" />
      <h1 className="repo-name">{name}</h1>
      <div className="repo-info">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
          className="img-style"
        />
        <p className="count">{starsCount}</p>
      </div>
      <div className="repo-info">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
          className="img-style"
        />
        <p className="count">{forksCount}</p>
      </div>
      <div className="repo-info">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
          className="img-style"
        />
        <p className="count">{issuesCount}</p>
      </div>
    </li>
  )
}

export default RepositoryItem
