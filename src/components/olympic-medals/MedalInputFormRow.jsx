import '../../assets/styles/table.css'
import PropTypes from 'prop-types';

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