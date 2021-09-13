/**
 * @Description:Makefile
 * @Author: Geno
 * @Date: 2020-04-12
 */
module.exports = `

# 为 %PRODUCT_NAME% 生成
# 此工程的根目录
ROOT_DIR := ../..
USB := $(ROOT_DIR)/USB
BLE := $(ROOT_DIR)/BLE
TMK := $(ROOT_DIR)/TMK
SDK_ROOT := $(ROOT_DIR)/SDK16
DRIVERS := $(ROOT_DIR)/DRIVERS
FUNTION := $(ROOT_DIR)/FUNTION
APP_PROJECT := $(ROOT_DIR)/keyboard_project/armgcc



CONFIG_H = config.h

SRC_FILES += keymap_plain.c 	
SRC_FILES += keymap_rgb.c
INC_FOLDERS +=  . 
include rules.mk
include $(TMK)/tmk.mk


`.trim()
