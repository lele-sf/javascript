//tip calculator

const dollars = dollarsToFloat(prompt("How much was the meal? "))
const percent = percentToFloat(prompt("What percentage would you like to tip? "))
const tip = (dollars * percent).toFixed(2)
console.log(`Leave $${tip}`)

function dollarsToFloat(d) {
  return parseFloat(d.replace('$',''))
}

function percentToFloat(p) {
  return parseFloat(p.replace('%','')) / 100
}
