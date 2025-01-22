import { useState } from 'react';
import styles from './Content.module.css';
import { getLocalStorage, setLocalStorage } from '../storage/localStorage';
import MedalInputForm from '../components/olympic-medals/MedalInputForm';
import Input from '../components/common/Input';
import Button from '../components/common/Button';

const Content = () => {
  const [nationList, setNationList] = useState(() => {
    return getLocalStorage('nationList') || [];
  });

  const [nation, setNation] = useState({
    id: crypto.randomUUID(),
    nationName: '',
    goldMedalCnt: 0,
    silverMedalCnt: 0,
    bronzeMedalCnt: 0,
  });

  const nationInputHandler = (e) => {
    const { value, name } = e.target;
    setNation((pre) => ({
      ...pre,
      [name]:
        name === 'goldMedalCnt' ||
        name === 'silverMedalCnt' ||
        name === 'bronzeMedalCnt'
          ? Number(value)
          : value,
    }));
  };

  const init = () => {
    setNation({
      id: crypto.randomUUID(),
      nationName: '',
      goldMedalCnt: 0,
      silverMedalCnt: 0,
      bronzeMedalCnt: 0,
    });
  };

  const addNationHandler = (e) => {
    e.preventDefault();
    if (!nation.nationName) {
      return alert('국가명을 입력하세요.');
    }
    if (
      nationList.filter((e) => e.nationName === nation.nationName).length > 0
    ) {
      init();
      return alert('이미 등록된 국가입니다.');
    }
    const newNationList = [...nationList, nation];
    setNationList(newNationList);
    setLocalStorage('nationList', newNationList);
    init();
  };

  const modifyNationHandler = (e) => {
    e.preventDefault();

    const updatedList = nationList.map((pre) => {
      if (pre.nationName === nation.nationName) {
        return {
          ...pre,
          goldMedalCnt: nation.goldMedalCnt,
          silverMedalCnt: nation.silverMedalCnt,
          bronzeMedalCnt: nation.bronzeMedalCnt,
        };
      }
      return pre;
    });

    setNationList(updatedList);
    setLocalStorage('nationList', updatedList);
    init();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 어떤 버튼이 눌렸는지 확인
    const clickedButton = e.nativeEvent.submitter.name;
    if (clickedButton === 'add') {
      addNationHandler(e);
    } else {
      modifyNationHandler(e);
    }
  };

  const deleteNationHandler = (id) => {
    if (confirm('해당 국가를 삭제하시겠습니까?')) {
      const newList = nationList.filter((e) => e.id !== id);
      setNationList(newList);
      setLocalStorage('nationList', newList);
      init();
      return alert('삭제되었습니다!');
    }
  };

  const { nationName, goldMedalCnt, silverMedalCnt, bronzeMedalCnt } = nation;
  return (
    <div className={styles.content}>
      <MedalInputForm
        handleSubmit={handleSubmit}
        nationName={nationName}
        nationInputHandler={nationInputHandler}
        goldMedalCnt={goldMedalCnt}
        silverMedalCnt={silverMedalCnt}
        bronzeMedalCnt={bronzeMedalCnt}
      >
        <Input
          type="text"
          name="nationName"
          value={nationName}
          onChange={nationInputHandler}
          placeholder="국가명"
          className={[styles.inputFormat, styles.inputMain].join(' ')}
        />
        <Input
          type="number"
          name="goldMedalCnt"
          value={goldMedalCnt.toString()}
          onChange={nationInputHandler}
          placeholder="금메달"
          className={[styles.inputFormat, styles.inputSub].join(' ')}
        />
        <Input
          type="number"
          name="silverMedalCnt"
          value={silverMedalCnt.toString()}
          onChange={nationInputHandler}
          placeholder="은메달"
          className={[styles.inputFormat, styles.inputSub].join(' ')}
        />
        <Input
          type="number"
          name="bronzeMedalCnt"
          value={bronzeMedalCnt.toString()}
          onChange={nationInputHandler}
          placeholder="동메달"
          className={[styles.inputFormat, styles.inputSub].join(' ')}
        />
        <Button 
          type="submit" 
          name="add" 
          className={styles.formButton}>
          국가 추가
        </Button>
        <Button 
          type="submit" 
          name="update" 
          className={styles.formButton}>
          업데이트
        </Button>
      </MedalInputForm>
      {nationList && nationList.length > 0 ? (
        <table className={styles.tableWrapper}>
          <thead className={styles.tableHeader}>
            <tr>
              <th>국가</th>
              <th>금메달</th>
              <th>은메달</th>
              <th>동메달</th>
              <th>총메달</th>
              <th>액션</th>
            </tr>
          </thead>
          <tbody>
            {nationList.map((nation) => (
              <tr key={nation.id} className={styles.tableRow}>
                <td>{nation.nationName}</td>
                <td className={styles.goldMedal}>{nation.goldMedalCnt}</td>
                <td className={styles.silverMedal}>{nation.silverMedalCnt}</td>
                <td className={styles.bronzeMedal}>{nation.bronzeMedalCnt}</td>
                <td>
                  {nation.goldMedalCnt +
                    nation.silverMedalCnt +
                    nation.bronzeMedalCnt}
                </td>
                <td>
                  <button
                    className={styles.actionButton}
                    onClick={() => deleteNationHandler(nation.id)}
                  >
                    삭제
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <span className={styles.noData}>
          아직 추가된 국가가 없습니다. 메달을 추적하세요!
        </span>
      )}
    </div>
  );
};

export default Content;
