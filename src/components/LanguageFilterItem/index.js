import './index.css'

const LanguageFilterItem = props => {
  const {languageDetails, toGetFilter, activeFilter} = props
  const {id, language} = languageDetails

  let classToApply = 'filter-btn'

  if (activeFilter === id) {
    classToApply = 'clicked-btn'
  }

  const onClickBtn = () => {
    toGetFilter(id)
  }

  return (
    <button className={classToApply} onClick={onClickBtn}>
      {language}
    </button>
  )
}

export default LanguageFilterItem
