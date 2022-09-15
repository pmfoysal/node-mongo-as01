function isValidData(data) {
   const invalids = [];
   const temp = {
      name: data?.hasOwnProperty('name'),
      gender: data?.hasOwnProperty('gender'),
      contact: data?.hasOwnProperty('contact'),
      address: data?.hasOwnProperty('address'),
      photoUrl: data?.hasOwnProperty('photoUrl'),
   };
   for (const item in temp) {
      if (temp[item] === false) invalids.push(item);
   }
   return {
      valid: !invalids?.length,
      missings: invalids?.join(', '),
   };
}

module.exports = isValidData;
