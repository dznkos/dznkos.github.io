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

    } catch (error) {
      console.log(error);
    }
    
  }
}

export const petUpdate = ( pet ) => {

  return async(dispatch) => {
    
    const resp = await fetchConToken(`pets/${pet.id}`,
      pet    ,
    'PUT');
    const body = await resp.json();
    
  }
}

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

export const petGetTypes = () => {

  return async(dispatch) => {

    const resp = await fetchConToken('types/');
    const body = await resp.json();

    if ( body.ok ) {
      const types = body.petsTypes;      
      dispatch( petLoadTypes( types ))
    }

  }
}

const petLoadTypes = ( typepets ) => ({
  type: types.petLoadTypes,
  payload: typepets
})

export const petDelete = ( id ) => {

  return async(dispatch) => {
    
    const resp = await fetchConToken(`pets/${id}`,{},
    'DELETE');
    const body = await resp.json();   
    
  }
}

const petLoadImage = ( url ) => ({
  type: types.petLoadImage,
  payload: url
})

export const startUploading = ( file ) => {
  return async( dispatch )=>{

    const fileUrl = await fileUpload( file );
    dispatch( petLoadImage(fileUrl));
  }
}

export const petAddFavorite = (id) => {

  return async( dispatch ) => {

    const resp = await fetchConToken(`favorites/pets/${id}`,{},
    'POST')
    const body = await resp.json();

    if( body.ok ){
      dispatch( petsStartLoading() )
      console.log(body)
    }
  }
}

export const petRemoveFavorite = (id) => {

  return async( dispatch ) => {

    const resp = await fetchConToken(`favorites/${id}`,
    {},
    'DELETE')
    const body = await resp.json();

    if( body.ok ){
      dispatch( petsStartLoading() )
      console.log(body)
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

const petList = () => ({
  type: types.petStartList,
  active: null
})



