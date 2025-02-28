import PropTypes from 'prop-types';
import styles from './Toggle.module.css';

/**
 * Toggle 컴포넌트
 * - 체크박스 기반으로 두 가지 모드를 전환하는 UI를 제공한다.
 * - 사용자가 체크박스를 클릭하면 'onChange' 이벤트 핸들러가 호출되어 상태를 변경한다.
 *
 * @param {string} mode - 모드에 따라 다른 아이콘을 렌더링하기 위한 옵션
 * @param {boolean} checked - 체크박스의 상태 (체크됨/체크 안 됨)
 * @param {function} onChange - 체크박스 상태 변경 시 호출되는 함수
 */
const Toggle = ({ mode, checked, onChange }) => {
  return (
    <div className={styles.toggleWrapper}>
      {mode && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          style={{ width: '28px', height: '28px', stroke: '#048aca' }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
          />
        </svg>
      )}
      <input
        type="checkbox"
        id="toggleSwitch"
        className={styles.toggleInput}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor="toggleSwitch" className={styles.toggleLabel} />
      {mode && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          style={{ width: '24px', height: '24px', stroke: '#ca8a04' }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"
          />
        </svg>
      )}
    </div>
  );
};
Toggle.propTypes = {
  mode: PropTypes.string,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Toggle;
