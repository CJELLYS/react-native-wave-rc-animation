import React from 'react';
import PropTypes from 'prop-types';
import { requireNativeComponent, View} from 'react-native';

const iface = {
    name: 'NativeWaveAnimation',
    propTypes: {
        ...View.propTypes,
        percent: PropTypes.number,
        frontWaveColor: PropTypes.string,
        behindWaveColor: PropTypes.string,
    },
}

export default requireNativeComponent('WaveAnimationView', iface);