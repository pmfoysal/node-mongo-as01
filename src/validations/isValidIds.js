function isValidIds(data) {
   const invalids = [];
   data?.forEach(item => {
      if (!item?.hasOwnProperty('id')) invalids.push(item);
   });
   if (invalids.length) {
      return {
         valid: false,
         type: 'ID Not Provided!',
         message: 'The following data has no ids in the requested body.',
         errorData: invalids,
      };
   } else {
      return {
         valid: true,
         type: '',
         message: '',
         errorData: [],
      };
   }
}

module.exports = isValidIds;
