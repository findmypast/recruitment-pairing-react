function constructBirthDate(fields) {
  const year = fields.find(x => x.key === "YearOfBirth")?.value;
  const month = fields.find(x => x.key === "BirthMonth")?.value;
  const day = fields.find(x => x.key === "BirthDay")?.value;

  return `${day}/${month}/${year}`;
}

export { constructBirthDate };
