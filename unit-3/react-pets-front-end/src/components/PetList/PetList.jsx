import { useState } from "react";

const PetList = (props) => {
    const [isHovered, setIsHovered] = useState(false)

    console.log(props);
  
    return (
      <div>
        <h1>Pet List</h1>
        <div>
            {!props.pets ? (
                <h2>No Pets Yet!</h2>
            ) : (
            <ul>
                {props.pets.map((pet) => (
                    <li
                        key={pet._id}
                        style={{
                            backgroundColor: isHovered ? 'lightblue' : 'black', 
                            padding: '10px',
                            transition: 'background-color 0.3s ease' }}
                        onClick={() => {
                            props.handleSelect(pet)
                        }}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        {pet.name}
                    </li>
                ))}
            </ul>
            )}
        </div>
        <button onClick={props.handleFormView}>
            {props.isFormOpen ? 'Close Form' : 'New Pet'}
        </button>
      </div>
    );
  };
  
  export default PetList;
  