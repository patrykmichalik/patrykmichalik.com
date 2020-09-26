import { useState } from 'react'
import FilterBar from './filter-bar'
import Container from 'components/container'
import WorkGrid from './work-grid'
import getAllWorks from 'utils/get-all-works'

const FilterableWorkGrid = (): JSX.Element => {
  const [filterText, updateFilterText] = useState<string>('')
  const handleFilterTextChange = (e: React.MouseEvent<HTMLElement>) => {
    updateFilterText((e.target as HTMLElement).getAttribute('data-value') || '')
  }
  return (
    <Container>
      <FilterBar
        filterText={filterText}
        onFilterTextChange={handleFilterTextChange}
        works={getAllWorks()}
      />
      <WorkGrid filterText={filterText} works={getAllWorks()} />
    </Container>
  )
}

export default FilterableWorkGrid