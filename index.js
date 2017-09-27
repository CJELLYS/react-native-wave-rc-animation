import React from 'react';
import PropTypes from 'prop-types';
import { View} from 'react-native';
import NativeWaveAnimation from './NativeWaveAnimation';

class WaveAnimationView extends React.Component {
    static propTypes = {
        ...View.propTypes,
        percent: PropTypes.number,
        frontWaveColor: PropTypes.string,
        behindWaveColor: PropTypes.string,
    }

    render() {
        const {
            children,
            style,
            percent,
            frontWaveColor,
            behindWaveColor,
        } = this.props;

        return (
            <View style={style}>
                <NativeWaveAnimation
                    {...{percent, frontWaveColor, behindWaveColor}}
                    style={{
                        width: style.width,
                        height: style.height,
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                    }}
                ></NativeWaveAnimation>
                {children}
            </View>
        )
    }
}

export default WaveAnimationView;