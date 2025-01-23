import '../../assets/styles/table.css'
import PropTypes from 'prop-types';

const MedalInputFormRow = ({children, value}) => {
  const {nationName, goldMedalCnt, silverMedalCnt, bronzeMedalCnt} = value
  return (
    <tr className="table-row">
      <td>{nationName}</td>
      <td className="gold-medal">{goldMedalCnt}</td>
      <td className="silver-medal">{silverMedalCnt}</td>
      <td className="styles.bronze-medal">{bronzeMedalCnt}</td>
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