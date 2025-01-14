import { useState } from 'react';

const DEFAULT_PET_STATE = {
    name: '',
    age: '',
    breed: '',
}

const PetForm = (props) => {
  // formData state to control the form.
  const [formData, setFormData] = useState(props.selected ? props.selected : DEFAULT_PET_STATE);

  // handleChange function to update formData state.
  const handleChange = (evt) => {
    setFormData((prev) => ({ ...prev, [evt.target.name]: evt.target.value }))
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    props.updateFnToUse(formData)
  }

  // And finally, the form itself.
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"> Name </label>
        <input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="age"> Age </label>
        <input
          id="age"
          name="age"
          type="number"
          value={formData.age}
          onChange={handleChange}
          required
        />
        <label htmlFor="breed"> Breed </label>
        <input
          id="breed"
          name="breed"
          value={formData.breed}
          onChange={handleChange}
        />
        <button type="submit">
            {props.selected ? 'Update Pet' : 'Add New Pet'}
        </button>
      </form>
    </div>
  );
};

export default PetForm;
