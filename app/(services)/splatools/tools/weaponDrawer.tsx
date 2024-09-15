"use client"

import React, { useState } from 'react';

interface Card {
  id: number;
  name: string;
  image: string;
}

const cards: Card[] = [
  { id: 1, name: '广域标记枪', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/d/da/S3_Weapon_Main_Sploosh-o-matic_2D_Current.png' },
  { id: 2, name: '广域标记枪 新型', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/3/37/S3_Weapon_Main_Neo_Sploosh-o-matic_2D_Current.png' },
  { id: 3, name: '新叶射击枪', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/8/81/S3_Weapon_Main_Splattershot_Jr._2D_Current.png' },
  { id: 4, name: '枫叶射击枪', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/f/f2/S3_Weapon_Main_Custom_Splattershot_Jr._2D_Current.png' },
  { id: 5, name: '窄域标记枪', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/4/4c/S3_Weapon_Main_Splash-o-matic_2D_Current.png' },
  { id: 6, name: '窄域标记枪 新型', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/e/e8/S3_Weapon_Main_Neo_Splash-o-matic_2D_Current.png' },
  { id: 7, name: '专业模型枪MG', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/2/22/S3_Weapon_Main_Aerospray_MG_2D_Current.png' },
  { id: 8, name: '专业模型枪RG', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/a/aa/S3_Weapon_Main_Aerospray_RG_2D_Current.png' },
  { id: 9, name: '斯普拉射击枪', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/7/70/S3_Weapon_Main_Splattershot_2D_Current.png' },
  { id: 10, name: '斯普拉射击枪 联名', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/7/79/S3_Weapon_Main_Tentatek_Splattershot_2D_Current.png' },
  { id: 11, name: '.52加仑', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/4/4d/S3_Weapon_Main_.52_Gal_2D_Current.png' },
  { id: 12, name: '.52加仑 装饰', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/3/3b/S3_Weapon_Main_.52_Gal_Deco_2D_Current.png' },
  { id: 13, name: 'N-ZAP85', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/1/1d/S3_Weapon_Main_N-ZAP_%2785_2D_Current.png' },
  { id: 14, name: 'N-ZAP89', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/5/59/S3_Weapon_Main_N-ZAP_%2789_2D_Current.png' },
  { id: 15, name: '顶尖射击枪', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/1/1c/S3_Weapon_Main_Splattershot_Pro_2D_Current.png' },
  { id: 16, name: '顶尖射击枪 联名', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/a/a9/S3_Weapon_Main_Forge_Splattershot_Pro_2D_Current.png' },
  { id: 17, name: '.96加仑', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/6/66/S3_Weapon_Main_.96_Gal_2D_Current.png' },
  { id: 18, name: '.96加仑 装饰', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/1/1f/S3_Weapon_Main_.96_Gal_Deco_2D_Current.png' },
  { id: 19, name: '喷射清洁枪', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/9/90/S3_Weapon_Main_Jet_Squelcher_2D_Current.png' },
  { id: 20, name: '喷射清洁枪 改装', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/b/b7/S3_Weapon_Main_Custom_Jet_Squelcher_2D_Current.png' },
  { id: 21, name: '太空射击枪', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/1/13/S3_Weapon_Main_Splattershot_Nova_2D_Current.png' },
  { id: 22, name: '太空射击枪 联名', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/0/08/S3_Weapon_Main_Annaki_Splattershot_Nova_2D_Current.png' },
  { id: 23, name: 'L3卷管枪', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/1/10/S3_Weapon_Main_L-3_Nozzlenose_2D_Current.png' },
  { id: 24, name: 'L3卷管枪D', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/2/25/S3_Weapon_Main_L-3_Nozzlenose_D_2D_Current.png' },
  { id: 25, name: 'H3卷管枪', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/9/91/S3_Weapon_Main_H-3_Nozzlenose_2D_Current.png' },
  { id: 26, name: 'H3卷管枪D', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/7/7b/S3_Weapon_Main_H-3_Nozzlenose_D_2D_Current.png' },
  { id: 27, name: '开瓶喷泉枪', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/e/e5/S3_Weapon_Main_Squeezer_2D_Current.png' },
  { id: 28, name: '开瓶喷泉枪 金属箔', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/b/b1/S3_Weapon_Main_Foil_Squeezer_2D_Current.png' },
  { id: 29, name: '碳纤维滚筒', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/6/65/S3_Weapon_Main_Carbon_Roller_2D_Current.png' },
  { id: 30, name: '碳纤维滚筒 装饰', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/7/7d/S3_Weapon_Main_Carbon_Roller_Deco_2D_Current.png' },
  { id: 31, name: '斯普拉滚筒', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/7/70/S3_Weapon_Main_Splat_Roller_2D_Current.png' },
  { id: 32, name: '斯普拉滚筒 联名', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/f/f4/S3_Weapon_Main_Krak-On_Splat_Roller_2D_Current.png' },
  { id: 33, name: '电动马达滚筒', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/9/98/S3_Weapon_Main_Dynamo_Roller_2D_Current.png' },
  { id: 34, name: '电动马达滚筒 高磁波', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/7/75/S3_Weapon_Main_Gold_Dynamo_Roller_2D_Current.png' },
  { id: 35, name: '可变式滚筒', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/b/bc/S3_Weapon_Main_Flingza_Roller_2D_Current.png' },
  { id: 36, name: '可变式滚筒 金属箔', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/e/e8/S3_Weapon_Main_Foil_Flingza_Roller_2D_Current.png' },
  { id: 37, name: '宽滚筒', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/4/49/S3_Weapon_Main_Big_Swig_Roller_2D_Current.png' },
  { id: 38, name: '宽滚筒 联名', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/d/dc/S3_Weapon_Main_Big_Swig_Roller_Express_2D_Current.png' },
  { id: 39, name: '鱿快洁α', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/d/d3/S3_Weapon_Main_Classic_Squiffer_2D_Current.png' },
  { id: 40, name: '鱿快洁β', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/e/ed/S3_Weapon_Main_New_Squiffer_2D_Current.png' },
  { id: 41, name: '斯普拉蓄力狙击枪', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/d/d5/S3_Weapon_Main_Splat_Charger_2D_Current.png' },
  { id: 42, name: '斯普拉蓄力狙击枪 联名', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/4/43/S3_Weapon_Main_Z%2BF_Splat_Charger_2D_Current.png' },
  { id: 43, name: '斯普拉准星枪', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/9/93/S3_Weapon_Main_Splatterscope_2D_Current.png' },
  { id: 44, name: '斯普拉准星枪 联名', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/a/ad/S3_Weapon_Main_Z%2BF_Splatterscope_2D_Current.png' },
  { id: 45, name: '公升4K', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/5/51/S3_Weapon_Main_E-liter_4K_2D_Current.png' },
  { id: 46, name: '公升4K 改装', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/c/c7/S3_Weapon_Main_Custom_E-liter_4K_2D_Current.png' },
  { id: 47, name: '4K准星枪', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/8/88/S3_Weapon_Main_E-liter_4K_Scope_2D_Current.png' },
  { id: 48, name: '4K准星枪 改装', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/8/85/S3_Weapon_Main_Custom_E-liter_4K_Scope_2D_Current.png' },
  { id: 49, name: '14式竹筒枪·甲', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/8/83/S3_Weapon_Main_Bamboozler_14_Mk_I_2D_Current.png' },
  { id: 50, name: '14式竹筒枪·乙', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/5/51/S3_Weapon_Main_Bamboozler_14_Mk_II_2D_Current.png' },
  { id: 51, name: '高压油管枪', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/5/5a/S3_Weapon_Main_Goo_Tuber_2D_Current.png' },
  { id: 52, name: '高压油管枪 改装', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/8/81/S3_Weapon_Main_Custom_Goo_Tuber_2D_Current.png' },
  { id: 53, name: 'R-PEN/5H', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/8/8a/S3_Weapon_Main_Snipewriter_5H_2D_Current.png' },
  { id: 54, name: 'R-PEN/5B', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/7/7c/S3_Weapon_Main_Snipewriter_5B_2D_Current.png' },
  { id: 55, name: '飞溅泼桶', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/9/9a/S3_Weapon_Main_Slosher_2D_Current.png' },
  { id: 56, name: '飞溅泼桶 装饰', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/b/b0/S3_Weapon_Main_Slosher_Deco_2D_Current.png' },
  { id: 57, name: '洗笔桶', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/4/49/S3_Weapon_Main_Tri-Slosher_2D_Current.png' },
  { id: 58, name: '洗笔桶·新艺术', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/1/15/S3_Weapon_Main_Tri-Slosher_Nouveau_2D_Current.png' },
  { id: 59, name: '回旋泼桶', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/0/0f/S3_Weapon_Main_Sloshing_Machine_2D_Current.png' },
  { id: 60, name: '回旋泼桶 新型', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/c/c4/S3_Weapon_Main_Sloshing_Machine_Neo_2D_Current.png' },
  { id: 61, name: '满溢泡澡泼桶', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/3/3e/S3_Weapon_Main_Bloblobber_2D_Current.png' },
  { id: 62, name: '满溢泡澡泼桶 装饰', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/e/e0/S3_Weapon_Main_Bloblobber_Deco_2D_Current.png' },
  { id: 63, name: '爆炸泼桶', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/0/0d/S3_Weapon_Main_Explosher_2D_Current.png' },
  { id: 64, name: '爆炸潑桶 改裝', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/d/da/S3_Weapon_Main_Custom_Explosher_2D_Current.png' },
  { id: 65, name: '墨瀑淋', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/c/c4/S3_Weapon_Main_Dread_Wringer_2D_Current.png' },
  { id: 66, name: '墨瀑淋D', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/9/94/S3_Weapon_Main_Dread_Wringer_D_2D_Current.png' },
  { id: 67, name: '斯普拉旋转枪', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/9/94/S3_Weapon_Main_Mini_Splatling_2D_Current.png' },
  { id: 68, name: '斯普拉旋转枪 联名', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/9/96/S3_Weapon_Main_Zink_Mini_Splatling_2D_Current.png' },
  { id: 69, name: '桶装旋转枪', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/e/e3/S3_Weapon_Main_Heavy_Splatling_2D_Current.png' },
  { id: 70, name: '桶装旋转枪 装饰', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/4/49/S3_Weapon_Main_Heavy_Splatling_Deco_2D_Current.png' },
  { id: 71, name: '消防栓旋转枪', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/3/3d/S3_Weapon_Main_Hydra_Splatling_2D_Current.png' },
  { id: 72, name: '消防栓旋转枪 改装', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/9/9f/S3_Weapon_Main_Custom_Hydra_Splatling_2D_Current.png' },
  { id: 73, name: '圆珠笔', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/4/44/S3_Weapon_Main_Ballpoint_Splatling_2D_Current.png' },
  { id: 74, name: '圆珠笔·新艺术', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/c/ce/S3_Weapon_Main_Ballpoint_Splatling_Nouveau_2D_Current.png' },
  { id: 75, name: '鹦鹉螺号47', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/c/cf/S3_Weapon_Main_Nautilus_47_2D_Current.png' },
  { id: 76, name: '鹦鹉螺号79', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/3/33/S3_Weapon_Main_Nautilus_79_2D_Current.png' },
  { id: 77, name: '审查者', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/2/24/S3_Weapon_Main_Heavy_Edit_Splatling_2D_Current.png' },
  { id: 78, name: '审查者·新艺术', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/3/3b/S3_Weapon_Main_Heavy_Edit_Splatling_Nouveau_2D_Current.png' },
  { id: 79, name: '溅镀枪', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/c/c5/S3_Weapon_Main_Dapple_Dualies_2D_Current.png' },
  { id: 80, name: '溅镀枪·新艺术', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/c/c2/S3_Weapon_Main_Dapple_Dualies_Nouveau_2D_Current.png' },
  { id: 81, name: '斯普拉机动枪', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/5/5c/S3_Weapon_Main_Splat_Dualies_2D_Current.png' },
  { id: 82, name: '斯普拉机动枪 联名', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/f/f6/S3_Weapon_Main_Enperry_Splat_Dualies_2D_Current.png' },
  { id: 83, name: '开尔文525', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/0/05/S3_Weapon_Main_Glooga_Dualies_2D_Current.png' },
  { id: 84, name: '开尔文525 装饰', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/d/dd/S3_Weapon_Main_Glooga_Dualies_Deco_2D_Current.png' },
  { id: 85, name: '双重清洁枪', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/4/49/S3_Weapon_Main_Dualie_Squelchers_2D_Current.png' },
  { id: 86, name: '双重清洁枪 改装', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/f/f4/S3_Weapon_Main_Custom_Dualie_Squelchers_2D_Current.png' },
  { id: 87, name: '四重弹跳手枪 黑', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/5/51/S3_Weapon_Main_Dark_Tetra_Dualies_2D_Current.png' },
  { id: 88, name: '四重弹跳手枪 白', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/c/ce/S3_Weapon_Main_Light_Tetra_Dualies_2D_Current.png' },
  { id: 89, name: '灭熄FF', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/d/d9/S3_Weapon_Main_Douser_Dualies_FF_2D_Current.png' },
  { id: 80, name: '灭熄FF 改装', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/a/af/S3_Weapon_Main_Custom_Douser_Dualies_FF_2D_Current.png' },
  { id: 81, name: '遮阳防空伞', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/b/b4/S3_Weapon_Main_Splat_Brella_2D_Current.png' },
  { id: 82, name: '遮阳防空伞 姐妹', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/8/8f/S3_Weapon_Main_Sorella_Brella_2D_Current.png' },
  { id: 83, name: '露营防空伞', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/3/39/S3_Weapon_Main_Tenta_Brella_2D_Current.png' },
  { id: 84, name: '露营防空伞 姐妹', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/9/9d/S3_Weapon_Main_Tenta_Sorella_Brella_2D_Current.png' },
  { id: 85, name: '特工配件', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/e/e0/S3_Weapon_Main_Undercover_Brella_2D_Current.png' },
  { id: 86, name: '特工配件 姐妹', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/9/9d/S3_Weapon_Main_Undercover_Sorella_Brella_2D_Current.png' },
  { id: 87, name: '24式可替换伞·甲', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/a/a1/S3_Weapon_Main_Recycled_Brella_24_Mk_I_2D_Current.png' },
  { id: 88, name: '24式可替换伞·乙', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/0/0a/S3_Weapon_Main_Recycled_Brella_24_Mk_II_2D_Current.png' },
  { id: 89, name: '新星爆破枪', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/3/37/S3_Weapon_Main_Luna_Blaster_2D_Current.png' },
  { id: 90, name: '新星爆破枪 新型', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/2/2d/S3_Weapon_Main_Luna_Blaster_Neo_2D_Current.png' },
  { id: 91, name: '火热爆破枪', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/5/5e/S3_Weapon_Main_Blaster_2D_Current.png' },
  { id: 92, name: '火热爆破枪 改装', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/5/57/S3_Weapon_Main_Custom_Blaster_2D_Current.png' },
  { id: 93, name: '远距爆破枪', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/0/00/S3_Weapon_Main_Range_Blaster_2D_Current.png' },
  { id: 94, name: '远距爆破枪 改装', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/f/f9/S3_Weapon_Main_Custom_Range_Blaster_2D_Current.png' },
  { id: 95, name: '冲涂爆破枪', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/6/62/S3_Weapon_Main_Clash_Blaster_2D_Current.png' },
  { id: 96, name: '冲涂爆破枪 新型', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/7/7e/S3_Weapon_Main_Clash_Blaster_Neo_2D_Current.png' },
  { id: 97, name: '快速爆破枪', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/1/15/S3_Weapon_Main_Rapid_Blaster_2D_Current.png' },
  { id: 98, name: '快速爆破枪 装饰', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/0/02/S3_Weapon_Main_Rapid_Blaster_Deco_2D_Current.png' },
  { id: 99, name: '快速爆破枪 精英', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/6/6c/S3_Weapon_Main_Rapid_Blaster_Pro_2D_Current.png' },
  { id: 100, name: '快速爆破枪 精英装饰', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/c/ce/S3_Weapon_Main_Rapid_Blaster_Pro_Deco_2D_Current.png' },
  { id: 101, name: 'S-BLAST92', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/e/e7/S3_Weapon_Main_S-BLAST_%2792_2D_Current.png' },
  { id: 102, name: 'S-BLAST91', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/a/ad/S3_Weapon_Main_S-BLAST_%2791_2D_Current.png' },
  { id: 103, name: '巴勃罗', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/d/d4/S3_Weapon_Main_Inkbrush_2D_Current.png' },
  { id: 104, name: '巴勃罗・新艺术', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/4/4a/S3_Weapon_Main_Inkbrush_Nouveau_2D_Current.png' },
  { id: 105, name: '北斋', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/0/04/S3_Weapon_Main_Octobrush_2D_Current.png' },
  { id: 106, name: '北斋·新艺术', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/4/4a/S3_Weapon_Main_Octobrush_Nouveau_2D_Current.png' },
  { id: 107, name: '文森', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/3/30/S3_Weapon_Main_Painbrush_2D_Current.png' },
  { id: 108, name: '文森·新艺术', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/0/07/S3_Weapon_Main_Painbrush_Nouveau_2D_Current.png' },
  { id: 109, name: '三发猎鱼弓', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/0/09/S3_Weapon_Main_Tri-Stringer_2D_Current.png' },
  { id: 110, name: '三发猎鱼弓 联名', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/5/53/S3_Weapon_Main_Inkline_Tri-Stringer_2D_Current.png' },
  { id: 111, name: 'LACT-450', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/2/21/S3_Weapon_Main_REEF-LUX_450_2D_Current.png' },
  { id: 112, name: 'LACT-450 装饰', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/e/ee/S3_Weapon_Main_REEF-LUX_450_Deco_2D_Current.png' },
  { id: 113, name: '邦普V', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/e/e5/S3_Weapon_Main_Wellstring_V_2D_Current.png' },
  { id: 114, name: '邦普V 改装', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/9/96/S3_Weapon_Main_Custom_Wellstring_V_2D_Current.png' },
  { id: 115, name: '工作刮水刀', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/7/78/S3_Weapon_Main_Splatana_Stamper_2D_Current.png' },
  { id: 116, name: '工作刮水刀·新艺术', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/b/b6/S3_Weapon_Main_Splatana_Stamper_Nouveau_2D_Current.png' },
  { id: 117, name: '雨刷刮水刀', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/1/1f/S3_Weapon_Main_Splatana_Wiper_2D_Current.png' },
  { id: 118, name: '雨刷刮水刀 装饰', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/1/18/S3_Weapon_Main_Splatana_Wiper_Deco_2D_Current.png' },
  { id: 119, name: '巨齿刮水刀 薄荷', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/0/02/S3_Weapon_Main_Mint_Decavitator_2D_Current.png' },
  { id: 120, name: '巨齿刮水刀 墨黑', image: 'https://cdn.wikimg.net/en/splatoonwiki/images/2/20/S3_Weapon_Main_Charcoal_Decavitator_2D_Current.png' },
  
  
  
  
  
  
];

const DrawCard = () => {
  const [currentCard, setCurrentCard] = useState<Card | null>(null);
  const [customImage, setCustomImage] = useState('');
  const [isDrawing,setIsDrawing] = useState(false);

  const handleDrawCard = async () => {
    if(isDrawing) return;
    setIsDrawing(true);
    setCurrentCard({ id: 0, name: '抽卡中', image: '/tools/splatools/icons/undefined.png' });
    await new Promise( resolve => setTimeout(resolve, 300) );
    const randomIndex = Math.floor(Math.random() * cards.length);
    setCurrentCard(cards[randomIndex]);
    setIsDrawing(false);
  };

  const handleCustomImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCustomImage(event.target.value);
  };

  const handleUseCustomImage = () => {
    if (customImage) {
      setCurrentCard({ id: 0, name: 'Custom Card', image: '/tools/splatools/icons/undefined.png' });
    }
  };

  return (
    <div className="group/block rounded-lg border border-transparent px-5 py-4 mx-3 min-h-fit my-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 dark:bg-neutral-900/30 bg-gray-100 border-gray-300 dark:border-neutral-800">
      <h2 className="text-lg font-bold mb-4">随机武器抽卡</h2>
      {currentCard && (
        <div className="flex flex-col items-center mb-4">
          <img
            src={currentCard.image}
            alt={currentCard.name}
            className="w-full h-64 object-cover rounded-lg"
          />
          <p className="text-lg font-bold mt-2">{currentCard.name}</p>
        </div>
      )}
      <div className="flex flex-col items-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mb-2 transition-all"
          onClick={handleDrawCard}
        >
          {"开抽！"}
        </button>
      </div>
    </div>
  );
};

export default DrawCard;