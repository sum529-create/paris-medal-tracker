import classNames from 'classnames';
import PropTypes from 'prop-types';

const MedalTable = ({children, wrapperClassName, headerClassName}) => {
  const tableClass = classNames(wrapperClassName)
  const headerClass = classNames(headerClassName)
  return (
    <table className={tableClass}>
      <thead className={headerClass}>
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