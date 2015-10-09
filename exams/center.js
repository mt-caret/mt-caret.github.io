center_date = new moment("2016-01-17 09:30");

function update_center_date(str) {
  document.getElementById("days_until_center").textContent = str
}

function get_days_until_center(now) {
  return center_date.diff(now, 'days') - 1;
}

function main() {
  var now = moment();
  update_center_date(get_days_until_center(now));
}

document.onload = main();