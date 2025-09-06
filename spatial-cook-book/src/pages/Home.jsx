import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { recipes } from '../data/recipes'
import SearchBar from '../components/SearchBar'
import RecipeCard from '../components/RecipeCard'

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const [difficultyFilter, setDifficultyFilter] = useState('all')

  // Filter recipes based on search and difficulty
  const filteredRecipes = useMemo(() => {
    return recipes.filter(recipe => {
      const matchesSearch = searchQuery === '' || 
        recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.ingredients.some(ingredient => 
          ingredient.toLowerCase().includes(searchQuery.toLowerCase())
        ) ||
        recipe.instructions.some(instruction =>
          instruction.toLowerCase().includes(searchQuery.toLowerCase())
        )

      const matchesDifficulty = difficultyFilter === 'all' || 
        recipe.difficulty.toLowerCase() === difficultyFilter

      return matchesSearch && matchesDifficulty
    })
  }, [searchQuery, difficultyFilter])

  return (
    <div>
      <SearchBar 
        onSearch={setSearchQuery}
        onFilterChange={setDifficultyFilter}
      />
      
      {filteredRecipes.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{
            textAlign: 'center',
            color: 'white',
            padding: '50px',
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '20px',
            backdropFilter: 'blur(10px)'
          }}
        >
          <h3>No recipes found</h3>
          <p>Try adjusting your search or filter criteria</p>
        </motion.div>
      ) : (
        <motion.div 
          className="recipes-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredRecipes.map((recipe, index) => (
            <RecipeCard key={recipe.id} recipe={recipe} index={index} />
          ))}
        </motion.div>
      )}
    </div>
  )
}