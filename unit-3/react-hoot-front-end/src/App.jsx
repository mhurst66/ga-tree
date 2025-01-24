import { useContext, useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router';

import NavBar from './components/NavBar/NavBar';
import SignUpForm from './components/SignUpForm/SignUpForm';
import SignInForm from './components/SignInForm/SignInForm';
import Landing from './components/Landing/Landing';
import Dashboard from './components/Dashboard/Dashboard';
import HootList from './components/HootList/HootList';
import HootDetails from './components/HootDetails/HootDetails';
import HootForm from './components/HootForm/HootForm';

import { UserContext } from './contexts/UserContext';

import { create, index, createComment, deleteHoot } from './services/hootService';

const App = () => {
  const { user } = useContext(UserContext);

  const navigate = useNavigate()

  const {hoots, setHoots} = useState([])

  const handleAddHoot = async (hootFormData) => {
    const newHoot = await hootService.create(hootFormData);
    setHoots([newHoot, ...hoots]);
    navigate('/hoots');
  }

  const handleDeleteHoot = async (hootId) => {
    const deletedHoot = await deleteHoot(hootId)
    setHoots(prev => [...prev.filter((hoot) => hoot._id !== deletedHoot.hootId)]);
    navigate('/hoots');
  };

  const handleUpdateHoot = async (hootId, hootFormData) => {
    console.log('hootId:', hootId, 'hootFormData:', hootFormData);
    const updatedHoot = await hootService.update(hootId, hootFormData);
    setHoots(prev => [...prev.map((hoot) => (hootId === hoot._id ? updatedHoot : hoot))]);
    navigate(`/hoots/${hootId}`);
  };
  


  useEffect(() => {
    const fetchAllHoots = async () => {
      const hootsData = await index() 
      setHoots(hootsData)
    }
    if (user) fetchAllHoots()
  }, [user])
  
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={user ? <Dashboard /> : <Landing />} />
        {
        user ? (
          <>
            <Route path='/hoots' element={<HootList hoots={hoots} />} />
            <Route
              path='/hoots/:hootId'
              element={<HootDetails handleDeleteHoot={handleDeleteHoot} />}
            />
            <Route
              path='/hoots/new'
              element={<HootForm handleAddHoot={handleAddHoot} />}
            />
            <Route
              path='/hoots/:hootId/edit'
              element={<HootForm handleUpdateHoot={handleUpdateHoot}/>}
            />
          </>
        ) : (
          <>
            <Route path='/sign-up' element={<SignUpForm />} />
            <Route path='/sign-in' element={<SignInForm />} />
          </>
        )
      }
      </Routes>
    </>
  );
};

export default App;
