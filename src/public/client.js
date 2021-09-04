// @ts-check

// IIFE
;(() => {
  const socket = new WebSocket(`ws://${window.location.host}/ws`)
  const formEl = document.getElementById('form')
  /** @type {HTMLInputElement | null} */
  // @ts-ignore
  const inputEl = document.getElementById('input')
  const chatsEL = document.getElementById('chats')

  if (!formEl || !inputEl || !chatsEL) {
    throw new Error('입력값이 없습니다.')
  }

  const adjective = ['멋진', '귀여운', '훌륭한', '친절한', '섹시한', '똑똑한']
  const animals = ['알파카', '물범', '코끼리', '사자', '돌고래', '오소리']

  /**
   * @param {string[]} array 
   * @returns {string}
   */
  const pickRandom = (array)=>{
    const randomIdx = Math.floor(Math.random()*array.length)
    const result = array[randomIdx]
    if(!result) throw new Error('배열이 비어있어요')
    return result
  }
  
  const randomId = `${pickRandom(adjective)} ${pickRandom(animals)}`

  formEl.addEventListener('submit', (event) => {
    event.preventDefault()
    socket.send(
      JSON.stringify({
        userId: randomId,
        message: inputEl.value,
      })
    )
    inputEl.value = ''
  })
  /** 챗데이터 정의
   * @typedef Chat
   * @property {string} userId
   * @property {string} message
   */

  /** 챗 배열데이터로 타입 정의
   * @type {Chat[]}
   */
  const chats = []

  socket.addEventListener('message', (event) => {
    console.log('aaa')
    chatsEL.innerHTML = ''
    chats.push(JSON.parse(event.data))
    chats.forEach(({ userId, message }) => {
      const div = document.createElement('div')
      div.innerText = `${userId}: ${message}`
      chatsEL.appendChild(div)
    })
  })
})()
