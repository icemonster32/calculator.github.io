let result = document.querySelector("#result")


/* onload input focus */
onload = () => {
   result.focus()
}

/* display number in input */
display = (value) => {
   result.value += value
   onload()
}

/* clear all inputs */
allClear = () => {
   result.value = ""
   result.style.color = "black"
   result.readOnly = false
   onload()
}

/* erase num*/
erase = () => {
   let erase = result.value.slice(0, result.value.length - 1)
   result.value = erase
   onload()
}

/* calculate */
compute = () => {
   try {
      let calc = new Function("return " + result.value)()
      result.value = calc
      onload()
   } catch (exception) {
      result.value = "Format error!"
      result.style.color = "red"
      result.readOnly = true
   }
}
