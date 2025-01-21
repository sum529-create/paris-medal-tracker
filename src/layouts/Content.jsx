import { useState } from 'react'
import styles from './Content.module.css'

const Content = () => {
  const [nationList, setNationList] = useState([]);
  const [nation, setNation] = useState({
    id: crypto.randomUUID(),
    nationName: '',
    goldMedalCnt: 0,
    silverMedalCnt: 0,
    bronzeMedalCnt: 0
  })
  const nationInputHandler = (e) => {
    const {value, name} = e.target;
    setNation(pre => ({
      ...pre,
      [name]: value
    }))
  }

  const init = () => {
    setNation({
      id: crypto.randomUUID(),
      nationName: '',
      goldMedalCnt: 0,
      silverMedalCnt: 0,
      bronzeMedalCnt: 0
    })
  }

  const addNationHandler = (e) => {
    e.preventDefault()
    setNationList(e => ([
      ...e,
      nation
    ]))
    init();
  }

  const {nationName, goldMedalCnt, silverMedalCnt, bronzeMedalCnt} = nation
  return (
    <div className={styles.content}>
      <form>
        <label htmlFor="nationName">국가명</label>
        <input type="text" name="nationName" value={nationName} onChange={nationInputHandler} />
        <label htmlFor="goldMedalCnt">금메달</label>
        <input
          type="number"
          name="goldMedalCnt"
          value={goldMedalCnt}
          onChange={nationInputHandler}
        />
        <label htmlFor="silverMedalCnt">은메달</label>
        <input
          type="number"
          name="silverMedalCnt"
          value={silverMedalCnt}
          onChange={nationInputHandler}
        />
        <label htmlFor="bronzeMedalCnt">동메달</label>
        <input
          type="number"
          name="bronzeMedalCnt"
          value={bronzeMedalCnt}
          onChange={nationInputHandler}
        />
        <button onClick={(e) => addNationHandler(e)}>국가 추가</button>
        <button>업데이트</button>
      </form>
      <div>
        {
          nationList.length > 0 ?
          nationList.map((e,i) => {
            return(
              <span key={i}>
                {e.nationName}
              </span>
            )
          }) 
          : '아직 추가된 국가가 없습니다. 메달을 추적하세요!'
        }
      </div>
    </div>
  )
}

export default Content