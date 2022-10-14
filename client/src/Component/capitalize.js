const capitalize= (word)=>{
  let result = word.charAt(0).toUpperCase() + word.slice(1)
  return result
}

export default capitalize;