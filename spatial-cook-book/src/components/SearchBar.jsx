import { useState } from 'react'
import { motion } from 'framer-motion'

const SearchBar = ({ onSearch, onFilterChange }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeFilter, setActiveFilter] = useState('all')

  const handleSearch = (query) => {
    setSearchQuery(query)
    onSearch(query)
  }

  const handleFilter = (filter) => {
    setActiveFilter(filter)
    onFilterChange(filter)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      style={{
        background: 'rgba(255,255,255,0.95)',
        borderRadius: '25px',
        padding: '20px',
        marginBottom: '30px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
        backdropFilter: 'blur(10px)'
      }}
    >
      {/* Search Input */}
      <div style={{ marginBottom: '15px' }}>
        <input
          type="text"
          placeholder="Search recipes... (e.g., 'pasta', 'chicken', 'quick')"
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          style={{
            width: '100%',
            padding: '12px 20px',
            borderRadius: '25px',
            border: '2px solid #e9ecef',
            fontSize: '1rem',
            outline: 'none',
            transition: 'border-color 0.3s ease'
          }}
          onFocus={(e) => e.target.style.borderColor = '#667eea'}
          onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
        />
      </div>

      {/* Filter Buttons */}
      <div style={{ 
        display: 'flex', 
        gap: '10px', 
        justifyContent: 'center',
        flexWrap: 'wrap'
      }}>
        {['all', 'easy', 'medium', 'hard'].map((filter) => (
          <button
            key={filter}
            onClick={() => handleFilter(filter)}
            style={{
              padding: '8px 16px',
              borderRadius: '20px',
              border: 'none',
              background: activeFilter === filter ? '#667eea' : '#f8f9fa',
              color: activeFilter === filter ? 'white' : '#333',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textTransform: 'capitalize'
            }}
          >
            {filter === 'all' ? 'All Recipes' : `${filter} Level`}
          </button>
        ))}
      </div>
    </motion.div>
  )
}

export default SearchBar