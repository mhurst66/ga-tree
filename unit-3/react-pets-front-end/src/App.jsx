import { useState, useEffect } from 'react'
// import { useEffect } from 'react'

import './App.css'
import { index } from './services/petService'
import { create } from './services/petService'
import { update } from './services/petService'
import { deletePet } from './services/petService'

// import * as petService from './services/petService'

import PetList from './components/PetList/PetList'
import PetDetail from './components/PetDetail/PetDetail'
import PetForm from './components/PetForm/PetForm'


const App = () => {
  const [pets, setPets] = useState([])
  const [selectedPet, setSelectedPet] = useState()
  const [isFormOpen, setIsFormOpen] = useState(false)

  const handleSelect = (pet) => {
    setSelectedPet(pet)
    setIsFormOpen(false)
  }

  const handleFormView = (pet) => {
    if (!pet._id) setSelectedPet(undefined)
    setIsFormOpen((prev) => !prev)
  }

  const handleAddPet = async (formData) => {
    try {
      const createdPet = await create(formData)

      if (createdPet.err) {
        throw new Error(createdPet.err)
      }

      setIsFormOpen(false)
      setPets(prev => [...prev, createdPet])
    } catch (err) {
      console.log(err)
    }
  }


  const handleUpdatePet = async (formData) => {
    try {
      const updatedPet = await update(formData, selectedPet._id)

      if (updatedPet.err) {
        throw new Error(updatedPet.err)
      }
      setPets(prev => [...prev.filter((pet) => pet._id !== updatedPet._id), updatedPet])
      setSelectedPet(updatedPet)
      setIsFormOpen(false)
      
    } catch (err) {
      console.log(err)
    }
  }

  const updateFnToUse = selectedPet ? handleUpdatePet : handleAddPet

  const handleDeletePet = async (petId) => {
    try {
      const deletedPet = await deletePet(petId);

      if (deletedPet.err) {
        throw new Error(deletedPet.err);
      }

      setPets(pets.filter((pet) => pet._id !== deletedPet._id));
      setSelected(undefined);
      setIsFormOpen(false);
    } catch (err) {
      console.log(err);
    }
  };

  const getPets = async () => {
    try {
      const foundPets = await index()
      if(foundPets.err) {
        throw new Error(foundPets.err)
      }
      setPets(foundPets)
    } catch (err) {
      console.log(err)
    }    
  }

  useEffect(() => {
    getPets()
  }, [])
  return (
    <>
      <PetList 
        pets={pets}
        handleSelect={handleSelect} 
        handleFormView={handleFormView}
        isFormOpen={isFormOpen}
      />
      {
        isFormOpen ? (
          <PetForm updateFnToUse={updateFnToUse} selected={selectedPet}/>
      ) : (
        <PetDetail
          selected={selectedPet}
          handleFormView={handleFormView}
          handleDeletePet={handleDeletePet}
        />
      )}
    </>
  )
}

export default App
