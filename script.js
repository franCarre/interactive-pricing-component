const pageviewsEl = document.getElementById('pageviews')
const priceEl     = document.getElementById('price')
const sliderEl     = document.getElementById('range')
const toggleEl    = document.getElementById('toggle')

const pricing = [
  ['10K', 8],
  ['50K', 12],
  ['100K', 16],
  ['500K', 24],
  ['1M', 36],
]

let year = false
let newPrice = 0


sliderEl.oninput = () => {
  setValues(sliderEl.value)
}

toggleEl.onclick = () => {
  toggleEl.checked == true ? year = true : year = false
  setValues(sliderEl.value)
}

function setValues(value) {
  const [pageviews, price] = pricing[value]
  if (year === true) {
    newPrice = pricing[value][1] / 100 * 75
    priceEl.innerText = `$${newPrice}.00`
  } else {
    priceEl.innerText = `$${price}.00`
  }
  pageviewsEl.innerText = `${pageviews} pageviews`

  // slider background
  const gradientProgress = 25 * value
  sliderEl.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ${gradientProgress}%, hsl(224, 65%, 95%) 0%, hsl(224, 65%, 95%) 100%)`
  console.log(gradientProgress);
}