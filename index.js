const output = (text) => {
  const textarea = document.getElementsByClassName('console')[0]
  let currentText = textarea.value + text;
  currentText += '\n'
  textarea.value = currentText
}

window.onload = () => {
  let arr = document.getElementsByClassName('cell');
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i]
    element.addEventListener('transitionend', () => {
      const consoleText = `Cell ${i+1} animation END`
      output(consoleText)
      const textarea = document.getElementsByClassName('console')[0]
      textarea.scrollTop = textarea.scrollHeight;

      if (i == arr.length - 1) {
        setTimeout(() => {
          alert('Success')
          btn.innerHTML = 'Start'
          output('---PROGRESS END---')
        }, 0)
      }
    })
  }

  let wasAnimated = false
  btn.onclick = () => {
    if (wasAnimated)
      return;

    btn.innerHTML = 'In progress'
    output('---PROGRESS START---')
    let count = 0;
    let timerId = setTimeout(function startAnimation() {
      let div = arr[count]
      div.classList.add('animate')
      const consoleText = `Cell ${count+1} animation START`
      output(consoleText)
      count++
      if (arr.length != count)
        setTimeout(startAnimation, 500)
    }, 500)
    wasAnimated = true
  }

}
