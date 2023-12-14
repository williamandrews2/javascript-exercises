// Solution is different but this still yields the same answer.
const findTheOldest = function (people) {
  const ordered = people.sort((a, b) =>
    getAge(a.yearOfDeath, a.yearOfBirth) > getAge(b.yearOfDeath, b.yearOfBirth)
      ? -1
      : 1
  );
  return ordered[0];
};

const getAge = function (death, born) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - born;
};

// Do not edit below this line
module.exports = findTheOldest;
