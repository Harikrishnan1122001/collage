function Box() {
    const Box = [];
    console.log('box func', Box);
    return Box;
  }
  function Box() {
    const Box = [];
    console.log('box func', Box);
    return Box;
  }
  function IdCard() {
    const box = Box();
    console.log('box declare', Box);
    let objectOne = {
      rollNumber: 'L21me005',
      firstName: 'Hari',
      dataofBirth: '01.12.2001',
      Department: 'mechanical',
      year: 'fouryear',
    }
    let objectOne_update = {
      bloodGroup: 'A+'
    }
    let combined_one = Object.assign(objectOne, objectOne_update);
    box.push(combined_one);
    let objectTwo = {
      rollNumber: 'L21me010',
      firstName: 'Manoj',
      dataofBirth: '03.01.2002',
      Department: 'mechanical',
      year: 'fouryear',
    }
    let objectTwo_update = {
      bloodGroup: 'B+'
    }
    let combinedTwo = Object.assign(objectTwo, objectTwo_update);
    //   console.log('Box one', Box);
    box.push(combinedTwo);
    // console.log('Box Three',box);
    let objectThree = {
      "rollNumber": 'L21me012',
      "firstName": 'manic',
      "dataofBirth": '24.04.2000',
      department: 'mechanical',
      year: 'fouryear',
    }
    let objectThree_update = {
      BloodGroup: 'AB'
    }
    let combinedThree = Object.assign(objectThree, objectThree_update);
    box.push(combinedThree);
    console.log('red Box============', box);
  
  
  }
  
  IdCard();
  