import React, { useState } from 'react';

export function RecipeBook() {
  const [recipes, setRecipes] = useState([]);
  const [newRecipe, setNewRecipe] = useState('');

  // Add a recipe
  const handleAddRecipe = (e) => {
    e.preventDefault();
    if (!newRecipe.trim()) return;

    const newEntry = {
      id: Date.now(), // unique ID
      name: newRecipe.trim(),
    };

    setRecipes([...recipes, newEntry]);
    setNewRecipe('');
  };

  // Delete a recipe
  const handleDelete = (id) => {
    const updatedList = recipes.filter(recipe => recipe.id !== id);
    setRecipes(updatedList);
  };

  return (
    <div style={styles.container}>
      <h2>🍽️ My Recipe Book</h2>

      <form onSubmit={handleAddRecipe} style={styles.form}>
        <input
          type="text"
          placeholder="Enter recipe name"
          value={newRecipe}
          onChange={(e) => setNewRecipe(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Add Recipe</button>
      </form>

      <ul style={styles.list}>
        {recipes.length === 0 ? (
          <p>No recipes added yet.</p>
        ) : (
          recipes.map((recipe) => (
            <li key={recipe.id} style={styles.listItem}>
              {recipe.name}
              <button onClick={() => handleDelete(recipe.id)} style={styles.deleteBtn}>Delete</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

// Basic inline styles
const styles = {
  container: {
    maxWidth: '500px',
    margin: '40px auto',
    padding: '25px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    background: '#f9f9f9',
    fontFamily: 'Arial',
  },
  form: {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px',
  },
  input: {
    flex: '1',
    padding: '10px',
    fontSize: '16px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
  listItem: {
    backgroundColor: '#fff',
    padding: '10px',
    borderBottom: '1px solid #ddd',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  deleteBtn: {
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    padding: '6px 10px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};


