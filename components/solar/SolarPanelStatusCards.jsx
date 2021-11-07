import { faChargingStation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const SolarPanelStatusCards = ({
  label,
  online,
  onlineLabel,
  caption,
  isCharging,
  Icon,
}) => {
  return (
    <div className="py-6 px-8 bg-white rounded-xl">
      <div className="flex justify-between items-center">
        <div>
          <div className="text-xs font-semibold text-secondary-label">
            {caption}
          </div>
          <div className="text-xl -mt-0.5 font-gill font-semibold flex items-center">
            <span>{label}</span>
            {isCharging && (
              <span className="flex items-end space-x-1 text-yellow-400 text-xs ml-2">
                <FontAwesomeIcon icon={faChargingStation} className="w-4 h-4" />
                <span>Charging</span>
              </span>
            )}
          </div>
          {online ? (
            <span className="text-xxs font-bold px-2 py-0.5 rounded-lg bg-secondary-lightGreen text-secondary-green">
              {onlineLabel}
            </span>
          ) : (
            <span className="text-xxs font-bold px-2.5 py-0.5 rounded-lg bg-red-100 text-red-600">
              Offline
            </span>
          )}
        </div>
        <Icon />
      </div>
    </div>
  );
};

SolarPanelStatusCards.defaultProps = {
  label: '',
  online: '',
  caption: '',
  onlineLabel: '',
  isCharging: false,
};

SolarPanelStatusCards.propTypes = {
  label: PropTypes.string,
  online: PropTypes.bool,
  caption: PropTypes.string,
  isCharging: PropTypes.bool,
  Icon: PropTypes.element,
};

export default SolarPanelStatusCards;
