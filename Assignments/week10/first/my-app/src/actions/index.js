export const increment =(bn)=>{
  return {
    type: 'UPDATE_BONUS',
    payload : bn
  }
};

export const lcom=(lc)=>{
  return {
    type: 'LEVEL_COMPLETED',
    payload : lc
  }
};

export const decr =(ll)=>{
  return {
    type: 'LIFE_LOST',
    payload : ll
  }
};
