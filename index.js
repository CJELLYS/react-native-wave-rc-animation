import React from 'react';
import PropTypes from 'prop-types';
import { View} from 'react-native';
import NativeWaveAnimation from './NativeWaveAnimation';

class WaveAnimationView extends React.Component {
    static propTypes = {
        ...View.propTypes,
        percent: PropTypes.number,
        frontWaveColor: PropTypes.string,
        behindWaveColor: PropTypes.string
    }

    render() {
        const {
            children,
            style,
            percent,
            frontWaveColor,
            behindWaveColor,
            right,
            bottom,
        } = this.props;

        return (
            <View style={style}>
                <NativeWaveAnimation
                    {...{percent, frontWaveColor, behindWaveColor}}
                    style={{
                        width: style.width-4,
                        height: style.height-4,
                        position: 'absolute',   
                        right: right,
                        bottom: bottom
                    }}
                >
                </NativeWaveAnimation>
               
            </View>
        )
    }
}

export default WaveAnimationView;