const menuData = {
  "官网": [],
  "社区": [],
  "百科": [],
  "工具类": ["在线工具", "实用软件", "面板", "启动器"],
  "服务端": [],
  "资源": [],
  "工作室": [],
  "服务器": []
}


const siteData = [
  {
    "category": "官网",
    "icon": "linecons-tag",
    "sites": [
      {
        "name": "Minecraft",
        "url": "https://www.minecraft.net/",
        "logo": "../assets/images/mc_img/1627327538-1014608.png",
        "desc": "Minecraft我的世界官方网站"
      },
      {
        "name": "网易我的世界",
        "url": "https://mc.163.com/",
        "logo": "../assets/images/mc_img/1627382997-15491327634201533388.jpg",
        "desc": "网易我的世界官网"
      },
      {
        "name": "Minecraft Classic",
        "url": "https://classic.minecraft.net",
        "logo": "../assets/images/mc_img/1643796726-Jungle_Grass_Block.png",
        "desc": "Cassic经典原始网页版Minecraft在线游戏"
      },
      {
        "name": "Mojang Jira",
        "url": "https://bugs.mojang.com/",
        "logo": "../assets/images/mc_img/1627658858-mojang.png",
        "desc": "Mojang官方Bug反馈/提交建议"
      },
      {
        "name": "FindMCServer",
        "url": "https://findmcserver.com/",
        "logo": "../assets/images/mc_img/1700120565-logo2.png",
        "desc": "官方Minecraft服务器列表"
      }
    ]
  },
  {
    "category": "社区",
    "icon": "linecons-tag",
    "sites": [
      {
        "name": "MineBBS",
        "url": "https://www.minebbs.com/",
        "logo": "../assets/images/mc_img/1627324356-MB1.png",
        "desc": "我的世界中文论坛"
      },
      {
        "name": "苦力怕论坛 KLPBBS",
        "url": "https://klpbbs.com/",
        "logo": "../assets/images/mc_img/1627383107-klpbbs.png",
        "desc": "我的世界苦力怕论坛"
      },
      {
        "name": "Minecraft Forum",
        "url": "https://www.minecraftforum.net/",
        "logo": "../assets/images/mc_img/1627445047-Minecraft_forums_logo.png",
        "desc": "Minecraft原官方论坛"
      },
      {
        "name": "Minecraft-HK",
        "url": "https://www.minecraft-hk.com/",
        "logo": "../assets/images/mc_img/1628093329-mchk.png",
        "desc": "我的世界香港社区"
      },
      {
        "name": "MCPE-TW",
        "url": "https://www.mcpe.tw/",
        "logo": "../assets/images/mc_img/1705305067-logo.png",
        "desc": "MCPE台湾中文网"
      },
      {
        "name": "MC教育版论坛",
        "url": "https://www.mceebbs.com",
        "logo": "../assets/images/mc_img/get.php?url=www.mceebbs.com",
        "desc": "在方块中学习"
      },
      {
        "name": "Minecraft吧",
        "url": "https://tieba.baidu.com/minecraft",
        "logo": "../assets/images/mc_img/1627460496-timg-1.jpg",
        "desc": "百度minecraft吧"
      },
      {
        "name": "MGC 中文图形站",
        "url": "https://minegraph.cn/",
        "logo": "../assets/images/mc_img/20240407210128_01b3c45b.png",
        "desc": "共同探索MC图形学的无限可能。"
      },
      {
        "name": "Nukkit吧",
        "url": "https://tieba.baidu.com/nukkit",
        "logo": "../assets/images/mc_img/20210927223050_52a9a60f.jpg",
        "desc": "百度Nukkit吧"
      }
    ]
  },
  {
    "category": "百科",
    "icon": "linecons-tag",
    "sites": [
      {
        "name": "Minecraft Wiki",
        "url": "https://zh.minecraft.wiki/",
        "logo": "../assets/images/mc_img/1696391166-Wiki.webp",
        "desc": "最大的 Minecraft Wiki"
      },
      {
        "name": "我的世界玩家WIKI",
        "url": "https://wiki.biligame.com/mcplayer/",
        "logo": "../assets/images/mc_img/1627806623-logo_mcplayer.png",
        "desc": "Bilibili玩家攻略WIKI"
      },
      {
        "name": "MCBE 官方创作者文档",
        "url": "https://learn.microsoft.com/minecraft/creator/?view=minecraft-bedrock-stable",
        "logo": "../assets/images/mc_img/get.php?url=learn.microsoft.com",
        "desc": "微软官方MCBE创作者文档"
      },
      {
        "name": "MCMOD",
        "url": "https://www.mcmod.cn/",
        "logo": "../assets/images/mc_img/1627390803-mcmod.png",
        "desc": "Minecraft中文Mod百科"
      },
      {
        "name": "wiki.vg",
        "url": "https://wiki.vg",
        "logo": "../assets/images/mc_img/20240128180943_c4a0bfb6.png",
        "desc": "一个mc开发文档"
      },
      {
        "name": "基岩版开发Wiki",
        "url": "https://wiki.mcbe-dev.net/",
        "logo": "../assets/images/mc_img/1627457109-bedev.png",
        "desc": "Minecraft基岩版开发WIki"
      },
      {
        "name": "DigMinecraft",
        "url": "https://www.digminecraft.com/",
        "logo": "../assets/images/mc_img/get.php?url=www.digminecraft.com",
        "desc": "一个强大的MC百科平台"
      },
      {
        "name": "Minecraft Parkour Wiki",
        "url": "https://www.mcpk.wiki/wiki/Main_Page/zh",
        "logo": "../assets/images/mc_img/1707189652-微信截图_20240206111849.jpg",
        "desc": "一个记录 Minecraft 跑酷知识以及玩家运动机制的 wiki"
      },
      {
        "name": "Minecraft插件百科",
        "url": "https://mineplugin.org/",
        "logo": "../assets/images/mc_img/1627456946-Mineplugin_logo.png",
        "desc": "服务器插件百科Wiki"
      },
      {
        "name": "MineWiki",
        "url": "https://minewiki.net/",
        "logo": "../assets/images/mc_img/1627324894-e_book.png",
        "desc": "MCBE多人游戏百科计划"
      },
      {
        "name": "Bedrock Wiki",
        "url": "https://wiki.bedrock.dev/",
        "logo": "../assets/images/mc_img/get.php?url=wiki.bedrock.dev",
        "desc": "一个技术基岩的知识分享网站，包含文档、教程和一般的操作信息。"
      },
      {
        "name": "NitWikit 笨蛋文档",
        "url": "https://nitwikit.8aka.org",
        "logo": "../assets/images/mc_img/20250201235855_dd4ed7ab.png",
        "desc": "详细且全面的开服教程"
      },
      {
        "name": "MC都市传说百科",
        "url": "https://minecraftcreepypasta.fandom.com/wiki/Category:Browse",
        "logo": "../assets/images/mc_img/1739598330-wechat_2025-02-15_134451_250.png",
        "desc": "MC阴间玩意儿大合集"
      },
      {
        "name": "MCID",
        "url": "http://mcid.lingningyu.cn/",
        "logo": "../assets/images/mc_img/20240526184013_1e759530.png",
        "desc": "查询方块的各个版本的ID"
      }
    ]
  },
  {
    "category": "在线工具",
    "icon": "linecons-tag",
    "sites": [
      {
        "name": "NameMC",
        "url": "https://namemc.com/",
        "logo": "../assets/images/mc_img/1627474337-namemc.png",
        "desc": "用户名历史皮肤查询"
      },
      {
        "name": "LittleSkin",
        "url": "https://littleskin.cn/?ref=mcnav",
        "logo": "../assets/images/mc_img/1627485777-littleskine.png",
        "desc": "知名老牌皮肤站 ,海量皮肤和披风"
      },
      {
        "name": "Code.org Minecraft",
        "url": "https://code.org/minecraft",
        "logo": "../assets/images/mc_img/1739026022-logo.png",
        "desc": "海外MC可视化编程平台"
      },
      {
        "name": "Pixilart",
        "url": "https://www.pixilart.com/",
        "logo": "../assets/images/mc_img/1628139642-pixilart.png",
        "desc": "在线像素画工具"
      },
      {
        "name": "Minecraft Skin Search",
        "url": "https://mcskinsearch.com/",
        "logo": "../assets/images/mc_img/1646809262-get.png",
        "desc": "一个根据用户名查询皮肤的网站"
      },
      {
        "name": "Microsoft MakeCode for Minecraft",
        "url": "https://minecraft.makecode.com/",
        "logo": "../assets/images/mc_img/1637256002-makecode.png",
        "desc": "微软MakeCode项目的MC版，代码制作器"
      },
      {
        "name": "Minecraft Servers",
        "url": "https://minecraftservers.org/",
        "logo": "../assets/images/mc_img/1635056570-mcs.png",
        "desc": "国外较为有名的服务器列表站"
      },
      {
        "name": "MCRMB",
        "url": "http://www.mcrmb.com/",
        "logo": "../assets/images/mc_img/1627960793-newlogo.png",
        "desc": "自动处理服务器捐助"
      },
      {
        "name": "MinecraftTools",
        "url": "https://minecraft.tools/",
        "logo": "../assets/images/mc_img/1627658292-mctools.png",
        "desc": "各种MC工具合集"
      },
      {
        "name": "HelloSkin皮肤站",
        "url": "https://helloskin.cn",
        "logo": "../assets/images/mc_img/20240220101525_d6138ed1.png",
        "desc": "免费、快捷的MC皮肤站"
      },
      {
        "name": "GetBukkit",
        "url": "https://getbukkit.org/",
        "logo": "../assets/images/mc_img/1627473614-getbukkitwhite.png",
        "desc": "快捷获取Bukkit及Spigot"
      },
      {
        "name": "ChunkBase",
        "url": "https://www.chunkbase.com/apps/",
        "logo": "../assets/images/mc_img/1628156278-favicon.png",
        "desc": "区块查询/种子地图"
      },
      {
        "name": "2M短域名",
        "url": "https://2m.pub",
        "logo": "../assets/images/mc_img/20220412122334_64740610.png",
        "desc": "公益、免费、简单的Minecraft短域名获取工具"
      },
      {
        "name": "我的世界服务器查询网",
        "url": "https://list.mczfw.cn",
        "logo": "../assets/images/mc_img/20240222194052_1e1b4780.png",
        "desc": "我的世界服务器查询网，是Minecraft服务器状态查询网站，这里可以查询到来自全球各地大部分我的世"
      },
      {
        "name": "TextCraft",
        "url": "https://textcraft.net/",
        "logo": "../assets/images/mc_img/1627438192-TX.png",
        "desc": "MC风格文字Logo生成网站"
      },
      {
        "name": "sandclocks",
        "url": "https://www.sandclocks.cn",
        "logo": "../assets/images/mc_img/20240130151619_a6bf33f0.png",
        "desc": "一个自制数据包的网站"
      },
      {
        "name": "Seeder",
        "url": "https://www.mcseeder.com/",
        "logo": "../assets/images/mc_img/20230125090942_4817dc79.jpg",
        "desc": "快速查询种子地图/结构位置"
      },
      {
        "name": "Spritecraft",
        "url": "https://autosaved.org/Spritecraft",
        "logo": "../assets/images/mc_img/get.php?url=autosaved.org",
        "desc": "生成像素画"
      },
      {
        "name": "PocketMine Tools",
        "url": "https://pmt.nathfreder.dev/",
        "logo": "../assets/images/mc_img/1642317785-hammer-wrench-1.png",
        "desc": "支持打包解包、API注入、Poggit检索等各种各样PM功能！"
      },
      {
        "name": "PHAR 在线存档",
        "url": "https://phar.scer.io/",
        "logo": "../assets/images/mc_img/1630900683-phar.png",
        "desc": "在线phar打包解包服务"
      },
      {
        "name": "NovaSkin",
        "url": "http://minecraft.novaskin.me/wallpapers",
        "logo": "../assets/images/mc_img/1627523378-novaskin.png",
        "desc": "自定义皮肤生成壁纸"
      },
      {
        "name": "MC Map Item Tool",
        "url": "https://mc-map.djfun.de/#",
        "logo": "../assets/images/mc_img/get.php?url=mc-map.djfun.de",
        "desc": "您在 Minecraft 地图项目上拥有自己的图像？只需使用这个工具。"
      },
      {
        "name": "MCUUID",
        "url": "https://mcuuid.net",
        "logo": "../assets/images/mc_img/1702022398-微信截图_20231208155623.jpg",
        "desc": "查找、转换和解析 Minecraft 用户名和 UUID 的最简单方式！"
      },
      {
        "name": "McSounds",
        "url": "http://o.xbottle.top/mcsounds/",
        "logo": "../assets/images/mc_img/1700070351-Screenshot_2023-11-16-01-44-35-867_com.microsoft.emmx-edit.jpg",
        "desc": "丰富的MC音效在线收听！"
      },
      {
        "name": "Minotar",
        "url": "https://minotar.net/",
        "logo": "../assets/images/mc_img/get.php?url=minotar.net",
        "desc": "非常快速和简单的 Minecraft 头像 API"
      },
      {
        "name": "MapartCraft",
        "url": "https://rebane2001.com/mapartcraft/zh-Hans",
        "logo": "../assets/images/mc_img/get.php?url=rebane2001.com",
        "desc": "像素画生成器"
      },
      {
        "name": "Minecraft Heads",
        "url": "https://minecraft-heads.com/",
        "logo": "../assets/images/mc_img/1635010897-custom-heads.png",
        "desc": "MC装饰头颅收集站"
      },
      {
        "name": "GameGeeks",
        "url": "https://www.gamergeeks.net/apps/minecraft",
        "logo": "../assets/images/mc_img/20230131125800_3880b9de.png",
        "desc": "一个有很多实用工具的minecraft站"
      },
      {
        "name": "MCCAG",
        "url": "https://mccag.cn/",
        "logo": "../assets/images/mc_img/20241017123313_3dfab2c9.png",
        "desc": "轻松制作出可爱的MC头像"
      },
      {
        "name": "Celestia Skin",
        "url": "https://celestia.skin",
        "logo": "../assets/images/mc_img/20240224133731_84833a9c.png",
        "desc": "四年历史的皮肤站，长期运营，快如闪电！"
      },
      {
        "name": "Colorize FUN",
        "url": "https://colorize.fun/minecraft",
        "logo": "../assets/images/mc_img/1642304925-QQ截图20220116114320.png",
        "desc": "Minecraft像素风格多彩文本生成器"
      },
      {
        "name": "BedRock Dev",
        "url": "https://bedrock.dev/",
        "logo": "../assets/images/mc_img/1668311891-bedrockdev.png",
        "desc": "一个简洁好用的Minecraft基岩版中文文档站"
      },
      {
        "name": "BlocklyNukkit",
        "url": "https://wiki.blocklynukkit.com/",
        "logo": "../assets/images/mc_img/20210802170007_4c01a4d6.jpg",
        "desc": "高效、强大的MCBE创意开发框架"
      },
      {
        "name": "BlackBE",
        "url": "https://blackbe.work/",
        "logo": "../assets/images/mc_img/20210727234417_151593ce.png",
        "desc": "我的世界基岩版云黑系统"
      },
      {
        "name": "Seed Map Viewer",
        "url": "https://mcseedmap.net/",
        "logo": "../assets/images/mc_img/get.php?url=mcseedmap.net",
        "desc": "在线Minecraft种子地图查看器和种子查找器"
      },
      {
        "name": "Minecraft艺术",
        "url": "https://mcpixelart.com/",
        "logo": "../assets/images/mc_img/20250418235424_f1067303.png",
        "desc": "为你快速生成各种MC艺术作品"
      },
      {
        "name": "Custom Totem Skin",
        "url": "https://spea.cc/totem/",
        "logo": "../assets/images/mc_img/20250405152036_1e0841df.png",
        "desc": "一个制作不死图腾材质包的网站"
      },
      {
        "name": "Minecraft Skins",
        "url": "https://mcskins.top/",
        "logo": "../assets/images/mc_img/20250403173814_b4c5258d.png",
        "desc": "有着丰富的皮肤资源，以及一些使用的皮肤工具"
      },
      {
        "name": "3D Minecraft 风格 Logo 生成",
        "url": "https://3dtext.easecation.net/",
        "logo": "../assets/images/mc_img/1739292008-QQ20250212-003208.png",
        "desc": "3D Minecraft 风格 Logo 生成"
      },
      {
        "name": "Minecraft PFP",
        "url": "https://www.minecraftpfp.com/",
        "logo": "../assets/images/mc_img/20250128094102_05abd147.png",
        "desc": "一个开源的MC像素头像生成器"
      },
      {
        "name": "Minecraft Server Status",
        "url": "https://mcstatus.io/",
        "logo": "../assets/images/mc_img/20240803200632_fc81d67b.png",
        "desc": "快速获取任何Minecraft服务器的状态"
      },
      {
        "name": "方块字标志牌生成器",
        "url": "https://kqakqakqa.github.io/utf-block-sign-art/",
        "logo": "../assets/images/mc_img/1725381774-hanging-sign.webp",
        "desc": "为告示牌文字生成较大的字体"
      },
      {
        "name": "SkinMC",
        "url": "https://skinmc.net/",
        "logo": "../assets/images/mc_img/1719209892-skinmc.png",
        "desc": "我的世界皮肤检索平台"
      },
      {
        "name": "ArmorTrims",
        "url": "https://armortrims.com/",
        "logo": "../assets/images/mc_img/1739636931-favicon.png",
        "desc": "盔甲纹饰预览"
      },
      {
        "name": "GMCT 我的世界命令生成器",
        "url": "https://mc.metamo.cn/gmct/?v=5.3",
        "logo": "../assets/images/mc_img/1734748411-微信截图_20241221103024.jpg",
        "desc": "甘小蔗我的世界命令生成器"
      },
      {
        "name": "flags.sh",
        "url": "http://flags.sh.cn",
        "logo": "../assets/images/mc_img/1739638293-badge.png",
        "desc": "Java 版服务器生成启动脚本"
      },
      {
        "name": "BlockBench",
        "url": "https://www.blockbench.net/",
        "logo": "../assets/images/mc_img/1672568294-QQ截图20230101181753.png",
        "desc": "适用于 Minecraft 的建模软件"
      },
      {
        "name": "Minecraft Skin Editor",
        "url": "https://minecraft-skin-editor.com/cn/",
        "logo": "../assets/images/mc_img/get.php?url=minecraft-skin-editor.com",
        "desc": "简洁易用的在线皮肤编辑器！"
      },
      {
        "name": "Aternos 免费服务器",
        "url": "https://aternos.org/:zh-CN/",
        "logo": "../assets/images/mc_img/get.php?url=aternos.org",
        "desc": "一个制作服务器的服务器，有点卡，只有性能好的人才能承受"
      },
      {
        "name": "MC Map Item Tool",
        "url": "https://mc-map.djfun.de/",
        "logo": "../assets/images/mc_img/1664042603-p9GDRMvVDB.jpg",
        "desc": "通过地图来实现在我的世界中的自定义图片！"
      },
      {
        "name": "史莱姆区块查找",
        "url": "https://mclt.cn/",
        "logo": "../assets/images/mc_img/20220810141004_9d0c3adc.png",
        "desc": "还在为找不到史莱姆区块烦恼？这个网站为你解决问题!"
      },
      {
        "name": "UUID生成器",
        "url": "https://uuid.yunser.com/gen/",
        "logo": "../assets/images/mc_img/20220808104205_84f726ae.png",
        "desc": "一款简单好用的UUID 生成器。"
      },
      {
        "name": "MCBEID表",
        "url": "https://ca.projectxero.top/idlist/",
        "logo": "../assets/images/mc_img/20220802021140_ecb19d95.png",
        "desc": "一款可以查询 Minecraft 基岩版命令相关ID的网站"
      }
    ]
  },
  {
    "category": "实用软件",
    "icon": "linecons-tag",
    "sites": [
      {
        "name": "Sakura Frp",
        "url": "https://www.natfrp.com/",
        "logo": "../assets/images/mc_img/1628139624-sakurafrp.png",
        "desc": "好用的内网穿透"
      },
      {
        "name": "OptFine",
        "url": "https://optifine.net/",
        "logo": "../assets/images/mc_img/get.php?url=optifine.net",
        "desc": "MC显示优化模组"
      },
      {
        "name": "WorldPainter",
        "url": "https://www.worldpainter.net/",
        "logo": "../assets/images/mc_img/get.php?url=www.worldpainter.net",
        "desc": "MC地形制作软件"
      },
      {
        "name": "Replay Mod 录像回放",
        "url": "https://www.replaymod.com/",
        "logo": "../assets/images/mc_img/1694230507-16053122.webp",
        "desc": "一个 Minecraft Mod，用于记录、重温和分享您的体验。"
      },
      {
        "name": "Radmin LAN",
        "url": "https://www.radmin.com/",
        "logo": "../assets/images/mc_img/20220502143828_d9f8fb90.png",
        "desc": "类似hamachi的虚拟局域网软件"
      },
      {
        "name": "Panda Frp",
        "url": "https://tryzth.com/",
        "logo": "../assets/images/mc_img/20220127122554_71b6c492.png",
        "desc": "免费的Frp内网穿透"
      },
      {
        "name": "木韩内网穿透",
        "url": "https://muhanfrp.cn/",
        "logo": "../assets/images/mc_img/1703650879-logo.png",
        "desc": "免费的frp内网穿透网站"
      },
      {
        "name": "MCEdit",
        "url": "https://www.mcedit.net/",
        "logo": "../assets/images/mc_img/1628324061-icon_new.png",
        "desc": "MC存档世界编辑器"
      },
      {
        "name": "Mine-imator",
        "url": "https://www.mineimator.com/",
        "logo": "../assets/images/mc_img/1628132312-OIP-C.jpg",
        "desc": "MC动画制作软件"
      },
      {
        "name": "MCreator",
        "url": "https://mcreator.net/",
        "logo": "../assets/images/mc_img/1628132727-mcreator.bmp",
        "desc": "模组制作软件"
      },
      {
        "name": "Hamachi",
        "url": "https://hamachi.en.softonic.com/",
        "logo": "../assets/images/mc_img/1628138301-hamachi-hamachi-1378815298.png",
        "desc": "组建虚拟局域网"
      },
      {
        "name": "Amulate 世界编辑器",
        "url": "https://www.amuletmc.com/",
        "logo": "../assets/images/mc_img/1635330221-amulet_logo-05.webp",
        "desc": "新时代MC世界编辑、转换器"
      },
      {
        "name": "Universal Minecraft Tool",
        "url": "https://www.universalminecraftconverter.com/",
        "logo": "../assets/images/mc_img/1700106363-logo.png",
        "desc": "转换和编辑 Minecraft 世界"
      },
      {
        "name": "OPENNBS",
        "url": "https://opennbs.org/",
        "logo": "../assets/images/mc_img/1628139556-icon.png",
        "desc": "开源nbs音乐编辑"
      },
      {
        "name": "Minecraft 命令行客户端",
        "url": "https://mccteam.github.io/l10n/zh-Hans/",
        "logo": "../assets/images/mc_img/20240111000844_1b6c5ef5.png",
        "desc": "Minecraft虚拟玩家(Fake Player)客户端"
      },
      {
        "name": "Iris Shaders 开源光影模组",
        "url": "https://irisshaders.dev/",
        "logo": "../assets/images/mc_img/1644842991-iristrans-p-800.png",
        "desc": "Iris官网"
      },
      {
        "name": "HAL 联机工具",
        "url": "https://hal.xizh.cn",
        "logo": "../assets/images/mc_img/20240206201226_cc6aa9bc.png",
        "desc": "免费，开放接入，公益的联机模块"
      },
      {
        "name": "Chunker",
        "url": "https://chunker.app/",
        "logo": "../assets/images/mc_img/1739637144-icon.png",
        "desc": "强大的 Minecraft 世界转换器"
      },
      {
        "name": "Chunky 地图渲染器",
        "url": "https://chunky.lemaik.de/",
        "logo": "../assets/images/mc_img/get.php?url=chunky.lemaik.de",
        "desc": "Chunky 软件官网"
      },
      {
        "name": "BlueMap",
        "url": "https://bluemap.bluecolored.de/",
        "logo": "../assets/images/mc_img/get.php?url=bluemap.bluecolored.de",
        "desc": "一种 Minecraft 映射工具，用于创建 Minecraft 世界的 3D 模型并将其显示在 Web 查看器中。"
      },
      {
        "name": "ServerPackCreator",
        "url": "https://serverpackcreator.de/#/",
        "logo": "../assets/images/mc_img/1725382516-serverpackcreator_banner.png",
        "desc": "快速轻松地生成您最喜欢的 Minecraft 整合包的服务器包"
      },
      {
        "name": "World Machine 进阶3D地形生成器",
        "url": "https://www.so.com/link?m=uVqcDLS1jSNNX6kQYJg%2Bmn4l9xrFTkbCd82Xb3LVqE6Hr9K1X1JnqJ1%2F8PJFZ2pu8ODGr6MQ1%2BlvxIwMrJ4maI0kqK8Pp4B3X%2BbL8Omv0WC9sOgv0NZBTL1NhtyhAS1glSYrzoNSQj9wCzd7R",
        "logo": "../assets/images/mc_img/1725380076-favicon32.png",
        "desc": "进阶版Minecraft地形编辑器"
      },
      {
        "name": "Reden",
        "url": "https://redenmc.com/",
        "logo": "../assets/images/mc_img/1719194474-reden_256.png",
        "desc": "为红石开发者提供一站式工作环境，成为红石最好的调试和教学工具。"
      },
      {
        "name": "Minecraft Server Launcher",
        "url": "https://www.mslmc.cn/",
        "logo": "../assets/images/mc_img/get.php?url=www.mslmc.cn",
        "desc": "易用的MC开服器"
      },
      {
        "name": "BlockBench",
        "url": "https://www.blockbench.net/",
        "logo": "../assets/images/mc_img/1672568294-QQ截图20230101181753.png",
        "desc": "适用于 Minecraft 的建模软件"
      },
      {
        "name": "OpenFrp 开放映射",
        "url": "https://www.openfrp.net",
        "logo": "../assets/images/mc_img/1739710107-ayry4-gmpuj.png",
        "desc": "免费开放、高效便捷的内网穿透工具"
      },
      {
        "name": "NatGo 端口映射",
        "url": "https://www.natgo.cn/",
        "logo": "../assets/images/mc_img/20250216194645_31919434.png",
        "desc": "免费且不报毒的内网穿透"
      },
      {
        "name": "MCSkinn Legacy",
        "url": "https://apps.microsoft.com/detail/9n8sjt329hh1?hl=zh-cn&gl=CN",
        "logo": "../assets/images/mc_img/20250202125715_dfb157b3.png",
        "desc": "适用于 Windows 的现代化 Minecraft 3D 皮肤管理器/编辑器"
      },
      {
        "name": "Mod Manager",
        "url": "https://github.com/kaniol-lck/modmanager",
        "logo": "../assets/images/mc_img/20220205221843_e74e2070.png",
        "desc": "一个基于Qt的Minecraft Mod管理器，可以管理、更新与下载Mod。"
      }
    ]
  },
  {
    "category": "面板",
    "icon": "linecons-tag",
    "sites": [
      {
        "name": "幽香面板",
        "url": "https://www.yuuka.com.cn/",
        "logo": "../assets/images/mc_img/1627968335-幽香.png",
        "desc": "优秀的BDS面板"
      },
      {
        "name": "Serein",
        "url": "https://serein.cc/",
        "logo": "../assets/images/mc_img/1688353673-Serein.png",
        "desc": "新时代极简服务器面板"
      },
      {
        "name": "Pterodactyl",
        "url": "https://pterodactyl.io/",
        "logo": "../assets/images/mc_img/1628750963-pterodactyl_logo_transparent.png",
        "desc": "强大开源安全免费的游戏面板"
      },
      {
        "name": "Multicraft",
        "url": "https://multicraft.org/",
        "logo": "../assets/images/mc_img/1627999485-logo.png",
        "desc": "强大的服务器面版"
      },
      {
        "name": "MCSManager",
        "url": "http://mcsmanager.com/",
        "logo": "../assets/images/mc_img/1627997875-mcsm.jpg",
        "desc": "优秀的服务端面板"
      }
    ]
  },
  {
    "category": "启动器",
    "icon": "linecons-tag",
    "sites": [
      {
        "name": "HMCL",
        "url": "https://github.com/huanghongxun/HMCL",
        "logo": "../assets/images/mc_img/1628777211-hmcl.png",
        "desc": "Hello Minecraft! Launcher 一个强大的MC启动器"
      },
      {
        "name": "PCL2 – Plain Craft Launcher 2 启动器",
        "url": "https://afdian.net/p/e5c821a4b1ab11eb879b52540025c377",
        "logo": "../assets/images/mc_img/1628089222-pcl.png",
        "desc": "下载极快的启动器"
      },
      {
        "name": "Multimc",
        "url": "https://multimc.org/",
        "logo": "../assets/images/mc_img/20220511092225_2d9ea05d.png",
        "desc": "轻松管理 Minecraft 实例"
      },
      {
        "name": "LiquidBounce",
        "url": "https://liquidbounce.net/",
        "logo": "../assets/images/mc_img/1739710397-favicon-48x48-1.png",
        "desc": "水影客户端/模组官网"
      },
      {
        "name": "LabyMod Launcher",
        "url": "https://labymod.net/zh_Hans",
        "logo": "../assets/images/mc_img/get.php?url=labymod.net",
        "desc": "全新启动器"
      },
      {
        "name": "LunarCilent",
        "url": "https://www.lunarclient.com/",
        "logo": "../assets/images/mc_img/1628749736-QQ截图20210812142841.png",
        "desc": "知名Mod客户端"
      },
      {
        "name": "BakaXL",
        "url": "https://www.bakaxl.com/",
        "logo": "../assets/images/mc_img/1627817030-loading.9f491246.png",
        "desc": "新一代丧病启动器"
      },
      {
        "name": "燕子启动器",
        "url": "https://yzgzs.top/yzqdq",
        "logo": "../assets/images/mc_img/20210803022209_d8485905.png",
        "desc": "一款专注我的世界的游戏启动器"
      },
      {
        "name": "XMCL",
        "url": "https://xmcl.app/",
        "logo": "../assets/images/mc_img/20220721173810_98ed128c.jpg",
        "desc": "一个方便你管理大量的模组、纹理包的的现代化启动器"
      },
      {
        "name": "Salwyrr Launcher",
        "url": "https://www.salwyrr.com/",
        "logo": "../assets/images/mc_img/1662794996-slw.webp",
        "desc": "超强优化客户端启动器"
      },
      {
        "name": "Prism Launcher",
        "url": "https://prismlauncher.org/",
        "logo": "../assets/images/mc_img/1705305641-logo-text.png",
        "desc": "开源 Minecraft 启动器，能够管理多个实例、帐户和mod"
      },
      {
        "name": "HML启动器",
        "url": "https://hml.xizh.cn/",
        "logo": "../assets/images/mc_img/20220615211135_1e8cc513.jpg",
        "desc": "(HML启动器)是一个版本高速下载,自带联机等多功能我的世界启动器。"
      },
      {
        "name": "FCL启动器",
        "url": "https://fcl-team.github.io/index.html",
        "logo": "../assets/images/mc_img/get.php?url=fcl-team.github.io",
        "desc": "Android Java版Minecraft启动器"
      },
      {
        "name": "Feather Client",
        "url": "https://feathermc.com/",
        "logo": "../assets/images/mc_img/get.php?url=feathermc.com",
        "desc": "拥有Forge的pvp客户端"
      },
      {
        "name": "FPSMaster",
        "url": "https://fpsmaster.top/",
        "logo": "../assets/images/mc_img/20240218152921_5b82abc4.png",
        "desc": "免费，简洁，好用的PVP客户端"
      },
      {
        "name": "FMCL启动器",
        "url": "https://fmcl.0nk.top/",
        "logo": "../assets/images/mc_img/get.php?url=fmcl.0nk.top",
        "desc": "一个现代的启动器，简单、易用、小巧"
      },
      {
        "name": "BMCL",
        "url": "https://www.mcbbs.net/thread-137254-1-1.html",
        "logo": "../assets/images/mc_img/20210804073946_8f491d91.jpg",
        "desc": "bangbang93's minecraft launcher"
      },
      {
        "name": "LauncherX",
        "url": "https://corona.studio/lx",
        "logo": "../assets/images/mc_img/20250505165313_8fd2e8ff.png",
        "desc": "功能强大、界面优美的下一代 MineCraft 启动器。"
      },
      {
        "name": "ATLauncher",
        "url": "https://atlauncher.com/",
        "logo": "../assets/images/mc_img/20240121131738_b0c76ec8.png",
        "desc": "Minecraft 的 Modpack 启动器"
      },
      {
        "name": "MCServerLauncher 2开服器",
        "url": "https://mcsl.com.cn",
        "logo": "../assets/images/mc_img/20231021181632_2c24ca55.png",
        "desc": "MCSL2开服器官网"
      },
      {
        "name": "Badlion",
        "url": "https://www.badlion.net/",
        "logo": "../assets/images/mc_img/20221206173050_6acf28d3.jpg",
        "desc": "我的世界知名Mod客户端"
      },
      {
        "name": "Nsiso启动器",
        "url": "https://www.nsiso.com/launcher/index.html",
        "logo": "../assets/images/mc_img/20220731144934_3999fe82.png",
        "desc": "一款高效的Minecraft启动器"
      },
      {
        "name": "Pojav Launcher",
        "url": "https://github.com/PojavLauncherTeam/PojavLauncher",
        "logo": "../assets/images/mc_img/20230712170004_be6539c3.png",
        "desc": "海外知名手机Java启动器"
      },
      {
        "name": "Bedrock Launcher Lite",
        "url": "https://bedrocklauncher.github.io/",
        "logo": "../assets/images/mc_img/1689172997-83617280-1.png",
        "desc": "一个支持全基岩版的我的世界启动器"
      },
      {
        "name": "FSM3",
        "url": "https://fsmlauncher.github.io/",
        "logo": "../assets/images/mc_img/1658143991-微信截图_20220718193257.png",
        "desc": "C#编写的多功能启动器"
      }
    ]
  },
  {
    "category": "服务端",
    "icon": "linecons-tag",
    "sites": [
      {
        "name": "Bedrock Dedicated Server",
        "url": "https://www.minecraft.net/download/server/bedrock",
        "logo": "../assets/images/mc_img/1628404763-bds.jpg",
        "desc": "官方全特性基岩服务端"
      },
      {
        "name": "Spigot",
        "url": "https://www.spigotmc.org/",
        "logo": "../assets/images/mc_img/1627472183-spigot.png",
        "desc": "Bukkit的分支服务端"
      },
      {
        "name": "PaperMC",
        "url": "https://papermc.io/",
        "logo": "../assets/images/mc_img/1628138807-papermc.png",
        "desc": "下一代JE服务端"
      },
      {
        "name": "MohistMC",
        "url": "https://mohistmc.com/",
        "logo": "../assets/images/mc_img/1666623750-54493246.jpg",
        "desc": "墨端服务器核心，支持forge和paper"
      },
      {
        "name": "LiteLoader",
        "url": "http://www.liteloader.com/",
        "logo": "../assets/images/mc_img/1629994352-Liteloader-logo.jpg",
        "desc": "MC Java版轻量 Mod API"
      },
      {
        "name": "Fabric",
        "url": "https://fabricmc.net/",
        "logo": "../assets/images/mc_img/20210802205458_2e2486f5.png",
        "desc": "轻量的mod服务端"
      },
      {
        "name": "Forge社区",
        "url": "https://forums.minecraftforge.net/",
        "logo": "../assets/images/mc_img/1627453025-forge.png",
        "desc": "Minecraft Forge 社区"
      },
      {
        "name": "Bukkit",
        "url": "https://bukkit.org/",
        "logo": "../assets/images/mc_img/1627462575-OIP-C.jpg",
        "desc": "创建服务端插件的API"
      },
      {
        "name": "SpongePowered",
        "url": "https://www.spongepowered.org/",
        "logo": "../assets/images/mc_img/20220528224209_8b84dcce.png",
        "desc": "终极优化的Java版服务端"
      },
      {
        "name": "QuiltMC",
        "url": "https://quiltmc.org/",
        "logo": "../assets/images/mc_img/20221104080919_32c1d091.png",
        "desc": "Fabric的分支，兼容Fabric模组的新兴加载器"
      },
      {
        "name": "Pufferfish",
        "url": "https://pufferfish.host/downloads",
        "logo": "../assets/images/mc_img/20230119221500_f43da391.png",
        "desc": "我的世界高版本（1.19.3这种）服务端核心，paper、purpur分支"
      },
      {
        "name": "Purpur",
        "url": "https://purpurmc.org/",
        "logo": "../assets/images/mc_img/1669698648-purpur.png",
        "desc": "paper分支，新奇的服务端"
      },
      {
        "name": "PowerNukkitX",
        "url": "https://www.powernukkitx.cn",
        "logo": "../assets/images/mc_img/get.php?url=www.powernukkitx.cn",
        "desc": "高性能、富特性、全开源的NK分支服务端"
      },
      {
        "name": "PowerNukkit",
        "url": "https://powernukkit.org/",
        "logo": "../assets/images/mc_img/20211021163107_7835128f.png",
        "desc": "Nukkit分支服务端"
      },
      {
        "name": "PMMP",
        "url": "https://pmmp.io/",
        "logo": "../assets/images/mc_img/1627472398-pocketmine.jpg",
        "desc": "经典的基岩版第三方服务端"
      },
      {
        "name": "NeoForged",
        "url": "https://neoforged.net/",
        "logo": "../assets/images/mc_img/1691566219-微信截图_20230809153010.png",
        "desc": "Forge的新兴分支"
      },
      {
        "name": "Nukkit",
        "url": "https://cloudburstmc.org/articles/",
        "logo": "../assets/images/mc_img/1627472399-nukkit.jpg",
        "desc": "高性能基岩版服务端"
      },
      {
        "name": "Leaves",
        "url": "https://leavesmc.org/",
        "logo": "../assets/images/mc_img/20240204195834_c618b94f.jpg",
        "desc": "纯净，专为生电设计"
      },
      {
        "name": "LeviLamina",
        "url": "https://levilamina.liteldev.com/",
        "logo": "../assets/images/mc_img/1700121539-LeviLamina.jpg",
        "desc": "重量级的BDS插件加载器"
      },
      {
        "name": "Cuberite",
        "url": "https://cuberite.org/",
        "logo": "../assets/images/mc_img/1696391456-微信截图_20231004115043.jpg",
        "desc": "一款轻量级、快速且可扩展的游戏服务器"
      },
      {
        "name": "Leaf",
        "url": "https://www.leafmc.one/zh/",
        "logo": "../assets/images/mc_img/1739598708-leaf.png",
        "desc": "高性能 Minecraft 服务端核心"
      },
      {
        "name": "CatServer",
        "url": "https://catmc.org/",
        "logo": "../assets/images/mc_img/1712499084-catserver.jpg",
        "desc": "一个高性能Bukkit和Forge混合的minecraft服务端"
      }
    ]
  },
  {
    "category": "资源",
    "icon": "linecons-tag",
    "sites": [
      {
        "name": "Github-Minecraft 话题",
        "url": "https://github.com/topics/minecraft",
        "logo": "../assets/images/mc_img/20210826132704_670036e1.png",
        "desc": "Github的Minecraft标签"
      },
      {
        "name": "Minecraft中文下载站",
        "url": "http://www.minecraftxz.com/",
        "logo": "../assets/images/mc_img/1627458969-mcxz.png",
        "desc": "我的世界中文资源下载站"
      },
      {
        "name": "我的世界中文站",
        "url": "https://www.minecraftzw.com/",
        "logo": "../assets/images/mc_img/1628251930-mczw.png",
        "desc": "又一个MC中文资源站"
      },
      {
        "name": "ResourcePack",
        "url": "https://resourcepack.net/",
        "logo": "../assets/images/mc_img/1628142138-resourcepack.png",
        "desc": "丰富的资源包列表"
      },
      {
        "name": "Planet Minecraft",
        "url": "https://www.planetminecraft.com/",
        "logo": "../assets/images/mc_img/1627453946-planetminecraft_logo.png",
        "desc": "MC游戏资源分享站"
      },
      {
        "name": "MC模组中文网",
        "url": "https://pixelecraft.com",
        "logo": "../assets/images/mc_img/20230216185845_eb3fa2a0.PNG",
        "desc": "因为热爱所以坚持"
      },
      {
        "name": "Minecraft Schematics",
        "url": "https://www.minecraft-schematics.com/",
        "logo": "../assets/images/mc_img/blueprint_100.png",
        "desc": "Minecraft 创世神蓝图文件大全"
      },
      {
        "name": "MinecraftYard",
        "url": "https://www.minecraftyard.com/",
        "logo": "../assets/images/mc_img/1644292585-minecraftyard-logo-1.png",
        "desc": "Minecraft mod和资源包下载站"
      },
      {
        "name": "MCPEDL",
        "url": "https://mcpedl.com/",
        "logo": "../assets/images/mc_img/1631280948-mcpedl2.png",
        "desc": "基岩版游戏资源站"
      },
      {
        "name": "CurseForge",
        "url": "https://www.curseforge.com/minecraft/",
        "logo": "../assets/images/mc_img/1627452766-cruseforge.png",
        "desc": "Minecraft模组分享站"
      },
      {
        "name": "像素科技MC基岩版本库",
        "url": "https://mcbbk.blmcpia.com",
        "logo": "../assets/images/mc_img/20220125144622_eee51cc7.png",
        "desc": "收录了大量的MC版本提供给广大玩家使用游玩，含有联机版本"
      },
      {
        "name": "Texture Packs",
        "url": "https://texture-packs.com/",
        "logo": "../assets/images/mc_img/get.php?url=texture-packs.com",
        "desc": "丰富的纹理包资源分享站"
      },
      {
        "name": "TITAIKE",
        "url": "https://www.titaike.cn",
        "logo": "../assets/images/mc_img/20210803111609_a94e3e2c.png",
        "desc": "整合及翻译国内外基岩版地图"
      },
      {
        "name": "StarMap",
        "url": "https://www.mcmaps.cn/",
        "logo": "../assets/images/mc_img/20210801195612_e40b320e.png",
        "desc": "全新的地图站点"
      },
      {
        "name": "Redstone Games",
        "url": "https://www.redstonegames.com.br/",
        "logo": "../assets/images/mc_img/get.php?url=www.redstonegames.com.br",
        "desc": "Minecraft Java、基岩版。资源包、模组、着色器、数据包"
      },
      {
        "name": "Resource-Packs",
        "url": "https://www.resource-packs.com/",
        "logo": "../assets/images/mc_img/1666623520-get.png",
        "desc": "非常强大的材质资源网站！"
      },
      {
        "name": "MCModels",
        "url": "https://mcmodels.net/",
        "logo": "../assets/images/mc_img/20240214232056_3715a49f.png",
        "desc": "高质量模型资源网站"
      },
      {
        "name": "MC红石档案馆",
        "url": "https://rtsp.red/",
        "logo": "../assets/images/mc_img/20240107190709_484f2989.jpg",
        "desc": "MC红石科技分享平台"
      },
      {
        "name": "Modpack Index",
        "url": "https://www.modpackindex.com/",
        "logo": "../assets/images/mc_img/get.php?url=www.modpackindex.com",
        "desc": "一个简约强大的模组包索引网站"
      },
      {
        "name": "Minecraft Polska",
        "url": "https://minecraft.org.pl/",
        "logo": "../assets/images/mc_img/20230228014621_f660e07e.png",
        "desc": "具有 Minecraft 资源和新闻的国外站点"
      },
      {
        "name": "Minecraft Shaders",
        "url": "https://minecraftshader.com/",
        "logo": "../assets/images/mc_img/1725381717-微信截图_20240904004145.jpg",
        "desc": "是一个海外着色器评论、教程、更新和下载站点"
      },
      {
        "name": "Minecraft for Windows 版本库",
        "url": "https://www.mcappx.com",
        "logo": "../assets/images/mc_img/20221023150221_4aea9bfc.png",
        "desc": "Minecraft Windows 基岩版全版本下载站"
      },
      {
        "name": "MCPE-Planet",
        "url": "https://mcpe-planet.com/",
        "logo": "../assets/images/mc_img/1664042237-mcpe-planet-e1664042258876.png",
        "desc": "一个海外MCPE资源站"
      },
      {
        "name": "Modrinth",
        "url": "https://modrinth.com",
        "logo": "../assets/images/mc_img/20220630213427_5a148ca3.png",
        "desc": "Java版模组分享站"
      },
      {
        "name": "MCserver-资源网",
        "url": "https://www.mcio.cn/",
        "logo": "../assets/images/mc_img/20211207221946_17984939.jpg",
        "desc": "服务器地图,我的世界,我的世界bbs,我的世界主城,我的世界开服教程"
      },
      {
        "name": "MinecraftCapes",
        "url": "https://minecraftcapes.net/",
        "logo": "../assets/images/mc_img/1628743610-james090500.png",
        "desc": "免费披风斗篷站"
      },
      {
        "name": "Minecraft Hub",
        "url": "https://minecrafthub.com/",
        "logo": "../assets/images/mc_img/1628315271-mchub.png",
        "desc": "MC爱好者资源社区"
      },
      {
        "name": "MCPE-Monster",
        "url": "http://mcpe-monster.com/",
        "logo": "../assets/images/mc_img/1628141354-mcpe-monster.png",
        "desc": "强大的MCPE资源站"
      },
      {
        "name": "投影工坊",
        "url": "https://haomc.com",
        "logo": "../assets/images/mc_img/get.php?url=haomc.com",
        "desc": "里面有很多生电使用的机器"
      },
      {
        "name": "For-Minecraft",
        "url": "https://for-minecraft.com/",
        "logo": "../assets/images/mc_img/1628313022-for-mc.png",
        "desc": "一个海外MC资源站"
      },
      {
        "name": "CHM_core",
        "url": "https://core.mcchm.cn",
        "logo": "../assets/images/mc_img/1644292443-logo.png",
        "desc": "这是一个完全免费的服务器核心镜像库,里面有所有的我的世界主流核心!"
      },
      {
        "name": "Block Models",
        "url": "https://blockmodels.com/",
        "logo": "../assets/images/mc_img/get.php?url=blockmodels.com",
        "desc": "一个可以上传，分享和推广你的Minecraft方块模型的网站。"
      },
      {
        "name": "BolckMinecraft",
        "url": "https://www.blockminecraft.com/",
        "logo": "../assets/images/mc_img/1635056296-blockmc.png",
        "desc": "MCJE资源分享网站"
      },
      {
        "name": "MC藏宝阁",
        "url": "https://mcbank.charhoo.cn",
        "logo": "../assets/images/mc_img/get.php?url=mcbank.charhoo.cn",
        "desc": "b站up开发的资源网站"
      },
      {
        "name": "MGC中文图形站",
        "url": "https://minegraph.cn/",
        "logo": "../assets/images/mc_img/20240407210128_01b3c45b.png",
        "desc": "共同探索MC图形学的无限可能。"
      },
      {
        "name": "AXDA 插件平台",
        "url": "https://axda.net/",
        "logo": "../assets/images/mc_img/20250411235856_786ec8b6.png",
        "desc": "Nukkit插件平台"
      },
      {
        "name": "公共蓝图库",
        "url": "https://www.mcschematic.top/",
        "logo": "../assets/images/mc_img/20250409113054_b1b8232a.png",
        "desc": "公共蓝图存储站"
      },
      {
        "name": "PVPRP",
        "url": "https://pvprp.com/",
        "logo": "../assets/images/mc_img/1740932819-logo.png",
        "desc": "一个简约大方的PVP材质资源网"
      },
      {
        "name": "红石中继站",
        "url": "https://www.mczwlt.net",
        "logo": "../assets/images/mc_img/1739292995-b993fa31d8c55fbbdcad193e920608bdada9d8ba.jpg",
        "desc": "一个简洁轻快的Minecraft资源社区"
      },
      {
        "name": "MCNeo",
        "url": "https://www.neoshader.com",
        "logo": "../assets/images/mc_img/20250105024548_216f7682.jpg",
        "desc": "国内首个正版授权光影资源站"
      },
      {
        "name": "我的世界下载站",
        "url": "https://www.9minecraft.cn/",
        "logo": "../assets/images/mc_img/20241230160934_e12e0545.jpg",
        "desc": "我的世界下载站"
      },
      {
        "name": "Luna HD",
        "url": "https://www.lunahd.com",
        "logo": "../assets/images/mc_img/1738419766-lunaico.avif",
        "desc": "Luna HD 资源包官网"
      },
      {
        "name": "像素茶艺地图站",
        "url": "https://pixelmap.minegraph.cn",
        "logo": "../assets/images/mc_img/20240723110209_b0932058.png",
        "desc": "简洁易用的MC地图资源站"
      },
      {
        "name": "AtomResource",
        "url": "https://res.nullatom.com/",
        "logo": "../assets/images/mc_img/20220630172540_0463e51d.png",
        "desc": "一个轻量资源下载站"
      },
      {
        "name": "9Minecraft",
        "url": "https://www.9minecraft.net/",
        "logo": "../assets/images/mc_img/20221007124057_aeed7f07.png",
        "desc": "国外的Minecraft免费资源网站"
      },
      {
        "name": "Resourcepacks24",
        "url": "https://resourcepacks24.de/",
        "logo": "../assets/images/mc_img/get.php?url=resourcepacks24.de",
        "desc": "Minecraft材质包"
      },
      {
        "name": "Shader Packs",
        "url": "https://shadersmods.com/category/shaderpacks/",
        "logo": "../assets/images/mc_img/20220806102656_784294d5.png",
        "desc": "一个光影网站"
      },
      {
        "name": "Minecraft Maps",
        "url": "https://www.minecraftmaps.com/",
        "logo": "../assets/images/mc_img/1667996405-s5_logo_1-e1667996425703.png",
        "desc": "地图资源网站"
      },
      {
        "name": "Geyser 间歇泉",
        "url": "https://geysermc.org/",
        "logo": "../assets/images/mc_img/1737295847-geyser.png",
        "desc": "允许 Minecraft 基岩版中的客户端加入您的 Minecraft Java 服务器"
      },
      {
        "name": "MCVersions",
        "url": "https://mcversions.net/",
        "logo": "../assets/images/mc_img/get.php?url=mcversions.net",
        "desc": "适用于客户端/服务端的Java版MC核心"
      },
      {
        "name": "Minecraft 版本库",
        "url": "https://mcarc.gitee.io",
        "logo": "../assets/images/mc_img/20220312012725_f939ac69.png",
        "desc": "Minecraft 基岩版全版本下载站"
      }
    ]
  },
  {
    "category": "工作室",
    "icon": "linecons-tag",
    "sites": [
      {
        "name": "国家建筑师 Cthuwork",
        "url": "https://weibo.com/Cthuwork",
        "logo": "../assets/images/mc_img/1627804648-Cthuwork.jpg",
        "desc": "知名MC建筑团队服务器"
      },
      {
        "name": "太学 Taixue",
        "url": "https://space.bilibili.com/476720255",
        "logo": "../assets/images/mc_img/1662721861-4e4ab4158be1c86b48954821404754fe0502ea3e.jpg@240w_240h_1c_1s.webp",
        "desc": "古建筑知识科普组织太学，探寻文化传承的更多可能"
      },
      {
        "name": "Feed The Beast",
        "url": "https://www.feed-the-beast.com/",
        "logo": "../assets/images/mc_img/1707194698-logo.2265aa43.png",
        "desc": "高质量的MC整合包团队"
      },
      {
        "name": "星屹（CTN）工作室",
        "url": "https://www.ctnstudios.top",
        "logo": "../assets/images/mc_img/20230317205330_28f0f4ec.jpg",
        "desc": "Minecraft资源工作室"
      },
      {
        "name": "新式创筑",
        "url": "https://innovacreation.art/",
        "logo": "../assets/images/mc_img/1662721334-iclogo-1.png",
        "desc": "以数字孪生探寻建筑之美，让建筑焕发新生！"
      },
      {
        "name": "The RedPixel Team",
        "url": "https://theredpixelteam.com/",
        "logo": "../assets/images/mc_img/1663295086-photo.jpg",
        "desc": "一个红石开发工作室"
      },
      {
        "name": "史诗工坊 EpicWork",
        "url": "https://bbs.mycraft.cc/",
        "logo": "../assets/images/mc_img/get.php?url=bbs.mycraft.cc",
        "desc": "我的世界知名建筑团队"
      },
      {
        "name": "Mineprogramming",
        "url": "https://mineprogramming.org/about/",
        "logo": "../assets/images/mc_img/1704114764-mp-logo.png",
        "desc": "每个想要对 Minecraft 进行编程的人的独特信息来源！"
      },
      {
        "name": "Minecraft University Alliance",
        "url": "https://www.mualliance.cn/",
        "logo": "../assets/images/mc_img/1700106534-mua_tm.png",
        "desc": "MUA 中国Minecraft高校联盟"
      },
      {
        "name": "McShare",
        "url": "https://www.mcshare.net/",
        "logo": "../assets/images/mc_img/1627462983-mcshare.png",
        "desc": "McShare团队博客"
      },
      {
        "name": "蓝天工作室",
        "url": "https://bsc.meteormc.cn",
        "logo": "../assets/images/mc_img/20231104150516_8eabaa09.png",
        "desc": "给作品以生命，给岁月以文明"
      },
      {
        "name": "联壁计划",
        "url": "https://barrierslink.cn",
        "logo": "../assets/images/mc_img/20240911222307_43210cfb.png",
        "desc": "尽管我们无法打破壁垒，但我们可以作为连接的桥梁"
      },
      {
        "name": "林氏创艺",
        "url": "https://www.linscraft.design/",
        "logo": "../assets/images/mc_img/1662719661-284288_1d3c7bb49370404395305b0c1d28d230.webp",
        "desc": "以梦幻作品闻名的建筑团队"
      },
      {
        "name": "Hielke Maps",
        "url": "https://hielkemaps.com/",
        "logo": "../assets/images/mc_img/1737292821-hielke.png",
        "desc": "震惊！国外一男子竟建出超好玩的跑酷地图？"
      },
      {
        "name": "China Foxgirl Protection",
        "url": "https://cfpa.site",
        "logo": "../assets/images/mc_img/20230825165925_6a8763da.png",
        "desc": "CFPA 知名模组/整合包汉化组"
      },
      {
        "name": "狸莓 CivetBerry",
        "url": "https://civetberry.cc/",
        "logo": "../assets/images/mc_img/20250416005148_2372c756.png",
        "desc": "Minecraft 服务器内容开发工作组"
      },
      {
        "name": "GNwork",
        "url": "https://space.bilibili.com/403097853/?spm_id_from=333.999.0.0",
        "logo": "../assets/images/mc_img/20241126200332_075ccd3d.png",
        "desc": "体素创意团队 整活我们不一定是最专业的，但绝对是认真的！"
      },
      {
        "name": "心火计划",
        "url": "https://hfpro.top",
        "logo": "../assets/images/mc_img/1712498837-logo.png",
        "desc": "一个关于 Minecraft 的计划"
      },
      {
        "name": "阿尔萨斯工业",
        "url": "https://www.alsace.team",
        "logo": "../assets/images/mc_img/20240219134848_cb57fd6c.png",
        "desc": "我们的团队成员不仅仅是建筑师，更是创造者和梦想家"
      },
      {
        "name": "BaLaLaBa工作室",
        "url": "https://balalaba.net/",
        "logo": "../assets/images/mc_img/20221007155546_a154087e.png",
        "desc": "Minecraft我的世界组件开发团队"
      },
      {
        "name": "TIS团队",
        "url": "https://space.bilibili.com/388405501?spm_id_from=333.1007.0.0",
        "logo": "../assets/images/mc_img/20230410210212_4f04b0c5.png",
        "desc": "一个佛系但热爱的MC资源团队"
      },
      {
        "name": "上古之石",
        "url": "https://space.bilibili.com/9088251",
        "logo": "../assets/images/mc_img/1662720419-584_2021111565734941-e1662720465481.jpg",
        "desc": "专注于创作3D动态材质、建筑、皮肤和玩法的工作室"
      }
    ]
  },
  {
    "category": "服务器",
    "icon": "linecons-tag",
    "sites": [
      {
        "name": "我的世界找服网",
        "url": "https://www.fansmc.com/",
        "logo": "../assets/images/mc_img/1669432289-logo-1.png",
        "desc": "一个海量服务器网站"
      },
      {
        "name": "花雨庭",
        "url": "http://www.mchyt.com/",
        "logo": "../assets/images/mc_img/1627803940-huayuting.png",
        "desc": "我的世界知名小游戏服"
      },
      {
        "name": "Hypixel",
        "url": "https://hypixel.net/",
        "logo": "../assets/images/mc_img/1627472997-hypixel.png",
        "desc": "知名的Java版小游戏服"
      },
      {
        "name": "CubeCraft",
        "url": "https://www.cubecraft.net/",
        "logo": "../assets/images/mc_img/1627484378-cubecraft.png",
        "desc": "优秀的MC服务器"
      },
      {
        "name": "The Hive",
        "url": "https://hivemc.com/",
        "logo": "../assets/images/mc_img/1627880587-hivemc.png",
        "desc": "知名基岩小游戏服"
      },
      {
        "name": "SUNS服务器",
        "url": "https://www.sunsserver.top",
        "logo": "../assets/images/mc_img/20220504011427_9be01cef.jpg",
        "desc": "SUNS服务器官网"
      },
      {
        "name": "SMGoro Server",
        "url": "http://imc.re/",
        "logo": "../assets/images/mc_img/20210804003032_e9924466.jpg",
        "desc": "领先的MC互通服"
      },
      {
        "name": "SoTap",
        "url": "https://sotap.org/",
        "logo": "../assets/images/mc_img/1627871400-sotap.png",
        "desc": "优秀的正版服务器"
      },
      {
        "name": "oakflat platform服务器",
        "url": "https://oakflat.cn/",
        "logo": "../assets/images/mc_img/20220528100739_33c1092f.jpeg",
        "desc": "我的世界Minecraft服务器"
      },
      {
        "name": "Losenone",
        "url": "https://www.losenone.cn/",
        "logo": "../assets/images/mc_img/20210804081946_e4dc29d4.jpg",
        "desc": "洛书南玩家社区"
      },
      {
        "name": "LifeBoat",
        "url": "https://lbsg.net/",
        "logo": "../assets/images/mc_img/1627880519-lifeboat.jpg",
        "desc": "知名基岩游戏服"
      },
      {
        "name": "KFS服务器",
        "url": "https://hello.mckfs.com",
        "logo": "../assets/images/mc_img/20220117104925_73f5971b.png",
        "desc": "一个风气良好的服务器～"
      },
      {
        "name": "IMC.RE | OnlineMC",
        "url": "http://ws.imc.re/",
        "logo": "../assets/images/mc_img/get.php?url=ws.imc.re",
        "desc": "网页版MC"
      },
      {
        "name": "幻影之城官网",
        "url": "http://et.xczcloud.cn",
        "logo": "../assets/images/mc_img/20220203170844_490aa8a6.png",
        "desc": "幻影之城致力于做最好的基岩版服务器"
      },
      {
        "name": "风世界",
        "url": "https://fengidc.cn/FENGMC/",
        "logo": "../assets/images/mc_img/1693059563-DD289724-8F91-D993-347F-EE41D8BBA62E.jpg",
        "desc": "国际正版公益群组服"
      },
      {
        "name": "FillAmeaPixel",
        "url": "https://www.fapixel.com",
        "logo": "../assets/images/mc_img/20210802164543_0b1a5094.png",
        "desc": "基岩高仿Hypixel小游戏服务器"
      },
      {
        "name": "Easyarea",
        "url": "https://www.easyareamc.net/",
        "logo": "../assets/images/mc_img/get.php?url=www.easyareamc.net",
        "desc": "Easyarea基岩版服务器"
      },
      {
        "name": "北冥鱼MCBEPU",
        "url": "https://www.itprc.net/",
        "logo": "../assets/images/mc_img/20210821215448_e72595fa.png",
        "desc": "公益性基岩版群组服务器"
      }
    ]
  }
]