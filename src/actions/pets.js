import { fetchConToken } from "../api/fetch"
import { fileUpload } from "../helpers/imageUpload";
import { types } from "../types/types"



export const petAdd = ( name,
                        age,
                        image_url,
                        description,
                        pet_type_id ) => {

  return async( dispatch ) => {

    try {
      const resp = await fetchConToken(
        'pets/create',
        {
          name,
          age,
          image_url,
          description,
          pet_type_id
        },
        'POST'
      );   

      const body = await resp.json();
    
      console.log(body)

    } catch (error) {
      console.log(error);
    }
    
  }
}

// export const petFind = (id) => {
  
//   return async(dispatch) => {
    
//     const resp = await fetchConToken(`pets/${id}`);
//     const body = await resp.json();

//     console.log(body)

//     if ( body.ok ) {
//       const pet = body.pet;
//       console.log( pet );
//       dispatch( petUpdatePet(pet) )    
//     }
    
//   }

// }

export const petUpdate = ( pet ) => {

  return async(dispatch) => {
    
    const resp = await fetchConToken(`pets/${pet.id}`,
      pet    ,
    'PUT');
    const body = await resp.json();

    console.log(body)

    // if ( body.ok ) {
    //   const pets = body.pets      
    // }
    
  }

}

// const petUpdatePet = ( pet ) => ({
//   type: types.petUpdate,
//   payload: pet
// })

export const petClearActive = () => ({
  type: types.petClearActive
})

export const petsStartLoading = () => {

  return async(dispatch) => {
    
    const resp = await fetchConToken('pets/');
    const body = await resp.json();

    if ( body.ok ) {
      const pets = body.pets
      dispatch( petLoaded( pets ))
    }
    
  }
}

const petLoaded = ( pets ) => ({
  type: types.petLoaded,
  payload: pets
})

const petList = () => ({
  type: types.petStartList,
  active: null
})




export const petDelete = ( id ) => {

  return async(dispatch) => {
    
    const resp = await fetchConToken(`pets/${id}`,{},
    'DELETE');
    const body = await resp.json();

    console.log(body)

    // if ( body.ok ) {
    //   const pets = body.pets      
    // }
    
  }
}

const petLoadImage = ( url ) => ({
  type: types.petLoadImage,
  payload: url
})

export const startUploading = ( file ) => {
  return async( dispatch )=>{
    // const { active: activePet} = getState().pets;

    const fileUrl = await fileUpload( file );

    dispatch( petLoadImage(fileUrl));
    
    console.log( fileUrl )
  }
}



