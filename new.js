function IdCard(){
    const Box=[];
    let objectOne = {
        rollNumber:'L21me005',
        firstName: 'Hari',
        dataofBirth:'01.12.2001',
        Department:'mechanical',
        year:'fouryear',
      }
      let objectOne_update = {
        bloodGroup:'A+'
      }
      let combined_one = Object.assign(objectOne, objectOne_update);
      Box.push(combined_one);
      console.log('Box one', Box);
      let objectTwo = {
        rollNumber:'L21me010',
        firstName: 'Manoj',
        dataofBirth:'03.01.2002',
        Department:'mechanical',
        year:'fouryear',
      }
      let objectTwo_update = {
        bloodGroup:'B+'
      }
      let combinedTwo = Object.assign(objectTwo , objectTwo_update);
       console.log('Box Two', Box);
      Box.push(combinedTwo);
      let objectThree ={
        rollNumber:'L21me012',
        firstName:'manic',
        dataofBirth:'24.04.2000',
        department:'mechanical',
        year:'fouryear',
      }
      let objectThree_update ={
        BloodGroup:'AB'
      }
      let combinedThree = Object.assign(objectThree ,objectThree_update);
      Box.push(combinedThree);
      console.log('box Thee',Box);
      let objectFour={
        rollNumber:'L21me009',
        firstName:'dinesh',
        dataofbirth:'15.08.2000',
        department:'mechanical',
        year:'fouryear',
      }
      let objectFour_update={
        BloodGroup:'B-'
      }
      let combinedFour=Object.assign(objectFour,objectFour_update);
      Box.push(combinedFour);
      console.log('Box Four',Box);
      
      let objectFive={
        rollNumber:'L21me012',
        firstName:'deepan',
        dataofBirth:'15.02.2002',
        year:'fouryear',
      }
      let objectFive_update={
        BloodGroup:'A+'
      }
      let combinedFive=Object.assign(objectFive,objectFive_update);
      Box.push(combinedFive);
      console.log('Box Five',Box);     
}
IdCard();