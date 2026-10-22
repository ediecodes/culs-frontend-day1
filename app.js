
const details = document.querySelector("#herb-details")
const count = document.querySelector(".count")
const form = document.querySelector("#herb-form")
const input = document.querySelector("#herb-name")

let selectedHerb = ""
function element(tag, className, text) {
  const node = document.createElement(tag)
  node.className = className
  node.textContent = text
  return node
}

function showMessage(message) {
  count.textContent = message
  details.replaceChildren()
}

function showHerb(herb) {
  count.textContent = `Meet ${herb.name}`

  const article = document.createElement("div")
  article.append(
    element("h3", "name", herb.name),
    element("p", "latin", herb.latin),
    element("p", "use", herb.use),
    element("p", "life", herb.life)
  )

  details.replaceChildren(article)
}

async function loadHerb() {
  const name = window.location.hash.slice(1).toLowerCase()
    selectedHerb = name
      input.value = selectedHerb

  if (!name) {
    showMessage("Choose an herb, for example #basil.")
    return
  }

  if (!/^[a-z]+$/.test(name)) {
    showMessage("That herb name is not valid.")
    return
  }

  showMessage("Loading herb…")

  try {
    const response = await fetch(`data/${name}.json`)

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`)
    }

    const herb = await response.json()
    showHerb(herb)
  } catch (error) {
    showMessage("Sorry, we couldn't load that herb. Check the name or try again.")
    console.error("Could not load herb:", error)
  }
}

window.addEventListener("hashchange", loadHerb)

loadHerb()

form.addEventListener("submit", (event) => {
  event.preventDefault()

  const name = input.value.trim().toLowerCase()

  if (!name) {
    return
  }

  if (window.location.hash === `#${name}`) {
    loadHerb()
  } else {
    window.location.hash = name
  }
})
