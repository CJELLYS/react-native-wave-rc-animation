//
//  YSCWaterWaveView.h
//  ReactNativeWaveAnimation
//
//  Created by BOOSAL on 2017/8/1.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import <UIKit/UIKit.h>

typedef NS_ENUM(NSInteger, YSCWaterWaveAnimateType) {
  YSCWaterWaveAnimateTypeShow,
  YSCWaterWaveAnimateTypeHide,
};

@interface YSCWaterWaveView : UIView

@property (nonatomic, strong) UIColor *behindWaveColor;    // 第一个波浪颜色
@property (nonatomic, strong) UIColor *frontWaveColor;   // 第二个波浪颜色
@property (nonatomic, assign) CGFloat percent;            // 上升高度最大百分比

-(void) startWave;
-(void) stopWave;
-(void) reset;
- (void)removeFromParentView;

@end
