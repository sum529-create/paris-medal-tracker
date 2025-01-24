import '../../assets/styles/table.css'
import PropTypes from 'prop-types';

/**
 * MedalTableRow 컴포넌트
 * - 매달 데이터를 표시하는 테이블을 렌더링
 * 
 * @param {node} children - table 마지막 요소에 포함될 데이터 (액션 버튼) 
 * @param {object} value - table 데이터에 표시될 데이터
 */
const MedalInputFormRow = ({children, value}) => {
  const {nationName, goldMedalCnt, silverMedalCnt, bronzeMedalCnt} = value
  return (
    <tr className="table-row">
      <td data-label="국가">{nationName}</td>
      <td data-label="금메달" className="gold-medal">{goldMedalCnt}</td>
      <td data-label="은메달" className="silver-medal">{silverMedalCnt}</td>
      <td data-label="동메달" className="bronze-medal">{bronzeMedalCnt}</td>
      <td data-label="총메달">
        {goldMedalCnt +
          silverMedalCnt +
          bronzeMedalCnt}
      </td>
      <td>
        {children}
      </td>
    </tr>
  )
}

MedalInputFormRow.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.object.isRequired
}

export default MedalInputFormRow