import PropTypes from 'prop-types';
import '../../assets/styles/table.css'

const MedalTable = ({children}) => {
  return (
    <table className='tableWrapper'>
      <thead className='tableHeader'>
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
        {children}
      </tbody>
    </table>
  )
}

MedalTable.propTypes = {
  children: PropTypes.node.isRequired,
  wrapperClassName: PropTypes.string,
  headerClassName: PropTypes.string
}

export default MedalTable