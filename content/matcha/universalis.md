---
title: Universalis 集成 | 抹茶 Matcha
subtitle: 了解我们如何集成 Universalis
include_footer: true
---

# Universalis 集成

[Universalis](https://universalis.app/) 是一个支持国际服和国服的跨服市场布告板统计项目。
Universalis 的数据全部来自于其他用户在使用过程中的上报。

抹茶 Matcha 插件（以下简称“本插件”）内置 Universalis 集成功能。当你启用 Universalis 集成时，
本插件会自动将你浏览市场的物价数据上报到 Universalis，同时从 Universalis 获取你当前所在大区其他服务器的物价数据并自动显示到悬浮窗上。

## 隐私保护

我们尽最大努力保护你的隐私，同时权衡社区功能。当你关闭 Universalis 集成时，没有数据会被发送到 Universalis 服务器，
同时也不会自动查询其他同大区服务器的物价信息。你可以自行在 [Universalis 网站](https://universalis.app/)上查看其他用户上报的数据。

无论你是否开启 Universalis 集成， FFCAFE、Universalis、盛趣游戏或其他任何第三方都无从获取你的角色 ID 等能标识你个人身份信息数据。
这最大限度地防止第三方获知一个玩家是否使用了 Universalis。

Universalis 集成默认不会被启用。

## 数据上报

当你启用 Universalis 集成时，以下数据会由本插件收集并上报至 Universalis 服务器：

* 一个随机生成的、唯一识别的身份码，用于区分用户；
* 角色 ID （共 64 位）的前 32 位；
* 当前所在的服务器、大区；
* 通过雇员或市场布告板查询的物品出售信息、出售历史，包括但不限于物品名、出售者雇员名、售价、数量、购买时间等。

这些数据经脱敏后，在 [Universalis 网站](https://universalis.app/)上可被任何人匿名地查看，无论其是否为本插件的用户。
