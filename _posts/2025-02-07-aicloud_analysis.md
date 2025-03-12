---
date: 2025-02-07 05:10:13
layout: post
title: "爱问云分析报告"
subtitle: "不要再为爱问云的种种限制而苦恼了"
description: "不要再为爱问云的种种限制而苦恼了"
image: https://icer233.github.io/assets/postimg/2025/02/07/2.png
optimized_image:
category: code
tags:
  - "破解"
  - "代码"
  - "技巧"
  - "账号"
author: icer233
paginate: false
math: false
---

# 爱问云分析报告

***作者: icer233 协作者: Alex***

[TOC]

## 网络部分

### 登陆

#### 获得登陆界面背景图

通过 `GET` 方法获得登陆界面背景图

```
GET https://wwwr.aiwenyun.cn/static/yxt/image/loginBg_new2.jpg
```

我们可以劫持这个包， 实现如下效果：

![](https://icer233.github.io/assets/postimg/2025/02/07/1.png)

#### 检测用户是否使用了虚拟机

通过 `POST` 获得 `screenRecordList`

```
POST https://www.aiwenyun.cn/yxt/servlet/antiScreenRecord/nct/getScreenRecordList
```

其中携带请求体为

```json
{
   "os" : "virtualMachine"
}
```

代表请求得到的是虚拟机进程列表

随后得到回应为虚拟机程序的进程名和窗口名, 爱问云会在检测到这些进程时黑屏提示

可以通过网络劫持, 修改检测列表来阻止爱问云检测

```json
{
   "code" : 0,
   "execTime" : 3,
   "obj" : [
      {
         "applicationName" : "VirtualBox",
         "id" : 201,
         "os" : "virtualMachine",
         "processName" : "virtualbox"
      },
      {
         "applicationName" : "vmware",
         "id" : 202,
         "os" : "virtualMachine",
         "processName" : "vmware"
      },
      {
         "applicationName" : "bochs",
         "id" : 204,
         "os" : "virtualMachine",
         "processName" : "bochs"
      },
      {
         "applicationName" : "KVM",
         "id" : 205,
         "os" : "virtualMachine",
         "processName" : "qemu"
      },
      {
         "applicationName" : "parallels",
         "id" : 206,
         "os" : "virtualMachine",
         "processName" : "parallels"
      },
      {
         "applicationName" : "xen",
         "id" : 207,
         "os" : "virtualMachine",
         "processName" : "xen"
      }
   ],
   "reqId" : "1738390617177_0.5372871354588453",
   "reqTime" : 1738390617177
}

```

#### 登录

通过 `POST` 进行用户登录, 请求用户信息

```
POST https://www.aiwenyun.cn/custom/usr/doLogin
```

携带了用户名, 密码等信息

```json
{
   "clientVersion" : "爱问云客户端版本",
   "deviceId" : "设备ID",
   "deviceName" : "设备名称",
   "loginName" : "用户名",
   "name" : "用户名",
   "osInfo" : "系统信息, 如CPU, 系统版本等",
   "passwd" : "密码的MD5",
   "rawName" : "用户名",
   "role" : 1, // 推测1表示学生, 可能有其他身份如老师, 管理员等
   "systemInfo" : "系统信息",
   "version" : "系统版本信息"
}
```

其中密码是原密码的MD5

回应得到

```json
{
   "code" : 0,
   "execTime" : 54,
   "mytype" : 1,// 对应请求体中的role
   "obj" : {
      "LoginUserType" : 1,// 对应请求体中的role
      "access_token" : "12345-6-7890123-abcde12345fghij67890klmno12345pq12.0.18_5.51.182-PC-ai",// access-token
      "active" : 1,
      "country" : "CN",// 国家代码, 与语言相关
      "createAt" : "2023-06-14 10:23:51 +08:00",// 账户创建时间
      "createId" : -1,
      "expire_date" : 4842431999000,// 过期时间(时间戳)
      "externalId" : "xxxxxxxx",// 唯一的ID, 类似UUID
      "externalLoginName" : "xxxx"// 第二用户名
      "followFlag" : 0,
      "formalFlag" : 1,
      "grade" : 123,// 年级
      "hasPopQr" : 0,
      "id" : 1234567,// 用户ID
      "lastLogin" : 1234567890000,// 最后登录时间(时间戳)
      "loginMobile" : "12345",// 绑定的手机号
      "loginName" : "xxxxx",// 用户名
      "loginname" : "xxxxx",// 用户名
      "mCode" : "",
      "matchedOrgs" : [// 机构信息
         {
            "loginId" : 1234567,// 用户ID
            "loginName" : "xxxxx",// 用户名
            "loginType" : 1,// role
            "myid" : 12345,// 机构ID
            "name" : "xxxx",// 校区
            "oemName" : "xxxx"// 机构名称
         }
      ],
      "mobile" : "xxxx",// 绑定手机号
      "myFav" : "123abc",
      "myFile" : "123abc",
      "myMini" : "123abc",
      "myOrg" : {// 管理员信息
         "attribute" : 10,
         "code" : "1651806498446",
         "expire_date" : 1123451199000,// 过期时间(时间戳)
         "formal_limitaccount" : 1,
         "name" : "xxxx",// 校区
         "ownerMobile" : "12345678901",// 管理员手机号
         "ownerName" : "xxx",// 管理员姓名
         "parentId" : 12345,
         "platform" : "ai",// 平台爱问云
         "service_phone" : "",
         "shortName" : "xxxx"// 机构名
      },
      "myid" : 1234567,// 用户ID
      "mytype" : 1,
      "name" : "xxx",// 真实名字
      "org_id" : 12345,// 机构ID
      "plasoCoin" : 0,
      "profile" : "xxx",
      "register_from" : 9,
      "school" : "xxx",// 学校
      "score" : 45000,// 分数
      "serviceFlag" : 1,
      "sex" : 0,// 性别
      "subscribeFlag" : 0,
      "supportParent" : 0,
      "tempProfile" : "xxx",
      "totalGetScore" : 12345,
      "totaloutScore" : 0,
      "userLevel" : 1,
      "userType" : 1,
      "validTimeInterval" : 10
   },
   "reqId" : "1738390619603_0.5484605022893401",
   "reqTime" : 1234567890123 //请求时间, 时间戳
}

```

其中`access-token`是最为重要的, 用这个可以获得用户的回放视频的信息

#### 获取机构信息

```
POST https://www.aiwenyun.cn/yxt/servlet/org/getOrgConfig
```

请求体为

```json
{
	"orgId": 12345 //即上一节获得的机构ID 
}
```

可以获得该机构的一些自定义内容, 如头图, 等级划分, 支付方式, 一些设置

最重要的是, 这个请求里包含了**课程的水印设置**！

> [!CAUTION]
>
> 遗憾的是， 经过实践，修改水印相关的部分并不能去水印，但是可以使水印缩小等.
>
> 是否显示水印可能被包含在其他地方，如`"xxOption"`里.
>
> 值得注意的是，这些`Option`的数字代表的应该是一些数字的和，每个选项用一个2的幂来表示，机构开启了哪些选项，`Option`的值就是这些选项代表的数字之和.
>
> 例如 `A:1`, `B:2`, `C:4`, `D:8.`
>
> 我想开启`AC`选项，那就是`5`，开启`BCD`选项，就是`15`.
>
> 如果你要问我是怎么想到的？一是MC物品指令里的`HideFlags`键就是用的这个方式，好巧不巧，物品格式也是`json`。二是看到了`"studentInfoEditOptions":127`, 127是什么? `127=128-1=1+2+4+8+16+32+64`, 这代表了学生信息编辑方面, 机构打开了所有权限, 事实也正是如此.
>
> 由此, 你就可以通过修改这些`Option`的值来用类似控制变量的方法试出每个值代表的意义.
>
> 以上是笔者根据获得的信息直接结合经验进行猜测分析.
>
> 如果你想测试出每个值代表的功能, 可以去爱问云官网的帮助手册中关于后台操作指南的部分, 或许会有所帮助.([后台设置使用指南 | 云学堂帮助中心](https://help.aiwenyun.cn/boss/c3f1#header-5))
>
> 



```json
{
   "code" : 0,
   "execTime" : 10,
   "obj" : {
      "_base" : 123,
      "_content" : 123,
      "_liveClass" : 123,
      "_liveClass_v2" : 3,
      "_mall" : 1234,
      "_mini" : 1,
      "admin_test_center" : true,
      "androidLabOption" : 0,
      "androidMigrate" : false,
      "androidMigrateTip" : "感谢您的信任与使用，为保障您的安全，请下最新版本",
      "baseOption" : 0,
      "blackList" : [],
      "classOption" : 123,
      "d_canvasHeightCounts" : 123,
      "d_dataIsolatedByClass" : 0,//每节课的数据分开储存，类似MC的版本隔离
      "d_enableLiveTestPoints" : 0,
      "delayEndLiveclass" : {
         "delayEnd" : 1234,
         "delayEndTimes" : 1,
         "enable" : true
      },
      "disableAiSkip" : false,
      "enableClientMessageCenter" : true,
      "enableCollect3DMusic" : false,
      "enableHighSpeedMode" : 0,
      "enableInfiAnnotation" : false,
      "enableNewClassExam" : 0,
      "enableOpenLocation" : false,
      "enablePcClientLearning" : true,
      "enableRTC3A" : true,
      "enableRobotPen" : 0,
      "enableSmallWindowDisplay" : true,
      "enterLiveclassEarly" : {//提前进入课堂时间（秒）
         "admin" : 600,
         "assistant" : 600,
         "enable" : true,
         "student" : 300,// 学生只能提前5分钟
         "teacher" : 600
      },
      "gradeConfig" : [ "优秀", "良好", "不错", "过关", "努力" ],
      "group" : 31,
      "innerWaterMarkStyle" : {//课程水印设置，可以劫持修改水印,具体内容见帮助文档
         "depth" : 22,
         "enhanced" : 1,
         "file" : true,
         "size" : 18,
         "type" : 1
      },
      "isNewPlayer" : true,
      "labOption" : 9,
      "limitSourceWatchTimes" : {},
      "liveRecordExpireTime" : -1,//回放过期时间，-1表示不会过期
      "liveclassRecordOption" : 3,
      "manyDeliverGood" : false,
      "orgId" : 12345,
      "orgOption" : 123,
      "payProvider" : [ "WEIXIN", "ALIPAY" ],
      "refundCheck" : false,
      "sepLiveMsg" : false,
      "showHisChatMsg" : true,//显示历史聊天记录
      "showParentLearningProgress" : 1,
      "studentInfoEditOptions" : 127,
      "supportHDImage" : 0,
      "theme" : {
         "_id" : "67a2f1868f0489a2f72f80ac",
         "banner" : "https://abc.com/1.blob",// 机构头图，爱问云随后会Get这个地址，可以劫持
         "color" : 0,
         "text" : ""
      },
      "upimeTeacherTool" : 123,
      "videoISP" : "POLYV",
      "videoProvide" : "ossvideo",
      "whiteList" : []
   },
   "reqId" : "1234512345289_0.020347557364628344",
   "reqTime" : 1234512345289
}

```



#### 获取菜单信息

```
POST https://www.aiwenyun.cn/yxt/servlet/org/menu
```

请求得到爱问云客户端界面中菜单上的各语言文本内容

```json
{
   "code" : 0,
   "execTime" : 11,
   "obj" : {
      "menu" : {
         "de" : {
            "course" : "Lehrplan",
            "exam" : "Prüfung",
            "group" : "Klasse",
            "homepage" : "Startseite",
            "homework" : "Nach der Klassenkonsolidierung",
            "learn" : "Lernzentrum",
            "liveclass" : "Echtzeitunterricht",
            "market" : "Einkaufszentrum",
            "qa" : "Tutor",
            "textbook" : "Lehrplan",
            "train" : "Praxis"
         },
         "en" : {
            "course" : "Course",
            "exam" : "Quiz",
            "group" : "Class",
            "homepage" : "Home",
            "homework" : "Task",
            "learn" : "Study",
            "liveclass" : "Live Class",
            "market" : "Mall",
            "qa" : "Tutoring",
            "textbook" : "course",
            "train" : "Exercise"
         },
         "ja" : {
            "course" : "カリキュラム",
            "exam" : "テスト",
            "group" : "クラス",
            "homepage" : "トップページ",
            "homework" : "授業後の強化",
            "learn" : "勉強",
            "liveclass" : "リアルタイムクラス",
            "market" : "ショッピングモール",
            "qa" : "の助言を仰ぐ",
            "textbook" : "カリキュラム",
            "train" : "練習する"
         },
         "ko" : {
            "course" : "과정",
            "exam" : "퀴즈",
            "group" : "학급",
            "homepage" : "첫 페이지",
            "homework" : "방과 후 공고화",
            "learn" : "학습 센터",
            "liveclass" : "실시간 교실",
            "market" : "상점",
            "qa" : "지도",
            "textbook" : "과정",
            "train" : "연습"
         },
         "zh" : {
            "course" : "课程",
            "exam" : "测验",
            "group" : "班级",
            "homepage" : "首页",
            "homework" : "课后巩固",
            "learn" : "学习中心",
            "liveclass" : "实时课堂",
            "market" : "商城",
            "qa" : "辅导",
            "textbook" : "课程",
            "train" : "练习"
         }
      },
      "quickLinks" : {
         "help_link" : "https://help.aiwenyun.cn/",
         "platform" : "ai",
         "survey_link" : "https://www.xmplus.cn/lite/7446908185921536",
         "upgrade_link" : "https://help.aiwenyun.cn/new-features/9993"
      }
   },
   "reqId" : "1738390620222_0.23449369846215995",
   "reqTime" : 1738390620222
}

```

可以劫持修改：

![](https://icer233.github.io/assets/postimg/2025/02/07/2.png)

### 在线课堂

#### 没有内容显示的图片

```
GET https://wwwr.aiwenyun.cn/static/yxt/image/theme/aiblue/noContent.png
```

#### 获取课表

```
POST https://www.aiwenyun.cn/gt/servlet/timeTable/getTimeTable
```

标头中携带

```json
{
	...
	"access-token": "xxx"
	...
}
```

请求体携带

```json
{
   "hasReachBottom" : true,// 受否达到课表底部
   "pageSize" : 20,// 一页显示课程数量
   "pageStart" : 0,// 第几页
   "startTime" : 1738392424866,// 起始日期(时间戳)
   "taskType" : [ 1, 2 ]
}
```

## 获取历史课堂信息

```
POST https://www.aiwenyun.cn/liveclassgo/api/v1/history/listRecord
```

标头中携带同上, 最为重要的仍然是 `access-token`

请求体携带

```json
{
   "dateFrom" : 1730390400000,// 起始日期(时间戳)
   "dateTo" : 1738425599000,// 结束日期(时间戳)
   "indexStart" : 0,// 起始页码
   "pageSize" : 50// 单页显示数量
}

```

响应得到

```json
{
   "code" : 0,
   "msg" : "success",
   "obj" : {
      "list" : [
      	{
      	  ...
      	}
      ]
}
```

其中 `list` 里面是每节课的信息

```json
{
            "_id" : "12345abcde",// 课程唯一ID
            "assistant" : 0,// 猜测:助教
            "availWatchTimes" : -1,// 允许观看次数, -1代表无限制
            "createTime" : 1737624607777,// 创建时间(时间戳)
            "duration" : 10752,// 总时长(秒)
            "fileCommon" : {
               "_id" : "67890fghijk",// 回放文件ID
               "aiStatus" : 0,
               "cover" : "",// 封面
               "createTime" : 1737624769030,// 创建时间(时间戳)
               "duration" : 10752,// 总时长(秒)
               "location" : "orgid/1245_1245t1_ab1",// 回放文件路径2
               "locationPath" : "liveclass",// 回放文件路径1
               "name" : "课程A", // 课程名称
               "type" : 4,
               "uploadToOrg" : false
			},
            "fileId" : "abcd123",// 文件ID
            "gone" : false,
            "isEvaluated" : false,
            "listenerCount" : 1,
            "liveclass" : 18037900,
            "longDesc" : "",
            "orgId" : 12345,// 机构ID
            "recordOption" : 0,
            "shortDesc" : "课程A",// 课程名称
            "teacher" : 114514,// 教师ID
            "teacherName" : "A老师",// 教师名字
            "totalCount" : 100,// 学生人数
            "uploadToOrg" : false,
            "userCount" : 3,
            "validTime" : 5000000000000,// 保质期
            "watchProgress" : 53// 观看进度(百分比)
}
```

#### 获得教师信息

```
POST https://www.aiwenyun.cn/yxt/servlet/user/nc/getTeacherInfo
```

标头同上

请求体携带

```json
{
   "userId" : [ 114514 ]// 教师ID列表
}
```

响应体

```json
{
   "code" : 0,
   "execTime" : 9,
   "obj" : [
      {
         "active" : 1,
         "id" : 114514,// 教师ID
         "loginName" : "abc123",// 教师用户名
         "name" : "A老师"// 教师名字
      }
   ],
   "reqId" : "1738392437616_0.7790627685618978",
   "reqTime" : 1738392437616
}
```

#### 获取观看限制

```
POST https://www.aiwenyun.cn/course/api/v1/nct/m/package/task/getFileWatchLimit
```

标头是 `access-token`, 请求体是这节课的 `fileId`

响应体是

```json
{
   "code" : 0,
   "msg" : "success",
   "obj" : {
      "availWatchTimes" : -1
   }
}

```

#### 获取回放文件信息

```
POST https://www.aiwenyun.cn/yxt/servlet/file/getfileinfo
```

标头是 `access-token`, 请求体是这节课的 `fileId`

响应得到这节课的一些信息, 前面基本都有, 不做赘述

#### 再次获取录屏进程列表

通过 `POST` 获得 `screenRecordList`

```
POST https://www.aiwenyun.cn/yxt/servlet/antiScreenRecord/nct/getScreenRecordList
```

其中携带请求体为

```json
{
   "os" : "windows"
}
```

代表请求得到的是Windows中的常见录屏软件

随后得到响应为这些录屏软件的进程名和窗口名, 爱问云会在检测到这些进程时黑屏提示

可以通过网络劫持, 修改检测列表来阻止爱问云检测

响应得到

```json
[
    {
        "id": 7,
        "processName": "captura.exe",
        "os": "windows",
        "applicationName": "Captura"
    },
    {
        "id": 8,
        "processName": "EVCapture.exe",
        "os": "windows",
        "applicationName": "EV录屏"
    },
    {
        "id": 9,
        "processName": "oCam.exe",
        "os": "windows",
        "applicationName": "oCam"
    },
    {
        "id": 10,
        "processName": "GifCam.exe",
        "os": "windows",
        "applicationName": "GifCam"
    },
    {
        "id": 11,
        "processName": "bdcam.exe",
        "os": "windows",
        "applicationName": "Bandicam"
    },
    {
        "id": 12,
        "processName": "FoxitREC.exe",
        "os": "windows",
        "applicationName": "福昕录屏大师"
    },
    {
        "id": 13,
        "processName": "KK.exe",
        "os": "windows",
        "applicationName": "KK录像机"
    },
    {
        "id": 14,
        "processName": "PotPlayerMini64.exe",
        "os": "windows",
        "applicationName": "PotPlayer"
    },
    {
        "id": 15,
        "processName": "PotPlayerMini.exe",
        "os": "windows",
        "applicationName": "PotPlayer"
    },
    {
        "id": 19,
        "processName": "RecordIt.exe",
        "os": "windows",
        "applicationName": "Recordit"
    },
    {
        "id": 20,
        "processName": "ApowerREC.exe",
        "os": "windows",
        "applicationName": "傲软录屏（ApowerREC）"
    },
    {
        "id": 26,
        "processName": "ScreenRecord.exe",
        "os": "windows",
        "applicationName": "迅捷视频剪辑软件"
    },
    {
        "id": 27,
        "processName": "screcorder.exe",
        "os": "windows",
        "applicationName": "迅捷视频剪辑软件"
    },
    {
        "id": 31,
        "processName": "WeLook.exe",
        "os": "windows",
        "applicationName": "华为智慧快录"
    },
    {
        "id": 34,
        "processName": "Monosnap.exe",
        "os": "windows",
        "applicationName": "Monosnap"
    },
    {
        "id": 42,
        "processName": "HiRecMaster.exe",
        "os": "windows",
        "applicationName": "嗨格式录屏大师"
    },
    {
        "id": 86,
        "processName": "JiSuRecorder.exe",
        "os": "windows",
        "applicationName": "开心录屏"
    },
    {
        "id": 88,
        "processName": "ScreenRecord.exe",
        "os": "windows",
        "applicationName": "风云录屏"
    },
    {
        "id": 91,
        "processName": "screen_recorder.exe",
        "os": "windows",
        "applicationName": "金飞翼屏幕录像大师"
    },
    {
        "id": 94,
        "processName": "ScreenRecorder.exe",
        "os": "windows",
        "applicationName": "迅捷屏幕录像工具/超级录屏"
    },
    {
        "id": 106,
        "processName": "XELive.exe",
        "os": "windows",
        "applicationName": "小鹅通"
    },
    {
        "id": 107,
        "processName": "小鹅通助手.exe",
        "os": "windows",
        "applicationName": "小鹅通助手"
    },
    {
        "id": 124,
        "processName": "Screencast.exe",
        "os": "windows",
        "applicationName": "录猎2"
    },
    {
        "id": 126,
        "processName": "Action.exe",
        "os": "windows",
        "applicationName": "Action"
    },
    {
        "id": 128,
        "processName": "FineScreenRecorder.exe",
        "os": "windows",
        "applicationName": "精细屏幕录制"
    },
    {
        "id": 129,
        "processName": "RecForth.exe",
        "os": "windows",
        "applicationName": "RecForth"
    },
    {
        "id": 130,
        "processName": "screenbits.exe",
        "os": "windows",
        "applicationName": "screenbits"
    },
    {
        "id": 131,
        "processName": "screenmix.exe",
        "os": "windows",
        "applicationName": "screenmix"
    },
    {
        "id": 132,
        "processName": "Vidline.exe",
        "os": "windows",
        "applicationName": "Vidline"
    },
    {
        "id": 133,
        "processName": "recbutton.exe",
        "os": "windows",
        "applicationName": "recbutton"
    },
    {
        "id": 134,
        "processName": "overspeed.exe",
        "os": "windows",
        "applicationName": "overspeed"
    },
    {
        "id": 135,
        "processName": "debut.exe",
        "os": "windows",
        "applicationName": "debut"
    },
    {
        "id": 136,
        "processName": "DemoCreatorCN.exe",
        "os": "windows",
        "applicationName": "万兴录演"
    },
    {
        "id": 138,
        "processName": "heyubao.exe",
        "os": "windows",
        "applicationName": " 和育宝"
    },
    {
        "id": 162,
        "processName": "FSCapture.exe",
        "os": "windows",
        "applicationName": "faststone2"
    },
    {
        "id": 165,
        "processName": "录屏软件【点我启动】.exe",
        "os": "windows",
        "applicationName": "录屏软件"
    },
    {
        "id": 194,
        "processName": "WeMeetApp.exe",
        "os": "windows",
        "applicationName": "腾讯会议"
    },
    {
        "id": 195,
        "processName": "RecorderPro.exe",
        "os": "windows",
        "applicationName": "飞思录屏"
    },
    {
        "id": 196,
        "processName": "AirPlayer.exe",
        "os": "windows",
        "applicationName": "AirPlayer"
    },
    {
        "id": 198,
        "processName": "wemeetapp.exe",
        "os": "windows",
        "applicationName": "腾讯会议 "
    },
    {
        "id": 200,
        "processName": "VsoDownloader.exe",
        "os": "windows",
        "applicationName": "VSO视频下载软件"
    }
]
```

#### 评论区

点开视频或者哪里有一个请求可以获得评论区的信息

包括该信息内容、发出者的名字、用户名、发出信息内容等

#### 回放视频链接

回放视频是一个m3u8链接, 它由三部分组成

第一部分是 `https://filecdn.plaso.cn/liveclass/plaso/`

第二部分时每个视频的 `location` `orgid/xxxxxxxxxxxxxxx`

第三部分是一个后缀, 例如 `/ts1/t.m3u8`

前两部分在前文已经研究得比较通透了, 第三部分是请求plist等等, 参数是和服务器, 也就是阿里云的储存桶等相关的, 参考这几篇文章:

- https://help.aliyun.com/zh/oss/developer-reference/common-http-headers

- https://help.aliyun.com/zh/oss/developer-reference/add-signatures-to-urls?spm=a2c4g.11186623.0.0.24635f92lNzztY

- https://www.alibabacloud.com/help/tc/oss/developer-reference/add-signatures-to-urls

我还没有研究, 各位有空可以试一试.

> [!TIP]
>
> 研究不出来怎么办？
>
> 手动抓一次m3u8不就知道了吗!
>
> 一个机构应该都是一样的!



## 本地部分

### 历史课堂

#### 反截屏

在打开一个回放视频时, 爱问云会调用 `Windows API` `SetWindowDisplayAffinity()`

这个函数可以指定窗口内容的显示位置.

> [!NOTE]
>
> ```c++
> BOOL SetWindowDisplayAffinity(
> [in] HWND  hWnd,
> [in] DWORD dwAffinity
> );
> ```
>
> 
>
> **参数:**
>
> 
>
> ```c++
> [in] hWnd
> ```
>
> 类型：**HWND**
>
> 顶级窗口的句柄。 窗口必须属于当前进程。
>
> ```
> [in] dwAffinity
> ```
>
> 类型：**DWORD**
>
> 指定窗口内容的显示位置的显示相关性设置。
>
> 此参数的取值可为下列值之一：
>
> | 值                                       | 含义                                                         |
> | :--------------------------------------- | :----------------------------------------------------------- |
> | **WDA_NONE**<br>0x00000000               | 对窗口的显示位置没有限制。                                   |
> | **WDA_MONITOR**<br>0x00000001            | 窗口内容仅显示在监视器上。 在其他任何位置，窗口都会显示，其中不显示任何内容。 |
> | **WDA_EXCLUDEFROMCAPTURE**<br>0x00000011 | 窗口仅显示在监视器上。 在其他任何位置，窗口根本不显示。此相关性的一个用途是用于显示视频录制控件的窗口，以便控件不包括在捕获中。Windows 10版本 2004 中引入。 请参阅有关以前版本的 Windows 兼容性的备注。 |
>
> **返回值:**
>
> 类型： **BOOL**
>
> 如果函数成功，则返回 **TRUE**;例如，在非顶级窗口上进行函数调用时，它将返回 **FALSE** 。 要获得更多的错误信息，请调用 GetLastError。
>
> 
>
> **注解:**
>
> 此函数和 [GetWindowDisplayAffinity](https://learn.microsoft.com/zh-cn/windows/desktop/api/winuser/nf-winuser-getwindowdisplayaffinity) 旨在支持 Windows 7 中新增的窗口内容保护功能。 此功能使应用程序能够保护自己的屏幕窗口内容，使其免受通过一组特定的公共操作系统功能和 API 捕获或复制。 但是，仅当桌面窗口管理器 (DWM) 组合桌面时，它才有效。
>
> 请务必注意，与安全功能或数字版权管理 (DRM) 实现不同，无法保证使用 **SetWindowDisplayAffinity** 和 [GetWindowDisplayAffinity](https://learn.microsoft.com/zh-cn/windows/desktop/api/winuser/nf-winuser-getwindowdisplayaffinity) 以及其他必要功能（如 [DwmIsCompositionEnabled](https://learn.microsoft.com/zh-cn/windows/desktop/api/dwmapi/nf-dwmapi-dwmiscompositionenabled)）将严格保护窗口内容，例如有人拍摄屏幕照片。
>
> 从 Windows 10 版本 2004 开始，WDA_EXCLUDEFROMCAPTURE 是受支持的值。 在以前版本的 Windows 上将显示相关性设置为WDA_EXCLUDEFROMCAPTURE的行为就像应用了WDA_MONITOR一样。

> [!CAUTION]
>
> **值得一提的是, 这个函数只能对自己的进程使用, 否则无效.**
>
> **简单来说, 你不能写一个程序A去设置程序B的显示位置, 而只能设置自己也就是程序A及其子进程的显示位置.**

使用 `API Monitor` 监视后, 我发现爱问云在打开回放窗口时会对这个窗口执行两次 `SetWindowDisplayAffinity()` , 传入的第二个参数为 `17` , 换算成16进制就是 `11` , 查表得知对应 `WDA_EXCLUDEFROMCAPTURE` 也就是说窗口只会显示在显示屏上, 你用截屏软件等是截不到的.

那么怎么破解呢?

很简单, 给这个进程注入一个dll, 再调用函数把自己设为 `WDA_NONE` 就OK了.

这个函数是在你打开回放视频时才被执行, 刚启动爱问云时是没有的, 因此, 你如果刚刚启动时就注入并修改是没有用的, 那么我们考虑:

- 方案一: 等到打开回放视频后再注入
- 方案二: 一直循环执行 `SetWindowDisplayAffinity(hWnd, WDA_NONE);`
- 方案三: 用 `GetWindowDisplayAffinity()` 循环检测, 当亲缘性不是 `WDA_NONE` 时就修改

我采用方案三

```c++
while(1){
    DWORD dwAffinity = 0;
    GetWindowDisplayAffinity(hWnd, &dwAffinity);
    if (dwAffinity != WDA_NONE) {
        SetWindowDisplayAffinity(hWnd, WDA_NONE);
    }
    Sleep(1000);
}    	
```

获取句柄就直接用 `FindWindow()` , 用 `API Monitor` 找到执行语句后再用 `Spy++` 查一下这个句柄对应的窗口类型和标题

```c++
const char* TARGET_CLASS = "Chrome_WidgetWin_1";
const char* TARGET_TITLE = "爱问云";
HWND hWnd = FindWindowA(TARGET_CLASS, TARGET_TITLE);
```

把这些都整合起来, 加入日志信息方便我们调试

```c++
DWORD WINAPI MonitorThread(LPVOID lpParam) {
    // 目标窗口类名和标题
    const char* TARGET_CLASS = "Chrome_WidgetWin_1";
    const char* TARGET_TITLE = "爱问云";

    while (g_bRunning) {
        // 查找目标窗口
        HWND hWnd = FindWindowA(TARGET_CLASS, TARGET_TITLE);
        if (!hWnd) {
            Sleep(1000); // 窗口未找到，等待后重试
            continue;
        }

        // 获取当前窗口的显示亲缘性
        DWORD dwAffinity = 0;
        if (!GetWindowDisplayAffinity(hWnd, &dwAffinity)) {
            DWORD error = GetLastError();
            char buf[100];
            sprintf_s(buf, "获取亲缘性失败，错误码：%d", error);
            MessageBoxA(NULL, buf, "反反截屏工具 作者：ICER233", MB_OK);
            continue;
        }

        // 果亲缘性不是WDA_NONE，则强制重置
        if (dwAffinity != WDA_NONE) {
            if (SetWindowDisplayAffinity(hWnd, WDA_NONE)) {
                MessageBoxA(NULL, "已重置亲缘性为WDA_NONE！", "反反截屏工具 作者：ICER233", MB_OK);
            }
            else {
                DWORD error = GetLastError();
                char buf[100];
                sprintf_s(buf, "重置失败，错误码：%d", error);
                MessageBoxA(NULL, buf, "反反截屏工具 作者：ICER233", MB_OK);
            }
        }

        // 间隔1秒后再次检查
        Sleep(1000);
    }

    return 0;
}
```

然后我们在dll注入时启动这个线程即可

```c++
BOOL APIENTRY DllMain(HMODULE hModule, DWORD ul_reason_for_call, LPVOID lpReserved) {
    switch (ul_reason_for_call) {
    case DLL_PROCESS_ATTACH:
        MessageBoxA(NULL, "反反截屏工具注入成功！", "反反截屏工具 作者：ICER233", MB_OK);
        // 启动监控线程
        g_bRunning = TRUE;
        g_hThread = CreateThread(NULL, 0, MonitorThread, NULL, 0, NULL);
        if (g_hThread == NULL) {
            MessageBoxA(NULL, "线程创建失败！", "反反截屏工具 作者：ICER233", MB_OK);
        }
        break;

    case DLL_PROCESS_DETACH:
        // 通知线程退出并等待
        g_bRunning = FALSE;
        if (g_hThread) {
            WaitForSingleObject(g_hThread, 5000); // 等待线程退出
            CloseHandle(g_hThread);
        }
        break;

    case DLL_THREAD_ATTACH:
    case DLL_THREAD_DETACH:
        break;
    }
    return TRUE;
}
```

完整代码如下

```c++
#include <Windows.h>
#include <stdio.h>

HANDLE g_hThread = NULL;
BOOL g_bRunning = FALSE; 

DWORD WINAPI MonitorThread(LPVOID lpParam) {
    // 目标窗口类名和标题
    const char* TARGET_CLASS = "Chrome_WidgetWin_1";
    const char* TARGET_TITLE = "爱问云";

    while (g_bRunning) {
        // 查找目标窗口
        HWND hWnd = FindWindowA(TARGET_CLASS, TARGET_TITLE);
        if (!hWnd) {
            Sleep(1000); // 窗口未找到，等待后重试
            continue;
        }

        // 获取当前窗口的显示亲缘性
        DWORD dwAffinity = 0;
        if (!GetWindowDisplayAffinity(hWnd, &dwAffinity)) {
            DWORD error = GetLastError();
            char buf[100];
            sprintf_s(buf, "获取亲缘性失败，错误码：%d", error);
            MessageBoxA(NULL, buf, "反反截屏工具 作者：ICER233", MB_OK);
            continue;
        }

        // 果亲缘性不是WDA_NONE，则强制重置
        if (dwAffinity != WDA_NONE) {
            if (SetWindowDisplayAffinity(hWnd, WDA_NONE)) {
                MessageBoxA(NULL, "已重置亲缘性为WDA_NONE！", "反反截屏工具 作者：ICER233", MB_OK);
            }
            else {
                DWORD error = GetLastError();
                char buf[100];
                sprintf_s(buf, "重置失败，错误码：%d", error);
                MessageBoxA(NULL, buf, "反反截屏工具 作者：ICER233", MB_OK);
            }
        }

        // 间隔1秒后再次检查
        Sleep(1000);
    }

    return 0;
}

BOOL APIENTRY DllMain(HMODULE hModule, DWORD ul_reason_for_call, LPVOID lpReserved) {
    switch (ul_reason_for_call) {
    case DLL_PROCESS_ATTACH:
        MessageBoxA(NULL, "反反截屏工具注入成功！", "反反截屏工具 作者：ICER233", MB_OK);
        // 启动监控线程
        g_bRunning = TRUE;
        g_hThread = CreateThread(NULL, 0, MonitorThread, NULL, 0, NULL);
        if (g_hThread == NULL) {
            MessageBoxA(NULL, "线程创建失败！", "反反截屏工具 作者：ICER233", MB_OK);
        }
        break;

    case DLL_PROCESS_DETACH:
        // 通知线程退出并等待
        g_bRunning = FALSE;
        if (g_hThread) {
            WaitForSingleObject(g_hThread, 5000); // 等待线程退出
            CloseHandle(g_hThread);
        }
        break;

    case DLL_THREAD_ATTACH:
    case DLL_THREAD_DETACH:
        break;
    }
    return TRUE;
}
```

### 资源文件

通过查看爱问云的安装目录, 不难发现这是一个 Electron 打包程序

#### 窗口信息

打开 `AiCloud\resources\app\package.json` , 内容如下

```json
{
    "name": "ai_client",
    "version": "1.07.126",
    "description": "",
    "keywords": [
        "Plaso"
    ],
    "homepage": ".",
    "main": "main.js",
    "scripts": {
        "build:mac": "electron-packager . --overwrite --platform=darwin --arch=x64 --out=build --electron-version=5.0.13",
        "build:win": "electron-packager . --overwrite --platform=win32 --arch=ia32 --out=build --electron-version=5.0.13"
    },
    "dependencies": {
        "@plasosdk/plasoffmpeg": "^1.1.0",
        "@plasosdk/rbtusbaddon": "^1.0.1",
        "@plasosdk/rbtwifiaddon": "^1.0.2",
        "@plasosdk/rtmpplayer": "^2.0.0",
        "@plasosdk/screenshot": "^1.2.1",
        "@plasosdk/winproxy": "^1.0.0",
        "agora-electron-sdk": "4.2.6-build.126-rc.1",
        "trtc-electron-sdk": "10.3.112-beta.13"
    },
    "agora_electron": {
        "electron_version": "12.0.0",
        "prebuilt": true,
        "arch": "x32"
    },
    "chromium-args": "--ignore-certificate-errors --enable-usermedia-screen-capturing --ignore-gpu-blacklist --disable-gpu",
    "default_locale": "en",
    "electron": "12.0.18",
    "marketString": "",
    "node-remote": true,
    "oemName": "ai",
    "single-instance": false,
    "webkit": {
        "plugin": true
    },
    "window": {
        "title": "爱问云",//爱问云窗口标题
        "icon": "icon.png",//爱问云窗口logo
        "toolbar": false,
        "transparent": false,
        "show": true,
        "width": 1280,//窗口大小
        "height": 720,//窗口大小
        "min_width": 1280,//窗口最小大小
        "min_height": 720,//窗口最小大小
        "frame": true//是否显示边框
    }
}
```

可以看到第39行的 `"window"` 字典里的信息定义里打开爱问云后的窗口信息, 可以修改, 经测试有效, 图片就不附了

#### main.js

打开 `AiCloud\resources\app\main.js`, 这是一个 js 脚本文件, 里面甚至包含了开发者的注释以及解决一些问题的帖子, 哈哈哈

但是我对这方面不是很熟悉, 大家有兴趣可以研究一下

```js
const isElectron = !!process.versions['electron'];
if (isElectron) {
  const screenshot = require('./lib/screenshot/screenshot');
  const preview = require('./lib/preview/preview');
  const closePopup = require('./lib/closePopup/closePopup');
  const Store = require('electron-store');
  try {
    require('@plasosdk/winproxy');
    require('@plasosdk/screenshot');
    require('@plasosdk/rtmpplayer');
  } catch (e) {
    console.log(e);
  }
  const path = require('path');
  const fs = require('fs');
  const os = require('os');
  const {
    app,
    crashReporter,
    Menu,
    ipcMain,
    BrowserWindow,
    powerSaveBlocker,
    globalShortcut,
    dialog,
    powerMonitor,
  } = require('electron');
  const isDarwin = process.platform == 'darwin';
  const id = powerSaveBlocker.start('prevent-display-sleep');

  const { exec } = require('child_process');

  let mainWindow = null;

  const gotTheLock = app.requestSingleInstanceLock();

  if (!gotTheLock && app.isPackaged) {
    app.quit();
  } else {
    const url = require('url');
    const args = process.argv.filter((arg) => arg.indexOf('-') == 0);
    const isDebug = args.some((one) => one == '--debug');
    let title = '', icon = '', manifest;
    let oemName = '';

    // 创建electron数据存储实例
    const store = new Store();

    if (args.length > 0 && args[0].toLocaleLowerCase().indexOf('dev') >= 0) {
      app.commandLine.appendSwitch('--ignore-certificate-errors', 'true');
    }
    if(os.platform() === 'win32' && os.release().split('.')[0] <= 6) {
      app.commandLine.appendSwitch('--ignore-certificate-errors', 'true');
    }
    try {
      manifest = JSON.parse(fs.readFileSync(path.join(__dirname, './package.json')).toString());
      title = manifest.window.title;
      icon = manifest.window.icon;
      oemName = manifest.oemName;
      if (isDarwin) app.setName(title);
    } catch (err) {
      title = '';
      console.log('fs read file error');
    }

    // 匹配通过命令参数设置的oemName值
    const matchedOemNameArg = args.find(item => /^-o/g.test(item));
    if (matchedOemNameArg) {
      oemName = matchedOemNameArg.substring(2).toLowerCase();
    }

    if (store.get('enableGPU')=== false) {//默认开启gpu加速功能
      app.commandLine.appendSwitch('disable-gpu', true);
    }

    if (store.get('clientScaling') === false) {
      app.commandLine.appendSwitch('high-dpi-support', 1);
      app.commandLine.appendSwitch('force-device-scale-factor', 1);
    }

    app.allowRendererProcessReuse = false;
    // 首次添加此开关是为了解决一些GPU导致的渲染问题的，比如进课堂白屏，历史课堂播放进度条不动。
    // 支持虚拟声卡需要添加此开关
    app.commandLine.appendSwitch('--no-sandbox')

    function createWindow(event) {
      Menu.setApplicationMenu(null);
      // Create the browser window.
      mainWindow = new BrowserWindow({
        width: 1280,
        height: 720,
        minWidth: 1280,
        minHeight: 720,
        title: title,
        icon: path.join(__dirname, icon),
        webPreferences: {
          contextIsolation: false, // fix: https://github.com/electron/electron/issues/18139
          nodeIntegration: true,
          enableRemoteModule: true,
          spellcheck: false,
          // nativeWindowOpen: true,
          // allowRendererProcessReuse: true,
        },
      });
      //【【PC-隐私政策】【集成】【线上问题】点击查看第三方隐私政策，白屏】
      // https://www.tapd.cn/50221454/bugtrace/bugs/view/1150221454001035168
      mainWindow.webContents.session.webRequest.onHeadersReceived({ urls: [ "*://*/*" ] },
        (d, c)=>{
          if(d.responseHeaders['X-Frame-Options']){
            delete d.responseHeaders['X-Frame-Options'];
          } else if(d.responseHeaders['x-frame-options']) {
            delete d.responseHeaders['x-frame-options'];
          }

          c({cancel: false, responseHeaders: d.responseHeaders});
        }
      );
      mainWindow.webContents.on(
        'new-window',
        (event, url, frameName, disposition, options, additionalFeatures) => {
          event.preventDefault();
          let windowObj = {
            parent: mainWindow,
            x:0,
            y:0, // 【【PC-分享】巩固分享至QQ空间，QQ空间弹框右移了遮挡住了右上角关闭按钮和全屏按钮的显示】https://www.tapd.cn/50221454/bugtrace/bugs/view/1150221454001021199
            webContents: options.webContents, // use existing webContents if provided
          };
          Object.assign(windowObj, options);
          if (frameName == 'preview') {
            //preview modal
            windowObj.fullscreen = true;
          } else if (frameName == 'classroom') {
            windowObj.nodeIntegration = false;
            windowObj.modal = true;
          }
          // else if (frameName == 'screenshot') {
          //     screenshot(source, mainWindow)
          // }
          const win = new BrowserWindow(windowObj);
          if (!options.webContents) {
            win.loadURL(url); // existing webContents will be navigated automatically
          }
          event.newGuest = win;
          const webContents = event.newGuest.webContents;

          if (args.length > 0 && args[0].toLocaleLowerCase().indexOf('dev') >= 0) {
            webContents.on(
              'certificate-error',
              (event, webContents, url, error, certificate, callback) => {
                event.preventDefault();
                callback(true);
              },
            );
          }
          if (isDebug) {
            webContents.openDevTools({ mode: 'detach' });
          }
        },
      );

      // 电源关机/重启，直接结束app，不提示关闭，不阻挡系统关机。
      powerMonitor.on('shutdown', () => {
        app.exit(0);
      });
      mainWindow.on('close', (event) => {
        event.preventDefault()
        mainWindow.restore()
        closePopup(mainWindow, {
          oemName,
          debug: isDebug
        })
      })

      // and load the index.html of the app.

      mainWindow.loadURL(
        url.format({
          pathname: path.join(__dirname, 'update.html'),
          protocol: 'file:',
          slashes: true,
        }),
      );

      if (isDebug) {
        mainWindow.webContents.openDevTools({ mode: 'detach' });
      }

      // 如果是开发环境 监听快捷键开启|关闭调试 也可以连续点击logo五次开启
      if (!app.isPackaged) {
        const ret = globalShortcut.register('CommandOrControl+Shift+i', () => {
          if (mainWindow.webContents.isDevToolsOpened()) {
            mainWindow.webContents.closeDevTools();
          } else {
            mainWindow.webContents.openDevTools({ mode: 'detach' });
          }
        });

        if (!ret) {
          console.log('registration debug shortcut failed');
        }
      }
    }

    ipcMain.on('synchronous-message', (event, arg) => {
      let cmd = arg,
        params = [];
      if (typeof arg == 'object' && !Array.isArray(arg)) {
        cmd = arg.cmd;
        params = arg.params;
      }
      switch (cmd) {
        case 'argv':
          event.returnValue = args;
          break;
        case 'manifest':
          event.returnValue = manifest;
          break;
        case 'relaunch':
          ipcMain.removeAllListeners();
          app.relaunch({
            args: process.argv.slice(1).concat(['--relaunch', ...params]),
          });
          app.exit(0);
          event.returnValue = '';
          break;
        case 'quit':
          app.exit();
          break;
        case 'shareToQQ':
          {
            const shareWin = new BrowserWindow();
            shareWin.loadURL(params);
          }
          break;
        default:
          event.returnValue = 'no such command!!';
          break;
      }
    });

    ipcMain.handle('getStoreValue', (event, key) => {
      return store.get(key);
    })

    ipcMain.handle('setStoreValue', (event, key, value) => {
      store.set(key, value);
      return true
    })

    // 获取进程
    const getData = (type) => {
      const cmd = type === 'mac'?'ps -Aco command':'tasklist'
      return new Promise((resolve,reject)=>{
        exec(cmd, (err, stdout) => {
          if (err) {
              return console.error(err);
          }
          if (stdout) {
            resolve(stdout)
          }
        });
      })
    }

    ipcMain.handle('getSystemProcess', async (event,type) => {
      const data = await getData(type);
      return data;
    })


    const tempPath = path.join(app.getPath('userData'), "/P403FileTemp/");
    app.setAppLogsPath([tempPath])
    app.setPath("crashDumps", tempPath)
    crashReporter.start({ submitURL: '', uploadToServer: false })

    app.on('ready', () => {
      createWindow();
      screenshot(mainWindow);
      preview(mainWindow);
    });

    app.on('window-all-closed', function () {
      app.quit();
    });

    app.on('activate', function () {
      if (app.isReady() && BrowserWindow.getAllWindows().length === 0) createWindow();
    });
    app.on('will-quit', function () {
      if (powerSaveBlocker.isStarted(id)) {
        powerSaveBlocker.stop(id);
      }
      if (!app.isPackaged) {
        globalShortcut.unregister('CommandOrControl+Shift+i');
      }
    });
    app.on('second-instance', (event, commandLine, workingDirectory) => {
      // 当运行第二个实例时,将会聚焦到mainWindow这个窗口
      if (mainWindow) {
        if (mainWindow.isMinimized()) mainWindow.restore();
        mainWindow.focus();
      }
    });
  }
} else {
  const nw = require('nw.gui');
  const { width, height, min_width, min_height, frame, show, title } = nw.App.manifest.window;
  nw.Window.open(
    'update.html',
    { width, height, min_width, min_height, frame, show, title },
    function (win) {
      console.log(win);
    },
  );
}

```

