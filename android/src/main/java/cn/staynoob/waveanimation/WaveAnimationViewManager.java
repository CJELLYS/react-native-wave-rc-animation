package cn.staynoob.waveanimation;

import android.graphics.Color;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

/**
 * Created by xy on 17-7-29.
 */

public class WaveAnimationViewManager extends SimpleViewManager<WaveView> {

    public static final String REACT_CLASS = "WaveAnimationView";

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected WaveView createViewInstance(ThemedReactContext reactContext) {
        WaveView mWaveView = new WaveView(reactContext);
        WaveHelper mWaveHelper = new WaveHelper(mWaveView);

        mWaveView.setShapeType(WaveView.ShapeType.CIRCLE);
        mWaveHelper.start();

        return mWaveView;
    }

    @ReactProp(name = "frontWaveColor")
    public void setFrontWaveColor(WaveView view, String color) {
        view.setFrontWaveColor(Color.parseColor(color));
    }

    @ReactProp(name = "behindWaveColor")
    public void setBehindWaveColor(WaveView view, String color) {
        view.setBehindWaveColor(Color.parseColor(color));
    }

    @ReactProp(name = "percent", defaultFloat = 0.5f)
    public void setPercent(WaveView view, float percent) {
        view.setWaterLevelRatio(percent);
    }

}

