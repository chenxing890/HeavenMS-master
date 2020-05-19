/*
	This file is part of the OdinMS Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc>
		       Matthias Butz <matze@odinms.de>
		       Jan Christian Meyer <vimes@odinms.de>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation version 3 as published by
    the Free Software Foundation. You may not use, modify or distribute
    this program under any other version of the GNU Affero General Public
    License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
/*
-- Odin JavaScript --------------------------------------------------------------------------------
	Carson - Magatia (GMS Like)
-- Version Info -----------------------------------------------------------------------------------
    1.2 - Improved by Ronan
    1.1 - Shortened by Moogra
	1.0 - First Version by Maple4U
---------------------------------------------------------------------------------------------------
*/
importPackage(Packages.tools);

// RW : 星石, 月石 利用起来
var boss = [
  4032474, //fish
  4031906, //claw
  4000040, //mush
  4000176, //mush
  4000175, //fish
  4000138, //comb
  4031901, //hair
  4000235, //meat
  4000243 //bird
];
var tails = [4000007, 4000013, 4000023]; //火,风/毒,冰 //
var mushrooms = [4000001, 4000009, 4000012, 4000015]; //str int dex luk
var seafood = [4000166, 4000157, 4000043, 4000044, 4000045, 4000161]; // str dex int luk hp mp
var produces = [
  2010009,
  2010000,
  2010001,
  2010002,
  2010003,
  2010004,
  2010005,
  2010006
];
var ores = [4011007, 4021009]; //magic / physical

var rewards = [
  2040758,
  2040759,
  2040760,
  2040023,
  2040807,
  2040810,
  2040811,
  2040814,
  2040815,
  2040816,
  2040914,
  2040915,
  2040916,
  2040917,
  2040918,
  2040919,
  2040920,
  2040921,
  2040922,
  2041100,
  2041101,
  2041102,
  2041103,
  2041104,
  2041105,
  2041106,
  2041107,
  2041108,
  2041109,
  2041110,
  2041111,
  2041112,
  2041113,
  2041114,
  2041115,
  2041116,
  2041117,
  2041118,
  2041119,
  2041300,
  2041301,
  2041302,
  2041303,
  2041304,
  2041305,
  2041306,
  2041307,
  2041308,
  2041309,
  2041310,
  2041311,
  2041312,
  2041313,
  2041314,
  2041315,
  2041316,
  2041317,
  2041318,
  2041319
]; //59 , 63
var status = -1;
var pool = [];
var steps = [boss, tails, mushrooms, seafood, produces, ores];
var stepDesc = ["基底", "引子", "真菌", "海鲜", "生鲜瓜果", "矿石"];
var ALCHEMY_PROB = 1;
function start() {
  if (cm.isQuestStarted(3310) && !cm.haveItem(4031709, 1)) {
    cm.warp(926120100, "out00");
  } else {
    // action(1, 0, 0);
    cm.sendNext(
      "炼金...以及炼金术士.......他们都很重要.但是更重要的是#r玛加提亚#k的包容性.#r玛加提亚#k的荣耀应该由我这个蒙特鸠协会会长来守护. \r\n勇敢的冒险家哟, 你如果背包里恰好有一些#b炼金材料#k,不妨在我这儿试一试,也许能练出不少#r好#k东西!"
    );
    cm.dispose();
  }
}
function action(mode, type, selection) {
  status++;
  if (mode != 1) {
    cm.dispose();
    return;
  }
  if (status == 0) {
    cm.sendNext(
      "炼金...以及炼金术士.......他们都很重要.但是更重要的是#r玛加提亚#k的包容性.#r玛加提亚#k的荣耀应该由我这个蒙特鸠协会会长来守护. \r\n勇敢的冒险家哟, 你如果背包里恰好有一些#b炼金材料#k,不妨在我这儿试一试,也许能练出不少#r好#k东西!"
    );
  } else if (status < steps.length + 1) {
    pool = steps[status - 1];
    var options =
      "#g 炼金进度 #k : #B" +
      (status / steps.length) * 100 +
      "# \r\n这炼金的 #r 第" +
      status +
      "步 #k就是选用好的#d" +
      stepDesc[status - 1] +
      "#k,据我目前的炼金术能力,已知适合用作#d" +
      stepDesc[status - 1] +
      "#k的材料有: ";
    for (var i = 0; i < pool.length; i++) {
      options += "#b\r\n#L" + i + "##v" + pool[i] + "#";
    }
    cm.sendSimple(options);
  } else {
    var probToSuc = Math.random();
    if (probToSuc < ALCHEMY_PROB) {
      cm.sendOk(
        "一道神秘的亮光闪过, 本次炼金#r大功告成!!!#k 赶快检查一下你的背包,看看都有什么好东西"
      );
      cm.getPlayer().announce(
        MaplePacketCreator.showEffect("event/coconut/victory")
      );
      cm.getPlayer().announce(MaplePacketCreator.playSound("Coconut/Victory"));
    } else {
      cm.sendOk("一道神秘的亮光闪过, 本次炼金稍显不足,请再接再厉");
      cm.getPlayer().announce(
        MaplePacketCreator.showEffect("event/coconut/lose")
      );
      cm.getPlayer().announce(MaplePacketCreator.playSound("Coconut/Failed"));
    }
    status = 0;
    cm.dispose();
  }
}
