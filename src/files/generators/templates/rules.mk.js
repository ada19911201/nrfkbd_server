module.exports = `

# 配置项：主控芯片类型
# 可选：nrf52833 或 nrf52840
NRF_CHIP := %nrf_chip%
CODE_KEY_ID :=%code_key_id%

# 配置项：功能选项
# BOOTMAGIC_ENABLE = yes	# 启用Bootmagic
EXTRAKEY_ENABLE = yes	    # 启用媒体键功能
MOUSEKEY_ENABLE = yes       # 启用鼠标键功能
NKRO_ENABLE = yes	        # 启用USB的全键无冲功能
USB_6KRO_ENABLE = yes       # 启用USB的六键无冲功能
COMMAND_ENABLE = yes        # 启用调试和配置的命令
%rgbstatus_enable%STATUS_RGB_ENABLE = yes    #启用键盘运行状态灯
%rgblight_enable%RGB_BOTTOM_ENABLE = yes            #启用RGB灯
%rgbmatrix_enable%RGB_TOP_ENABLE = %rgb_select%     # 启用RGB轴灯
%rgbqdec_enable%ROTARY_ENCODER = yes               # 启用编码器
`.trim()
