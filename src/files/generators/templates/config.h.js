/**
 * @Description:config
 * @Author: bubao
 * @Date: 2019-09-16 13:35:12
 * @LastEditors: bubao
 * @LastEditTime: 2019-09-16 13:43:50
 */
module.exports = `
/*
Copyright 2012 Jun Wako <wakojun@gmail.com>
Copyright 2019 Jim Jiang <jim@lotlab.org>

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 2 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

#ifndef CONFIG_H
#define CONFIG_H

#include <stdint.h>

/* USB Device descriptor parameter */
#define VENDOR_ID 0x0520 /* USB VID */
#define PRODUCT_ID 0x1314 /* USB PID */
#define DEVICE_VER 0x0001 /* 硬件版本 */
#define MANUFACTURER "Zoroada" /* 硬件制造商，用于蓝牙显示 */
#define PRODUCT "%PRODUCT_NAME%" /* 硬件名词，用于蓝牙显示 */
%macaddr_name%#define MACADDR_SEPRATOR ' ' /* 蓝牙名称后地址的分隔符。若不设置则不显示蓝牙名称后面的地址 */

/* USB HID report parameter */
#define KEYBOARD_EPSIZE 8 /* 键盘上传端点大小，请不要修改 */
#define NKRO_EPSIZE 28 /* 键盘NKRO端点大小，请不要修改 */

/* key matrix size */
#define MATRIX_ROWS %MATRIX_ROWS% /* 硬件阵列行数 */
#define MATRIX_COLS %MATRIX_COLS% /* 硬件阵列列数 */

/* define if matrix has ghost */
// #define MATRIX_HAS_GHOST /* 按键阵列是否出现Ghost Key，若没有加二极管则需要启用这个项目 */

/* Set 0 if debouncing isn't needed */
#define DEBOUNCE 5 /* 硬件消抖次数 */

/* Mechanical locking support. Use KC_LCAP, KC_LNUM or KC_LSCR instead in keymap */
#define LOCKING_SUPPORT_ENABLE
/* Locking resynchronize hack */
#define LOCKING_RESYNC_ENABLE

/* key combination for command */
#define IS_COMMAND() ( \
    keyboard_report->mods == (MOD_BIT(KC_LSHIFT) | MOD_BIT(KC_RSHIFT)))

// 键盘省电参数
#define SLEEP_SLOW_TIMEOUT 15 // 键盘闲置多久后转入慢速扫描模式 (15s)
#define SLEEP_OFF_TIMEOUT 600// 键盘闲置多久后转入自动关机 (600s)
#define KEYBOARD_SCAN_INTERVAL 1 // 按键消抖时长 (ms)
// #define KEYBOARD_FAST_SCAN_INTERVAL 5 // 通常模式下，多久扫描一次键盘 (ms)
// #define KEYBOARD_SLOW_SCAN_INTERVAL 100 // 慢速模式下，多久扫描一次键盘 (ms)
#define MATRIX_SCAN_DELAY_CYCLE 36          // 等待IO稳定时间
#define BLE_NOT_CONNECT_TIMER   60          // 慢广播时间单位(s)

// LED自动熄灭时长(5000ms)，设为0则不自动熄灭
#define LED_AUTOOFF_TIME 0
// 需要输入配对码
%passkey_required%#define PASSKEY_REQUIRED

// 更改发射功率到+8dBm
%high_tx_power%#define HIGH_TX_POWER
// 动态连接功率
// #define DYNAMIC_TX_POWER
// 启用多设备切换
#define MULTI_DEVICE_SWITCH

// 启用看门狗
#define ENABLE_WATCHDOG

// 启用keymap存储
#define KEYMAP_STORAGE
// 启用配置存储功能
#define CONFIG_STORAGE 

/* disable action features */
//#define NO_ACTION_LAYER
//#define NO_ACTION_TAPPING
//#define NO_ACTION_ONESHOT
//#define NO_ACTION_MACRO
//#define NO_ACTION_FUNCTION

// 旋钮配置
%qdec_enable%#define ROTARY_ENCODER_A %QDEC_A% //13
%qdec_enable%#define ROTARY_ENCODER_B %QDEC_B% //14
//定义旋钮映射的矩阵按键位置
%qdec_enable%#define ROTARY_ENCODER_POS %ENCODER_A_ROW%,%ENCODER_A_COL%   // 旋钮正向按钮映射(不应超过最大行数)
%qdec_enable%#define ROTARY_ENCODER_NEG %ENCODER_B_ROW%,%ENCODER_B_COL%   // 旋钮负向按钮映射(不应超过最大列数)

// LED 配置
#ifdef STATUS_RGB_ENABLE
%Hiden_LED_USER%#define LEDSIGNAL_DI_PIN %LED_USER% // 21
%Hiden_LED_USER%#define LEDSIGNAL_NUM    5
#else
%Hiden_LED_USER%#define BLE_LED     %BLE_LED% // 21
%Hiden_LED_USER%#define USB_LED     %USB_LED%
%Hiden_LED_USER%#define CAPS_LED    %CAPS_LED%
#endif
// ws2812 RGB 配置
%rgb_enable%#define RGBLED_NUM %RGBLED_NUM% // 8
%rgb_enable%#define RGB_DI_PIN %RGB_DI_PIN% // 10
%rgb_enable%%Hiden_RGB_PWR_PIN%#define RGB_PWR_PIN %RGB_PWR_PIN% // P-mos
%rgb_enable%%Hiden_RGB_PWR_PIN_REVERSE%#define RGB_PWR_PIN_REVERSE %RGB_PWR_PIN_REVERSE% // N-mos

//I2C轴灯
%rgbm_enable%#define RGB_I2C_SDA %I2C_SDA%  //22
%rgbm_enable%#define RGB_I2C_SCL %I2C_SCL%  //32
#define RGB_SDB     38  //38
#define RGB_INTB    41 //41
// 独立硬件按钮
%Hiden_POWER_BUTTON%#define POWER_BUTTON %POWER_BUTTON% // 3

// This is a 7-bit address, that gets left-shifted and bit 0
// set to 0 for write, 1 for read (as per I2C protocol)
// The address will vary depending on your wiring:
// 0b1110100 AD <-> GND
// 0b1110111 AD <-> VCC
// 0b1110101 AD <-> SCL
// 0b1110110 AD <-> SDA
%rgbm_enable%#define DRIVER_ADDR_1 %rgbm_addr%
%rgbm_enable%#define DRIVER_COUNT 1
%rgbm_enable%#define DRIVER_1_LED_TOTAL %RGBMATRIX_NUM% 
%rgbm_enable%#define DRIVER_2_LED_TOTAL 0
%rgbm_enable%#define DRIVER_LED_TOTAL (DRIVER_1_LED_TOTAL + DRIVER_2_LED_TOTAL)
//rgb—矩阵
%rgbm_enable%#define RGB_MATRIX_FRAMEBUFFER_EFFECTS

%rgbm_enable%#define RGB_MATRIX_KEYPRESSES // reacts to keypresses
%rgbm_enable%#define RGB_MATRIX_KEYRELEASES // reacts to keyreleases (instead of keypresses)
%rgbm_enable%#define RGB_DISABLE_AFTER_TIMEOUT 0 // number of ticks to wait until disabling effects
%rgbm_enable%#define RGB_DISABLE_WHEN_USB_SUSPENDED true // turn off effects when suspended
%rgbm_enable%#define RGB_MATRIX_LED_PROCESS_LIMIT (DRIVER_LED_TOTAL + 4) / 5 // limits the number of LEDs to process in an animation per task run (increases keyboard responsiveness)
%rgbm_enable%#define RGB_MATRIX_LED_FLUSH_LIMIT 16 // limits in milliseconds how frequently an animation will update the LEDs. 16 (16ms) is equivalent to limiting to 60fps (increases keyboard responsiveness)
%rgbm_enable%#define RGB_MATRIX_MAXIMUM_BRIGHTNESS 200 // limits maximum brightness of LEDs to 200 out of 255. If not defined maximum brightness is set to 255
%rgbm_enable%#define RGB_MATRIX_STARTUP_MODE RGB_MATRIX_CYCLE_LEFT_RIGHT // Sets the default mode, if none has been set
%rgbm_enable%#define RGB_MATRIX_STARTUP_HUE 0 // Sets the default hue value, if none has been set
%rgbm_enable%#define RGB_MATRIX_STARTUP_SAT 255 // Sets the default saturation value, if none has been set
%rgbm_enable%#define RGB_MATRIX_STARTUP_VAL RGB_MATRIX_MAXIMUM_BRIGHTNESS // Sets the default brightness value, if none has been set
%rgbm_enable%#define RGB_MATRIX_STARTUP_SPD 127 // Sets the default animation speed, if none has been set

// 电量检测配置 Pin 2
#define BATTERY_ADC_PIN %bat_adc_pin% // 电量检测引脚


// 按键阵列配置
static const uint8_t MATRIX_ROW_PINS[MATRIX_ROWS] = { %row_pins% };
static const uint8_t MATRIX_COL_PINS[MATRIX_COLS] = { %col_pins% };
#define %diode_direction% // 键盘阵列的二极管方向是从COL->ROW

#define LED_POSITIVE // LED上拉驱动

#endif
`.trim()
