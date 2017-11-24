const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  //explode [key]?
  return Object.assign({}, driver, { [key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign(driver, { [key]: value });
}

function deleteFromDriverByKey(driver, key) {
  let newDriver = Object.assign({}, driver);
  //dot notation didn't work here (delete newDriver.key;)
  delete newDriver[key];
  return newDriver;
}
