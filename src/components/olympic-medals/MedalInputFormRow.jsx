import '../../assets/styles/table.css'
import PropTypes from 'prop-types';

const MedalInputFormRow = ({children, value}) => {
  const {nationName, goldMedalCnt, silverMedalCnt, bronzeMedalCnt} = value
  return (
    <tr className="tableRow">
      <td>{nationName}</td>
      <td className="goldMedal">{goldMedalCnt}</td>
      <td className="silverMedal">{silverMedalCnt}</td>
      <td className="styles.bronzeMedal">{bronzeMedalCnt}</td>
      <td>
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