export const types = {
  login: '[Auth] Login',
  logout: '[Auth] Logout',

  //Error server
  authError: '[Auth] Auth Error',
  authRemoveError: '[Auth] Remove Error',

  //Token renew
  uiStartLoading: '[UI] Start loading',
  uiFinishLoading: '[UI] Finish loading',

  //Validate token
  authCheckingFinish: '[auth] Finish checking login state',  
  authStartTokenRenew: '[auth] Start token renew',

  //Pets Crud
  petStartAdd: '[pet] Start Add pet',
  petUpdate: '[pet] Update pet',
  petLoaded: '[pet] Loaded',

  petLoadImage: '[pet] Load Image',

  petClearActive: '[pet] Clear Active',


  petStartFind: '[pet] Start Find pet',
  petStartList: '[pet] Start List pet',
  petStartDelete: '[pet] Start Delete pet',
  petStartUpdate: '[pet] Start Update pet'
  
}