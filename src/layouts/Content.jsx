import { useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../storage/localStorage';
import MedalInputForm from '../components/olympic-medals/MedalInputForm';
import Input from '../components/common/Input';
import FormButton from '../components/common/FormButton';
import MedalTable from '../components/olympic-medals/MedalTable';
import styled from 'styled-components';
import ActionButton from '../components/common/ActionButton';
import MedalTableRow from '../components/olympic-medals/MedalTableRow';
import Toggle from '../components/common/Toggle/Toggle';
import InfoText from '../components/common/InfoText';
import MedalInputWrapper from '../components/olympic-medals/MedalInputWrapper';

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
`;

const Content = () => {
  // 국가 목록을 localStorage에서 가져와 상태로 초기화
  const [nationList, setNationList] = useState(() => {
    return getLocalStorage('nationList') || [];
  });

  // 국가 정보 초기 상태
  const [nation, setNation] = useState({
    id: crypto.randomUUID(), // 고유 ID 생성
    nationName: '',
    goldMedalCnt: 0,
    silverMedalCnt: 0,
    bronzeMedalCnt: 0,
  });

  // 토글 상태
  const [isToggled, setIsToggled] = useState(false);

  // 입력 값 처리 핸들러
  const nationInputHandler = (e) => {
    const { value, name } = e.target;
    setNation((pre) => ({
      ...pre,
      [name]: name.includes('MedalCnt') ? Number(value) : value, // 숫자 입력시 Number 변환
    }));
  };

  // 입력 초기화 함수
  const init = () => {
    setNation({
      id: crypto.randomUUID(),
      nationName: '',
      goldMedalCnt: 0,
      silverMedalCnt: 0,
      bronzeMedalCnt: 0,
    });
  };

  // 국가 추가 핸들러
  const addNationHandler = () => {
    if (!nation.nationName) {
      return alert('국가명을 입력하세요.');
    }
    // 이미 등록된 국가인지 확인
    if (nationList.some((e) => e.nationName === nation.nationName)) {
      init();
      return alert('이미 등록된 국가입니다.');
    }
    // 국가 추가 후 localStorage에 저장
    const newNationList = [...nationList, nation];
    setNationList(newNationList);
    setLocalStorage('nationList', newNationList);
    init();
  };

  // 국가 수정 핸들러
  const modifyNationHandler = () => {
    if (!nation.nationName) {
      return alert('국가명을 입력하세요.');
    }
    if (!nationList.some((e) => e.nationName === nation.nationName)) {
      return alert(
        '존재하지 않는 국가입니다.\n수정하실 등록된 국가명을 입력하세요.'
      );
    }

    // 국가 정보 수정
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

  // 폼 제출 핸들러
  const handleSubmit = (e) => {
    e.preventDefault();
    // 어떤 버튼이 눌렸는지 확인
    const clickedButton = e.nativeEvent.submitter.name;
    if (clickedButton === 'add') {
      addNationHandler();
    } else {
      modifyNationHandler();
    }
  };

  // 국가 삭제 핸들러
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
        <MedalInputWrapper
          labelName="국가명"
          labelFor="nationName"
          className="label-main"
        >
          <Input
            type="text"
            name="nationName"
            id="nationName"
            value={nationName}
            onChange={nationInputHandler}
            placeholder="국가명"
            className="input-main"
          />
        </MedalInputWrapper>
        <MedalInputWrapper
          labelName="금메달"
          labelFor="goldMedalCnt"
          className="label-sub"
        >
          <Input
            type="number"
            name="goldMedalCnt"
            id="goldMedalCnt"
            value={goldMedalCnt.toString()}
            onChange={nationInputHandler}
            placeholder="금메달"
            className="input-sub input-gold-medal"
          />
        </MedalInputWrapper>
        <MedalInputWrapper
          labelName="은메달"
          labelFor="silverMedalCnt"
          className="label-sub"
        >
          <Input
            type="number"
            name="silverMedalCnt"
            id="silverMedalCnt"
            value={silverMedalCnt.toString()}
            onChange={nationInputHandler}
            placeholder="은메달"
            className="input-sub input-silver-medal"
          />
        </MedalInputWrapper>
        <MedalInputWrapper
          labelName="동메달"
          labelFor="bronzeMedalCnt"
          className="label-sub"
        >
          <Input
            type="number"
            name="bronzeMedalCnt"
            id="bronzeMedalCnt"
            value={bronzeMedalCnt.toString()}
            onChange={nationInputHandler}
            placeholder="동메달"
            className="input-sub input-bronze-medal"
          />
        </MedalInputWrapper>
        <FormButton type="submit" name="add" className="form-button">
          국가 추가
        </FormButton>
        <FormButton type="submit" name="update" className="form-button">
          업데이트
        </FormButton>
        <InfoText>
          리스트에 해당 국가가 추가된 상태여야 업데이트 버튼을 사용하실 수
          있습니다.
        </InfoText>
        <Toggle
          mode="nationSort"
          checked={isToggled}
          onChange={() => setIsToggled(!isToggled)}
        />
      </MedalInputForm>
      {nationList && nationList.length > 0 ? (
        <MedalTable>
          {nationList
            .sort((a, b) => {
              if (isToggled) {
                // 금메달, 은메달, 동메달 기준으로 내림차순 정렬
                if (b.goldMedalCnt !== a.goldMedalCnt) {
                  return b.goldMedalCnt - a.goldMedalCnt;
                }
                if (b.silverMedalCnt !== a.silverMedalCnt) {
                  return b.silverMedalCnt - a.silverMedalCnt;
                }
                return b.bronzeMedalCnt - a.bronzeMedalCnt;
              } else {
                // 총 메달 수 기준으로 내림차순 정렬
                return (
                  b.goldMedalCnt +
                  b.silverMedalCnt +
                  b.bronzeMedalCnt -
                  (a.goldMedalCnt + a.silverMedalCnt + a.bronzeMedalCnt)
                );
              }
            })
            .map((nation) => (
              <MedalTableRow key={nation.id} value={nation}>
                <ActionButton eventHandler={deleteNationHandler} id={nation.id}>
                  <i className="material-symbols-outlined">delete</i>
                </ActionButton>
              </MedalTableRow>
            ))}
        </MedalTable>
      ) : (
        <NoData>아직 추가된 국가가 없습니다. 메달을 추적하세요!</NoData>
      )}
    </ContentWrapper>
  );
};

export default Content;
