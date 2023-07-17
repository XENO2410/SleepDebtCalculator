const getSleepHours = (day) =>{

  day = day.toLowerCase();
  if(day==='monday') return 8;
  else if(day==='tuesday') return 6;
  else if(day==='wednesday') return 7;
  else if(day==='thursday') return 8;
  else if(day==='friday') return 9;
  else if(day==='saturday') return 8;
  else if(day==='sunday') return 9;
};

// console.log(getSleepHours('monday'));

const getActualSleepHours = () =>{
 return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
};

// const getActualSleepHours = () => 6 + 7 + 9 + 8 + 5 + 10 + 11;

const getIdealSleepHours = () => {
  const idealHours = 8
  return idealHours*7;
};

// const getIdealSleepHours = idealHours => idealHours * 7;

// console.log(getActualSleepHours());
// console.log(getIdealSleepHours());

const calculateSleepDept = () =>{
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  // const idealSleepHours = getIdealSleepHours(8);


  if(actualSleepHours===idealSleepHours) return 'U getting perfect amount of Sleep <3';
  else if(actualSleepHours>idealSleepHours) return 'U sleeping'+ (actualSleepHours-idealSleepHours) + 'more than needed :)';
  else return 'U need to rest my Friend! U are Sleeping ' + ( idealSleepHours-actualSleepHours )+ ' less than u need to :/';
};

console.log(calculateSleepDept());
