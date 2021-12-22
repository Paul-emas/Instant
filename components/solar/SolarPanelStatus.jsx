import SolarPanelStatusCards from './SolarPanelStatusCards';

import SunIcon from '../../public/svgs/solar-sun.svg';
import PoleIcon from '../../public/svgs/poles.svg';
import BatteryIcon from '../../public/svgs/battery.svg';

const SolarPanelStatus = () => {
  const statusData = [
    {
      caption: 'Device',
      label: 'Solar',
      online: true,
      onlineLabel: 'Online',
      Icon: SunIcon,
    },
    {
      caption: 'Load wattage',
      label: '0.92KVA',
      online: true,
      onlineLabel: '18.00% Load',
      Icon: PoleIcon,
    },
    {
      caption: 'Battery',
      label: '24.79%',
      online: true,
      onlineLabel: 'PV Power: 3258KW',
      isCharging: true,
      Icon: BatteryIcon,
    },
    {
      caption: 'Offgrid',
      label: 'Disabled',
      online: false,
      onlineLabel: '',
      Icon: PoleIcon,
    },
  ];
  return (
    <div className="pt-5">
      <div className="grid grid-cols-4 space-x-6">
        {statusData.map(item => (
          <SolarPanelStatusCards key={item.label} {...item} />
        ))}
      </div>
    </div>
  );
};

export default SolarPanelStatus;
