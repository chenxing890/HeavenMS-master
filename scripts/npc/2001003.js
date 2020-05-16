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

/* 2001003 - Straw Hat Snowman
    @author Richard Wu
 */
var EXP = 44444;
var items = [
  // { name: "Clean Slate Scroll 20%", id: 2049003, count: 1 },
  { name: "EXP Scroll", id: 2022452, count: 1 },
  //Cash
  { id: 5050001, count: 99 },
  { id: 5050002, count: 99 },
  { id: 5050003, count: 99 },
  { id: 5050004, count: 99 },
  { id: 5570000, count: 99 },
  { id: 5610000, count: 99 },
  { id: 5610001, count: 99 },
  { id: 5520000, count: 99 },
  { name: "Gladius' Strength", id: 2022537, count: 1 },
  { name: "Heartstopper", id: 2022245, count: 1 },
  //SCROLL
  { name: "Chaos Scroll 60%", id: 2049100, count: 1, cost: 1 },
  { name: "Scroll for Gloves for ATT 10%", id: 2040805, count: 50 },
  { id: 2040534, count: 50 },
  { id: 2040514, count: 50 },
  { id: 2040517, count: 50 },
  { id: 2040502, count: 50 },
  { id: 2043302, count: 50 },
  { id: 2044702, count: 50 },
  { id: 2044802, count: 50 },
  { id: 2044002, count: 50 },
  { id: 2040026, count: 50 },
  { id: 2040031, count: 50 },
  { id: 2040329, count: 50 },
  { id: 2040330, count: 50 },
  { id: 2040331, count: 50 },
  { id: 2040705, count: 50 },
  //EQP
  { id: 1032030, count: 1, cost: 50 },
  { id: 1032070, count: 1, cost: 50 }
];
var status = -1;
var currentItem = -1;
function start() {
  action(1, 0, 0);
}
function action(mode, type, selection) {
  status++;
  if (mode != 1) {
    cm.dispose();
    return;
  }
  if (status == 0) {
    cm.sendNext(
      "KuMu KuMu Ro A, Jeto Pistoloooooo! Everything 1 Maple Leaf for 1 Item From my One piece, and you have #r#c4001126# #v4001126# #k in your inventory."
    );
  } else if (status == 1) {
    var itemOptions = "";
    for (var i = 0; i < items.length; i++) {
      itemOptions +=
        "#b\r\n#L" + i + "##v" + items[i].id + "#" + "  x " + items[i].count ||
        1;
    }
    cm.sendSimple(itemOptions);
  } else if (status == 2) {
    cm.sendGetNumber(
      "How many #v" + items[selection].id + "# would you like to get ",
      1,
      1,
      99
    );
    currentItem = selection;
  } else if (status == 3 && mode == 1) {
    var amount = selection;
    if (!cm.hasItem(4001126, amount * (items[currentItem].cost || 1))) {
      //枫叶
      cm.sendNext(
        "You don't have enough #v4001126# to proceed this transaction, Bakkkkaaaa!"
      );
      cm.dispose();
      return;
    }
    cm.gainItem(4001126, -1 * amount * (items[currentItem].cost || 1)); //扣除枫叶
    if (currentItem == 0) {
      //经验卷轴
      cm.gainExp(EXP * cm.getLevel() * amount); //角色等级 x 经验基础
    } else {
      cm.gainItem(
        items[currentItem].id,
        (items[currentItem].count || 1) * amount
      );
    }
    status = 0;
    currentItem = -1;
    cm.dispose();
  }
}
