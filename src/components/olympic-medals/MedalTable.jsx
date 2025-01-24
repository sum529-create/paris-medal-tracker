import PropTypes from 'prop-types';
import '../../assets/styles/table.css';

/**
 * MedalTable 컴포넌트
 * - 나라별 메달 데이터를 표시하는 테이블
 * - tbody를 받아서 전체 테이블을 렌더링
 * @param {node} children - 테이블의 내용(tbody)
 * @returns
 */
const MedalTable = ({ children }) => {
  return (
    <table className="table-wrapper">
      <thead className="table-header">
        <tr>
          <th>국가</th>
          <th>금메달</th>
          <th>은메달</th>
          <th>동메달</th>
          <th>총메달</th>
          <th>액션</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

MedalTable.propTypes = {
  children: PropTypes.node.isRequired,
  wrapperClassName: PropTypes.string,
  headerClassName: PropTypes.string,
};

export default MedalTable;
