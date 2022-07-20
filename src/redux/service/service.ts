export const fetchDetails = async name => {
  let response = await fetch(`https://api.agify.io?name=${name}`);
  let data = await response.json();
  console.log('response', response, data);
  return data;
};
