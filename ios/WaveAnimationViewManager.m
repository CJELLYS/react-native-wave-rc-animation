//
//  WaveAnimationViewManager.m
//  ReactNativeWaveAnimation
//
//  Created by BOOSAL on 2017/8/1.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import <React/RCTViewManager.h>
#import "YSCWaterWaveView.h"

@interface WaveAnimationViewManager : RCTViewManager

@end

@implementation WaveAnimationViewManager

RCT_EXPORT_MODULE()

- (UIView *)view{

  YSCWaterWaveView  *waterWave = [YSCWaterWaveView new];
  
  waterWave.percent = 0.5;
  waterWave.behindWaveColor = [UIColor colorWithRed:146/255.0 green:148/255.0 blue:216/255.0 alpha:1.0];
  waterWave.frontWaveColor = [UIColor colorWithRed:84/255.0 green:87/255.0 blue:197/255.0 alpha:1.0];
  
  //show
  [waterWave startWave];
  return waterWave;
}

RCT_EXPORT_VIEW_PROPERTY(percent, CGFloat)
RCT_EXPORT_VIEW_PROPERTY(behindWaveColor, UIColor)
RCT_EXPORT_VIEW_PROPERTY(frontWaveColor, UIColor)
RCT_EXPORT_VIEW_PROPERTY(width, CGFloat)
RCT_EXPORT_VIEW_PROPERTY(height, CGFloat)

@end
