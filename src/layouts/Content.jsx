import { useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../storage/localStorage';
import MedalInputForm from '../components/olympic-medals/MedalInputForm';
import Input from '../components/common/Input';
import Button from '../components/common/FormButton';
import MedalTable from '../components/olympic-medals/MedalTable';
import styled from 'styled-components';
import ActionButton from '../components/common/ActionButton';
import MedalTableRow from '../components/olympic-medals/MedalTableRow';
import Toggle from '../components/common/Toggle/Toggle';
import InfoText from '../components/common/InfoText';

const ContentWrapper = styled.div`
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  padding: 1rem 2rem;
  border-radius: 0 0 1.25rem 1.25rem;
`;

const NoData = styled.span`
  display: flex;
  justify-content: center;
  padding: 5rem;
  margin: 1rem 0;
`

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

  const [isToggled, setIsToggled] = useState(false);

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
    if (!nation.nationName) {
      return alert('국가명을 입력하세요.');
    }
    if (!nationList.some(e => e.nationName === nation.nationName)) {
      return alert('수정하실 등록된 국가명을 입력하세요.');
    }
    
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
    <ContentWrapper>
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
          className="input-main"
        />
        <Input
          type="number"
          name="goldMedalCnt"
          value={goldMedalCnt.toString()}
          onChange={nationInputHandler}
          placeholder="금메달"
          className="input-sub"
        />
        <Input
          type="number"
          name="silverMedalCnt"
          value={silverMedalCnt.toString()}
          onChange={nationInputHandler}
          placeholder="은메달"
          className="input-sub input"
        />
        <Input
          type="number"
          name="bronzeMedalCnt"
          value={bronzeMedalCnt.toString()}
          onChange={nationInputHandler}
          placeholder="동메달"
          className="input-sub"
        />
        <Button 
          type="submit" 
          name="add" 
          className="form-button">
          국가 추가
        </Button>
        <Button 
          type="submit" 
          name="update" 
          className="form-button">
          업데이트
        </Button>
        <InfoText>
          리스트에 해당 국가가 추가된 상태여야 업데이트 버튼을 사용하실 수 있습니다.
        </InfoText>
        <Toggle mode="nationSort" checked={isToggled} onChange={() => setIsToggled(!isToggled)}/>
      </MedalInputForm>
      {nationList && nationList.length > 0 ? (
          <MedalTable>
            {nationList.sort((a, b) => {
                if(isToggled){
                  if (b.goldMedalCnt !== a.goldMedalCnt) {
                    return b.goldMedalCnt - a.goldMedalCnt;
                  }
                  if (b.silverMedalCnt !== a.silverMedalCnt) {
                    return b.silverMedalCnt - a.silverMedalCnt;
                  }
                  return b.bronzeMedalCnt - a.bronzeMedalCnt;
                } else {
                  return (b.goldMedalCnt +
                    b.silverMedalCnt +
                    b.bronzeMedalCnt) - (a.goldMedalCnt +
                    a.silverMedalCnt +
                    a.bronzeMedalCnt
                  )
                }
              })
              .map((nation) => (
                <MedalTableRow key={nation.id} value={nation}>
                    <ActionButton eventHandler={deleteNationHandler} id={nation.id}>
                      <i className="material-symbols-outlined">delete</i>
                    </ActionButton>
                </MedalTableRow>
              ))
            }
          </MedalTable>
      ) : (
        <NoData>
          아직 추가된 국가가 없습니다. 메달을 추적하세요!
        </NoData>
      )}
    </ContentWrapper>
  );
};

export default Content;
