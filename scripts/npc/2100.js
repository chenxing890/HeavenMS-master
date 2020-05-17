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
/* Author: Xterminator
	NPC Name: 		Sera
	Map(s): 		Maple Road : Entrance - Mushroom Town Training Camp (0), Maple Road: Upper level of the Training Camp (1), Maple Road : Entrance - Mushroom Town Training Camp (3)
	Description: 		First NPC
*/

var status = -1;

function start() {
  if (cm.c.getPlayer().getMapId() == 0 || cm.c.getPlayer().getMapId() == 3)
    cm.sendYesNo(
      "欢迎来到冒险岛世界. 此次训练的目的是帮助新手了解这个世界. 你想要参加这次试炼吗? 有些冒险家拒绝了此次试炼 但是我强烈建议你尝试."
    );
  else cm.sendNext("这里是你试炼的第一个房间. 在这里，你可以预先浏览未来职业.");
}

function action(mode, type, selection) {
  status++;
  if (mode != 1) {
    if (mode == 0 && status == 0) {
      cm.sendYesNo("你确定要开始你的冒险了吗?");
      return;
    } else if (mode == 0 && status == 1 && type == 0) {
      status -= 2;
      start();
      return;
    } else if (mode == 0 && status == 1 && type == 1)
      cm.sendNext("纠结完了再来和我对话吧.");
    cm.dispose();
    return;
  }
  if (cm.c.getPlayer().getMapId() == 0 || cm.c.getPlayer().getMapId() == 3) {
    if (status == 0) {
      cm.sendNext("行吧，请按照指示完成试炼.");
    } else if (status == 1 && type == 1) {
      cm.sendNext("很聪明，新手训练真的没啥用. 自己去探索吧");
    } else if (status == 1) {
      cm.warp(1, 0);
      cm.dispose();
    } else {
      cm.warp(40000, 0);
      cm.dispose();
    }
  } else if (status == 0)
    cm.sendPrev(
      "当你足够强了, 你就可以转职了. 你可以去射手村转职成为弓箭手, 或者去魔法密林成为魔法师, 或者去勇士部落成为战士, 也可以去废弃都市成为飞侠"
    );
  else cm.dispose();
}
