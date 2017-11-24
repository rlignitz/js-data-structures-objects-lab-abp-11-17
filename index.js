const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  //explode [key]?
  return Object.assign({}, driver, { [key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign(driver, { [key]: value });
}